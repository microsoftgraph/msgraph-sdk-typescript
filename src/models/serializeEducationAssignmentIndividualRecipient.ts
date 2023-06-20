import {EducationAssignmentIndividualRecipient} from './educationAssignmentIndividualRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentIndividualRecipient(educationAssignmentIndividualRecipient: EducationAssignmentIndividualRecipient | undefined = {} as EducationAssignmentIndividualRecipient, writer: SerializationWriter) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentIndividualRecipient)
        writer.writeCollectionOfPrimitiveValues<string>("recipients", educationAssignmentIndividualRecipient.recipients);
}
