import {deserializeIntoUserEvidence} from './deserializeIntoUserEvidence';
import {UserEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserEvidence;
}
