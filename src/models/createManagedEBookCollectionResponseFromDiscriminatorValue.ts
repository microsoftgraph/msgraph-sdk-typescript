import {ManagedEBookCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBookCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedEBookCollectionResponseImpl();
}
