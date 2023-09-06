import { deserializeIntoInstantiatePostRequestBody } from './deserializeIntoInstantiatePostRequestBody';
import { type InstantiatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInstantiatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInstantiatePostRequestBody;
}
