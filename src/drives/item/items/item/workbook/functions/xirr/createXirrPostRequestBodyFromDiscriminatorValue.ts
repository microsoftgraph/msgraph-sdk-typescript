import {deserializeIntoXirrPostRequestBody} from './deserializeIntoXirrPostRequestBody';
import {XirrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createXirrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoXirrPostRequestBody;
}
