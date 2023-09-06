import { deserializeIntoEducationAssignmentClassRecipient } from './deserializeIntoEducationAssignmentClassRecipient';
import { type EducationAssignmentClassRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentClassRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentClassRecipient;
}
