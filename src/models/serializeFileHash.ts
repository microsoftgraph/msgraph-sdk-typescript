import {FileHash} from './fileHash';
import {FileHashType} from './fileHashType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileHash(fileHash: FileHash | undefined = {} as FileHash, writer: SerializationWriter) : void {
        writer.writeEnumValue<FileHashType>("hashType", fileHash.hashType);
        writer.writeStringValue("hashValue", fileHash.hashValue);
        writer.writeStringValue("@odata.type", fileHash.odataType);
        writer.writeAdditionalData(fileHash.additionalData);
}
