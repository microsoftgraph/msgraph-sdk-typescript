import { BitLockerEncryptionMethod } from './bitLockerEncryptionMethod';
import { type BitLockerRemovableDrivePolicy } from './bitLockerRemovableDrivePolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBitLockerRemovableDrivePolicy(bitLockerRemovableDrivePolicy: BitLockerRemovableDrivePolicy | undefined = {} as BitLockerRemovableDrivePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        "blockCrossOrganizationWriteAccess": n => { bitLockerRemovableDrivePolicy.blockCrossOrganizationWriteAccess = n.getBooleanValue(); },
        "encryptionMethod": n => { bitLockerRemovableDrivePolicy.encryptionMethod = n.getEnumValue<BitLockerEncryptionMethod>(BitLockerEncryptionMethod); },
        "@odata.type": n => { bitLockerRemovableDrivePolicy.odataType = n.getStringValue(); },
        "requireEncryptionForWriteAccess": n => { bitLockerRemovableDrivePolicy.requireEncryptionForWriteAccess = n.getBooleanValue(); },
    }
}
