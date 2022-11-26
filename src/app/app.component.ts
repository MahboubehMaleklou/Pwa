import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PWA';

  constructor(private oauthservice:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthservice.configure(authCodeFlowConfig);
    this.oauthservice.tokenValidationHandler = new JwksValidationHandler;
    this.oauthservice.loadDiscoveryDocumentAndTryLogin()
  }

  login(): void {
    this.oauthservice.initImplicitFlow();
  }

  logout(): void {
    this.oauthservice.logOut()
  }

  token(): any {
    let claims:any = this.oauthservice.getIdentityClaims;
    console.log(claims)
    return claims ? claims : null
  }
}
