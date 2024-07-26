import React from "react";
import { AuthBackground, AuthOverlay, AuthTitles, H1, H4 } from "../../styles";

function LoginBackground() {
  return (
    <>
      <AuthBackground>
        <AuthOverlay>
          <AuthTitles>
            <H1 variant="h1" textAlign="left">
              Find Your Calm
            </H1>
            <H4 variant="h4">A safe place for your mental health</H4>
          </AuthTitles>
        </AuthOverlay>
      </AuthBackground>
    </>
  );
}

export default LoginBackground;