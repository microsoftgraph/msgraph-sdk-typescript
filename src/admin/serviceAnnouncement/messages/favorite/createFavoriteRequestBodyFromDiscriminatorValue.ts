import {FavoriteRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoriteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FavoriteRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FavoriteRequestBodyImpl();
}
