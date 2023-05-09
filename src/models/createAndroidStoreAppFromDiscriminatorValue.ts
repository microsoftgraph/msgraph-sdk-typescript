import {deserializeIntoAndroidStoreApp} from './deserializeIntoAndroidStoreApp';
import {AndroidStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidStoreApp;
}
