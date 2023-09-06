import { type PrintSettings } from './printSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintSettings(printSettings: PrintSettings | undefined = {} as PrintSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "documentConversionEnabled": n => { printSettings.documentConversionEnabled = n.getBooleanValue(); },
        "@odata.type": n => { printSettings.odataType = n.getStringValue(); },
    }
}
