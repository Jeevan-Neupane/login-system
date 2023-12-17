import styled from "styled-components";

export const LoaderButtonContainer = styled.span`
.loader {
  width: 30px;
  height: 30px;
  border: 3px solid #e74c3c;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #3d4f58 transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`

export const LoadingImageDiv = styled.div`
height:2rem;
width:2rem;
`

export const LoadingImg = styled.img`
height:100%;
width:100%;

`

export const BigLoaderDivStyle = styled.div`

height:100vh;
width:100vw;
display: flex;
align-items:center;
justify-content:center;
.loader {
  width: calc(100px - 24px);
  height: 50px;
  position: relative;
  animation: flippx 2s infinite linear;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FFF;
  transform-origin: -24px 50%;
  animation: spin 1s infinite linear;
}
.loader:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  background: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

@keyframes flippx {
  0%, 49% {
    transform: scaleX(1);
  }
  50%, 100% {
    transform: scaleX(-1);
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
      
`