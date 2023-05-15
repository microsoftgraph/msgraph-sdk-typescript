import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataStorageLocation} from './managedAppDataStorageLocation';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedAppProtection} from './managedAppProtection';
import {ManagedBrowserType} from './managedBrowserType';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppProtection(writer: SerializationWriter, managedAppProtection: ManagedAppProtection | undefined = {} as ManagedAppProtection) : void {
        serializeManagedAppPolicy(writer, managedAppProtection)
        if(managedAppProtection.allowedDataStorageLocations)
        writer.writeEnumValue<ManagedAppDataStorageLocation>("allowedDataStorageLocations", ...managedAppProtection.allowedDataStorageLocations);
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedInboundDataTransferSources", managedAppProtection.allowedInboundDataTransferSources);
        writer.writeEnumValue<ManagedAppClipboardSharingLevel>("allowedOutboundClipboardSharingLevel", managedAppProtection.allowedOutboundClipboardSharingLevel);
        writer.writeEnumValue<ManagedAppDataTransferLevel>("allowedOutboundDataTransferDestinations", managedAppProtection.allowedOutboundDataTransferDestinations);
        writer.writeBooleanValue("contactSyncBlocked", managedAppProtection.contactSyncBlocked);
        writer.writeBooleanValue("dataBackupBlocked", managedAppProtection.dataBackupBlocked);
        writer.writeBooleanValue("deviceComplianceRequired", managedAppProtection.deviceComplianceRequired);
        writer.writeBooleanValue("disableAppPinIfDevicePinIsSet", managedAppProtection.disableAppPinIfDevicePinIsSet);
        writer.writeBooleanValue("fingerprintBlocked", managedAppProtection.fingerprintBlocked);
        writer.writeEnumValue<ManagedBrowserType>("managedBrowser", managedAppProtection.managedBrowser);
        writer.writeBooleanValue("managedBrowserToOpenLinksRequired", managedAppProtection.managedBrowserToOpenLinksRequired);
        writer.writeNumberValue("maximumPinRetries", managedAppProtection.maximumPinRetries);
        writer.writeNumberValue("minimumPinLength", managedAppProtection.minimumPinLength);
        writer.writeStringValue("minimumRequiredAppVersion", managedAppProtection.minimumRequiredAppVersion);
        writer.writeStringValue("minimumRequiredOsVersion", managedAppProtection.minimumRequiredOsVersion);
        writer.writeStringValue("minimumWarningAppVersion", managedAppProtection.minimumWarningAppVersion);
        writer.writeStringValue("minimumWarningOsVersion", managedAppProtection.minimumWarningOsVersion);
        writer.writeBooleanValue("organizationalCredentialsRequired", managedAppProtection.organizationalCredentialsRequired);
        writer.writeDurationValue("periodBeforePinReset", managedAppProtection.periodBeforePinReset);
        writer.writeDurationValue("periodOfflineBeforeAccessCheck", managedAppProtection.periodOfflineBeforeAccessCheck);
        writer.writeDurationValue("periodOfflineBeforeWipeIsEnforced", managedAppProtection.periodOfflineBeforeWipeIsEnforced);
        writer.writeDurationValue("periodOnlineBeforeAccessCheck", managedAppProtection.periodOnlineBeforeAccessCheck);
        writer.writeEnumValue<ManagedAppPinCharacterSet>("pinCharacterSet", managedAppProtection.pinCharacterSet);
        writer.writeBooleanValue("pinRequired", managedAppProtection.pinRequired);
        writer.writeBooleanValue("printBlocked", managedAppProtection.printBlocked);
        writer.writeBooleanValue("saveAsBlocked", managedAppProtection.saveAsBlocked);
        writer.writeBooleanValue("simplePinBlocked", managedAppProtection.simplePinBlocked);
}
