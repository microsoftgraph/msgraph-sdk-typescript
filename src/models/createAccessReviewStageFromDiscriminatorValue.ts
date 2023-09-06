import { deserializeIntoAccessReviewStage } from './deserializeIntoAccessReviewStage';
import { type AccessReviewStage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewStage;
}
