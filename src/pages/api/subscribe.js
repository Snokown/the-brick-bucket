import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});
 
// 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { email } = req.body;
    // make sure email is present
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // try to add email to list
    try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'subscribed',
      });

      return res.status(201).json({ error: '' });

    } catch (error) {

      // if error.status is 400, it means the email is already subscribed
      if (error.status === 400) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      }

      return res.status(500).json({ error: error.message || error.toString() });
    }

  } else {
    // Handle any other HTTP method
  }
}