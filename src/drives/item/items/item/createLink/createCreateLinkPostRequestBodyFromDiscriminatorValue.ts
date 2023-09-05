import { deserializeIntoCreateLinkPostRequestBody } from './deserializeIntoCreateLinkPostRequestBody';
import { type CreateLinkPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateLinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateLinkPostRequestBody;
}
