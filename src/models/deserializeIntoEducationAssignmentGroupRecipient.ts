import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentGroupRecipient} from './educationAssignmentGroupRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGroupRecipient(educationAssignmentGroupRecipient: EducationAssignmentGroupRecipient | undefined = {} as EducationAssignmentGroupRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentGroupRecipient),
    }
}
