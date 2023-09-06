import { deserializeIntoLeftPostRequestBody } from './deserializeIntoLeftPostRequestBody';
import { type LeftPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLeftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLeftPostRequestBody;
}
