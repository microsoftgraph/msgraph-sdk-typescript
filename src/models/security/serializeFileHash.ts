import { type FileHash } from './fileHash';
import { FileHashAlgorithm } from './fileHashAlgorithm';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFileHash(writer: SerializationWriter, fileHash: FileHash | undefined = {} as FileHash) : void {
        writer.writeEnumValue<FileHashAlgorithm>("algorithm", fileHash.algorithm);
        writer.writeStringValue("@odata.type", fileHash.odataType);
        writer.writeStringValue("value", fileHash.value);
        writer.writeAdditionalData(fileHash.additionalData);
}
