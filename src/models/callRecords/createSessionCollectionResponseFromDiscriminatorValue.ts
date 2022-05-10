import {SessionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SessionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SessionCollectionResponseImpl();
}
