import {EducationAssignmentClassRecipient} from './educationAssignmentClassRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentClassRecipient(educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {} as EducationAssignmentClassRecipient, writer: SerializationWriter) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentClassRecipient)
}
