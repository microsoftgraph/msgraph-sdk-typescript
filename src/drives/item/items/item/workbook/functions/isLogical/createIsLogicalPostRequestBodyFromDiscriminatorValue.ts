import { deserializeIntoIsLogicalPostRequestBody } from './deserializeIntoIsLogicalPostRequestBody';
import { type IsLogicalPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsLogicalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsLogicalPostRequestBody;
}
