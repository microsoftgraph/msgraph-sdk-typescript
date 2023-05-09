import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentIndividualRecipient} from './educationAssignmentIndividualRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentIndividualRecipient(educationAssignmentIndividualRecipient: EducationAssignmentIndividualRecipient | undefined = {} as EducationAssignmentIndividualRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentIndividualRecipient),
        "recipients": n => { educationAssignmentIndividualRecipient.recipients = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
