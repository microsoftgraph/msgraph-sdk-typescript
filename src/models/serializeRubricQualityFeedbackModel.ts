import {EducationItemBody} from './educationItemBody';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualityFeedbackModel(writer: SerializationWriter, rubricQualityFeedbackModel: RubricQualityFeedbackModel | undefined = {} as RubricQualityFeedbackModel) : void {
        writer.writeObjectValue<EducationItemBody>("feedback", rubricQualityFeedbackModel.feedback, serializeEducationItemBody);
        writer.writeStringValue("@odata.type", rubricQualityFeedbackModel.odataType);
        writer.writeStringValue("qualityId", rubricQualityFeedbackModel.qualityId);
        writer.writeAdditionalData(rubricQualityFeedbackModel.additionalData);
}
