import { deserializeIntoEducationAssignmentRecipient } from './deserializeIntoEducationAssignmentRecipient';
import { type EducationAssignmentClassRecipient } from './educationAssignmentClassRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentClassRecipient(educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {} as EducationAssignmentClassRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentClassRecipient),
    }
}
