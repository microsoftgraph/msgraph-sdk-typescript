import { type EducationAssignmentRecipient } from './educationAssignmentRecipient';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentRecipient(educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {} as EducationAssignmentRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentRecipient.odataType = n.getStringValue(); },
    }
}
