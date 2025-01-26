import React from 'react';
import Policy from './Policy';

const policies = [
  {
    id: 1,
    title: 'Information We Collect',
    policy:
      'We may collect the following types of information when you use our websit or services:  ',
    list: [
      'Personal information: This includes information that can bused to identify you, such as your name, email address, and phone numberWe may collect this information when you create an account, place an orderor contact us.',
      ' Usage data: We may collect information about how you usour website and services, including the pages you visit, the actions yotake, and the devices you use.',
      ' Device data: We may collect informatioabout the devices you use to access our website and services, such as youIP address, browser type, and operating system.',
    ],
  },

  {
    id: 2,
    title: 'How We Use Your Information.',
    policy:
      'We use the information we collect to provide, maintain, and improve our website and services. This may include:',
    list: [
      'Personalizing your experience: We may use your personal information to personalize the content and offers we display to you.',
      'Improving our website and services: We may use your usage data to understand how our website and services are being used and to identify areas for improvement. ',
      'Communicating with you: We may use your personal information to communicate with you about your account, orders, and other matters related to our website and services.',
    ],
  },

  {
    id: 3,
    title: 'Share your information',
    policy:
      'We may share your information with third parties in the following circumstances: - With service providers: We may share your information with service providers who assist us in operating our website and providing our services, such as hosting and payment processing. - As required by law: We may disclose your information if we are required to do so by law, such as in response to a subpoena or court order. - To protect our rights: We may disclose your information to defend ourselves against legal claims or to protect the safety, rights, or property of our company or others.',
  },
  {
    id: 4,
    title: 'Your choice and right',
    policy:
      'You have the following choices and rights regarding your information:',
    list: [
      ' Opting out of marketing communications: You can opt out of receiving marketing communications from us by following the unsubscribe instructions in the communications you receive.',
      ' Accessing and correcting your information: You can access and update your personal information by logging into your account or contacting us.',
      'Deleting your information: You can request that we delete your personal information by contacting us. Please note that we may need to retain some information for legal or business purposes. ',
      'Complaints: If you have any complaints about our privacy practices, you can contact us or file a complaint with the relevant data protection authority. Changes to This Privacy Policy We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review the privacy policy whenever you access our website or use our services to stay informed about our information practices and your choices. Contact Us If you have any questions about this privacy policy or our information practices, please contact us at [CONTACT EMAIL] or [CONTACT ADDRESS].',
    ],
  },
];

const Page = () => {
  return (
    <div className='py-10 px-8 md:px-20 text-black  md:max-w-5xl mx-auto'>
      <h1 className='font-semibold text-3xl leading-10 pb-8'>Privacy Policy</h1>

      <p className='text-sm !leading-6 md:text-base md:!leading-[2]'>
        At Just project, we are committed to protecting your privacy. This
        privacy policy explains how we collect, use, and share information when
        you visit our website or use our services.
      </p>

      <section className='space-y-5 py-10'>
        {policies.map((policy) => (
          <Policy
            key={policy.id}
            heading={policy.title}
            paragraph={policy.policy}
            list={policy.list}
          />
        ))}
      </section>
    </div>
  );
};

export default Page;
