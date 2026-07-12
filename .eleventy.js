module.exports = function(eleventyConfig) {
    // Diz ao 11ty para copiar a pasta 'img' para a pasta final do site
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("traducoes/**/*.{jpg,jpeg,png,gif}");
    
    return {
        pathPrefix: "/matizhill-website/", // NÃO esqueça de remover o prefixo quando o site for usar dominio oficial do site. Mantenha para testes publicos até que o site esteja pronto.
        dir: {
            input: ".",
            output: "_site"
        }
    };
};