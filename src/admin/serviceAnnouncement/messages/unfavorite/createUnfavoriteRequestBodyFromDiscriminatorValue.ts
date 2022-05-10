import {UnfavoriteRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoriteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnfavoriteRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnfavoriteRequestBodyImpl();
}
