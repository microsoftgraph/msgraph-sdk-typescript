import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {IntegerRangeImpl} from './index';
import {IntegerRange} from './integerRange';
import {PrinterCapabilities} from './printerCapabilities';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCapabilitiesImpl implements AdditionalDataHolder, Parsable, PrinterCapabilities {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A list of supported bottom margins(in microns) for the printer. */
    public bottomMargins?: number[] | undefined;
    /** True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise. */
    public collation?: boolean | undefined;
    /** The color modes supported by the printer. Valid values are described in the following table. */
    public colorModes?: string[] | undefined;
    /** A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types. */
    public contentTypes?: string[] | undefined;
    /** The range of copies per job supported by the printer. */
    public copiesPerJob?: IntegerRange | undefined;
    /** The list of print resolutions in DPI that are supported by the printer. */
    public dpis?: number[] | undefined;
    /** The list of duplex modes that are supported by the printer. Valid values are described in the following table. */
    public duplexModes?: string[] | undefined;
    /** The list of feed orientations that are supported by the printer. */
    public feedOrientations?: string[] | undefined;
    /** Finishing processes the printer supports for a printed document. */
    public finishings?: string[] | undefined;
    /** Supported input bins for the printer. */
    public inputBins?: string[] | undefined;
    /** True if color printing is supported by the printer; false otherwise. Read-only. */
    public isColorPrintingSupported?: boolean | undefined;
    /** True if the printer supports printing by page ranges; false otherwise. */
    public isPageRangeSupported?: boolean | undefined;
    /** A list of supported left margins(in microns) for the printer. */
    public leftMargins?: number[] | undefined;
    /** The media (i.e., paper) colors supported by the printer. */
    public mediaColors?: string[] | undefined;
    /** The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table. */
    public mediaSizes?: string[] | undefined;
    /** The media types supported by the printer. */
    public mediaTypes?: string[] | undefined;
    /** The presentation directions supported by the printer. Supported values are described in the following table. */
    public multipageLayouts?: string[] | undefined;
    /** The print orientations supported by the printer. Valid values are described in the following table. */
    public orientations?: string[] | undefined;
    /** The printer's supported output bins (trays). */
    public outputBins?: string[] | undefined;
    /** Supported number of Input Pages to impose upon a single Impression. */
    public pagesPerSheet?: number[] | undefined;
    /** The print qualities supported by the printer. */
    public qualities?: string[] | undefined;
    /** A list of supported right margins(in microns) for the printer. */
    public rightMargins?: number[] | undefined;
    /** Supported print scalings. */
    public scalings?: string[] | undefined;
    /** True if the printer supports scaling PDF pages to match the print media size; false otherwise. */
    public supportsFitPdfToPage?: boolean | undefined;
    /** A list of supported top margins(in microns) for the printer. */
    public topMargins?: number[] | undefined;
    /**
     * Instantiates a new printerCapabilities and sets the default values.
     * @param printerCapabilitiesParameterValue 
     */
    public constructor(printerCapabilitiesParameterValue?: PrinterCapabilities | undefined) {
        this.additionalData = printerCapabilitiesParameterValue?.additionalData ? printerCapabilitiesParameterValue?.additionalData! : {}
        this.bottomMargins = printerCapabilitiesParameterValue?.bottomMargins ;
        this.collation = printerCapabilitiesParameterValue?.collation ;
        this.colorModes = printerCapabilitiesParameterValue?.colorModes ;
        this.contentTypes = printerCapabilitiesParameterValue?.contentTypes ;
        this.copiesPerJob = printerCapabilitiesParameterValue?.copiesPerJob ;
        this.dpis = printerCapabilitiesParameterValue?.dpis ;
        this.duplexModes = printerCapabilitiesParameterValue?.duplexModes ;
        this.feedOrientations = printerCapabilitiesParameterValue?.feedOrientations ;
        this.finishings = printerCapabilitiesParameterValue?.finishings ;
        this.inputBins = printerCapabilitiesParameterValue?.inputBins ;
        this.isColorPrintingSupported = printerCapabilitiesParameterValue?.isColorPrintingSupported ;
        this.isPageRangeSupported = printerCapabilitiesParameterValue?.isPageRangeSupported ;
        this.leftMargins = printerCapabilitiesParameterValue?.leftMargins ;
        this.mediaColors = printerCapabilitiesParameterValue?.mediaColors ;
        this.mediaSizes = printerCapabilitiesParameterValue?.mediaSizes ;
        this.mediaTypes = printerCapabilitiesParameterValue?.mediaTypes ;
        this.multipageLayouts = printerCapabilitiesParameterValue?.multipageLayouts ;
        this.orientations = printerCapabilitiesParameterValue?.orientations ;
        this.outputBins = printerCapabilitiesParameterValue?.outputBins ;
        this.pagesPerSheet = printerCapabilitiesParameterValue?.pagesPerSheet ;
        this.qualities = printerCapabilitiesParameterValue?.qualities ;
        this.rightMargins = printerCapabilitiesParameterValue?.rightMargins ;
        this.scalings = printerCapabilitiesParameterValue?.scalings ;
        this.supportsFitPdfToPage = printerCapabilitiesParameterValue?.supportsFitPdfToPage ;
        this.topMargins = printerCapabilitiesParameterValue?.topMargins ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bottomMargins": n => { this.bottomMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "collation": n => { this.collation = n.getBooleanValue(); },
            "colorModes": n => { this.colorModes = n.getCollectionOfPrimitiveValues<string>(); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "copiesPerJob": n => { this.copiesPerJob = n.getObjectValue<IntegerRangeImpl>(createIntegerRangeFromDiscriminatorValue); },
            "dpis": n => { this.dpis = n.getCollectionOfPrimitiveValues<number>(); },
            "duplexModes": n => { this.duplexModes = n.getCollectionOfPrimitiveValues<string>(); },
            "feedOrientations": n => { this.feedOrientations = n.getCollectionOfPrimitiveValues<string>(); },
            "finishings": n => { this.finishings = n.getCollectionOfPrimitiveValues<string>(); },
            "inputBins": n => { this.inputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "isColorPrintingSupported": n => { this.isColorPrintingSupported = n.getBooleanValue(); },
            "isPageRangeSupported": n => { this.isPageRangeSupported = n.getBooleanValue(); },
            "leftMargins": n => { this.leftMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "mediaColors": n => { this.mediaColors = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaSizes": n => { this.mediaSizes = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaTypes": n => { this.mediaTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "multipageLayouts": n => { this.multipageLayouts = n.getCollectionOfPrimitiveValues<string>(); },
            "orientations": n => { this.orientations = n.getCollectionOfPrimitiveValues<string>(); },
            "outputBins": n => { this.outputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getCollectionOfPrimitiveValues<number>(); },
            "qualities": n => { this.qualities = n.getCollectionOfPrimitiveValues<string>(); },
            "rightMargins": n => { this.rightMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "scalings": n => { this.scalings = n.getCollectionOfPrimitiveValues<string>(); },
            "supportsFitPdfToPage": n => { this.supportsFitPdfToPage = n.getBooleanValue(); },
            "topMargins": n => { this.topMargins = n.getCollectionOfPrimitiveValues<number>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bottomMargins){
        writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", this.bottomMargins);
        }
        if(this.collation){
        writer.writeBooleanValue("collation", this.collation);
        }
        if(this.colorModes){
        writer.writeCollectionOfPrimitiveValues<string>("colorModes", this.colorModes);
        }
        if(this.contentTypes){
        writer.writeCollectionOfPrimitiveValues<string>("contentTypes", this.contentTypes);
        }
        if(this.copiesPerJob){
        writer.writeObjectValue<IntegerRangeImpl>("copiesPerJob", new IntegerRangeImpl(this.copiesPerJob));
        }
        if(this.dpis){
        writer.writeCollectionOfPrimitiveValues<number>("dpis", this.dpis);
        }
        if(this.duplexModes){
        writer.writeCollectionOfPrimitiveValues<string>("duplexModes", this.duplexModes);
        }
        if(this.feedOrientations){
        writer.writeCollectionOfPrimitiveValues<string>("feedOrientations", this.feedOrientations);
        }
        if(this.finishings){
        writer.writeCollectionOfPrimitiveValues<string>("finishings", this.finishings);
        }
        if(this.inputBins){
        writer.writeCollectionOfPrimitiveValues<string>("inputBins", this.inputBins);
        }
        if(this.isColorPrintingSupported){
        writer.writeBooleanValue("isColorPrintingSupported", this.isColorPrintingSupported);
        }
        if(this.isPageRangeSupported){
        writer.writeBooleanValue("isPageRangeSupported", this.isPageRangeSupported);
        }
        if(this.leftMargins){
        writer.writeCollectionOfPrimitiveValues<number>("leftMargins", this.leftMargins);
        }
        if(this.mediaColors){
        writer.writeCollectionOfPrimitiveValues<string>("mediaColors", this.mediaColors);
        }
        if(this.mediaSizes){
        writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", this.mediaSizes);
        }
        if(this.mediaTypes){
        writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", this.mediaTypes);
        }
        if(this.multipageLayouts){
        writer.writeCollectionOfPrimitiveValues<string>("multipageLayouts", this.multipageLayouts);
        }
        if(this.orientations){
        writer.writeCollectionOfPrimitiveValues<string>("orientations", this.orientations);
        }
        if(this.outputBins){
        writer.writeCollectionOfPrimitiveValues<string>("outputBins", this.outputBins);
        }
        if(this.pagesPerSheet){
        writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", this.pagesPerSheet);
        }
        if(this.qualities){
        writer.writeCollectionOfPrimitiveValues<string>("qualities", this.qualities);
        }
        if(this.rightMargins){
        writer.writeCollectionOfPrimitiveValues<number>("rightMargins", this.rightMargins);
        }
        if(this.scalings){
        writer.writeCollectionOfPrimitiveValues<string>("scalings", this.scalings);
        }
        if(this.supportsFitPdfToPage){
        writer.writeBooleanValue("supportsFitPdfToPage", this.supportsFitPdfToPage);
        }
        if(this.topMargins){
        writer.writeCollectionOfPrimitiveValues<number>("topMargins", this.topMargins);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
