import React, { FC } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {};

const TermsPage: FC<Props> = () : JSX.Element => {
  return (
    <Container maxWidth='lg'>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

      <Typography variant='h4' style={{ color: 'white', paddingBottom: 15 }}>
        Terms of Service
      </Typography>

      <Typography variant='body2' style={{ color: 'white', paddingBottom: 30 }}>
        To use this website, you must be at least 16 years old. If you are age 15 or younger, use of this site is strictly prohibited.<br/>
        In statements below, unless otherwise specified, “we, our, us” pronouns refer to this website's operators and/or owners. <br/>
        By using this site and/or by submitting any content to TheDirty (including posts, photos, comments, and any other material), you agree to the following terms:
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        1. Acceptable Use
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        The purpose of this website is to allow our users to exercise their rights for free speech. This means you can use this site to share your thoughts, views, comments, stories and opinions with the world. However, the free speech rights are not unlimited. We therefore require you to comply with the following standards:<br/>
        — Submissions must be factually true. Publishing false statements can, depending on other factors, subject the author to significant civil and/or criminal liability. Only post factually true information, or matters of personal opinion which are clearly identified as such.<br/>— By posting any content, you represent and warrant that your submission is factually true, and not unlawful (e.g., not an invasion of privacy).<br/>— Submissions must be fair and not misleading. For example, if someone was arrested for a crime and the charges were later dropped or the defendant was found not guilty, you should include that information in your post. In other words, don't leave out important details that make your post misleading.<br/>— Submissions should contain your real contact info (name/email). As a general rule, we will protect the identity of our users to the fullest extent permitted by law, but we may be required to release information when served with a valid subpoena or court order.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        2. Prohibited Use
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        You must also comply with the following standards:<br/>
        — Do not post false, defamatory, or otherwise unlawful material. You are legally responsible for your words, so please don't lie.<br/>— Do not post material that violates another person's intellectual property rights (copyrights, etc.).<br/>— Do not post nudity, pornography or obscenity, including but not limited to “revenge porn”.<br/>— Refrain from profanity/vulgarity.<br/>— Do not post threats of violence/harm.<br/>— Do not post images of minors.<br/>— Do not post hate speech such as comments attacking other people for their sexual orientation, gender identity, race, religion, national origin, or physical/mental disability.<br/>— Do not bully or harass anyone (criticism is OK when warranted, but please exercise restraint and common decency).<br/>— NEVER encourage any form of physical harm (e.g. injury/murder) or self-harm (cutting/suicide, etc.)
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        3. Resolution of Complaints Regarding Inappropriate Content
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        As a matter of policy, Dirty will remove any content from this site that we determine, in our sole editorial discretion, to be unlawful, obscene, inappropriate, or unduly offensive. Although we reserve the right to make exceptions from our own policies at any time and for any reason, content removal will generally comply with the standards described on our Legal FAQ page. It is our policy to comply with any valid/lawful court orders, however we can't promise that we will always comply with every order or judgment we receive. Also, nothing in our Terms of Service may be construed as a promise to remove any content.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        We can and will remove content that we believe, in our sole editorial discretion, should not be on our site. However, unless you have obtained a valid court order proving that something in a post is false, please do NOT ask us to remove content on the grounds that it is false. We are not the truth police and will not remove content just because someone has made an unverified claim that a post is false. Disputes over the accuracy of content posted on TheDirty should be resolved in court between the author of the post and the subject of the post. It is not necessary, and not appropriate, to name Dirty World as a party in such a case.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        Notwithstanding the above, the images, text, documents, comments and graphics published here are NOT verified for accuracy by the website operator(s) and/or owner(s). We do not fact-check posts or comments submitted by users and cannot ensure the accuracy of any content presented by third parties. Content appearing on this site may contain rumors, speculation, assumptions, opinions and other unverified information from our users. Because they are not verified, postings may contain erroneous or inaccurate information. This website, its operators and/or its owners make no representation or warranty as to the accuracy, completeness or authenticity of the information or opinions appearing on the website.  We do not endorse, adopt, or ratify the opinions or views of third parties expressed on this site or on any other linked sites.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        4. Grant of Exclusive Rights
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        By posting material on this website, you grant to the website operators and/or owners an irrevocable, perpetual, fully-paid, worldwide exclusive license to use, copy, perform, display and distribute such information and content and to prepare derivative works of, or incorporate into other works, such information and content, and to grant and authorize sublicenses of the foregoing.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        You represent and warrant that the Content you submit is an original work by you, that you own or control 100% of the rights in and to your content and the rights granted to the website operators and/or owners in this license, and such rights are and shall be free and clear of any and all claims, rights and obligations; and that you have the right to grant to website operators/owners the rights granted to us in this license, you do not require the consent of any third party and that there is no contract with any third party that could in any way interfere with the website operator and/or owner’s rights under this license or require any payment to be made to anyone.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 5 }}>
        You hereby expressly waive, to the fullest extent permitted by law, any so-called 'moral rights' which may now or may hereafter be recognized by legislative enactment or otherwise at law or in equity with respect to the Content.
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        Although we reserve the right to remove content at any time and for any reason, we generally do not remove content when asked by a person claiming to be the original author. We cannot verify claims of authorship and therefore will usually not remove content merely because a person claiming to be the original author asks us to remove something.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        5. Copyright Policies
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        If someone has submitted your copyrighted material without permission, please let us know by visiting our visiting asdasdkjadajsd. 
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        6. Responsibility for Unlawful Content
      </Typography>
      <Typography variant='body2' style={{ color: 'white', paddingBottom: 15 }}>
        All written submissions on this site are opinions of third parties and not of the website operators and/or owners. We are not responsible for, and does not endorse, verify, or ratify any of the written opinions and/or content submitted by third parties. For more information regarding our legal policies, please read our Legal FAQ Page.
      </Typography>

      <Typography variant='h6' style={{ color: 'white', paddingBottom: 5 }}>
        7. No Third Party Beneficiaries
      </Typography>
      <Typography variant='body2' style={{ color: 'white' }}>
        These terms constitute a legal agreement between you and us. These terms are not intended to be, and shall not be, enforceable by any third party/parties. If you do not agree with any of these Terms of Use please do not use this site. By using this site you will be deemed to have irrevocably agreed to these terms.
      </Typography>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/' style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

    </Container>
  );
};

export default TermsPage;