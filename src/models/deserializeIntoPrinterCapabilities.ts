import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {IntegerRange} from './integerRange';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterCapabilities} from './printerCapabilities';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {serializeIntegerRange} from './serializeIntegerRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCapabilities(printerCapabilities: PrinterCapabilities | undefined = {} as PrinterCapabilities) : Record<string, (node: ParseNode) => void> {
    return {
        "bottomMargins": n => { printerCapabilities.bottomMargins = n.getCollectionOfPrimitiveValues<number>(); },
        "collation": n => { printerCapabilities.collation = n.getBooleanValue(); },
        "colorModes": n => { printerCapabilities.colorModes = n.getCollectionOfEnumValues<PrintColorMode>(PrintColorMode); },
        "contentTypes": n => { printerCapabilities.contentTypes = n.getCollectionOfPrimitiveValues<string>(); },
        "copiesPerJob": n => { printerCapabilities.copiesPerJob = n.getObjectValue<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
        "dpis": n => { printerCapabilities.dpis = n.getCollectionOfPrimitiveValues<number>(); },
        "duplexModes": n => { printerCapabilities.duplexModes = n.getCollectionOfEnumValues<PrintDuplexMode>(PrintDuplexMode); },
        "feedOrientations": n => { printerCapabilities.feedOrientations = n.getCollectionOfEnumValues<PrinterFeedOrientation>(PrinterFeedOrientation); },
        "finishings": n => { printerCapabilities.finishings = n.getCollectionOfEnumValues<PrintFinishing>(PrintFinishing); },
        "inputBins": n => { printerCapabilities.inputBins = n.getCollectionOfPrimitiveValues<string>(); },
        "isColorPrintingSupported": n => { printerCapabilities.isColorPrintingSupported = n.getBooleanValue(); },
        "isPageRangeSupported": n => { printerCapabilities.isPageRangeSupported = n.getBooleanValue(); },
        "leftMargins": n => { printerCapabilities.leftMargins = n.getCollectionOfPrimitiveValues<number>(); },
        "mediaColors": n => { printerCapabilities.mediaColors = n.getCollectionOfPrimitiveValues<string>(); },
        "mediaSizes": n => { printerCapabilities.mediaSizes = n.getCollectionOfPrimitiveValues<string>(); },
        "mediaTypes": n => { printerCapabilities.mediaTypes = n.getCollectionOfPrimitiveValues<string>(); },
        "multipageLayouts": n => { printerCapabilities.multipageLayouts = n.getCollectionOfEnumValues<PrintMultipageLayout>(PrintMultipageLayout); },
        "@odata.type": n => { printerCapabilities.odataType = n.getStringValue(); },
        "orientations": n => { printerCapabilities.orientations = n.getCollectionOfEnumValues<PrintOrientation>(PrintOrientation); },
        "outputBins": n => { printerCapabilities.outputBins = n.getCollectionOfPrimitiveValues<string>(); },
        "pagesPerSheet": n => { printerCapabilities.pagesPerSheet = n.getCollectionOfPrimitiveValues<number>(); },
        "qualities": n => { printerCapabilities.qualities = n.getCollectionOfEnumValues<PrintQuality>(PrintQuality); },
        "rightMargins": n => { printerCapabilities.rightMargins = n.getCollectionOfPrimitiveValues<number>(); },
        "scalings": n => { printerCapabilities.scalings = n.getCollectionOfEnumValues<PrintScaling>(PrintScaling); },
        "supportsFitPdfToPage": n => { printerCapabilities.supportsFitPdfToPage = n.getBooleanValue(); },
        "topMargins": n => { printerCapabilities.topMargins = n.getCollectionOfPrimitiveValues<number>(); },
    }
}
