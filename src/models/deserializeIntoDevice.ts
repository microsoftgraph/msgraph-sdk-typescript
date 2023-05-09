import {AlternativeSecurityId} from './alternativeSecurityId';
import {createAlternativeSecurityIdFromDiscriminatorValue} from './createAlternativeSecurityIdFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Device} from './device';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {serializeAlternativeSecurityId} from './serializeAlternativeSecurityId';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDevice(device: Device | undefined = {} as Device) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(device),
        "accountEnabled": n => { device.accountEnabled = n.getBooleanValue(); },
        "alternativeSecurityIds": n => { device.alternativeSecurityIds = n.getCollectionOfObjectValues<AlternativeSecurityId>(createAlternativeSecurityIdFromDiscriminatorValue); },
        "approximateLastSignInDateTime": n => { device.approximateLastSignInDateTime = n.getDateValue(); },
        "complianceExpirationDateTime": n => { device.complianceExpirationDateTime = n.getDateValue(); },
        "deviceCategory": n => { device.deviceCategory = n.getStringValue(); },
        "deviceId": n => { device.deviceId = n.getStringValue(); },
        "deviceMetadata": n => { device.deviceMetadata = n.getStringValue(); },
        "deviceOwnership": n => { device.deviceOwnership = n.getStringValue(); },
        "deviceVersion": n => { device.deviceVersion = n.getNumberValue(); },
        "displayName": n => { device.displayName = n.getStringValue(); },
        "enrollmentProfileName": n => { device.enrollmentProfileName = n.getStringValue(); },
        "extensions": n => { device.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "isCompliant": n => { device.isCompliant = n.getBooleanValue(); },
        "isManaged": n => { device.isManaged = n.getBooleanValue(); },
        "mdmAppId": n => { device.mdmAppId = n.getStringValue(); },
        "memberOf": n => { device.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "onPremisesLastSyncDateTime": n => { device.onPremisesLastSyncDateTime = n.getDateValue(); },
        "onPremisesSyncEnabled": n => { device.onPremisesSyncEnabled = n.getBooleanValue(); },
        "operatingSystem": n => { device.operatingSystem = n.getStringValue(); },
        "operatingSystemVersion": n => { device.operatingSystemVersion = n.getStringValue(); },
        "physicalIds": n => { device.physicalIds = n.getCollectionOfPrimitiveValues<string>(); },
        "profileType": n => { device.profileType = n.getStringValue(); },
        "registeredOwners": n => { device.registeredOwners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "registeredUsers": n => { device.registeredUsers = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "registrationDateTime": n => { device.registrationDateTime = n.getDateValue(); },
        "systemLabels": n => { device.systemLabels = n.getCollectionOfPrimitiveValues<string>(); },
        "transitiveMemberOf": n => { device.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "trustType": n => { device.trustType = n.getStringValue(); },
    }
}
