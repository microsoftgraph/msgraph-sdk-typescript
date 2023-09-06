import { deserializeIntoUnfavoritePostRequestBody } from './deserializeIntoUnfavoritePostRequestBody';
import { type UnfavoritePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnfavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnfavoritePostRequestBody;
}
