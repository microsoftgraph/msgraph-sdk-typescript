import {FavoritePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FavoritePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FavoritePostRequestBodyImpl();
}
