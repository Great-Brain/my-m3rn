

app.use(express.static(_path.join(__dirname, './public')));
app.use(cookieSession({
    name: 'forge_session',
    keys: ['forge_secure_key'],
    maxAge: 60 * 60 * 1000 // 1 hour, same as the 2 legged lifespan token
}));
app.use(express.json({
    limit: '50mb'
}));
app.use('/api', require('./routes/DesignAutomation'));

app.set('port', process.env.PORT || 8080);

module.exports = app;
