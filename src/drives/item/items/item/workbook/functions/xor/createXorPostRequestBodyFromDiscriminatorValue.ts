import {deserializeIntoXorPostRequestBody} from './deserializeIntoXorPostRequestBody';
import {XorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createXorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoXorPostRequestBody;
}
