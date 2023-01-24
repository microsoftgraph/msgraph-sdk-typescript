import {AndroidLobApp, AndroidStoreApp, IosLobApp, IosStoreApp, IosVppApp, MacOSLobApp, MacOSMicrosoftEdgeApp, MacOSOfficeSuiteApp, ManagedAndroidLobApp, ManagedAndroidStoreApp, ManagedApp, ManagedIOSLobApp, ManagedIOSStoreApp, ManagedMobileLobApp, MicrosoftStoreForBusinessApp, MobileApp, MobileLobApp, WebApp, Win32LobApp, WindowsMicrosoftEdgeApp, WindowsMobileMSI, WindowsUniversalAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidLobApp":
                    return new AndroidLobApp();
                case "#microsoft.graph.androidStoreApp":
                    return new AndroidStoreApp();
                case "#microsoft.graph.iosLobApp":
                    return new IosLobApp();
                case "#microsoft.graph.iosStoreApp":
                    return new IosStoreApp();
                case "#microsoft.graph.iosVppApp":
                    return new IosVppApp();
                case "#microsoft.graph.macOSLobApp":
                    return new MacOSLobApp();
                case "#microsoft.graph.macOSMicrosoftEdgeApp":
                    return new MacOSMicrosoftEdgeApp();
                case "#microsoft.graph.macOSOfficeSuiteApp":
                    return new MacOSOfficeSuiteApp();
                case "#microsoft.graph.managedAndroidLobApp":
                    return new ManagedAndroidLobApp();
                case "#microsoft.graph.managedAndroidStoreApp":
                    return new ManagedAndroidStoreApp();
                case "#microsoft.graph.managedApp":
                    return new ManagedApp();
                case "#microsoft.graph.managedIOSLobApp":
                    return new ManagedIOSLobApp();
                case "#microsoft.graph.managedIOSStoreApp":
                    return new ManagedIOSStoreApp();
                case "#microsoft.graph.managedMobileLobApp":
                    return new ManagedMobileLobApp();
                case "#microsoft.graph.microsoftStoreForBusinessApp":
                    return new MicrosoftStoreForBusinessApp();
                case "#microsoft.graph.mobileLobApp":
                    return new MobileLobApp();
                case "#microsoft.graph.webApp":
                    return new WebApp();
                case "#microsoft.graph.win32LobApp":
                    return new Win32LobApp();
                case "#microsoft.graph.windowsMicrosoftEdgeApp":
                    return new WindowsMicrosoftEdgeApp();
                case "#microsoft.graph.windowsMobileMSI":
                    return new WindowsMobileMSI();
                case "#microsoft.graph.windowsUniversalAppX":
                    return new WindowsUniversalAppX();
            }
        }
    }
    return new MobileApp();
}
