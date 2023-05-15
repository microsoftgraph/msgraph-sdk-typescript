import {deserializeIntoFileEvidence} from './deserializeIntoFileEvidence';
import {FileEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileEvidence;
}
