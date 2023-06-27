import {MimeContent} from './mimeContent';
import {RgbColor} from './rgbColor';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IntuneBrand extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Email address of the person/organization responsible for IT support.
     */
    contactITEmailAddress?: string | undefined;
    /**
     * Name of the person/organization responsible for IT support.
     */
    contactITName?: string | undefined;
    /**
     * Text comments regarding the person/organization responsible for IT support.
     */
    contactITNotes?: string | undefined;
    /**
     * Phone number of the person/organization responsible for IT support.
     */
    contactITPhoneNumber?: string | undefined;
    /**
     * Logo image displayed in Company Portal apps which have a dark background behind the logo.
     */
    darkBackgroundLogo?: MimeContent | undefined;
    /**
     * Company/organization name that is displayed to end users.
     */
    displayName?: string | undefined;
    /**
     * Logo image displayed in Company Portal apps which have a light background behind the logo.
     */
    lightBackgroundLogo?: MimeContent | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Display name of the company/organization’s IT helpdesk site.
     */
    onlineSupportSiteName?: string | undefined;
    /**
     * URL to the company/organization’s IT helpdesk site.
     */
    onlineSupportSiteUrl?: string | undefined;
    /**
     * URL to the company/organization’s privacy policy.
     */
    privacyUrl?: string | undefined;
    /**
     * Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     */
    showDisplayNameNextToLogo?: boolean | undefined;
    /**
     * Boolean that represents whether the administrator-supplied logo images are shown or not shown.
     */
    showLogo?: boolean | undefined;
    /**
     * Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     */
    showNameNextToLogo?: boolean | undefined;
    /**
     * Primary theme color used in the Company Portal applications and web portal.
     */
    themeColor?: RgbColor | undefined;
}
