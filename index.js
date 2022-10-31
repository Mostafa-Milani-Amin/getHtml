const getHtml = async (url, tag, output) => require('fs').writeFileSync(output, require('cheerio').load((await require('axios').get(url)).data)(tag).html());

export default getHtml;
