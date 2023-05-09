import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGrade(writer: SerializationWriter, educationAssignmentGrade: EducationAssignmentGrade | undefined = {} as EducationAssignmentGrade) : void {
        writer.writeObjectValue<IdentitySet>("gradedBy", educationAssignmentGrade.gradedBy, serializeIdentitySet);
        writer.writeDateValue("gradedDateTime", educationAssignmentGrade.gradedDateTime);
        writer.writeStringValue("@odata.type", educationAssignmentGrade.odataType);
        writer.writeAdditionalData(educationAssignmentGrade.additionalData);
}
