module.exports = function(eleventyConfig) {
    // Diz ao 11ty para copiar a pasta 'img' para a pasta final do site
    eleventyConfig.addPassthroughCopy("img");
    
    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};