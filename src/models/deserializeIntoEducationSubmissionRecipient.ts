import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionRecipient(educationSubmissionRecipient: EducationSubmissionRecipient | undefined = {} as EducationSubmissionRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationSubmissionRecipient.odataType = n.getStringValue(); },
    }
}
