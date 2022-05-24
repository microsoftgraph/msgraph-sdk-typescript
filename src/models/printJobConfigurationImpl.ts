import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {createPrintMarginFromDiscriminatorValue} from './createPrintMarginFromDiscriminatorValue';
import {IntegerRangeImpl, PrintMarginImpl} from './index';
import {IntegerRange} from './integerRange';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintMargin} from './printMargin';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJobConfigurationImpl implements AdditionalDataHolder, Parsable, PrintJobConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether the printer should collate pages wehen printing multiple copies of a multi-page document. */
    public collate?: boolean | undefined;
    /** The color mode the printer should use to print the job. Valid values are described in the table below. Read-only. */
    public colorMode?: PrintColorMode | undefined;
    /** The number of copies that should be printed. Read-only. */
    public copies?: number | undefined;
    /** The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only. */
    public dpi?: number | undefined;
    /** The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only. */
    public duplexMode?: PrintDuplexMode | undefined;
    /** The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only. */
    public feedOrientation?: PrinterFeedOrientation | undefined;
    /** Finishing processes to use when printing. */
    public finishings?: string[] | undefined;
    /** The fitPdfToPage property */
    public fitPdfToPage?: boolean | undefined;
    /** The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins. */
    public inputBin?: string | undefined;
    /** The margin settings to use when printing. */
    public margin?: PrintMargin | undefined;
    /** The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    public mediaSize?: string | undefined;
    /** The default media (such as paper) type to print the document on. */
    public mediaType?: string | undefined;
    /** The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    public multipageLayout?: PrintMultipageLayout | undefined;
    /** The orientation setting the printer should use when printing the job. Valid values are described in the following table. */
    public orientation?: PrintOrientation | undefined;
    /** The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    public outputBin?: string | undefined;
    /** The page ranges to print. Read-only. */
    public pageRanges?: IntegerRange[] | undefined;
    /** The number of document pages to print on each sheet. */
    public pagesPerSheet?: number | undefined;
    /** The print quality to use when printing the job. Valid values are described in the table below. Read-only. */
    public quality?: PrintQuality | undefined;
    /** Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the following table. */
    public scaling?: PrintScaling | undefined;
    /**
     * Instantiates a new printJobConfiguration and sets the default values.
     * @param printJobConfigurationParameterValue 
     */
    public constructor(printJobConfigurationParameterValue?: PrintJobConfiguration | undefined) {
        this.additionalData = printJobConfigurationParameterValue?.additionalData ? printJobConfigurationParameterValue?.additionalData! : {}
        this.collate = printJobConfigurationParameterValue?.collate ;
        this.colorMode = printJobConfigurationParameterValue?.colorMode ;
        this.copies = printJobConfigurationParameterValue?.copies ;
        this.dpi = printJobConfigurationParameterValue?.dpi ;
        this.duplexMode = printJobConfigurationParameterValue?.duplexMode ;
        this.feedOrientation = printJobConfigurationParameterValue?.feedOrientation ;
        this.finishings = printJobConfigurationParameterValue?.finishings ;
        this.fitPdfToPage = printJobConfigurationParameterValue?.fitPdfToPage ;
        this.inputBin = printJobConfigurationParameterValue?.inputBin ;
        this.margin = printJobConfigurationParameterValue?.margin ;
        this.mediaSize = printJobConfigurationParameterValue?.mediaSize ;
        this.mediaType = printJobConfigurationParameterValue?.mediaType ;
        this.multipageLayout = printJobConfigurationParameterValue?.multipageLayout ;
        this.orientation = printJobConfigurationParameterValue?.orientation ;
        this.outputBin = printJobConfigurationParameterValue?.outputBin ;
        this.pageRanges = printJobConfigurationParameterValue?.pageRanges ;
        this.pagesPerSheet = printJobConfigurationParameterValue?.pagesPerSheet ;
        this.quality = printJobConfigurationParameterValue?.quality ;
        this.scaling = printJobConfigurationParameterValue?.scaling ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "collate": n => { this.collate = n.getBooleanValue(); },
            "colorMode": n => { this.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); },
            "copies": n => { this.copies = n.getNumberValue(); },
            "dpi": n => { this.dpi = n.getNumberValue(); },
            "duplexMode": n => { this.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); },
            "feedOrientation": n => { this.feedOrientation = n.getEnumValue<PrinterFeedOrientation>(PrinterFeedOrientation); },
            "finishings": n => { this.finishings = n.getCollectionOfPrimitiveValues<string>(); },
            "fitPdfToPage": n => { this.fitPdfToPage = n.getBooleanValue(); },
            "inputBin": n => { this.inputBin = n.getStringValue(); },
            "margin": n => { this.margin = n.getObjectValue<PrintMarginImpl>(createPrintMarginFromDiscriminatorValue); },
            "mediaSize": n => { this.mediaSize = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "multipageLayout": n => { this.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
            "orientation": n => { this.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
            "outputBin": n => { this.outputBin = n.getStringValue(); },
            "pageRanges": n => { this.pageRanges = n.getCollectionOfObjectValues<IntegerRangeImpl>(createIntegerRangeFromDiscriminatorValue); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getNumberValue(); },
            "quality": n => { this.quality = n.getEnumValue<PrintQuality>(PrintQuality); },
            "scaling": n => { this.scaling = n.getEnumValue<PrintScaling>(PrintScaling); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.collate){
        writer.writeBooleanValue("collate", this.collate);
        }
        if(this.colorMode){
        writer.writeEnumValue<PrintColorMode>("colorMode", this.colorMode);
        }
        if(this.copies){
        writer.writeNumberValue("copies", this.copies);
        }
        if(this.dpi){
        writer.writeNumberValue("dpi", this.dpi);
        }
        if(this.duplexMode){
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", this.duplexMode);
        }
        if(this.feedOrientation){
        writer.writeEnumValue<PrinterFeedOrientation>("feedOrientation", this.feedOrientation);
        }
        if(this.finishings){
        writer.writeCollectionOfPrimitiveValues<string>("finishings", this.finishings);
        }
        if(this.fitPdfToPage){
        writer.writeBooleanValue("fitPdfToPage", this.fitPdfToPage);
        }
        if(this.inputBin){
        writer.writeStringValue("inputBin", this.inputBin);
        }
        if(this.margin){
        writer.writeObjectValue<PrintMarginImpl>("margin", new PrintMarginImpl(this.margin));
        }
        if(this.mediaSize){
        writer.writeStringValue("mediaSize", this.mediaSize);
        }
        if(this.mediaType){
        writer.writeStringValue("mediaType", this.mediaType);
        }
        if(this.multipageLayout){
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", this.multipageLayout);
        }
        if(this.orientation){
        writer.writeEnumValue<PrintOrientation>("orientation", this.orientation);
        }
        if(this.outputBin){
        writer.writeStringValue("outputBin", this.outputBin);
        }
        if(this.pageRanges && this.pageRanges.length != 0){        const pageRangesArrValue: IntegerRangeImpl[] = []; this.pageRanges?.forEach(element => {pageRangesArrValue.push(new IntegerRangeImpl(element));});
        writer.writeCollectionOfObjectValues<IntegerRangeImpl>("pageRanges", pageRangesArrValue);
        }
        if(this.pagesPerSheet){
        writer.writeNumberValue("pagesPerSheet", this.pagesPerSheet);
        }
        if(this.quality){
        writer.writeEnumValue<PrintQuality>("quality", this.quality);
        }
        if(this.scaling){
        writer.writeEnumValue<PrintScaling>("scaling", this.scaling);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
