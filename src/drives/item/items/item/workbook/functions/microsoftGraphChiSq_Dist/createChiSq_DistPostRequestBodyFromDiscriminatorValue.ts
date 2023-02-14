import {ChiSq_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChiSq_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChiSq_DistPostRequestBody();
}
