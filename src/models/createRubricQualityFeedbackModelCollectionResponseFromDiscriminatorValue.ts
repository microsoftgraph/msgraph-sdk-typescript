import {RubricQualityFeedbackModelCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFeedbackModelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualityFeedbackModelCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualityFeedbackModelCollectionResponse();
}
