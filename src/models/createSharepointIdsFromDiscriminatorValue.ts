import { deserializeIntoSharepointIds } from './deserializeIntoSharepointIds';
import { type SharepointIds } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharepointIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharepointIds;
}
