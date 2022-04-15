import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; 배틀그라운드핵/서든어택핵/오버워치핵: <a href="https://xn--h32b232bikd.com/">모든 게임핵</a>. 국내 최저가: <a href="https://hackmeta.xyz/">핵메타몰</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
