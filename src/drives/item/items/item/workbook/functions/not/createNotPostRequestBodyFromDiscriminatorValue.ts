import { deserializeIntoNotPostRequestBody } from './deserializeIntoNotPostRequestBody';
import { type NotPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotPostRequestBody;
}
