import { deserializeIntoSharePostRequestBody } from './deserializeIntoSharePostRequestBody';
import { type SharePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharePostRequestBody;
}
