import {deserializeIntoAccrIntMPostRequestBody} from './deserializeIntoAccrIntMPostRequestBody';
import {AccrIntMPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccrIntMPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccrIntMPostRequestBody;
}
