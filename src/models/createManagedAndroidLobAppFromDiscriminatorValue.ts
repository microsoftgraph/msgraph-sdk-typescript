import { deserializeIntoManagedAndroidLobApp } from './deserializeIntoManagedAndroidLobApp';
import { type ManagedAndroidLobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAndroidLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAndroidLobApp;
}
