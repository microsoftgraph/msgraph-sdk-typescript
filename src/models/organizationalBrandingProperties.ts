import type {Entity} from './entity';
import type {LoginPageLayoutConfiguration} from './loginPageLayoutConfiguration';
import type {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingProperties extends Entity, Parsable {
    /**
     * Color that appears in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF.
     */
    backgroundColor?: string | undefined;
    /**
     * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.
     */
    backgroundImage?: string | undefined;
    /**
     * A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    backgroundImageRelativeUrl?: string | undefined;
    /**
     * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
     */
    bannerLogo?: string | undefined;
    /**
     * A relative URL for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.
     */
    bannerLogoRelativeUrl?: string | undefined;
    /**
     * A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only.
     */
    cdnList?: string[] | undefined;
    /**
     * A custom URL for resetting account credentials. This URL must be in ASCII format or non-ASCII characters must be URL encoded, and not exceed 128 characters.
     */
    customAccountResetCredentialsUrl?: string | undefined;
    /**
     * A string to replace the default 'Can't access your account?' self-service password reset (SSPR) hyperlink text on the sign-in page. This text must be in Unicode format and not exceed 256 characters.
     */
    customCannotAccessYourAccountText?: string | undefined;
    /**
     * A custom URL to replace the default URL of the self-service password reset (SSPR) 'Can't access your account?' hyperlink on the sign-in page. This URL must be in ASCII format or non-ASCII characters must be URL encoded, and not exceed 128 characters. DO NOT USE. Use customAccountResetCredentialsUrl instead.
     */
    customCannotAccessYourAccountUrl?: string | undefined;
    /**
     * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
     */
    customCSS?: string | undefined;
    /**
     * A relative URL for the customCSS property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    customCSSRelativeUrl?: string | undefined;
    /**
     * A string to replace the default 'Forgot my password' hyperlink text on the sign-in form. This text must be in Unicode format and not exceed 256 characters.
     */
    customForgotMyPasswordText?: string | undefined;
    /**
     * A string to replace the default 'Privacy and Cookies' hyperlink text in the footer. This text must be in Unicode format and not exceed 256 characters.
     */
    customPrivacyAndCookiesText?: string | undefined;
    /**
     * A custom URL to replace the default URL of the 'Privacy and Cookies' hyperlink in the footer. This URL must be in ASCII format or non-ASCII characters must be URL encoded, and not exceed 128 characters.
     */
    customPrivacyAndCookiesUrl?: string | undefined;
    /**
     * A string to replace the default 'reset it now' hyperlink text on the sign-in form. This text must be in Unicode format and not exceed 256 characters. DO NOT USE: Customization of the 'reset it now' hyperlink text is currently not supported.
     */
    customResetItNowText?: string | undefined;
    /**
     * A string to replace the the default 'Terms of Use' hyperlink text in the footer. This text must be in Unicode format and not exceed 256 characters.
     */
    customTermsOfUseText?: string | undefined;
    /**
     * A custom URL to replace the default URL of the 'Terms of Use' hyperlink in the footer. This URL must be in ASCII format or non-ASCII characters must be URL encoded, and not exceed 128characters.
     */
    customTermsOfUseUrl?: string | undefined;
    /**
     * A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.
     */
    favicon?: string | undefined;
    /**
     * A relative url for the favicon above that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    faviconRelativeUrl?: string | undefined;
    /**
     * The RGB color to apply to customize the color of the header.
     */
    headerBackgroundColor?: string | undefined;
    /**
     * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
     */
    headerLogo?: string | undefined;
    /**
     * A relative URL for the headerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.
     */
    headerLogoRelativeUrl?: string | undefined;
    /**
     * Represents the layout configuration to be displayed on the login page for a tenant.
     */
    loginPageLayoutConfiguration?: LoginPageLayoutConfiguration | undefined;
    /**
     * Represents the various texts that can be hidden on the login page for a tenant.
     */
    loginPageTextVisibilitySettings?: LoginPageTextVisibilitySettings | undefined;
    /**
     * Text that appears at the bottom of the sign-in box. Use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be in Unicode format and not exceed 1024 characters.
     */
    signInPageText?: string | undefined;
    /**
     * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
     */
    squareLogo?: string | undefined;
    /**
     * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
     */
    squareLogoDark?: string | undefined;
    /**
     * A relative URL for the squareLogoDark property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    squareLogoDarkRelativeUrl?: string | undefined;
    /**
     * A relative URL for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    squareLogoRelativeUrl?: string | undefined;
    /**
     * A string that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters.
     */
    usernameHintText?: string | undefined;
}
