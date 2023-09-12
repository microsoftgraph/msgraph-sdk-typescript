import { deserializeIntoManagedIOSStoreApp } from './deserializeIntoManagedIOSStoreApp';
import { type ManagedIOSStoreApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedIOSStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedIOSStoreApp;
}
