module.exports = function(eleventyConfig) {
    // Diz ao 11ty para copiar a pasta 'img' para a pasta final do site
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("traducoes/**/*.{jpg,jpeg,png,gif}");
    
    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};