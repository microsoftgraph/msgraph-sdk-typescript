import {AndroidMobileAppIdentifierImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidMobileAppIdentifierImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidMobileAppIdentifierImpl();
}
