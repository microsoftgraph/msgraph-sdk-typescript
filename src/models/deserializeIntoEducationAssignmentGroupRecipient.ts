import { deserializeIntoEducationAssignmentRecipient } from './deserializeIntoEducationAssignmentRecipient';
import { type EducationAssignmentGroupRecipient } from './educationAssignmentGroupRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGroupRecipient(educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentGroupRecipient),
    }
}
