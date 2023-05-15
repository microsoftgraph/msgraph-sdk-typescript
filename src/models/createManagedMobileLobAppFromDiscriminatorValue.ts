import {deserializeIntoManagedAndroidLobApp} from './deserializeIntoManagedAndroidLobApp';
import {deserializeIntoManagedIOSLobApp} from './deserializeIntoManagedIOSLobApp';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {ManagedAndroidLobApp, ManagedIOSLobApp, ManagedMobileLobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidLobApp":
                    return deserializeIntoManagedAndroidLobApp;
                case "#microsoft.graph.managedIOSLobApp":
                    return deserializeIntoManagedIOSLobApp;
            }
        }
    }
    return deserializeIntoManagedMobileLobApp;
}
