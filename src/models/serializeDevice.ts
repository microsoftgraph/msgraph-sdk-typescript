import {AlternativeSecurityId} from './alternativeSecurityId';
import {Device} from './device';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {serializeAlternativeSecurityId} from './serializeAlternativeSecurityId';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDevice(writer: SerializationWriter, device: Device | undefined = {} as Device) : void {
        serializeDirectoryObject(writer, device)
        writer.writeBooleanValue("accountEnabled", device.accountEnabled);
        writer.writeCollectionOfObjectValues<AlternativeSecurityId>("alternativeSecurityIds", device.alternativeSecurityIds, serializeAlternativeSecurityId);
        writer.writeDateValue("approximateLastSignInDateTime", device.approximateLastSignInDateTime);
        writer.writeDateValue("complianceExpirationDateTime", device.complianceExpirationDateTime);
        writer.writeStringValue("deviceCategory", device.deviceCategory);
        writer.writeStringValue("deviceId", device.deviceId);
        writer.writeStringValue("deviceMetadata", device.deviceMetadata);
        writer.writeStringValue("deviceOwnership", device.deviceOwnership);
        writer.writeNumberValue("deviceVersion", device.deviceVersion);
        writer.writeStringValue("displayName", device.displayName);
        writer.writeStringValue("enrollmentProfileName", device.enrollmentProfileName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", device.extensions, serializeExtension);
        writer.writeBooleanValue("isCompliant", device.isCompliant);
        writer.writeBooleanValue("isManaged", device.isManaged);
        writer.writeStringValue("mdmAppId", device.mdmAppId);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", device.memberOf, serializeDirectoryObject);
        writer.writeDateValue("onPremisesLastSyncDateTime", device.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", device.onPremisesSyncEnabled);
        writer.writeStringValue("operatingSystem", device.operatingSystem);
        writer.writeStringValue("operatingSystemVersion", device.operatingSystemVersion);
        writer.writeCollectionOfPrimitiveValues<string>("physicalIds", device.physicalIds);
        writer.writeStringValue("profileType", device.profileType);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredOwners", device.registeredOwners, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredUsers", device.registeredUsers, serializeDirectoryObject);
        writer.writeDateValue("registrationDateTime", device.registrationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("systemLabels", device.systemLabels);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", device.transitiveMemberOf, serializeDirectoryObject);
        writer.writeStringValue("trustType", device.trustType);
}
