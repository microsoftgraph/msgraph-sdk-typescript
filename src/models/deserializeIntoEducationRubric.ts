import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createRubricLevelFromDiscriminatorValue} from './createRubricLevelFromDiscriminatorValue';
import {createRubricQualityFromDiscriminatorValue} from './createRubricQualityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {EducationRubric} from './educationRubric';
import {IdentitySet} from './identitySet';
import {RubricLevel} from './rubricLevel';
import {RubricQuality} from './rubricQuality';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeRubricLevel} from './serializeRubricLevel';
import {serializeRubricQuality} from './serializeRubricQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubric(educationRubric: EducationRubric | undefined = {} as EducationRubric) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationRubric),
        "createdBy": n => { educationRubric.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { educationRubric.createdDateTime = n.getDateValue(); },
        "description": n => { educationRubric.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "displayName": n => { educationRubric.displayName = n.getStringValue(); },
        "grading": n => { educationRubric.grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
        "lastModifiedBy": n => { educationRubric.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { educationRubric.lastModifiedDateTime = n.getDateValue(); },
        "levels": n => { educationRubric.levels = n.getCollectionOfObjectValues<RubricLevel>(createRubricLevelFromDiscriminatorValue); },
        "qualities": n => { educationRubric.qualities = n.getCollectionOfObjectValues<RubricQuality>(createRubricQualityFromDiscriminatorValue); },
    }
}
