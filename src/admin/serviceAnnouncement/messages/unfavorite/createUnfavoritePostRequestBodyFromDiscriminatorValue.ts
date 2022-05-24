import {UnfavoritePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoritePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoritePostRequestBodyImpl();
}
