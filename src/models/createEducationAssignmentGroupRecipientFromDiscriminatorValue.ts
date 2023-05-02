import {deserializeIntoEducationAssignmentGroupRecipient} from './deserializeIntoEducationAssignmentGroupRecipient';
import {EducationAssignmentGroupRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGroupRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentGroupRecipient;
}
