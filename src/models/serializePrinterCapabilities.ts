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

export function serializePrinterCapabilities(writer: SerializationWriter, printerCapabilities: PrinterCapabilities | undefined = {} as PrinterCapabilities) : void {
        writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", printerCapabilities.bottomMargins);
        writer.writeBooleanValue("collation", printerCapabilities.collation);
        if(printerCapabilities.colorModes)
        writer.writeEnumValue<PrintColorMode>("colorModes", ...printerCapabilities.colorModes);
        writer.writeCollectionOfPrimitiveValues<string>("contentTypes", printerCapabilities.contentTypes);
        writer.writeObjectValue<IntegerRange>("copiesPerJob", printerCapabilities.copiesPerJob, serializeIntegerRange);
        writer.writeCollectionOfPrimitiveValues<number>("dpis", printerCapabilities.dpis);
        if(printerCapabilities.duplexModes)
        writer.writeEnumValue<PrintDuplexMode>("duplexModes", ...printerCapabilities.duplexModes);
        if(printerCapabilities.feedOrientations)
        writer.writeEnumValue<PrinterFeedOrientation>("feedOrientations", ...printerCapabilities.feedOrientations);
        if(printerCapabilities.finishings)
        writer.writeEnumValue<PrintFinishing>("finishings", ...printerCapabilities.finishings);
        writer.writeCollectionOfPrimitiveValues<string>("inputBins", printerCapabilities.inputBins);
        writer.writeBooleanValue("isColorPrintingSupported", printerCapabilities.isColorPrintingSupported);
        writer.writeBooleanValue("isPageRangeSupported", printerCapabilities.isPageRangeSupported);
        writer.writeCollectionOfPrimitiveValues<number>("leftMargins", printerCapabilities.leftMargins);
        writer.writeCollectionOfPrimitiveValues<string>("mediaColors", printerCapabilities.mediaColors);
        writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", printerCapabilities.mediaSizes);
        writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", printerCapabilities.mediaTypes);
        if(printerCapabilities.multipageLayouts)
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayouts", ...printerCapabilities.multipageLayouts);
        writer.writeStringValue("@odata.type", printerCapabilities.odataType);
        if(printerCapabilities.orientations)
        writer.writeEnumValue<PrintOrientation>("orientations", ...printerCapabilities.orientations);
        writer.writeCollectionOfPrimitiveValues<string>("outputBins", printerCapabilities.outputBins);
        writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", printerCapabilities.pagesPerSheet);
        if(printerCapabilities.qualities)
        writer.writeEnumValue<PrintQuality>("qualities", ...printerCapabilities.qualities);
        writer.writeCollectionOfPrimitiveValues<number>("rightMargins", printerCapabilities.rightMargins);
        if(printerCapabilities.scalings)
        writer.writeEnumValue<PrintScaling>("scalings", ...printerCapabilities.scalings);
        writer.writeBooleanValue("supportsFitPdfToPage", printerCapabilities.supportsFitPdfToPage);
        writer.writeCollectionOfPrimitiveValues<number>("topMargins", printerCapabilities.topMargins);
        writer.writeAdditionalData(printerCapabilities.additionalData);
}
