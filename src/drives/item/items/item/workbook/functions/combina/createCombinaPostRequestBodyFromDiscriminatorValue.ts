import { deserializeIntoCombinaPostRequestBody } from './deserializeIntoCombinaPostRequestBody';
import { type CombinaPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCombinaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCombinaPostRequestBody;
}
