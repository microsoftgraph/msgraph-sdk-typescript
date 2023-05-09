import {deserializeIntoRecommendedAction} from './deserializeIntoRecommendedAction';
import {RecommendedAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecommendedActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecommendedAction;
}
