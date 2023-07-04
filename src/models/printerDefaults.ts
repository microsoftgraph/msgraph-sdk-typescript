import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterDefaults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The default color mode to use when printing the document. Valid values are described in the following table.
     */
    colorMode?: PrintColorMode | undefined;
    /**
     * The default content (MIME) type to use when processing documents.
     */
    contentType?: string | undefined;
    /**
     * The default number of copies printed per job.
     */
    copiesPerJob?: number | undefined;
    /**
     * The default resolution in DPI to use when printing the job.
     */
    dpi?: number | undefined;
    /**
     * The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.
     */
    duplexMode?: PrintDuplexMode | undefined;
    /**
     * The default set of finishings to apply to print jobs. Valid values are described in the following table.
     */
    finishings?: PrintFinishing[] | undefined;
    /**
     * The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     */
    fitPdfToPage?: boolean | undefined;
    /**
     * The inputBin property
     */
    inputBin?: string | undefined;
    /**
     * The default media (such as paper) color to print the document on.
     */
    mediaColor?: string | undefined;
    /**
     * The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     */
    mediaSize?: string | undefined;
    /**
     * The default media (such as paper) type to print the document on.
     */
    mediaType?: string | undefined;
    /**
     * The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
     */
    multipageLayout?: PrintMultipageLayout | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The default orientation to use when printing the document. Valid values are described in the following table.
     */
    orientation?: PrintOrientation | undefined;
    /**
     * The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     */
    outputBin?: string | undefined;
    /**
     * The default number of document pages to print on each sheet.
     */
    pagesPerSheet?: number | undefined;
    /**
     * The default quality to use when printing the document. Valid values are described in the following table.
     */
    quality?: PrintQuality | undefined;
    /**
     * Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.
     */
    scaling?: PrintScaling | undefined;
}
