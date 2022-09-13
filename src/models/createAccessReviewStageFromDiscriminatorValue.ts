import {AccessReviewStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStage();
}
