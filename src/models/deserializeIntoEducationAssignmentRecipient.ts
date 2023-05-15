import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentRecipient(educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {} as EducationAssignmentRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentRecipient.odataType = n.getStringValue(); },
    }
}
