import {IntegerRange} from './integerRange';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintMargin} from './printMargin';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';

export interface PrintJobConfiguration{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Whether the printer should collate pages wehen printing multiple copies of a multi-page document. */
    collate?:boolean | undefined;
    /** The color mode the printer should use to print the job. Valid values are described in the table below. Read-only. */
    colorMode?:PrintColorMode | undefined;
    /** The number of copies that should be printed. Read-only. */
    copies?:number | undefined;
    /** The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only. */
    dpi?:number | undefined;
    /** The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only. */
    duplexMode?:PrintDuplexMode | undefined;
    /** The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only. */
    feedOrientation?:PrinterFeedOrientation | undefined;
    /** Finishing processes to use when printing. */
    finishings?:string[] | undefined;
    /** The fitPdfToPage property */
    fitPdfToPage?:boolean | undefined;
    /** The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins. */
    inputBin?:string | undefined;
    /** The margin settings to use when printing. */
    margin?:PrintMargin | undefined;
    /** The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    mediaSize?:string | undefined;
    /** The default media (such as paper) type to print the document on. */
    mediaType?:string | undefined;
    /** The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    multipageLayout?:PrintMultipageLayout | undefined;
    /** The orientation setting the printer should use when printing the job. Valid values are described in the following table. */
    orientation?:PrintOrientation | undefined;
    /** The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    outputBin?:string | undefined;
    /** The page ranges to print. Read-only. */
    pageRanges?:IntegerRange[] | undefined;
    /** The number of document pages to print on each sheet. */
    pagesPerSheet?:number | undefined;
    /** The print quality to use when printing the job. Valid values are described in the table below. Read-only. */
    quality?:PrintQuality | undefined;
    /** Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the following table. */
    scaling?:PrintScaling | undefined;
}
