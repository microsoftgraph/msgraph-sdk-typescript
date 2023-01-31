import {PercentRank_ExcPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentRank_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PercentRank_ExcPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PercentRank_ExcPostRequestBody();
}
