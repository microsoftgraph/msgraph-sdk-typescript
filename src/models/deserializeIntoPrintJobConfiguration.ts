import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {createPrintMarginFromDiscriminatorValue} from './createPrintMarginFromDiscriminatorValue';
import {IntegerRange} from './integerRange';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintMargin} from './printMargin';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {serializeIntegerRange} from './serializeIntegerRange';
import {serializePrintMargin} from './serializePrintMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobConfiguration(printJobConfiguration: PrintJobConfiguration | undefined = {} as PrintJobConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "collate": n => { printJobConfiguration.collate = n.getBooleanValue(); },
        "colorMode": n => { printJobConfiguration.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); },
        "copies": n => { printJobConfiguration.copies = n.getNumberValue(); },
        "dpi": n => { printJobConfiguration.dpi = n.getNumberValue(); },
        "duplexMode": n => { printJobConfiguration.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); },
        "feedOrientation": n => { printJobConfiguration.feedOrientation = n.getEnumValue<PrinterFeedOrientation>(PrinterFeedOrientation); },
        "finishings": n => { printJobConfiguration.finishings = n.getCollectionOfEnumValues<PrintFinishing>(PrintFinishing); },
        "fitPdfToPage": n => { printJobConfiguration.fitPdfToPage = n.getBooleanValue(); },
        "inputBin": n => { printJobConfiguration.inputBin = n.getStringValue(); },
        "margin": n => { printJobConfiguration.margin = n.getObjectValue<PrintMargin>(createPrintMarginFromDiscriminatorValue); },
        "mediaSize": n => { printJobConfiguration.mediaSize = n.getStringValue(); },
        "mediaType": n => { printJobConfiguration.mediaType = n.getStringValue(); },
        "multipageLayout": n => { printJobConfiguration.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
        "@odata.type": n => { printJobConfiguration.odataType = n.getStringValue(); },
        "orientation": n => { printJobConfiguration.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
        "outputBin": n => { printJobConfiguration.outputBin = n.getStringValue(); },
        "pageRanges": n => { printJobConfiguration.pageRanges = n.getCollectionOfObjectValues<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
        "pagesPerSheet": n => { printJobConfiguration.pagesPerSheet = n.getNumberValue(); },
        "quality": n => { printJobConfiguration.quality = n.getEnumValue<PrintQuality>(PrintQuality); },
        "scaling": n => { printJobConfiguration.scaling = n.getEnumValue<PrintScaling>(PrintScaling); },
    }
}
