import {deserializeIntoAndroidLobApp} from './deserializeIntoAndroidLobApp';
import {deserializeIntoAndroidStoreApp} from './deserializeIntoAndroidStoreApp';
import {deserializeIntoIosiPadOSWebClip} from './deserializeIntoIosiPadOSWebClip';
import {deserializeIntoIosLobApp} from './deserializeIntoIosLobApp';
import {deserializeIntoIosStoreApp} from './deserializeIntoIosStoreApp';
import {deserializeIntoIosVppApp} from './deserializeIntoIosVppApp';
import {deserializeIntoMacOSLobApp} from './deserializeIntoMacOSLobApp';
import {deserializeIntoMacOSMicrosoftDefenderApp} from './deserializeIntoMacOSMicrosoftDefenderApp';
import {deserializeIntoMacOSMicrosoftEdgeApp} from './deserializeIntoMacOSMicrosoftEdgeApp';
import {deserializeIntoMacOSOfficeSuiteApp} from './deserializeIntoMacOSOfficeSuiteApp';
import {deserializeIntoManagedAndroidLobApp} from './deserializeIntoManagedAndroidLobApp';
import {deserializeIntoManagedAndroidStoreApp} from './deserializeIntoManagedAndroidStoreApp';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {deserializeIntoManagedIOSLobApp} from './deserializeIntoManagedIOSLobApp';
import {deserializeIntoManagedIOSStoreApp} from './deserializeIntoManagedIOSStoreApp';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {deserializeIntoMicrosoftStoreForBusinessApp} from './deserializeIntoMicrosoftStoreForBusinessApp';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {deserializeIntoWebApp} from './deserializeIntoWebApp';
import {deserializeIntoWin32LobApp} from './deserializeIntoWin32LobApp';
import {deserializeIntoWindowsAppX} from './deserializeIntoWindowsAppX';
import {deserializeIntoWindowsMicrosoftEdgeApp} from './deserializeIntoWindowsMicrosoftEdgeApp';
import {deserializeIntoWindowsMobileMSI} from './deserializeIntoWindowsMobileMSI';
import {deserializeIntoWindowsUniversalAppX} from './deserializeIntoWindowsUniversalAppX';
import {deserializeIntoWindowsWebApp} from './deserializeIntoWindowsWebApp';
import {AndroidLobApp, AndroidStoreApp, IosiPadOSWebClip, IosLobApp, IosStoreApp, IosVppApp, MacOSLobApp, MacOSMicrosoftDefenderApp, MacOSMicrosoftEdgeApp, MacOSOfficeSuiteApp, ManagedAndroidLobApp, ManagedAndroidStoreApp, ManagedApp, ManagedIOSLobApp, ManagedIOSStoreApp, ManagedMobileLobApp, MicrosoftStoreForBusinessApp, MobileApp, MobileLobApp, WebApp, Win32LobApp, WindowsAppX, WindowsMicrosoftEdgeApp, WindowsMobileMSI, WindowsUniversalAppX, WindowsWebApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidLobApp":
                    return deserializeIntoAndroidLobApp;
                case "#microsoft.graph.androidStoreApp":
                    return deserializeIntoAndroidStoreApp;
                case "#microsoft.graph.iosiPadOSWebClip":
                    return deserializeIntoIosiPadOSWebClip;
                case "#microsoft.graph.iosLobApp":
                    return deserializeIntoIosLobApp;
                case "#microsoft.graph.iosStoreApp":
                    return deserializeIntoIosStoreApp;
                case "#microsoft.graph.iosVppApp":
                    return deserializeIntoIosVppApp;
                case "#microsoft.graph.macOSLobApp":
                    return deserializeIntoMacOSLobApp;
                case "#microsoft.graph.macOSMicrosoftDefenderApp":
                    return deserializeIntoMacOSMicrosoftDefenderApp;
                case "#microsoft.graph.macOSMicrosoftEdgeApp":
                    return deserializeIntoMacOSMicrosoftEdgeApp;
                case "#microsoft.graph.macOSOfficeSuiteApp":
                    return deserializeIntoMacOSOfficeSuiteApp;
                case "#microsoft.graph.managedAndroidLobApp":
                    return deserializeIntoManagedAndroidLobApp;
                case "#microsoft.graph.managedAndroidStoreApp":
                    return deserializeIntoManagedAndroidStoreApp;
                case "#microsoft.graph.managedApp":
                    return deserializeIntoManagedApp;
                case "#microsoft.graph.managedIOSLobApp":
                    return deserializeIntoManagedIOSLobApp;
                case "#microsoft.graph.managedIOSStoreApp":
                    return deserializeIntoManagedIOSStoreApp;
                case "#microsoft.graph.managedMobileLobApp":
                    return deserializeIntoManagedMobileLobApp;
                case "#microsoft.graph.microsoftStoreForBusinessApp":
                    return deserializeIntoMicrosoftStoreForBusinessApp;
                case "#microsoft.graph.mobileLobApp":
                    return deserializeIntoMobileLobApp;
                case "#microsoft.graph.webApp":
                    return deserializeIntoWebApp;
                case "#microsoft.graph.win32LobApp":
                    return deserializeIntoWin32LobApp;
                case "#microsoft.graph.windowsAppX":
                    return deserializeIntoWindowsAppX;
                case "#microsoft.graph.windowsMicrosoftEdgeApp":
                    return deserializeIntoWindowsMicrosoftEdgeApp;
                case "#microsoft.graph.windowsMobileMSI":
                    return deserializeIntoWindowsMobileMSI;
                case "#microsoft.graph.windowsUniversalAppX":
                    return deserializeIntoWindowsUniversalAppX;
                case "#microsoft.graph.windowsWebApp":
                    return deserializeIntoWindowsWebApp;
            }
        }
    }
    return deserializeIntoMobileApp;
}
