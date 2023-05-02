import {deserializeIntoAccessReviewStage} from './deserializeIntoAccessReviewStage';
import {AccessReviewStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewStage;
}
