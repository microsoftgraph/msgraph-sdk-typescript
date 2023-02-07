import {UnfavoritePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoritePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoritePostRequestBody();
}
