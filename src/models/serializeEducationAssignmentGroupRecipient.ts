import {EducationAssignmentGroupRecipient} from './educationAssignmentGroupRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGroupRecipient(writer: SerializationWriter, educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentGroupRecipient)
}
