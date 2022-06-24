import {ManagedAndroidStoreAppImpl, ManagedAppImpl, ManagedIOSStoreAppImpl, ManagedMobileLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidStoreApp":
                    return new ManagedAndroidStoreAppImpl();
                case "#microsoft.graph.managedIOSStoreApp":
                    return new ManagedIOSStoreAppImpl();
                case "#microsoft.graph.managedMobileLobApp":
                    return new ManagedMobileLobAppImpl();
            }
        }
    }
    return new ManagedAppImpl();
}
