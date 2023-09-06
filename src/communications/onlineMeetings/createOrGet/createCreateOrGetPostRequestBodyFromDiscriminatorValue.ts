import { deserializeIntoCreateOrGetPostRequestBody } from './deserializeIntoCreateOrGetPostRequestBody';
import { type CreateOrGetPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateOrGetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateOrGetPostRequestBody;
}
