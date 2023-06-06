import {LoginPageLayoutConfiguration} from './loginPageLayoutConfiguration';
import {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {serializeEntity} from './serializeEntity';
import {serializeLoginPageLayoutConfiguration} from './serializeLoginPageLayoutConfiguration';
import {serializeLoginPageTextVisibilitySettings} from './serializeLoginPageTextVisibilitySettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingProperties(writer: SerializationWriter, organizationalBrandingProperties: OrganizationalBrandingProperties | undefined = {} as OrganizationalBrandingProperties) : void {
        serializeEntity(writer, organizationalBrandingProperties)
        writer.writeStringValue("backgroundColor", organizationalBrandingProperties.backgroundColor);
        writer.writeStringValue("backgroundImage", organizationalBrandingProperties.backgroundImage);
        writer.writeStringValue("backgroundImageRelativeUrl", organizationalBrandingProperties.backgroundImageRelativeUrl);
        writer.writeStringValue("bannerLogo", organizationalBrandingProperties.bannerLogo);
        writer.writeStringValue("bannerLogoRelativeUrl", organizationalBrandingProperties.bannerLogoRelativeUrl);
        writer.writeCollectionOfPrimitiveValues<string>("cdnList", organizationalBrandingProperties.cdnList);
        writer.writeStringValue("customAccountResetCredentialsUrl", organizationalBrandingProperties.customAccountResetCredentialsUrl);
        writer.writeStringValue("customCannotAccessYourAccountText", organizationalBrandingProperties.customCannotAccessYourAccountText);
        writer.writeStringValue("customCannotAccessYourAccountUrl", organizationalBrandingProperties.customCannotAccessYourAccountUrl);
        writer.writeStringValue("customCSS", organizationalBrandingProperties.customCSS);
        writer.writeStringValue("customCSSRelativeUrl", organizationalBrandingProperties.customCSSRelativeUrl);
        writer.writeStringValue("customForgotMyPasswordText", organizationalBrandingProperties.customForgotMyPasswordText);
        writer.writeStringValue("customPrivacyAndCookiesText", organizationalBrandingProperties.customPrivacyAndCookiesText);
        writer.writeStringValue("customPrivacyAndCookiesUrl", organizationalBrandingProperties.customPrivacyAndCookiesUrl);
        writer.writeStringValue("customResetItNowText", organizationalBrandingProperties.customResetItNowText);
        writer.writeStringValue("customTermsOfUseText", organizationalBrandingProperties.customTermsOfUseText);
        writer.writeStringValue("customTermsOfUseUrl", organizationalBrandingProperties.customTermsOfUseUrl);
        writer.writeStringValue("favicon", organizationalBrandingProperties.favicon);
        writer.writeStringValue("faviconRelativeUrl", organizationalBrandingProperties.faviconRelativeUrl);
        writer.writeStringValue("headerBackgroundColor", organizationalBrandingProperties.headerBackgroundColor);
        writer.writeStringValue("headerLogo", organizationalBrandingProperties.headerLogo);
        writer.writeStringValue("headerLogoRelativeUrl", organizationalBrandingProperties.headerLogoRelativeUrl);
        writer.writeObjectValue<LoginPageLayoutConfiguration>("loginPageLayoutConfiguration", organizationalBrandingProperties.loginPageLayoutConfiguration, serializeLoginPageLayoutConfiguration);
        writer.writeObjectValue<LoginPageTextVisibilitySettings>("loginPageTextVisibilitySettings", organizationalBrandingProperties.loginPageTextVisibilitySettings, serializeLoginPageTextVisibilitySettings);
        writer.writeStringValue("signInPageText", organizationalBrandingProperties.signInPageText);
        writer.writeStringValue("squareLogo", organizationalBrandingProperties.squareLogo);
        writer.writeStringValue("squareLogoDark", organizationalBrandingProperties.squareLogoDark);
        writer.writeStringValue("squareLogoDarkRelativeUrl", organizationalBrandingProperties.squareLogoDarkRelativeUrl);
        writer.writeStringValue("squareLogoRelativeUrl", organizationalBrandingProperties.squareLogoRelativeUrl);
        writer.writeStringValue("usernameHintText", organizationalBrandingProperties.usernameHintText);
}
