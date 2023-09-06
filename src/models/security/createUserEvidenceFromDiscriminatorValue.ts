import { deserializeIntoUserEvidence } from './deserializeIntoUserEvidence';
import { type UserEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserEvidence;
}
