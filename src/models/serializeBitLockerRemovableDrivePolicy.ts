import { BitLockerEncryptionMethod } from './bitLockerEncryptionMethod';
import { type BitLockerRemovableDrivePolicy } from './bitLockerRemovableDrivePolicy';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitLockerRemovableDrivePolicy(writer: SerializationWriter, bitLockerRemovableDrivePolicy: BitLockerRemovableDrivePolicy | undefined = {} as BitLockerRemovableDrivePolicy) : void {
        writer.writeBooleanValue("blockCrossOrganizationWriteAccess", bitLockerRemovableDrivePolicy.blockCrossOrganizationWriteAccess);
        writer.writeEnumValue<BitLockerEncryptionMethod>("encryptionMethod", bitLockerRemovableDrivePolicy.encryptionMethod);
        writer.writeStringValue("@odata.type", bitLockerRemovableDrivePolicy.odataType);
        writer.writeBooleanValue("requireEncryptionForWriteAccess", bitLockerRemovableDrivePolicy.requireEncryptionForWriteAccess);
        writer.writeAdditionalData(bitLockerRemovableDrivePolicy.additionalData);
}
