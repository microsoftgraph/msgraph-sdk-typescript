import {RubricQualityFeedbackModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFeedbackModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualityFeedbackModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualityFeedbackModel();
}
