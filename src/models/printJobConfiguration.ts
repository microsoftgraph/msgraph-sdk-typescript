import {IntegerRange} from './integerRange';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMargin} from './printMargin';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJobConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
     */
    collate?: boolean | undefined;
    /**
     * The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
     */
    colorMode?: PrintColorMode | undefined;
    /**
     * The number of copies that should be printed. Read-only.
     */
    copies?: number | undefined;
    /**
     * The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
     */
    dpi?: number | undefined;
    /**
     * The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
     */
    duplexMode?: PrintDuplexMode | undefined;
    /**
     * The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only.
     */
    feedOrientation?: PrinterFeedOrientation | undefined;
    /**
     * Finishing processes to use when printing.
     */
    finishings?: PrintFinishing[] | undefined;
    /**
     * The fitPdfToPage property
     */
    fitPdfToPage?: boolean | undefined;
    /**
     * The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
     */
    inputBin?: string | undefined;
    /**
     * The margin settings to use when printing.
     */
    margin?: PrintMargin | undefined;
    /**
     * The media size to use when printing. Supports standard size names for ISO and ANSI media sizes.
     */
    mediaSize?: string | undefined;
    /**
     * The mediaType property
     */
    mediaType?: string | undefined;
    /**
     * The multipageLayout property
     */
    multipageLayout?: PrintMultipageLayout | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The orientation property
     */
    orientation?: PrintOrientation | undefined;
    /**
     * The outputBin property
     */
    outputBin?: string | undefined;
    /**
     * The pageRanges property
     */
    pageRanges?: IntegerRange[] | undefined;
    /**
     * The pagesPerSheet property
     */
    pagesPerSheet?: number | undefined;
    /**
     * The quality property
     */
    quality?: PrintQuality | undefined;
    /**
     * The scaling property
     */
    scaling?: PrintScaling | undefined;
}
