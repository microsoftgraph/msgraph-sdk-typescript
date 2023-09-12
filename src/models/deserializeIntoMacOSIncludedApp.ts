import { type MacOSIncludedApp } from './macOSIncludedApp';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSIncludedApp(macOSIncludedApp: MacOSIncludedApp | undefined = {} as MacOSIncludedApp) : Record<string, (node: ParseNode) => void> {
    return {
        "bundleId": n => { macOSIncludedApp.bundleId = n.getStringValue(); },
        "bundleVersion": n => { macOSIncludedApp.bundleVersion = n.getStringValue(); },
        "@odata.type": n => { macOSIncludedApp.odataType = n.getStringValue(); },
    }
}
