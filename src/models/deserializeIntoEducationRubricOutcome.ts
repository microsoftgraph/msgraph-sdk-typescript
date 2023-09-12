import { createRubricQualityFeedbackModelFromDiscriminatorValue } from './createRubricQualityFeedbackModelFromDiscriminatorValue';
import { createRubricQualitySelectedColumnModelFromDiscriminatorValue } from './createRubricQualitySelectedColumnModelFromDiscriminatorValue';
import { deserializeIntoEducationOutcome } from './deserializeIntoEducationOutcome';
import { type EducationRubricOutcome } from './educationRubricOutcome';
import { type RubricQualityFeedbackModel } from './rubricQualityFeedbackModel';
import { type RubricQualitySelectedColumnModel } from './rubricQualitySelectedColumnModel';
import { serializeRubricQualityFeedbackModel } from './serializeRubricQualityFeedbackModel';
import { serializeRubricQualitySelectedColumnModel } from './serializeRubricQualitySelectedColumnModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubricOutcome(educationRubricOutcome: EducationRubricOutcome | undefined = {} as EducationRubricOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationRubricOutcome),
        "publishedRubricQualityFeedback": n => { educationRubricOutcome.publishedRubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
        "publishedRubricQualitySelectedLevels": n => { educationRubricOutcome.publishedRubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
        "rubricQualityFeedback": n => { educationRubricOutcome.rubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
        "rubricQualitySelectedLevels": n => { educationRubricOutcome.rubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
    }
}
