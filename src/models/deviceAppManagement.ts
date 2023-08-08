import type {AndroidManagedAppProtection} from './androidManagedAppProtection';
import type {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import type {Entity} from './entity';
import type {IosManagedAppProtection} from './iosManagedAppProtection';
import type {ManagedAppPolicy} from './managedAppPolicy';
import type {ManagedAppRegistration} from './managedAppRegistration';
import type {ManagedAppStatus} from './managedAppStatus';
import type {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import type {ManagedEBook} from './managedEBook';
import type {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import type {MobileApp} from './mobileApp';
import type {MobileAppCategory} from './mobileAppCategory';
import type {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import type {VppToken} from './vppToken';
import type {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAppManagement extends Entity, Parsable {
    /**
     * Android managed app policies.
     */
    androidManagedAppProtections?: AndroidManagedAppProtection[] | undefined;
    /**
     * Default managed app policies.
     */
    defaultManagedAppProtections?: DefaultManagedAppProtection[] | undefined;
    /**
     * iOS managed app policies.
     */
    iosManagedAppProtections?: IosManagedAppProtection[] | undefined;
    /**
     * Whether the account is enabled for syncing applications from the Microsoft Store for Business.
     */
    isEnabledForMicrosoftStoreForBusiness?: boolean | undefined;
    /**
     * Managed app policies.
     */
    managedAppPolicies?: ManagedAppPolicy[] | undefined;
    /**
     * The managed app registrations.
     */
    managedAppRegistrations?: ManagedAppRegistration[] | undefined;
    /**
     * The managed app statuses.
     */
    managedAppStatuses?: ManagedAppStatus[] | undefined;
    /**
     * The Managed eBook.
     */
    managedEBooks?: ManagedEBook[] | undefined;
    /**
     * Windows information protection for apps running on devices which are MDM enrolled.
     */
    mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[] | undefined;
    /**
     * The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
     */
    microsoftStoreForBusinessLanguage?: string | undefined;
    /**
     * The last time an application sync from the Microsoft Store for Business was completed.
     */
    microsoftStoreForBusinessLastCompletedApplicationSyncTime?: Date | undefined;
    /**
     * The last time the apps from the Microsoft Store for Business were synced successfully for the account.
     */
    microsoftStoreForBusinessLastSuccessfulSyncDateTime?: Date | undefined;
    /**
     * The mobile app categories.
     */
    mobileAppCategories?: MobileAppCategory[] | undefined;
    /**
     * The Managed Device Mobile Application Configurations.
     */
    mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[] | undefined;
    /**
     * The mobile apps.
     */
    mobileApps?: MobileApp[] | undefined;
    /**
     * Targeted managed app configurations.
     */
    targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[] | undefined;
    /**
     * List of Vpp tokens for this organization.
     */
    vppTokens?: VppToken[] | undefined;
    /**
     * Windows information protection for apps running on devices which are not MDM enrolled.
     */
    windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[] | undefined;
}
