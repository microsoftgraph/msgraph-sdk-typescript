import { type EducationAssignmentGradeType } from './educationAssignmentGradeType';
import { type EducationItemBody } from './educationItemBody';
import { type RubricLevel } from './rubricLevel';
import { serializeEducationAssignmentGradeType } from './serializeEducationAssignmentGradeType';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRubricLevel(writer: SerializationWriter, rubricLevel: RubricLevel | undefined = {} as RubricLevel) : void {
        writer.writeObjectValue<EducationItemBody>("description", rubricLevel.description, serializeEducationItemBody);
        writer.writeStringValue("displayName", rubricLevel.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", rubricLevel.grading, serializeEducationAssignmentGradeType);
        writer.writeStringValue("levelId", rubricLevel.levelId);
        writer.writeStringValue("@odata.type", rubricLevel.odataType);
        writer.writeAdditionalData(rubricLevel.additionalData);
}
