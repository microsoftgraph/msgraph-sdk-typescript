import { type EducationAssignmentGroupRecipient } from './educationAssignmentGroupRecipient';
import { serializeEducationAssignmentRecipient } from './serializeEducationAssignmentRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGroupRecipient(writer: SerializationWriter, educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentGroupRecipient)
}
