import {deserializeIntoRubricQualityFeedbackModel} from './deserializeIntoRubricQualityFeedbackModel';
import {RubricQualityFeedbackModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFeedbackModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricQualityFeedbackModel;
}
