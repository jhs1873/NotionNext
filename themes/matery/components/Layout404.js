const Layout404 = () => {
  return (
    <div className='error-page'>
      <div className='container'>
        <div className='error-content'>
          <div className='error-container'>
            <div className='four'></div>
            <div className='sheep'>
              <div className='head'>
                <div className='ear'></div>
                <div className='ear'></div>
                <div className='eye'></div>
                <div className='eye'></div>
              </div>
            </div>
            <div className='four'></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-page {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          text-align: center;
        }

        .error-content {
          display: inline-block;
        }

        .error-container {
          --size: min(25vw, 25vh);
          --b-bg: #d0d2ca;
          --c-bg: #585858;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: calc(var(--size) / 3);
          padding: 2rem;
        }

        /* 数字4的样式 */
        .four {
          position: relative;
          color: var(--b-bg);
          font-size: calc(var(--size) / 2.5);
          width: 1.75em;
          height: 1.75em;
          border-bottom: 0.4em solid;
          border-left: 0.4em solid;
        }

        .four:after {
          content: '';
          position: absolute;
          background-color: var(--c-bg);
          width: 0.4em;
          height: 2em;
          left: 50%;
          top: 0;
          transform: translate(-50%, 25%);
        }

        /* 小羊样式 */
        .sheep {
          font-size: calc(var(--size) / 2.5);
          height: var(--size);
          width: var(--size);
          border-radius: 50%;
          background: var(--b-bg);
          position: relative;
        }

        .sheep:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -25%);
          color: var(--b-bg);
          background: currentcolor;
          height: 1em;
          width: 1em;
          border-radius: 50%;
          box-shadow: 0 2em, 1em 1em, -1em 1em, -0.75em 1.75em, 0.75em 1.75em,
            0.75em 0.25em, -0.75em 0.25em;
        }

        .sheep:before {
          content: '';
          position: absolute;
          color: var(--c-bg);
          background: currentcolor;
          width: 0.2em;
          height: 0.65em;
          top: 100%;
          left: 25%;
          transform: translate(0, -25%);
          box-shadow: 1em 0;
        }

        /* 头部样式 */
        .head {
          position: absolute;
          width: 0.75em;
          height: 1em;
          border-radius: 0.3em;
          background: var(--c-bg);
          z-index: 2;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transform-origin: 50% 5%;
          animation: headMove 5s infinite;
        }

        /* 耳朵和眼睛样式 */
        .ear {
          position: absolute;
          height: 0.6em;
          width: 0.5em;
          border-radius: 0 100%;
          background: #494949;
          top: -15%;
          left: 90%;
          transform: rotate(-10deg);
          animation: rightEarMove 5s infinite;
        }

        .ear + .ear {
          transform: rotate(90deg);
          animation: leftEarMove 5s infinite;
          left: auto;
          right: 90%;
        }

        .eye {
          position: absolute;
          left: -0.15em;
          top: -0.15em;
          height: 0.55em;
          width: 0.55em;
          border-radius: 50%;
          border: 0.1em solid var(--c-bg);
          background: var(--c-bg) linear-gradient(var(--c-bg) 40%, #fff 0) no-repeat;
          background-size: 100% 0.88em;
          background-position: 0px -0.2em;
          overflow: hidden;
          animation: eyeShade 5s infinite;
        }

        .eye:before {
          content: '';
          position: absolute;
          height: 0.1em;
          width: 0.1em;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #3e3f3e;
          transform-origin: 50% -0.1em;
          animation: eyeMovement 5s infinite;
        }

        .eye + .eye {
          left: auto;
          right: -0.15em;
        }

        /* 动画关键帧 */
        @keyframes headMove {
          0%, 50%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-75%, -50%) rotate(5deg); }
          75% { transform: translate(-25%, -50%) rotate(-5deg); }
        }

        @keyframes rightEarMove {
          0%, 50%, 100% { transform: translatex(0) rotate(-10deg); }
          25% { transform: translatex(0) rotate(-15deg); }
          75% { transform: translatex(-0.1em) rotate(-10deg); }
        }

        @keyframes leftEarMove {
          0%, 50%, 100% { transform: translatex(0) rotate(90deg); }
          25% { transform: translatex(0.1em) rotate(90deg); }
          75% { transform: translatex(-0.1em) rotate(90deg); }
        }

        @keyframes eyeMovement {
          0%, 50%, 100% { transform: translate(-50%, 0.05em) rotate(0deg); }
          25% { transform: translate(-50%, 0.05em) rotate(45deg); }
          75% { transform: translate(-50%, 0.05em) rotate(-45deg); }
        }

        @keyframes eyeShade {
          0%, 50%, 100% { background-position: 0px -0.14em; }
          25%, 75% { background-position: 0px -0.22em; }
        }
      `}</style>
    </div>
  )
}

export default Layout404 