import {ManagedAppStatusCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusCollectionResponseImpl();
}
