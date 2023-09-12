import { deserializeIntoAtanPostRequestBody } from './deserializeIntoAtanPostRequestBody';
import { type AtanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAtanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtanPostRequestBody;
}
