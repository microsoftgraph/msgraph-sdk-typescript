import {deserializeIntoFavoriteResponse} from './deserializeIntoFavoriteResponse';
import {FavoriteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoriteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFavoriteResponse;
}
