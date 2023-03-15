'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import toast, { Toaster } from 'react-hot-toast';

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

async function signUp(email) {
  try {
    const response = await mailchimp.lists.addListMember('a0672f80c9', {
      email_address: email,
      status: "subscribed",
    });
    console.log(response);
    toast.success('Thanks for signing up!');
    // clear form
    document.querySelector('.email-form').reset();
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. Please try again.');
  }
}

export default function Home() {
  return (
    <main>
      <Toaster />
      <section className="main min-h-[500px] z-10 relative">
        <div className="container desktop:px-24 mx-auto p-8 mobile:pt-24 items-center">
          <div className="mobile:w-1/2">
            <h1 className="text-xl mobile:text-4xl font-extrabold">The Brick Bucket</h1>
            <p className="text-base mobile:text-lg mt-4">We&apos;re building a new way to experience the joy of Legos. Sign up and be the first to know when we launch!</p>
            <div className="email-form">
              <form
              onSubmit={(e) => {
                e.preventDefault();
                signUp(e.target.email.value);
              }}
              className="pt-6 flex flex-col mobile:flex-row w-full gap-4 mobile:gap-0 items-center justify-center mobile:justify-start">
                <input
                  className="w-full mobile:w-fit rounded-full mobile:rounded-l-full mobile:rounded-r-none bg-gray-100 p-2 px-4 pr-6"
                  type="email"
                  name="email"
                  placeholder="email address"
                  />
                  <button
                    className="rounded-full bg-black text-white p-2 px-6 signupBtn"
                    type="submit"
                    >Get Notified</button>
              </form>
            </div>
          </div>
        </div>
          <img
            className="absolute bottom-0 right-0 truck-bg"
            src={"/The_Brick_Bucket_Rent.png"}
            alt="The Brick Bucket Logo"
          />
      </section>
      <section className="gradient-bg-section min-h-[500px] flex items-center mobile:pt-48 desktop:pt-24">
          <div className="container mx-auto p-8 mobile:pt-24 desktop:px-24 items-center">
            <h1 className="text-dark-text mobile:text-white mb-6 text-xl mobile:text-4xl font-extrabold">What You&apos;ll Get</h1>
            <div className="grid mobile:grid-cols-3 items-center gap-8">
              <div className="info-card w-full h-full p-6 border-solid border-2 bg-dark-text border-yellow text-white rounded-lg">
                <p>Unleash your creativity with a new selection of Lego sets to choose from each month.</p>
              </div>
              <div className="info-card w-full h-full p-6 border-solid border-2 bg-dark-text border-green text-white rounded-lg">
                <p>No need to find more storage for your sets. Say goodbye to clutter and hello to more fun.</p>
              </div>
              <div className="info-card w-full h-full p-6 border-solid border-2 bg-dark-text border-pink text-white rounded-lg">
                <p>Rent as much or as little as you want  - perfect for parents and Lego enthusiasts alike!</p>
              </div>
            </div>
          </div>
      </section>
      <section className="bg-dark-text text-white pb-24">
      <div className="container mx-auto p-8 desktop:px-24 items-center">
        <h1 className="text-white mb-6	text-xl mobile:text-4xl font-extrabold">Your toy box is about to get a lot bigger.</h1>
        <p className="text-base mobile:text-lg">Are you a Lego enthusiast looking for a more affordable and flexible way to explore different sets? Our monthly Lego rental service provides an endless supply of sets to choose from, with convenient delivery options that make it easy to switch things up. Say goodbye to clutter and hello to creativity.</p>
      </div>
      </section>
      <section className="footer bg-dark-text">
        <div className="container mx-auto p-4 px-8 desktop:px-24">
          <hr className="mt-8 h-px bg-white"/>
          <div className="flex justify-end gap-4 pt-4 items-center">
            <a href="http://">
              <FontAwesomeIcon className="text-white hover:text-gray-500 h-6 w-6" icon={faInstagram} />
            </a>
            <a href="http://">
              <FontAwesomeIcon className="text-white hover:text-gray-500 h-6 w-6" icon={faFacebookF} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
