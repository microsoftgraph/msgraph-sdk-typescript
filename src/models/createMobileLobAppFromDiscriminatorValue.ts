import {deserializeIntoAndroidLobApp} from './deserializeIntoAndroidLobApp';
import {deserializeIntoIosLobApp} from './deserializeIntoIosLobApp';
import {deserializeIntoMacOSLobApp} from './deserializeIntoMacOSLobApp';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {deserializeIntoWin32LobApp} from './deserializeIntoWin32LobApp';
import {deserializeIntoWindowsAppX} from './deserializeIntoWindowsAppX';
import {deserializeIntoWindowsMobileMSI} from './deserializeIntoWindowsMobileMSI';
import {deserializeIntoWindowsUniversalAppX} from './deserializeIntoWindowsUniversalAppX';
import {AndroidLobApp, IosLobApp, MacOSLobApp, MobileLobApp, Win32LobApp, WindowsAppX, WindowsMobileMSI, WindowsUniversalAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidLobApp":
                    return deserializeIntoAndroidLobApp;
                case "#microsoft.graph.iosLobApp":
                    return deserializeIntoIosLobApp;
                case "#microsoft.graph.macOSLobApp":
                    return deserializeIntoMacOSLobApp;
                case "#microsoft.graph.win32LobApp":
                    return deserializeIntoWin32LobApp;
                case "#microsoft.graph.windowsAppX":
                    return deserializeIntoWindowsAppX;
                case "#microsoft.graph.windowsMobileMSI":
                    return deserializeIntoWindowsMobileMSI;
                case "#microsoft.graph.windowsUniversalAppX":
                    return deserializeIntoWindowsUniversalAppX;
            }
        }
    }
    return deserializeIntoMobileLobApp;
}
