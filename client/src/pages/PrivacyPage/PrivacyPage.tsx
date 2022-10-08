import React, { FC } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {};

const PrivacyPage: FC<Props> = () : JSX.Element => {
  return (
    <Container maxWidth='lg'>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' exact style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' exact style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' exac style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' exact style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

      <Typography variant='h4' style={{ color: 'white', paddingBottom: 15 }}>
        Privacy Policy
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        What information do we collect?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        We collect information from you when you submit content to our site.<br/>
        When using our site, you may be asked to enter your: name, e-mail address, mailing address, or phone number. You may visit our site anonymously.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        What do we use your information for?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        Any information we collect from you may be used in one of the following ways:<br/>
        - To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you). <br/>
        - To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs). <br/>
        - To process transactions that you have specifically requested. <br/>
        Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested (if any).
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Do we use cookies?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        We do not use cookies.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Do we disclose any information to outside parties?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information other than for the express purpose of delivering the purchased product or service requested. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Third Party Links
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Online Privacy Policy Only
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        This online privacy policy applies only to information collected through our website and not to information collected offline.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Your Consent
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        By using our site, you consent to this privacy policy.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        Changes to our Privacy Policy
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        If we decide to change our privacy policy, we will post those changes on this page.
      </Typography>

      <Typography variant='body2' style={{ color: 'white' }}>
        This policy was last modified on October 07, 2022.
      </Typography>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' exact style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' exact style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' exac style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' exact style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

    </Container>
  );
};

export default PrivacyPage;