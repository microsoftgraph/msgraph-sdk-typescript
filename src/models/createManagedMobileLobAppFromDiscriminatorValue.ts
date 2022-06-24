import {ManagedAndroidLobAppImpl, ManagedIOSLobAppImpl, ManagedMobileLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedMobileLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidLobApp":
                    return new ManagedAndroidLobAppImpl();
                case "#microsoft.graph.managedIOSLobApp":
                    return new ManagedIOSLobAppImpl();
            }
        }
    }
    return new ManagedMobileLobAppImpl();
}
