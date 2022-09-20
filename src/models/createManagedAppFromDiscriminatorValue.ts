import {ManagedAndroidLobApp, ManagedAndroidStoreApp, ManagedApp, ManagedIOSLobApp, ManagedIOSStoreApp, ManagedMobileLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidLobApp":
                    return new ManagedAndroidLobApp();
                case "#microsoft.graph.managedAndroidStoreApp":
                    return new ManagedAndroidStoreApp();
                case "#microsoft.graph.managedIOSLobApp":
                    return new ManagedIOSLobApp();
                case "#microsoft.graph.managedIOSStoreApp":
                    return new ManagedIOSStoreApp();
                case "#microsoft.graph.managedMobileLobApp":
                    return new ManagedMobileLobApp();
            }
        }
    }
    return new ManagedApp();
}
