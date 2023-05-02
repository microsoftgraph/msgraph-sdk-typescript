import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualityFeedbackModel(rubricQualityFeedbackModel: RubricQualityFeedbackModel | undefined = {} as RubricQualityFeedbackModel) : Record<string, (node: ParseNode) => void> {
    return {
        "feedback": n => { rubricQualityFeedbackModel.feedback = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "@odata.type": n => { rubricQualityFeedbackModel.odataType = n.getStringValue(); },
        "qualityId": n => { rubricQualityFeedbackModel.qualityId = n.getStringValue(); },
    }
}
