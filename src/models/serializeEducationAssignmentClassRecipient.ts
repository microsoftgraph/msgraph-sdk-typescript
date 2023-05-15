import {EducationAssignmentClassRecipient} from './educationAssignmentClassRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentClassRecipient(writer: SerializationWriter, educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {} as EducationAssignmentClassRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentClassRecipient)
}
