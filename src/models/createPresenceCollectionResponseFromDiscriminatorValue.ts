import { deserializeIntoPresenceCollectionResponse } from './deserializeIntoPresenceCollectionResponse';
import { type PresenceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPresenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPresenceCollectionResponse;
}
