import { deserializeIntoAndroidStoreApp } from './deserializeIntoAndroidStoreApp';
import { type AndroidStoreApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidStoreApp;
}
