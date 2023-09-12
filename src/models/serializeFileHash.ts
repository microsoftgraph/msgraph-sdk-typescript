import { type FileHash } from './fileHash';
import { FileHashType } from './fileHashType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFileHash(writer: SerializationWriter, fileHash: FileHash | undefined = {} as FileHash) : void {
        writer.writeEnumValue<FileHashType>("hashType", fileHash.hashType);
        writer.writeStringValue("hashValue", fileHash.hashValue);
        writer.writeStringValue("@odata.type", fileHash.odataType);
        writer.writeAdditionalData(fileHash.additionalData);
}
