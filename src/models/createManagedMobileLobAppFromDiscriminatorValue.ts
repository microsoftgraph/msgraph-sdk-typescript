import {ManagedAndroidLobApp, ManagedIOSLobApp, ManagedMobileLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedMobileLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidLobApp":
                    return new ManagedAndroidLobApp();
                case "#microsoft.graph.managedIOSLobApp":
                    return new ManagedIOSLobApp();
            }
        }
    }
    return new ManagedMobileLobApp();
}
