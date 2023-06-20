import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGradeType(educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {} as EducationAssignmentGradeType, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", educationAssignmentGradeType.odataType);
        writer.writeAdditionalData(educationAssignmentGradeType.additionalData);
}
