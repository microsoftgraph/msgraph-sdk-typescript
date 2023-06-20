import {EducationAssignmentGroupRecipient} from './educationAssignmentGroupRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGroupRecipient(educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient, writer: SerializationWriter) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentGroupRecipient)
}
