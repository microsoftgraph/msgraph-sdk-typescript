import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {EducationRubric} from './educationRubric';
import {IdentitySet} from './identitySet';
import {RubricLevel} from './rubricLevel';
import {RubricQuality} from './rubricQuality';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeRubricLevel} from './serializeRubricLevel';
import {serializeRubricQuality} from './serializeRubricQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubric(writer: SerializationWriter, educationRubric: EducationRubric | undefined = {} as EducationRubric) : void {
        serializeEntity(writer, educationRubric)
        writer.writeObjectValue<EducationItemBody>("description", educationRubric.description, serializeEducationItemBody);
        writer.writeStringValue("displayName", educationRubric.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", educationRubric.grading, serializeEducationAssignmentGradeType);
        writer.writeCollectionOfObjectValues<RubricLevel>("levels", educationRubric.levels, serializeRubricLevel);
        writer.writeCollectionOfObjectValues<RubricQuality>("qualities", educationRubric.qualities, serializeRubricQuality);
}
