import React from 'react'

const style = {
    textTransform: "lowercase"
  }

const Footer = () => 
        <footer>
            <div>
          © 2018 Copyright:
          <a href="https://www.linkedin.com/in/tashamitchell/">
            {" "}
            Tasha Mitchell
          </a>
          {" "}All Rights Reserved.
            </div>
            <div>
            Contact the <a style={style} href="https://tamitchell.github.io/">developer.</a>
            </div>
        </footer>

export default Footer