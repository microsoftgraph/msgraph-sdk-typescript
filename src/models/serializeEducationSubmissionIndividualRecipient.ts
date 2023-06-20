import {EducationSubmissionIndividualRecipient} from './educationSubmissionIndividualRecipient';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionIndividualRecipient(educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {} as EducationSubmissionIndividualRecipient, writer: SerializationWriter) : void {
        serializeEducationSubmissionRecipient(writer, educationSubmissionIndividualRecipient)
        writer.writeStringValue("userId", educationSubmissionIndividualRecipient.userId);
}
