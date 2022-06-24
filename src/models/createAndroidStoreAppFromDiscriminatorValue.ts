import {AndroidStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidStoreAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidStoreAppImpl();
}
