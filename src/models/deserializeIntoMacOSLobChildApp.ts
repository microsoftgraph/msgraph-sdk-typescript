import {MacOSLobChildApp} from './macOSLobChildApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobChildApp(macOSLobChildApp: MacOSLobChildApp | undefined = {} as MacOSLobChildApp) : Record<string, (node: ParseNode) => void> {
    return {
        "buildNumber": n => { macOSLobChildApp.buildNumber = n.getStringValue(); },
        "bundleId": n => { macOSLobChildApp.bundleId = n.getStringValue(); },
        "@odata.type": n => { macOSLobChildApp.odataType = n.getStringValue(); },
        "versionNumber": n => { macOSLobChildApp.versionNumber = n.getStringValue(); },
    }
}
