import {PresenceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPresenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PresenceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PresenceCollectionResponseImpl();
}
