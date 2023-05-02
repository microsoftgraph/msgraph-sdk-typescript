import {deserializeIntoFavoritePostRequestBody} from './deserializeIntoFavoritePostRequestBody';
import {FavoritePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFavoritePostRequestBody;
}
