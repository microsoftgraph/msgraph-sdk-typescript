import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentRecipient(educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {} as EducationAssignmentRecipient, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", educationAssignmentRecipient.odataType);
        writer.writeAdditionalData(educationAssignmentRecipient.additionalData);
}
