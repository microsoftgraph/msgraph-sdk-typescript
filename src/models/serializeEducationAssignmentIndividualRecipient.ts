import {EducationAssignmentIndividualRecipient} from './educationAssignmentIndividualRecipient';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentIndividualRecipient(writer: SerializationWriter, educationAssignmentIndividualRecipient: EducationAssignmentIndividualRecipient | undefined = {} as EducationAssignmentIndividualRecipient) : void {
        serializeEducationAssignmentRecipient(writer, educationAssignmentIndividualRecipient)
        writer.writeCollectionOfPrimitiveValues<string>("recipients", educationAssignmentIndividualRecipient.recipients);
}
