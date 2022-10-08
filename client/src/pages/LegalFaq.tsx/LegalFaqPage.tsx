import React, { FC } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {};

const LegalFaqPage: FC<Props> = () : JSX.Element => {
  return (
    <Container maxWidth='lg'>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

      <Typography variant='h4' style={{ color: 'white', paddingBottom: 15 }}>
        Legal FAQ
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        1. Can I sue this website's operator for publishing false information?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 30 }}>
        In a word — NO, we don't think so.
        Website operators like blogs and social media are generally not liable for “publishing” content from third party users.
        This does NOT mean you are helpless if someone has posted false information about you. You can always sue the author. You just can't sue this website for running an online forum that someone else misused.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        2. How can I remove a post?
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        There are two main ways to remove a post: <br />
        1. With a court order; and <br />
        2. Policy violations. <br />
        Details for both are explained below.
      </Typography>

      <Typography variant='body2' style={{ color: 'white', fontWeight: 600, paddingBottom: 5 }}>
        Court Ordered Removals
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        Most people ask us to remove posts because they claim the post is false. Unfortunately, we are not the Truth Police. We cannot resolve factual disputes between strangers. Therefore, we will not remove posts simply because one party makes an unproven claim that a post contains false information.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        Instead, we generally will not consider removing content unless a court has determined the speech in question is false. However, filing a lawsuit is not always the best solution. For one thing, filing a lawsuit creates a permanent public record of the matter and can have unforeseen harmful consequences. Thus, before you file any lawsuit, you should consult with a lawyer in your area who has substantial experience dealing with Internet law matters. We strongly recommend that you do not take advice from any attorney who does not have experience in this area because the rules which apply to online matters are unique and are not familiar to most lawyers.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        If a court determines that a post contains false statements of FACT (opinions cannot be false), we will review the order and, subject to our final editorial discretion, we may remove any false factual content.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        If you have obtained a court order that you want us to consider, please email a copy of the order to us at legal@thedirty.com. Please be aware that we will contact the court to confirm the order, so please don’t even think about trying to send us a fake/forged order.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        NOTE — The above discussion is offered solely to explain our general policies. It is not intended to constitute legal advice, nor does it represent an exhaustive overview of the law.
      </Typography>

      <Typography variant='body2' style={{ color: 'white', fontWeight: 600, paddingBottom: 5 }}>
        Policy Violation Removals
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        If you don’t have a court order, you still have other options. We will gladly consider removal requests for content that violates our policies such as:
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        1. Posts containing pornographic content of any type <br />
        2. Posts on minors younger than the legal age <br />
        3. Posts containing personal information such as social security numbers, bank account numbers, or credit card numbers
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        If you want us to consider removing content that violates our policies, please send us an email to:legal@thedirty.com.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        3. How can I get the name of the author of a post?
      </Typography>
      <Typography variant='body2' style={{ color: 'white' }}>
        If you want to legally obtain the name/IP address of a user who posted something on our site, the process for that is simple — YOU MUST HAVE A SUBPOENA. We will not provide any information about a user of our site without at least a subpoena.
      </Typography>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

    </Container>
  );
};

export default LegalFaqPage;