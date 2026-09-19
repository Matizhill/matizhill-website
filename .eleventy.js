const { EleventyI18nPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss").default;

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(EleventyI18nPlugin, {defaultLanguage: "pt-br"});
    
    eleventyConfig.addFilter("locale_filter", function(collection, lang) {
        if (!collection) return [];
        return collection.filter(item => item.data.lang === lang)
    });
    
    // Diz ao 11ty para copiar a pasta para a pasta final do site
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("traducoes/**/*.{jpg,jpeg,png,gif}");
    eleventyConfig.addPassthroughCopy("models");
    
};