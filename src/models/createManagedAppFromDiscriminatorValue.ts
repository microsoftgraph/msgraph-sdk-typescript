import { deserializeIntoManagedAndroidLobApp } from './deserializeIntoManagedAndroidLobApp';
import { deserializeIntoManagedAndroidStoreApp } from './deserializeIntoManagedAndroidStoreApp';
import { deserializeIntoManagedApp } from './deserializeIntoManagedApp';
import { deserializeIntoManagedIOSLobApp } from './deserializeIntoManagedIOSLobApp';
import { deserializeIntoManagedIOSStoreApp } from './deserializeIntoManagedIOSStoreApp';
import { deserializeIntoManagedMobileLobApp } from './deserializeIntoManagedMobileLobApp';
import { type ManagedAndroidLobApp, type ManagedAndroidStoreApp, type ManagedApp, type ManagedIOSLobApp, type ManagedIOSStoreApp, type ManagedMobileLobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAndroidLobApp":
                    return deserializeIntoManagedAndroidLobApp;
                case "#microsoft.graph.managedAndroidStoreApp":
                    return deserializeIntoManagedAndroidStoreApp;
                case "#microsoft.graph.managedIOSLobApp":
                    return deserializeIntoManagedIOSLobApp;
                case "#microsoft.graph.managedIOSStoreApp":
                    return deserializeIntoManagedIOSStoreApp;
                case "#microsoft.graph.managedMobileLobApp":
                    return deserializeIntoManagedMobileLobApp;
            }
        }
    }
    return deserializeIntoManagedApp;
}
