import {deserializeIntoPercentRank_IncPostRequestBody} from './deserializeIntoPercentRank_IncPostRequestBody';
import {PercentRank_IncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentRank_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPercentRank_IncPostRequestBody;
}
