import { deserializeIntoXirrPostRequestBody } from './deserializeIntoXirrPostRequestBody';
import { type XirrPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createXirrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoXirrPostRequestBody;
}
