import { deserializeIntoEducationAssignmentGroupRecipient } from './deserializeIntoEducationAssignmentGroupRecipient';
import { type EducationAssignmentGroupRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGroupRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentGroupRecipient;
}
