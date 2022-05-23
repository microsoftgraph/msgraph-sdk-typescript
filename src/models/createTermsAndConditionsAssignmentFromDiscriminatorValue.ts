import {TermsAndConditionsAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAssignmentImpl();
}
