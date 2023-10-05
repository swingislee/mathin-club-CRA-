import React from 'react';
import styles from './styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerLabels}>
                <img src="/images/FilingIcon.png" alt="备案图标" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502053253">                    
                    京公网安备 11010502053253号
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/#/Integrated/index" >
                    京ICP备   2020034692号-2
                    </a>
        </div>
        </footer>
    );
};

export default Footer;
