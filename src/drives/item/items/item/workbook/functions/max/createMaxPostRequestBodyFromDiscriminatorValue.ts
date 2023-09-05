import { deserializeIntoMaxPostRequestBody } from './deserializeIntoMaxPostRequestBody';
import { type MaxPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMaxPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMaxPostRequestBody;
}
