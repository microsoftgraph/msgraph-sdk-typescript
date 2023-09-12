import { deserializeIntoFavoritePostRequestBody } from './deserializeIntoFavoritePostRequestBody';
import { type FavoritePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFavoritePostRequestBody;
}
