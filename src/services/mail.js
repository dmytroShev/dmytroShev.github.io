const DOMAIN = 'omomo.finance';
const NAME_LIST = `contact@${DOMAIN}`;

const mailgun = require('mailgun-js')({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
  domain: DOMAIN,
});

const list = mailgun.lists(NAME_LIST);

export const subscribeMailgun = async ({ email }) => {
  try {
    const { message } = await list.members().create({ address: email });
    console.log(message);
    return message;
  } catch (e) {
    console.log(e.message);
    throw Error(e.message);
  }
};