import {deserializeIntoChiSq_DistPostRequestBody} from './deserializeIntoChiSq_DistPostRequestBody';
import {ChiSq_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChiSq_DistPostRequestBody;
}
