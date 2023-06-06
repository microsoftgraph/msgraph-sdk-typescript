import {createLoginPageLayoutConfigurationFromDiscriminatorValue} from './createLoginPageLayoutConfigurationFromDiscriminatorValue';
import {createLoginPageTextVisibilitySettingsFromDiscriminatorValue} from './createLoginPageTextVisibilitySettingsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LoginPageLayoutConfiguration} from './loginPageLayoutConfiguration';
import {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {serializeLoginPageLayoutConfiguration} from './serializeLoginPageLayoutConfiguration';
import {serializeLoginPageTextVisibilitySettings} from './serializeLoginPageTextVisibilitySettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingProperties(organizationalBrandingProperties: OrganizationalBrandingProperties | undefined = {} as OrganizationalBrandingProperties) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(organizationalBrandingProperties),
        "backgroundColor": n => { organizationalBrandingProperties.backgroundColor = n.getStringValue(); },
        "backgroundImage": n => { organizationalBrandingProperties.backgroundImage = n.getStringValue(); },
        "backgroundImageRelativeUrl": n => { organizationalBrandingProperties.backgroundImageRelativeUrl = n.getStringValue(); },
        "bannerLogo": n => { organizationalBrandingProperties.bannerLogo = n.getStringValue(); },
        "bannerLogoRelativeUrl": n => { organizationalBrandingProperties.bannerLogoRelativeUrl = n.getStringValue(); },
        "cdnList": n => { organizationalBrandingProperties.cdnList = n.getCollectionOfPrimitiveValues<string>(); },
        "customAccountResetCredentialsUrl": n => { organizationalBrandingProperties.customAccountResetCredentialsUrl = n.getStringValue(); },
        "customCannotAccessYourAccountText": n => { organizationalBrandingProperties.customCannotAccessYourAccountText = n.getStringValue(); },
        "customCannotAccessYourAccountUrl": n => { organizationalBrandingProperties.customCannotAccessYourAccountUrl = n.getStringValue(); },
        "customCSS": n => { organizationalBrandingProperties.customCSS = n.getStringValue(); },
        "customCSSRelativeUrl": n => { organizationalBrandingProperties.customCSSRelativeUrl = n.getStringValue(); },
        "customForgotMyPasswordText": n => { organizationalBrandingProperties.customForgotMyPasswordText = n.getStringValue(); },
        "customPrivacyAndCookiesText": n => { organizationalBrandingProperties.customPrivacyAndCookiesText = n.getStringValue(); },
        "customPrivacyAndCookiesUrl": n => { organizationalBrandingProperties.customPrivacyAndCookiesUrl = n.getStringValue(); },
        "customResetItNowText": n => { organizationalBrandingProperties.customResetItNowText = n.getStringValue(); },
        "customTermsOfUseText": n => { organizationalBrandingProperties.customTermsOfUseText = n.getStringValue(); },
        "customTermsOfUseUrl": n => { organizationalBrandingProperties.customTermsOfUseUrl = n.getStringValue(); },
        "favicon": n => { organizationalBrandingProperties.favicon = n.getStringValue(); },
        "faviconRelativeUrl": n => { organizationalBrandingProperties.faviconRelativeUrl = n.getStringValue(); },
        "headerBackgroundColor": n => { organizationalBrandingProperties.headerBackgroundColor = n.getStringValue(); },
        "headerLogo": n => { organizationalBrandingProperties.headerLogo = n.getStringValue(); },
        "headerLogoRelativeUrl": n => { organizationalBrandingProperties.headerLogoRelativeUrl = n.getStringValue(); },
        "loginPageLayoutConfiguration": n => { organizationalBrandingProperties.loginPageLayoutConfiguration = n.getObjectValue<LoginPageLayoutConfiguration>(createLoginPageLayoutConfigurationFromDiscriminatorValue); },
        "loginPageTextVisibilitySettings": n => { organizationalBrandingProperties.loginPageTextVisibilitySettings = n.getObjectValue<LoginPageTextVisibilitySettings>(createLoginPageTextVisibilitySettingsFromDiscriminatorValue); },
        "signInPageText": n => { organizationalBrandingProperties.signInPageText = n.getStringValue(); },
        "squareLogo": n => { organizationalBrandingProperties.squareLogo = n.getStringValue(); },
        "squareLogoDark": n => { organizationalBrandingProperties.squareLogoDark = n.getStringValue(); },
        "squareLogoDarkRelativeUrl": n => { organizationalBrandingProperties.squareLogoDarkRelativeUrl = n.getStringValue(); },
        "squareLogoRelativeUrl": n => { organizationalBrandingProperties.squareLogoRelativeUrl = n.getStringValue(); },
        "usernameHintText": n => { organizationalBrandingProperties.usernameHintText = n.getStringValue(); },
    }
}
