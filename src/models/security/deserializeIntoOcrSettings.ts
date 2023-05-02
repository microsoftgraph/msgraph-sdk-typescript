import {OcrSettings} from './ocrSettings';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOcrSettings(ocrSettings: OcrSettings | undefined = {} as OcrSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { ocrSettings.isEnabled = n.getBooleanValue(); },
        "maxImageSize": n => { ocrSettings.maxImageSize = n.getNumberValue(); },
        "@odata.type": n => { ocrSettings.odataType = n.getStringValue(); },
        "timeout": n => { ocrSettings.timeout = n.getDurationValue(); },
    }
}
