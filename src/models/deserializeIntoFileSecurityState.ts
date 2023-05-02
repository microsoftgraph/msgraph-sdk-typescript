import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {FileSecurityState} from './fileSecurityState';
import {serializeFileHash} from './serializeFileHash';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSecurityState(fileSecurityState: FileSecurityState | undefined = {} as FileSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "fileHash": n => { fileSecurityState.fileHash = n.getObjectValue<FileHash>(createFileHashFromDiscriminatorValue); },
        "name": n => { fileSecurityState.name = n.getStringValue(); },
        "@odata.type": n => { fileSecurityState.odataType = n.getStringValue(); },
        "path": n => { fileSecurityState.path = n.getStringValue(); },
        "riskScore": n => { fileSecurityState.riskScore = n.getStringValue(); },
    }
}
