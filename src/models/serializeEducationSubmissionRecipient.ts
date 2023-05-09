import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmissionRecipient(writer: SerializationWriter, educationSubmissionRecipient: EducationSubmissionRecipient | undefined = {} as EducationSubmissionRecipient) : void {
        writer.writeStringValue("@odata.type", educationSubmissionRecipient.odataType);
        writer.writeAdditionalData(educationSubmissionRecipient.additionalData);
}
