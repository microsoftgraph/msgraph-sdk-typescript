import { createEducationItemBodyFromDiscriminatorValue } from './createEducationItemBodyFromDiscriminatorValue';
import { type EducationItemBody } from './educationItemBody';
import { type RubricQualityFeedbackModel } from './rubricQualityFeedbackModel';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualityFeedbackModel(rubricQualityFeedbackModel: RubricQualityFeedbackModel | undefined = {} as RubricQualityFeedbackModel) : Record<string, (node: ParseNode) => void> {
    return {
        "feedback": n => { rubricQualityFeedbackModel.feedback = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "@odata.type": n => { rubricQualityFeedbackModel.odataType = n.getStringValue(); },
        "qualityId": n => { rubricQualityFeedbackModel.qualityId = n.getStringValue(); },
    }
}
