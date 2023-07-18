import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterDefaults} from './printerDefaults';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterDefaults(printerDefaults: PrinterDefaults | undefined = {} as PrinterDefaults) : Record<string, (node: ParseNode) => void> {
    return {
        "colorMode": n => { printerDefaults.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); },
        "contentType": n => { printerDefaults.contentType = n.getStringValue(); },
        "copiesPerJob": n => { printerDefaults.copiesPerJob = n.getNumberValue(); },
        "dpi": n => { printerDefaults.dpi = n.getNumberValue(); },
        "duplexMode": n => { printerDefaults.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); },
        "finishings": n => { printerDefaults.finishings = n.getCollectionOfEnumValues<PrintFinishing>(PrintFinishing); },
        "fitPdfToPage": n => { printerDefaults.fitPdfToPage = n.getBooleanValue(); },
        "inputBin": n => { printerDefaults.inputBin = n.getStringValue(); },
        "mediaColor": n => { printerDefaults.mediaColor = n.getStringValue(); },
        "mediaSize": n => { printerDefaults.mediaSize = n.getStringValue(); },
        "mediaType": n => { printerDefaults.mediaType = n.getStringValue(); },
        "multipageLayout": n => { printerDefaults.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
        "@odata.type": n => { printerDefaults.odataType = n.getStringValue(); },
        "orientation": n => { printerDefaults.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
        "outputBin": n => { printerDefaults.outputBin = n.getStringValue(); },
        "pagesPerSheet": n => { printerDefaults.pagesPerSheet = n.getNumberValue(); },
        "quality": n => { printerDefaults.quality = n.getEnumValue<PrintQuality>(PrintQuality); },
        "scaling": n => { printerDefaults.scaling = n.getEnumValue<PrintScaling>(PrintScaling); },
    }
}
