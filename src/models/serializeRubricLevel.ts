import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {RubricLevel} from './rubricLevel';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricLevel(writer: SerializationWriter, rubricLevel: RubricLevel | undefined = {} as RubricLevel) : void {
        writer.writeObjectValue<EducationItemBody>("description", rubricLevel.description, serializeEducationItemBody);
        writer.writeStringValue("displayName", rubricLevel.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", rubricLevel.grading, serializeEducationAssignmentGradeType);
        writer.writeStringValue("levelId", rubricLevel.levelId);
        writer.writeStringValue("@odata.type", rubricLevel.odataType);
        writer.writeAdditionalData(rubricLevel.additionalData);
}
