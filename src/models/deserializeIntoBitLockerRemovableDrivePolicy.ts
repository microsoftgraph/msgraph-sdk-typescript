import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitLockerRemovableDrivePolicy(bitLockerRemovableDrivePolicy: BitLockerRemovableDrivePolicy | undefined = {} as BitLockerRemovableDrivePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        "blockCrossOrganizationWriteAccess": n => { bitLockerRemovableDrivePolicy.blockCrossOrganizationWriteAccess = n.getBooleanValue(); },
        "encryptionMethod": n => { bitLockerRemovableDrivePolicy.encryptionMethod = n.getEnumValue<BitLockerEncryptionMethod>(BitLockerEncryptionMethod); },
        "@odata.type": n => { bitLockerRemovableDrivePolicy.odataType = n.getStringValue(); },
        "requireEncryptionForWriteAccess": n => { bitLockerRemovableDrivePolicy.requireEncryptionForWriteAccess = n.getBooleanValue(); },
    }
}
