import { type MacOSDmgApp } from './macOSDmgApp';
import { type MacOSIncludedApp } from './macOSIncludedApp';
import { type MacOSMinimumOperatingSystem } from './macOSMinimumOperatingSystem';
import { serializeMacOSIncludedApp } from './serializeMacOSIncludedApp';
import { serializeMacOSMinimumOperatingSystem } from './serializeMacOSMinimumOperatingSystem';
import { serializeMobileLobApp } from './serializeMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSDmgApp(writer: SerializationWriter, macOSDmgApp: MacOSDmgApp | undefined = {} as MacOSDmgApp) : void {
        serializeMobileLobApp(writer, macOSDmgApp)
        writer.writeBooleanValue("ignoreVersionDetection", macOSDmgApp.ignoreVersionDetection);
        writer.writeCollectionOfObjectValues<MacOSIncludedApp>("includedApps", macOSDmgApp.includedApps, serializeMacOSIncludedApp);
        writer.writeObjectValue<MacOSMinimumOperatingSystem>("minimumSupportedOperatingSystem", macOSDmgApp.minimumSupportedOperatingSystem, serializeMacOSMinimumOperatingSystem);
        writer.writeStringValue("primaryBundleId", macOSDmgApp.primaryBundleId);
        writer.writeStringValue("primaryBundleVersion", macOSDmgApp.primaryBundleVersion);
}
