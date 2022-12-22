import axios from "axios";

$(document).ready(function () {
  prepareLists();

  $("#clearAccount").click(clearAccount);
  $("#defineActivityShow").click(defineActivityModal);
  $("#createAppBundleActivity").click(createAppBundleActivity);
  $("#startWorkitem").click(startWorkitem);

  startConnection();
});

function prepareLists() {
  list("activity", "http://localhost:8000/api/aps/designautomation/activities");
  list("engines", "http://localhost:8000/api/aps/designautomation/engines");
  list("localBundles", "http://localhost:8000/api/appbundles");
}

function list(control, endpoint) {
  $("#" + control)
    .find("option")
    .remove()
    .end();
  axios
    .get(endpoint)
    .then((response) => {
      const list = response.data;
      if (list.length === 0) {
        $("#" + control).append(
          $("<option>", {
            disabled: true,
            text: "Nothing found",
          })
        );
      } else {
        list.forEach((item) => {
          $("#" + control).append(
            $("<option>", {
              value: item,
              text: item,
            })
          );
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function clearAccount() {
  if (
    !confirm(
      "Clear existing activities & appbundles before start. " +
        "This is useful if you believe there are wrong settings on your account." +
        "\n\nYou cannot undo this operation. Proceed?"
    )
  )
    return;

  axios({
    url: "api/aps/designautomation/account",
    method: "DELETE",
  })
    .then((response) => {
      prepareLists();
      writeLog("Account cleared, all appbundles & activities deleted");
    })
    .catch((error) => {
      console.error(error);
    });
}

function defineActivityModal() {
  $("#defineActivityModal").modal();
}

function createAppBundleActivity() {
  startConnection(function () {
    writeLog("Defining appbundle and activity for " + $("#engines").val());
    $("#defineActivityModal").modal("toggle");
    createAppBundle(function () {
      createActivity(function () {
        prepareLists();
      });
    });
  });
}

function createAppBundle(cb) {
  axios({
    url: "api/aps/designautomation/appbundles",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      zipFileName: $("#localBundles").val(),
      engine: $("#engines").val(),
    }),
  })
    .then((response) => {
      const res = response.data;
      writeLog("AppBundle: " + res.appBundle + ", v" + res.version);
      if (cb) {
        cb();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function createActivity(cb) {
  axios({
    url: "api/aps/designautomation/activities",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      zipFileName: $("#localBundles").val(),
      engine: $("#engines").val(),
    }),
  })
    .then((response) => {
      const res = response.data;
      writeLog("Activity: " + res.activity);
      if (cb) {
        cb();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function startWorkitem() {
  const inputFileField = document.getElementById("inputFile");
  if (inputFileField.files.length === 0) {
    alert("Please select an input file");
    return;
  }
  const file = inputFileField.files[0];
  if (!file.name.match(/\.(dwg|dxf|rvt)$/i)) {
    alert("Invalid file type");
    return;
  }

  startConnection(function () {
    const formData = new FormData();
    formData.append("inputFile", file);

    const activityId = $("#activity").val();
    writeLog("Starting workitem for " + activityId);
    axios({
      url: "api/aps/designautomation/workitems",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        activityId: activityId,
        arguments: {
          inputFile: {
            url: "http://localhost:8000/api/storage/" + file.name,
            headers: {
              "Content-Type": file.type,
            },
          },
        },
      }),
    })
      .then((response) => {
        const res = response.data;
        writeLog("Workitem: " + res.id);
        if (res.status === "pending") {
          writeLog(" -> " + res.status);
        } else {
          writeLog(" -> " + res.status + ": " + res.results.outputFile.url);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
