import {AndroidLobAppImpl, IosLobAppImpl, MobileLobAppImpl, Win32LobAppImpl, WindowsMobileMSIImpl, WindowsUniversalAppXImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidLobApp":
                    return new AndroidLobAppImpl();
                case "#microsoft.graph.iosLobApp":
                    return new IosLobAppImpl();
                case "#microsoft.graph.win32LobApp":
                    return new Win32LobAppImpl();
                case "#microsoft.graph.windowsMobileMSI":
                    return new WindowsMobileMSIImpl();
                case "#microsoft.graph.windowsUniversalAppX":
                    return new WindowsUniversalAppXImpl();
            }
        }
    }
    return new MobileLobAppImpl();
}
