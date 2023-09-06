import { createFileHashFromDiscriminatorValue } from './createFileHashFromDiscriminatorValue';
import { type FileHash } from './fileHash';
import { type FileSecurityState } from './fileSecurityState';
import { serializeFileHash } from './serializeFileHash';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSecurityState(fileSecurityState: FileSecurityState | undefined = {} as FileSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "fileHash": n => { fileSecurityState.fileHash = n.getObjectValue<FileHash>(createFileHashFromDiscriminatorValue); },
        "name": n => { fileSecurityState.name = n.getStringValue(); },
        "@odata.type": n => { fileSecurityState.odataType = n.getStringValue(); },
        "path": n => { fileSecurityState.path = n.getStringValue(); },
        "riskScore": n => { fileSecurityState.riskScore = n.getStringValue(); },
    }
}
