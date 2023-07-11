import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessApp extends MobileApp, Parsable {
    /**
     * The licenseType property
     */
    licenseType?: MicrosoftStoreForBusinessLicenseType | undefined;
    /**
     * The app package identifier
     */
    packageIdentityName?: string | undefined;
    /**
     * The app product key
     */
    productKey?: string | undefined;
    /**
     * The total number of Microsoft Store for Business licenses.
     */
    totalLicenseCount?: number | undefined;
    /**
     * The number of Microsoft Store for Business licenses in use.
     */
    usedLicenseCount?: number | undefined;
}
