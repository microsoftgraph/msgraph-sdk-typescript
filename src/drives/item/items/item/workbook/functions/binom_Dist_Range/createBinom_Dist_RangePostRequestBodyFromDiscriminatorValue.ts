import {deserializeIntoBinom_Dist_RangePostRequestBody} from './deserializeIntoBinom_Dist_RangePostRequestBody';
import {Binom_Dist_RangePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBinom_Dist_RangePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBinom_Dist_RangePostRequestBody;
}
