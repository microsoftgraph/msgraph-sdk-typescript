import {UnfavoriteResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoriteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoriteResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoriteResponseImpl();
}
