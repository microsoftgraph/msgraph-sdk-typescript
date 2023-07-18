import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataStorageLocation} from './managedAppDataStorageLocation';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedAppProtection} from './managedAppProtection';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppProtection(managedAppProtection: ManagedAppProtection | undefined = {} as ManagedAppProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(managedAppProtection),
        "allowedDataStorageLocations": n => { managedAppProtection.allowedDataStorageLocations = n.getCollectionOfEnumValues<ManagedAppDataStorageLocation>(ManagedAppDataStorageLocation); },
        "allowedInboundDataTransferSources": n => { managedAppProtection.allowedInboundDataTransferSources = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
        "allowedOutboundClipboardSharingLevel": n => { managedAppProtection.allowedOutboundClipboardSharingLevel = n.getEnumValue<ManagedAppClipboardSharingLevel>(ManagedAppClipboardSharingLevel); },
        "allowedOutboundDataTransferDestinations": n => { managedAppProtection.allowedOutboundDataTransferDestinations = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel); },
        "contactSyncBlocked": n => { managedAppProtection.contactSyncBlocked = n.getBooleanValue(); },
        "dataBackupBlocked": n => { managedAppProtection.dataBackupBlocked = n.getBooleanValue(); },
        "deviceComplianceRequired": n => { managedAppProtection.deviceComplianceRequired = n.getBooleanValue(); },
        "disableAppPinIfDevicePinIsSet": n => { managedAppProtection.disableAppPinIfDevicePinIsSet = n.getBooleanValue(); },
        "fingerprintBlocked": n => { managedAppProtection.fingerprintBlocked = n.getBooleanValue(); },
        "managedBrowser": n => { managedAppProtection.managedBrowser = n.getEnumValue<ManagedBrowserType>(ManagedBrowserType); },
        "managedBrowserToOpenLinksRequired": n => { managedAppProtection.managedBrowserToOpenLinksRequired = n.getBooleanValue(); },
        "maximumPinRetries": n => { managedAppProtection.maximumPinRetries = n.getNumberValue(); },
        "minimumPinLength": n => { managedAppProtection.minimumPinLength = n.getNumberValue(); },
        "minimumRequiredAppVersion": n => { managedAppProtection.minimumRequiredAppVersion = n.getStringValue(); },
        "minimumRequiredOsVersion": n => { managedAppProtection.minimumRequiredOsVersion = n.getStringValue(); },
        "minimumWarningAppVersion": n => { managedAppProtection.minimumWarningAppVersion = n.getStringValue(); },
        "minimumWarningOsVersion": n => { managedAppProtection.minimumWarningOsVersion = n.getStringValue(); },
        "organizationalCredentialsRequired": n => { managedAppProtection.organizationalCredentialsRequired = n.getBooleanValue(); },
        "periodBeforePinReset": n => { managedAppProtection.periodBeforePinReset = n.getDurationValue(); },
        "periodOfflineBeforeAccessCheck": n => { managedAppProtection.periodOfflineBeforeAccessCheck = n.getDurationValue(); },
        "periodOfflineBeforeWipeIsEnforced": n => { managedAppProtection.periodOfflineBeforeWipeIsEnforced = n.getDurationValue(); },
        "periodOnlineBeforeAccessCheck": n => { managedAppProtection.periodOnlineBeforeAccessCheck = n.getDurationValue(); },
        "pinCharacterSet": n => { managedAppProtection.pinCharacterSet = n.getEnumValue<ManagedAppPinCharacterSet>(ManagedAppPinCharacterSet); },
        "pinRequired": n => { managedAppProtection.pinRequired = n.getBooleanValue(); },
        "printBlocked": n => { managedAppProtection.printBlocked = n.getBooleanValue(); },
        "saveAsBlocked": n => { managedAppProtection.saveAsBlocked = n.getBooleanValue(); },
        "simplePinBlocked": n => { managedAppProtection.simplePinBlocked = n.getBooleanValue(); },
    }
}
