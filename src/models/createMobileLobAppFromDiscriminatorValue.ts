import { deserializeIntoAndroidLobApp } from './deserializeIntoAndroidLobApp';
import { deserializeIntoIosLobApp } from './deserializeIntoIosLobApp';
import { deserializeIntoMacOSDmgApp } from './deserializeIntoMacOSDmgApp';
import { deserializeIntoMacOSLobApp } from './deserializeIntoMacOSLobApp';
import { deserializeIntoMobileLobApp } from './deserializeIntoMobileLobApp';
import { deserializeIntoWin32LobApp } from './deserializeIntoWin32LobApp';
import { deserializeIntoWindowsAppX } from './deserializeIntoWindowsAppX';
import { deserializeIntoWindowsMobileMSI } from './deserializeIntoWindowsMobileMSI';
import { deserializeIntoWindowsUniversalAppX } from './deserializeIntoWindowsUniversalAppX';
import { type AndroidLobApp, type IosLobApp, type MacOSDmgApp, type MacOSLobApp, type MobileLobApp, type Win32LobApp, type WindowsAppX, type WindowsMobileMSI, type WindowsUniversalAppX } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

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
                case "#microsoft.graph.macOSDmgApp":
                    return deserializeIntoMacOSDmgApp;
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
