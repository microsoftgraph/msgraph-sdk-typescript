import {SharepointIdsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharepointIdsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharepointIdsImpl();
}
