import {EducationAssignmentGroupRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGroupRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGroupRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentGroupRecipient();
}
