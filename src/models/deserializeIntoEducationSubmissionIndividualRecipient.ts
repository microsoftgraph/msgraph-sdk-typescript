import {deserializeIntoEducationSubmissionRecipient} from './deserializeIntoEducationSubmissionRecipient';
import {EducationSubmissionIndividualRecipient} from './educationSubmissionIndividualRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionIndividualRecipient(educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {} as EducationSubmissionIndividualRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationSubmissionRecipient(educationSubmissionIndividualRecipient),
        "userId": n => { educationSubmissionIndividualRecipient.userId = n.getStringValue(); },
    }
}
