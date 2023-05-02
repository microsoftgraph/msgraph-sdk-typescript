import {deserializeIntoRank_EqPostRequestBody} from './deserializeIntoRank_EqPostRequestBody';
import {Rank_EqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRank_EqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRank_EqPostRequestBody;
}
