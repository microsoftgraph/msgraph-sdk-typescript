import {deserializeIntoAndroidMobileAppIdentifier} from './deserializeIntoAndroidMobileAppIdentifier';
import {AndroidMobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidMobileAppIdentifier;
}
