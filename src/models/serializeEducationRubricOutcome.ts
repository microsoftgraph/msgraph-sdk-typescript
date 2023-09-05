import { type EducationRubricOutcome } from './educationRubricOutcome';
import { type RubricQualityFeedbackModel } from './rubricQualityFeedbackModel';
import { type RubricQualitySelectedColumnModel } from './rubricQualitySelectedColumnModel';
import { serializeEducationOutcome } from './serializeEducationOutcome';
import { serializeRubricQualityFeedbackModel } from './serializeRubricQualityFeedbackModel';
import { serializeRubricQualitySelectedColumnModel } from './serializeRubricQualitySelectedColumnModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationRubricOutcome(writer: SerializationWriter, educationRubricOutcome: EducationRubricOutcome | undefined = {} as EducationRubricOutcome) : void {
        serializeEducationOutcome(writer, educationRubricOutcome)
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("publishedRubricQualityFeedback", educationRubricOutcome.publishedRubricQualityFeedback, serializeRubricQualityFeedbackModel);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("publishedRubricQualitySelectedLevels", educationRubricOutcome.publishedRubricQualitySelectedLevels, serializeRubricQualitySelectedColumnModel);
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("rubricQualityFeedback", educationRubricOutcome.rubricQualityFeedback, serializeRubricQualityFeedbackModel);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("rubricQualitySelectedLevels", educationRubricOutcome.rubricQualitySelectedLevels, serializeRubricQualitySelectedColumnModel);
}
