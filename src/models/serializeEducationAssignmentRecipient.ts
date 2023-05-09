import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentRecipient(writer: SerializationWriter, educationAssignmentRecipient: EducationAssignmentRecipient | undefined = {} as EducationAssignmentRecipient) : void {
        writer.writeStringValue("@odata.type", educationAssignmentRecipient.odataType);
        writer.writeAdditionalData(educationAssignmentRecipient.additionalData);
}
