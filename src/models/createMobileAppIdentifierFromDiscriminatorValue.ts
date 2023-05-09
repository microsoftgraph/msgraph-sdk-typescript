import {deserializeIntoAndroidMobileAppIdentifier} from './deserializeIntoAndroidMobileAppIdentifier';
import {deserializeIntoIosMobileAppIdentifier} from './deserializeIntoIosMobileAppIdentifier';
import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {AndroidMobileAppIdentifier, IosMobileAppIdentifier, MobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidMobileAppIdentifier":
                    return deserializeIntoAndroidMobileAppIdentifier;
                case "#microsoft.graph.iosMobileAppIdentifier":
                    return deserializeIntoIosMobileAppIdentifier;
            }
        }
    }
    return deserializeIntoMobileAppIdentifier;
}
