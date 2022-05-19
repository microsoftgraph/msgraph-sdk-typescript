import {FavoritePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FavoritePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FavoritePostRequestBody();
}
