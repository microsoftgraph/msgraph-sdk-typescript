import {Entity} from './entity';
import {LoginPageLayoutConfiguration} from './loginPageLayoutConfiguration';
import {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingProperties extends Entity, Parsable {
    /**
     * Color that will appear in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF.
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
     * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG no larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
     */
    bannerLogo?: string | undefined;
    /**
     * A relative url for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.
     */
    bannerLogoRelativeUrl?: string | undefined;
    /**
     * A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only.
     */
    cdnList?: string[] | undefined;
    /**
     * The customAccountResetCredentialsUrl property
     */
    customAccountResetCredentialsUrl?: string | undefined;
    /**
     * The customCannotAccessYourAccountText property
     */
    customCannotAccessYourAccountText?: string | undefined;
    /**
     * The customCannotAccessYourAccountUrl property
     */
    customCannotAccessYourAccountUrl?: string | undefined;
    /**
     * The customCSS property
     */
    customCSS?: string | undefined;
    /**
     * The customCSSRelativeUrl property
     */
    customCSSRelativeUrl?: string | undefined;
    /**
     * The customForgotMyPasswordText property
     */
    customForgotMyPasswordText?: string | undefined;
    /**
     * The customPrivacyAndCookiesText property
     */
    customPrivacyAndCookiesText?: string | undefined;
    /**
     * The customPrivacyAndCookiesUrl property
     */
    customPrivacyAndCookiesUrl?: string | undefined;
    /**
     * The customResetItNowText property
     */
    customResetItNowText?: string | undefined;
    /**
     * The customTermsOfUseText property
     */
    customTermsOfUseText?: string | undefined;
    /**
     * The customTermsOfUseUrl property
     */
    customTermsOfUseUrl?: string | undefined;
    /**
     * The favicon property
     */
    favicon?: string | undefined;
    /**
     * The faviconRelativeUrl property
     */
    faviconRelativeUrl?: string | undefined;
    /**
     * The headerBackgroundColor property
     */
    headerBackgroundColor?: string | undefined;
    /**
     * The headerLogo property
     */
    headerLogo?: string | undefined;
    /**
     * The headerLogoRelativeUrl property
     */
    headerLogoRelativeUrl?: string | undefined;
    /**
     * The loginPageLayoutConfiguration property
     */
    loginPageLayoutConfiguration?: LoginPageLayoutConfiguration | undefined;
    /**
     * The loginPageTextVisibilitySettings property
     */
    loginPageTextVisibilitySettings?: LoginPageTextVisibilitySettings | undefined;
    /**
     * Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     */
    signInPageText?: string | undefined;
    /**
     * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG no larger than 240 x 240 pixels and no more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
     */
    squareLogo?: string | undefined;
    /**
     * The squareLogoDark property
     */
    squareLogoDark?: string | undefined;
    /**
     * The squareLogoDarkRelativeUrl property
     */
    squareLogoDarkRelativeUrl?: string | undefined;
    /**
     * A relative url for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     */
    squareLogoRelativeUrl?: string | undefined;
    /**
     * String that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters.
     */
    usernameHintText?: string | undefined;
}
