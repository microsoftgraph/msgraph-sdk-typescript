import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitLockerRemovableDrivePolicy(bitLockerRemovableDrivePolicy: BitLockerRemovableDrivePolicy | undefined = {} as BitLockerRemovableDrivePolicy, writer: SerializationWriter) : void {
        writer.writeBooleanValue("blockCrossOrganizationWriteAccess", bitLockerRemovableDrivePolicy.blockCrossOrganizationWriteAccess);
        writer.writeEnumValue<BitLockerEncryptionMethod>("encryptionMethod", bitLockerRemovableDrivePolicy.encryptionMethod);
        writer.writeStringValue("@odata.type", bitLockerRemovableDrivePolicy.odataType);
        writer.writeBooleanValue("requireEncryptionForWriteAccess", bitLockerRemovableDrivePolicy.requireEncryptionForWriteAccess);
        writer.writeAdditionalData(bitLockerRemovableDrivePolicy.additionalData);
}
