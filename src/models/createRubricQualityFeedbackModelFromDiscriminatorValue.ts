import {RubricQualityFeedbackModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFeedbackModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualityFeedbackModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualityFeedbackModelImpl();
}
