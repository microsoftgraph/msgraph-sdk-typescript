import { deserializeIntoRank_EqPostRequestBody } from './deserializeIntoRank_EqPostRequestBody';
import { type Rank_EqPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRank_EqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRank_EqPostRequestBody;
}
