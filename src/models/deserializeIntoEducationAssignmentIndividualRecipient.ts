import { deserializeIntoEducationAssignmentRecipient } from './deserializeIntoEducationAssignmentRecipient';
import { type EducationAssignmentIndividualRecipient } from './educationAssignmentIndividualRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentIndividualRecipient(educationAssignmentIndividualRecipient: EducationAssignmentIndividualRecipient | undefined = {} as EducationAssignmentIndividualRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentIndividualRecipient),
        "recipients": n => { educationAssignmentIndividualRecipient.recipients = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
