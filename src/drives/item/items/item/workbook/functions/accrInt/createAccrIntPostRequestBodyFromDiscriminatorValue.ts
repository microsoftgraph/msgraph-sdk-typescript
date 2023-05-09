import {deserializeIntoAccrIntPostRequestBody} from './deserializeIntoAccrIntPostRequestBody';
import {AccrIntPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccrIntPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccrIntPostRequestBody;
}
