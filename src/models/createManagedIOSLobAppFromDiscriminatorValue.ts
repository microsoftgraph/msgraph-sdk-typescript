import { deserializeIntoManagedIOSLobApp } from './deserializeIntoManagedIOSLobApp';
import { type ManagedIOSLobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedIOSLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedIOSLobApp;
}
