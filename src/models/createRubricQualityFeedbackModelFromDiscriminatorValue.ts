import { deserializeIntoRubricQualityFeedbackModel } from './deserializeIntoRubricQualityFeedbackModel';
import { type RubricQualityFeedbackModel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRubricQualityFeedbackModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricQualityFeedbackModel;
}
