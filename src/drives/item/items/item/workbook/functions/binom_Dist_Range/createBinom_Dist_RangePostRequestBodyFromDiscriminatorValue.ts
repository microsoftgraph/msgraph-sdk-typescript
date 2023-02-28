import {Binom_Dist_RangePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBinom_Dist_RangePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Binom_Dist_RangePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Binom_Dist_RangePostRequestBody();
}
