import { deserializeIntoTPostRequestBody } from './deserializeIntoTPostRequestBody';
import { type TPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTPostRequestBody;
}
