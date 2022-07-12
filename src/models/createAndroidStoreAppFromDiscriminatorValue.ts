import {AndroidStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidStoreApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidStoreApp();
}
