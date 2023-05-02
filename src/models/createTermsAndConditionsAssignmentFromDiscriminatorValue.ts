import {deserializeIntoTermsAndConditionsAssignment} from './deserializeIntoTermsAndConditionsAssignment';
import {TermsAndConditionsAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAssignment;
}
