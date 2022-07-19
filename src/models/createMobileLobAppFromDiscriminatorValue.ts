import {AndroidLobApp, IosLobApp, MobileLobApp, Win32LobApp, WindowsMobileMSI, WindowsUniversalAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileLobApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidLobApp":
                    return new AndroidLobApp();
                case "#microsoft.graph.iosLobApp":
                    return new IosLobApp();
                case "#microsoft.graph.win32LobApp":
                    return new Win32LobApp();
                case "#microsoft.graph.windowsMobileMSI":
                    return new WindowsMobileMSI();
                case "#microsoft.graph.windowsUniversalAppX":
                    return new WindowsUniversalAppX();
            }
        }
    }
    return new MobileLobApp();
}
