import { deserializeIntoCotPostRequestBody } from './deserializeIntoCotPostRequestBody';
import { type CotPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCotPostRequestBody;
}
