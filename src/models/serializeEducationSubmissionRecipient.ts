import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionRecipient(educationSubmissionRecipient: EducationSubmissionRecipient | undefined = {} as EducationSubmissionRecipient, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", educationSubmissionRecipient.odataType);
        writer.writeAdditionalData(educationSubmissionRecipient.additionalData);
}
