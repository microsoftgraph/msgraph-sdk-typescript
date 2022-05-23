import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterDefaults} from './printerDefaults';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterDefaultsImpl implements AdditionalDataHolder, Parsable, PrinterDefaults {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The default color mode to use when printing the document. Valid values are described in the following table. */
    public colorMode?: PrintColorMode | undefined;
    /** The default content (MIME) type to use when processing documents. */
    public contentType?: string | undefined;
    /** The default number of copies printed per job. */
    public copiesPerJob?: number | undefined;
    /** The default resolution in DPI to use when printing the job. */
    public dpi?: number | undefined;
    /** The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table. */
    public duplexMode?: PrintDuplexMode | undefined;
    /** The default set of finishings to apply to print jobs. Valid values are described in the following table. */
    public finishings?: string[] | undefined;
    /** The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions. */
    public fitPdfToPage?: boolean | undefined;
    /** The default input bin that serves as the paper source. */
    public inputBin?: string | undefined;
    /** The default media (such as paper) color to print the document on. */
    public mediaColor?: string | undefined;
    /** The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    public mediaSize?: string | undefined;
    /** The default media (such as paper) type to print the document on. */
    public mediaType?: string | undefined;
    /** The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    public multipageLayout?: PrintMultipageLayout | undefined;
    /** The default orientation to use when printing the document. Valid values are described in the following table. */
    public orientation?: PrintOrientation | undefined;
    /** The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    public outputBin?: string | undefined;
    /** The default number of document pages to print on each sheet. */
    public pagesPerSheet?: number | undefined;
    /** The default quality to use when printing the document. Valid values are described in the following table. */
    public quality?: PrintQuality | undefined;
    /** Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table. */
    public scaling?: PrintScaling | undefined;
    /**
     * Instantiates a new printerDefaults and sets the default values.
     * @param printerDefaultsParameterValue 
     */
    public constructor(printerDefaultsParameterValue?: PrinterDefaults | undefined) {
        this.additionalData = printerDefaultsParameterValue?.additionalData ? printerDefaultsParameterValue?.additionalData! : {}
        this.colorMode = printerDefaultsParameterValue?.colorMode ;
        this.contentType = printerDefaultsParameterValue?.contentType ;
        this.copiesPerJob = printerDefaultsParameterValue?.copiesPerJob ;
        this.dpi = printerDefaultsParameterValue?.dpi ;
        this.duplexMode = printerDefaultsParameterValue?.duplexMode ;
        this.finishings = printerDefaultsParameterValue?.finishings ;
        this.fitPdfToPage = printerDefaultsParameterValue?.fitPdfToPage ;
        this.inputBin = printerDefaultsParameterValue?.inputBin ;
        this.mediaColor = printerDefaultsParameterValue?.mediaColor ;
        this.mediaSize = printerDefaultsParameterValue?.mediaSize ;
        this.mediaType = printerDefaultsParameterValue?.mediaType ;
        this.multipageLayout = printerDefaultsParameterValue?.multipageLayout ;
        this.orientation = printerDefaultsParameterValue?.orientation ;
        this.outputBin = printerDefaultsParameterValue?.outputBin ;
        this.pagesPerSheet = printerDefaultsParameterValue?.pagesPerSheet ;
        this.quality = printerDefaultsParameterValue?.quality ;
        this.scaling = printerDefaultsParameterValue?.scaling ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "colorMode": n => { this.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "copiesPerJob": n => { this.copiesPerJob = n.getNumberValue(); },
            "dpi": n => { this.dpi = n.getNumberValue(); },
            "duplexMode": n => { this.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); },
            "finishings": n => { this.finishings = n.getCollectionOfPrimitiveValues<string>(); },
            "fitPdfToPage": n => { this.fitPdfToPage = n.getBooleanValue(); },
            "inputBin": n => { this.inputBin = n.getStringValue(); },
            "mediaColor": n => { this.mediaColor = n.getStringValue(); },
            "mediaSize": n => { this.mediaSize = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "multipageLayout": n => { this.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
            "orientation": n => { this.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
            "outputBin": n => { this.outputBin = n.getStringValue(); },
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
        if(this.colorMode){
        writer.writeEnumValue<PrintColorMode>("colorMode", this.colorMode);
        }
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        if(this.copiesPerJob){
        writer.writeNumberValue("copiesPerJob", this.copiesPerJob);
        }
        if(this.dpi){
        writer.writeNumberValue("dpi", this.dpi);
        }
        if(this.duplexMode){
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", this.duplexMode);
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
        if(this.mediaColor){
        writer.writeStringValue("mediaColor", this.mediaColor);
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
