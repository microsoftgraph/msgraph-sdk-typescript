import type {EducationAssignmentGroupRecipient} from './educationAssignmentGroupRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGroupRecipient(writer: SerializationWriter, educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentGroupRecipient)
}
