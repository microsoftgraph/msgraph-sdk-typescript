import { deserializeIntoEducationAssignmentIndividualRecipient } from './deserializeIntoEducationAssignmentIndividualRecipient';
import { type EducationAssignmentIndividualRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentIndividualRecipient;
}
