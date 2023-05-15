import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {SharepointIds} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharepointIds;
}
