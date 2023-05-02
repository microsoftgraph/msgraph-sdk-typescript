import {deserializeIntoPercentRank_ExcPostRequestBody} from './deserializeIntoPercentRank_ExcPostRequestBody';
import {PercentRank_ExcPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPercentRank_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPercentRank_ExcPostRequestBody;
}
