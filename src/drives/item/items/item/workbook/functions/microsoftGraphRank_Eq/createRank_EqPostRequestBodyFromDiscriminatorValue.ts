import {Rank_EqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRank_EqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Rank_EqPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Rank_EqPostRequestBody();
}
