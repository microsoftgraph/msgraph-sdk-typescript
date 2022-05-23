import {ManagedAppPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyCollectionResponseImpl();
}
