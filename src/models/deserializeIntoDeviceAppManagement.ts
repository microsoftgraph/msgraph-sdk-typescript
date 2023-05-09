import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {createDefaultManagedAppProtectionFromDiscriminatorValue} from './createDefaultManagedAppProtectionFromDiscriminatorValue';
import {createIosManagedAppProtectionFromDiscriminatorValue} from './createIosManagedAppProtectionFromDiscriminatorValue';
import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {createManagedEBookFromDiscriminatorValue} from './createManagedEBookFromDiscriminatorValue';
import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {createVppTokenFromDiscriminatorValue} from './createVppTokenFromDiscriminatorValue';
import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceAppManagement} from './deviceAppManagement';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedAppStatus} from './managedAppStatus';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedEBook} from './managedEBook';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {MobileApp} from './mobileApp';
import {MobileAppCategory} from './mobileAppCategory';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {serializeManagedEBook} from './serializeManagedEBook';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {serializeTargetedManagedAppConfiguration} from './serializeTargetedManagedAppConfiguration';
import {serializeVppToken} from './serializeVppToken';
import {serializeWindowsInformationProtectionPolicy} from './serializeWindowsInformationProtectionPolicy';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {VppToken} from './vppToken';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAppManagement(deviceAppManagement: DeviceAppManagement | undefined = {} as DeviceAppManagement) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceAppManagement),
        "androidManagedAppProtections": n => { deviceAppManagement.androidManagedAppProtections = n.getCollectionOfObjectValues<AndroidManagedAppProtection>(createAndroidManagedAppProtectionFromDiscriminatorValue); },
        "defaultManagedAppProtections": n => { deviceAppManagement.defaultManagedAppProtections = n.getCollectionOfObjectValues<DefaultManagedAppProtection>(createDefaultManagedAppProtectionFromDiscriminatorValue); },
        "iosManagedAppProtections": n => { deviceAppManagement.iosManagedAppProtections = n.getCollectionOfObjectValues<IosManagedAppProtection>(createIosManagedAppProtectionFromDiscriminatorValue); },
        "isEnabledForMicrosoftStoreForBusiness": n => { deviceAppManagement.isEnabledForMicrosoftStoreForBusiness = n.getBooleanValue(); },
        "managedAppPolicies": n => { deviceAppManagement.managedAppPolicies = n.getCollectionOfObjectValues<ManagedAppPolicy>(createManagedAppPolicyFromDiscriminatorValue); },
        "managedAppRegistrations": n => { deviceAppManagement.managedAppRegistrations = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); },
        "managedAppStatuses": n => { deviceAppManagement.managedAppStatuses = n.getCollectionOfObjectValues<ManagedAppStatus>(createManagedAppStatusFromDiscriminatorValue); },
        "managedEBooks": n => { deviceAppManagement.managedEBooks = n.getCollectionOfObjectValues<ManagedEBook>(createManagedEBookFromDiscriminatorValue); },
        "mdmWindowsInformationProtectionPolicies": n => { deviceAppManagement.mdmWindowsInformationProtectionPolicies = n.getCollectionOfObjectValues<MdmWindowsInformationProtectionPolicy>(createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue); },
        "microsoftStoreForBusinessLanguage": n => { deviceAppManagement.microsoftStoreForBusinessLanguage = n.getStringValue(); },
        "microsoftStoreForBusinessLastCompletedApplicationSyncTime": n => { deviceAppManagement.microsoftStoreForBusinessLastCompletedApplicationSyncTime = n.getDateValue(); },
        "microsoftStoreForBusinessLastSuccessfulSyncDateTime": n => { deviceAppManagement.microsoftStoreForBusinessLastSuccessfulSyncDateTime = n.getDateValue(); },
        "mobileAppCategories": n => { deviceAppManagement.mobileAppCategories = n.getCollectionOfObjectValues<MobileAppCategory>(createMobileAppCategoryFromDiscriminatorValue); },
        "mobileAppConfigurations": n => { deviceAppManagement.mobileAppConfigurations = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfiguration>(createManagedDeviceMobileAppConfigurationFromDiscriminatorValue); },
        "mobileApps": n => { deviceAppManagement.mobileApps = n.getCollectionOfObjectValues<MobileApp>(createMobileAppFromDiscriminatorValue); },
        "targetedManagedAppConfigurations": n => { deviceAppManagement.targetedManagedAppConfigurations = n.getCollectionOfObjectValues<TargetedManagedAppConfiguration>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
        "vppTokens": n => { deviceAppManagement.vppTokens = n.getCollectionOfObjectValues<VppToken>(createVppTokenFromDiscriminatorValue); },
        "windowsInformationProtectionPolicies": n => { deviceAppManagement.windowsInformationProtectionPolicies = n.getCollectionOfObjectValues<WindowsInformationProtectionPolicy>(createWindowsInformationProtectionPolicyFromDiscriminatorValue); },
    }
}
