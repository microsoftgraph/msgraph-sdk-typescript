import { deserializeIntoIsOddPostRequestBody } from './deserializeIntoIsOddPostRequestBody';
import { type IsOddPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsOddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsOddPostRequestBody;
}
