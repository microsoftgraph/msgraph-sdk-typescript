import { deserializeIntoRank_AvgPostRequestBody } from './deserializeIntoRank_AvgPostRequestBody';
import { type Rank_AvgPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRank_AvgPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRank_AvgPostRequestBody;
}
