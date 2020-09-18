const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const list = new fbTemplate.List();

    return list
      .addBubble('hipages.com.au', 'Australia\'s #1 site to hire trade professionals')
        .addImage('https://assets.homeimprovementpages.com.au/images/hui/hipages-logo-full.png')
        .addDefaultAction('http://www.homeimprovementpages.com.au')
        .addButton('Get Quotes', 'http://www.homeimprovementpages.com.au/get_quotes_simple')
      .addBubble('Meet our team')
        .addImage('https://hipagesgroup.com.au/wp-content/uploads/2017/01/hero-fall-back-img.jpg')
        .addButton('View job openings', 'https://hipagesgroup.com.au/careers/')
      .addListButton('Our Story', 'https://hipagesgroup.com.au/our-story/')
      .get();
  }
});