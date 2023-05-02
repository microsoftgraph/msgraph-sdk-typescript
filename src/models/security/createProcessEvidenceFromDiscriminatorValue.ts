import {deserializeIntoProcessEvidence} from './deserializeIntoProcessEvidence';
import {ProcessEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProcessEvidence;
}
