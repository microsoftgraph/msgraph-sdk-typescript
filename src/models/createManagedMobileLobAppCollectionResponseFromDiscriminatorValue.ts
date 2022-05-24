import {ManagedMobileLobAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedMobileLobAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedMobileLobAppCollectionResponseImpl();
}
