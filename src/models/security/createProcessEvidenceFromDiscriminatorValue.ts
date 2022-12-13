import {ProcessEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProcessEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProcessEvidence();
}
