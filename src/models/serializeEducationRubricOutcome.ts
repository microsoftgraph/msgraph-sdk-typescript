import {EducationRubricOutcome} from './educationRubricOutcome';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeRubricQualityFeedbackModel} from './serializeRubricQualityFeedbackModel';
import {serializeRubricQualitySelectedColumnModel} from './serializeRubricQualitySelectedColumnModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubricOutcome(writer: SerializationWriter, educationRubricOutcome: EducationRubricOutcome | undefined = {} as EducationRubricOutcome) : void {
        serializeEducationOutcome(writer, educationRubricOutcome)
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("publishedRubricQualityFeedback", educationRubricOutcome.publishedRubricQualityFeedback, serializeRubricQualityFeedbackModel);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("publishedRubricQualitySelectedLevels", educationRubricOutcome.publishedRubricQualitySelectedLevels, serializeRubricQualitySelectedColumnModel);
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("rubricQualityFeedback", educationRubricOutcome.rubricQualityFeedback, serializeRubricQualityFeedbackModel);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("rubricQualitySelectedLevels", educationRubricOutcome.rubricQualitySelectedLevels, serializeRubricQualitySelectedColumnModel);
}
