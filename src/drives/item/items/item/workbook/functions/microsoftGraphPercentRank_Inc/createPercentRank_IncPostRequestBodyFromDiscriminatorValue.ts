import {PercentRank_IncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentRank_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PercentRank_IncPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PercentRank_IncPostRequestBody();
}
