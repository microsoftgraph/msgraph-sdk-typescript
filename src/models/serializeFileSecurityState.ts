import type {FileHash} from './fileHash';
import type {FileSecurityState} from './fileSecurityState';
import {serializeFileHash} from './serializeFileHash';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSecurityState(writer: SerializationWriter, fileSecurityState: FileSecurityState | undefined = {} as FileSecurityState) : void {
        writer.writeObjectValue<FileHash>("fileHash", fileSecurityState.fileHash, serializeFileHash);
        writer.writeStringValue("name", fileSecurityState.name);
        writer.writeStringValue("@odata.type", fileSecurityState.odataType);
        writer.writeStringValue("path", fileSecurityState.path);
        writer.writeStringValue("riskScore", fileSecurityState.riskScore);
        writer.writeAdditionalData(fileSecurityState.additionalData);
}
