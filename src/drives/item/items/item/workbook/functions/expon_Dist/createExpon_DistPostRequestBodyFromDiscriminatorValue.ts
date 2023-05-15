import {deserializeIntoExpon_DistPostRequestBody} from './deserializeIntoExpon_DistPostRequestBody';
import {Expon_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpon_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpon_DistPostRequestBody;
}
