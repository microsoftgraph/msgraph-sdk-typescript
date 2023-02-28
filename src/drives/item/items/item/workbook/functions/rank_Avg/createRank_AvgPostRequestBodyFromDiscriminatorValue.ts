import {Rank_AvgPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRank_AvgPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Rank_AvgPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Rank_AvgPostRequestBody();
}
