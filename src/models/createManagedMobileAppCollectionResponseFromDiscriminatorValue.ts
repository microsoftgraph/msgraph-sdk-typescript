import {ManagedMobileAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedMobileAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedMobileAppCollectionResponseImpl();
}
