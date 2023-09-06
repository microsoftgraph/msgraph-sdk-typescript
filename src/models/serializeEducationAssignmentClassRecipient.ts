import { type EducationAssignmentClassRecipient } from './educationAssignmentClassRecipient';
import { serializeEducationAssignmentRecipient } from './serializeEducationAssignmentRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentClassRecipient(writer: SerializationWriter, educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {} as EducationAssignmentClassRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentClassRecipient)
}
