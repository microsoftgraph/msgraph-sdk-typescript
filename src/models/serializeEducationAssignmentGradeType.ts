import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGradeType(writer: SerializationWriter, educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {} as EducationAssignmentGradeType) : void {
        writer.writeStringValue("@odata.type", educationAssignmentGradeType.odataType);
        writer.writeAdditionalData(educationAssignmentGradeType.additionalData);
}
