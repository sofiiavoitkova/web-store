import React from 'react';
import styles from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>We're here to help! Feel free to reach out through our contact details.</p>
      
      <div className={styles.contactDetails}>
        <h2>Contact Information</h2>
        <p><FontAwesomeIcon icon={faPhone} /> +48 234 567 890</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> trekquest.support@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Matejki 45, Warszawa, Poland</p>
        
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>
  );
}
