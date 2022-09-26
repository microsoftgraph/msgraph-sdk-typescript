import {AndroidMobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidMobileAppIdentifier {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidMobileAppIdentifier();
}
