import {RecommendedActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecommendedActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecommendedActionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecommendedActionCollectionResponse();
}
