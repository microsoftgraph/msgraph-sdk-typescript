import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {RubricLevel} from './rubricLevel';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricLevel(rubricLevel: RubricLevel | undefined = {} as RubricLevel) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { rubricLevel.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "displayName": n => { rubricLevel.displayName = n.getStringValue(); },
        "grading": n => { rubricLevel.grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
        "levelId": n => { rubricLevel.levelId = n.getStringValue(); },
        "@odata.type": n => { rubricLevel.odataType = n.getStringValue(); },
    }
}
