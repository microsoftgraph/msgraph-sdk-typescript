import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessApp extends MobileApp, Partial<Parsable> {
    /** The app license type. Possible values are: offline, online. */
    licenseType?: MicrosoftStoreForBusinessLicenseType | undefined;
    /** The app package identifier */
    packageIdentityName?: string | undefined;
    /** The app product key */
    productKey?: string | undefined;
    /** The total number of Microsoft Store for Business licenses. */
    totalLicenseCount?: number | undefined;
    /** The number of Microsoft Store for Business licenses in use. */
    usedLicenseCount?: number | undefined;
}
