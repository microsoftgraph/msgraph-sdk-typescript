import {AndroidMobileAppIdentifier, IosMobileAppIdentifier, MobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppIdentifier {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidMobileAppIdentifier":
                    return new AndroidMobileAppIdentifier();
                case "#microsoft.graph.iosMobileAppIdentifier":
                    return new IosMobileAppIdentifier();
            }
        }
    }
    return new MobileAppIdentifier();
}
