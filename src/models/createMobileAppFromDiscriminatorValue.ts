import {AndroidStoreApp, IosStoreApp, IosVppApp, MacOSOfficeSuiteApp, ManagedApp, MicrosoftStoreForBusinessApp, MobileApp, MobileLobApp, WebApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidStoreApp":
                    return new AndroidStoreApp();
                case "#microsoft.graph.iosStoreApp":
                    return new IosStoreApp();
                case "#microsoft.graph.iosVppApp":
                    return new IosVppApp();
                case "#microsoft.graph.macOSOfficeSuiteApp":
                    return new MacOSOfficeSuiteApp();
                case "#microsoft.graph.managedApp":
                    return new ManagedApp();
                case "#microsoft.graph.microsoftStoreForBusinessApp":
                    return new MicrosoftStoreForBusinessApp();
                case "#microsoft.graph.mobileLobApp":
                    return new MobileLobApp();
                case "#microsoft.graph.webApp":
                    return new WebApp();
            }
        }
    }
    return new MobileApp();
}
