import { createMacOSIncludedAppFromDiscriminatorValue } from './createMacOSIncludedAppFromDiscriminatorValue';
import { createMacOSMinimumOperatingSystemFromDiscriminatorValue } from './createMacOSMinimumOperatingSystemFromDiscriminatorValue';
import { deserializeIntoMobileLobApp } from './deserializeIntoMobileLobApp';
import { type MacOSDmgApp } from './macOSDmgApp';
import { type MacOSIncludedApp } from './macOSIncludedApp';
import { type MacOSMinimumOperatingSystem } from './macOSMinimumOperatingSystem';
import { serializeMacOSIncludedApp } from './serializeMacOSIncludedApp';
import { serializeMacOSMinimumOperatingSystem } from './serializeMacOSMinimumOperatingSystem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDmgApp(macOSDmgApp: MacOSDmgApp | undefined = {} as MacOSDmgApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(macOSDmgApp),
        "ignoreVersionDetection": n => { macOSDmgApp.ignoreVersionDetection = n.getBooleanValue(); },
        "includedApps": n => { macOSDmgApp.includedApps = n.getCollectionOfObjectValues<MacOSIncludedApp>(createMacOSIncludedAppFromDiscriminatorValue); },
        "minimumSupportedOperatingSystem": n => { macOSDmgApp.minimumSupportedOperatingSystem = n.getObjectValue<MacOSMinimumOperatingSystem>(createMacOSMinimumOperatingSystemFromDiscriminatorValue); },
        "primaryBundleId": n => { macOSDmgApp.primaryBundleId = n.getStringValue(); },
        "primaryBundleVersion": n => { macOSDmgApp.primaryBundleVersion = n.getStringValue(); },
    }
}
