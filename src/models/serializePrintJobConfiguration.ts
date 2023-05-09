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

export function serializePrintJobConfiguration(writer: SerializationWriter, printJobConfiguration: PrintJobConfiguration | undefined = {} as PrintJobConfiguration) : void {
        writer.writeBooleanValue("collate", printJobConfiguration.collate);
        writer.writeEnumValue<PrintColorMode>("colorMode", printJobConfiguration.colorMode);
        writer.writeNumberValue("copies", printJobConfiguration.copies);
        writer.writeNumberValue("dpi", printJobConfiguration.dpi);
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", printJobConfiguration.duplexMode);
        writer.writeEnumValue<PrinterFeedOrientation>("feedOrientation", printJobConfiguration.feedOrientation);
        if(printJobConfiguration.finishings)
        writer.writeEnumValue<PrintFinishing>("finishings", ...printJobConfiguration.finishings);
        writer.writeBooleanValue("fitPdfToPage", printJobConfiguration.fitPdfToPage);
        writer.writeStringValue("inputBin", printJobConfiguration.inputBin);
        writer.writeObjectValue<PrintMargin>("margin", printJobConfiguration.margin, serializePrintMargin);
        writer.writeStringValue("mediaSize", printJobConfiguration.mediaSize);
        writer.writeStringValue("mediaType", printJobConfiguration.mediaType);
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", printJobConfiguration.multipageLayout);
        writer.writeStringValue("@odata.type", printJobConfiguration.odataType);
        writer.writeEnumValue<PrintOrientation>("orientation", printJobConfiguration.orientation);
        writer.writeStringValue("outputBin", printJobConfiguration.outputBin);
        writer.writeCollectionOfObjectValues<IntegerRange>("pageRanges", printJobConfiguration.pageRanges, serializeIntegerRange);
        writer.writeNumberValue("pagesPerSheet", printJobConfiguration.pagesPerSheet);
        writer.writeEnumValue<PrintQuality>("quality", printJobConfiguration.quality);
        writer.writeEnumValue<PrintScaling>("scaling", printJobConfiguration.scaling);
        writer.writeAdditionalData(printJobConfiguration.additionalData);
}
