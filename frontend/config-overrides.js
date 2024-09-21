module.exports = function override(config, env) {
    if (env === 'production') {
        config.optimization.minimizer = config.optimization.minimizer.filter(
            (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
        );
    }
    return config;
};
