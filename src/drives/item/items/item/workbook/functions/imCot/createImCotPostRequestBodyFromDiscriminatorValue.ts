import { deserializeIntoImCotPostRequestBody } from './deserializeIntoImCotPostRequestBody';
import { type ImCotPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImCotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCotPostRequestBody;
}
