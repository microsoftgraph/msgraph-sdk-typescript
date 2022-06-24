import {AndroidStoreAppImpl, IosStoreAppImpl, IosVppAppImpl, MacOSOfficeSuiteAppImpl, ManagedAppImpl, MicrosoftStoreForBusinessAppImpl, MobileAppImpl, MobileLobAppImpl, WebAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidStoreApp":
                    return new AndroidStoreAppImpl();
                case "#microsoft.graph.iosStoreApp":
                    return new IosStoreAppImpl();
                case "#microsoft.graph.iosVppApp":
                    return new IosVppAppImpl();
                case "#microsoft.graph.macOSOfficeSuiteApp":
                    return new MacOSOfficeSuiteAppImpl();
                case "#microsoft.graph.managedApp":
                    return new ManagedAppImpl();
                case "#microsoft.graph.microsoftStoreForBusinessApp":
                    return new MicrosoftStoreForBusinessAppImpl();
                case "#microsoft.graph.mobileLobApp":
                    return new MobileLobAppImpl();
                case "#microsoft.graph.webApp":
                    return new WebAppImpl();
            }
        }
    }
    return new MobileAppImpl();
}
