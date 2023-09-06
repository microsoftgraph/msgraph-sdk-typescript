import { deserializeIntoEducationSubmissionRecipient } from './deserializeIntoEducationSubmissionRecipient';
import { type EducationSubmissionIndividualRecipient } from './educationSubmissionIndividualRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmissionIndividualRecipient(educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {} as EducationSubmissionIndividualRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationSubmissionRecipient(educationSubmissionIndividualRecipient),
        "userId": n => { educationSubmissionIndividualRecipient.userId = n.getStringValue(); },
    }
}
