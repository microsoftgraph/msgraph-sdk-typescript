import {ManagedAppRegistrationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppRegistrationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppRegistrationCollectionResponseImpl();
}
