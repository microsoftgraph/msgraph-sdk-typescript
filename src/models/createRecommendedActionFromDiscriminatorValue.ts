import { deserializeIntoRecommendedAction } from './deserializeIntoRecommendedAction';
import { type RecommendedAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecommendedActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecommendedAction;
}
