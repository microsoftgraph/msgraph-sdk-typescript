import {FileHash} from './fileHash';
import {FileHashAlgorithm} from './fileHashAlgorithm';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileHash(writer: SerializationWriter, fileHash: FileHash | undefined = {} as FileHash) : void {
        writer.writeEnumValue<FileHashAlgorithm>("algorithm", fileHash.algorithm);
        writer.writeStringValue("@odata.type", fileHash.odataType);
        writer.writeStringValue("value", fileHash.value);
        writer.writeAdditionalData(fileHash.additionalData);
}
