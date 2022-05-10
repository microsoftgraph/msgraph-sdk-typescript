import {DefaultManagedAppProtectionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultManagedAppProtectionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultManagedAppProtectionCollectionResponseImpl();
}
