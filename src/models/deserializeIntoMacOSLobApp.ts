import { createMacOSLobChildAppFromDiscriminatorValue } from './createMacOSLobChildAppFromDiscriminatorValue';
import { createMacOSMinimumOperatingSystemFromDiscriminatorValue } from './createMacOSMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoMobileLobApp } from './deserializeIntoMobileLobApp';
import { type MacOSLobApp } from './macOSLobApp';
import { type MacOSLobChildApp } from './macOSLobChildApp';
import { type MacOSMinimumOperatingSystem } from './macOSMinimumOperatingSystem';
import { serializeMacOSLobChildApp } from './serializeMacOSLobChildApp';
import { serializeMacOSMinimumOperatingSystem } from './serializeMacOSMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobApp(macOSLobApp: MacOSLobApp | undefined = {} as MacOSLobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(macOSLobApp),
        "buildNumber": n => { macOSLobApp.buildNumber = n.getStringValue(); },
        "bundleId": n => { macOSLobApp.bundleId = n.getStringValue(); },
        "childApps": n => { macOSLobApp.childApps = n.getCollectionOfObjectValues<MacOSLobChildApp>(createMacOSLobChildAppFromDiscriminatorValue); },
        "ignoreVersionDetection": n => { macOSLobApp.ignoreVersionDetection = n.getBooleanValue(); },
        "installAsManaged": n => { macOSLobApp.installAsManaged = n.getBooleanValue(); },
        "md5Hash": n => { macOSLobApp.md5Hash = n.getCollectionOfPrimitiveValues<string>(); },
        "md5HashChunkSize": n => { macOSLobApp.md5HashChunkSize = n.getNumberValue(); },
        "minimumSupportedOperatingSystem": n => { macOSLobApp.minimumSupportedOperatingSystem = n.getObjectValue<MacOSMinimumOperatingSystem>(createMacOSMinimumOperatingSystemFromDiscriminatorValue); },
        "versionNumber": n => { macOSLobApp.versionNumber = n.getStringValue(); },
    }
}
