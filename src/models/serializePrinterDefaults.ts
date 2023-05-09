import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterDefaults} from './printerDefaults';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterDefaults(writer: SerializationWriter, printerDefaults: PrinterDefaults | undefined = {} as PrinterDefaults) : void {
        writer.writeEnumValue<PrintColorMode>("colorMode", printerDefaults.colorMode);
        writer.writeStringValue("contentType", printerDefaults.contentType);
        writer.writeNumberValue("copiesPerJob", printerDefaults.copiesPerJob);
        writer.writeNumberValue("dpi", printerDefaults.dpi);
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", printerDefaults.duplexMode);
        if(printerDefaults.finishings)
        writer.writeEnumValue<PrintFinishing>("finishings", ...printerDefaults.finishings);
        writer.writeBooleanValue("fitPdfToPage", printerDefaults.fitPdfToPage);
        writer.writeStringValue("inputBin", printerDefaults.inputBin);
        writer.writeStringValue("mediaColor", printerDefaults.mediaColor);
        writer.writeStringValue("mediaSize", printerDefaults.mediaSize);
        writer.writeStringValue("mediaType", printerDefaults.mediaType);
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", printerDefaults.multipageLayout);
        writer.writeStringValue("@odata.type", printerDefaults.odataType);
        writer.writeEnumValue<PrintOrientation>("orientation", printerDefaults.orientation);
        writer.writeStringValue("outputBin", printerDefaults.outputBin);
        writer.writeNumberValue("pagesPerSheet", printerDefaults.pagesPerSheet);
        writer.writeEnumValue<PrintQuality>("quality", printerDefaults.quality);
        writer.writeEnumValue<PrintScaling>("scaling", printerDefaults.scaling);
        writer.writeAdditionalData(printerDefaults.additionalData);
}
