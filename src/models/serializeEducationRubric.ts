import { type EducationAssignmentGradeType } from './educationAssignmentGradeType';
import { type EducationItemBody } from './educationItemBody';
import { type EducationRubric } from './educationRubric';
import { type IdentitySet } from './identitySet';
import { type RubricLevel } from './rubricLevel';
import { type RubricQuality } from './rubricQuality';
import { serializeEducationAssignmentGradeType } from './serializeEducationAssignmentGradeType';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeRubricLevel } from './serializeRubricLevel';
import { serializeRubricQuality } from './serializeRubricQuality';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationRubric(writer: SerializationWriter, educationRubric: EducationRubric | undefined = {} as EducationRubric) : void {
        serializeEntity(writer, educationRubric)
        writer.writeObjectValue<EducationItemBody>("description", educationRubric.description, serializeEducationItemBody);
        writer.writeStringValue("displayName", educationRubric.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", educationRubric.grading, serializeEducationAssignmentGradeType);
        writer.writeCollectionOfObjectValues<RubricLevel>("levels", educationRubric.levels, serializeRubricLevel);
        writer.writeCollectionOfObjectValues<RubricQuality>("qualities", educationRubric.qualities, serializeRubricQuality);
}
