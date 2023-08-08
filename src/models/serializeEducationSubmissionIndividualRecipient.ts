import type {EducationSubmissionIndividualRecipient} from './educationSubmissionIndividualRecipient';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionIndividualRecipient(writer: SerializationWriter, educationSubmissionIndividualRecipient: EducationSubmissionIndividualRecipient | undefined = {} as EducationSubmissionIndividualRecipient) : void {
        serializeEducationSubmissionRecipient(writer, educationSubmissionIndividualRecipient)
        writer.writeStringValue("userId", educationSubmissionIndividualRecipient.userId);
}
