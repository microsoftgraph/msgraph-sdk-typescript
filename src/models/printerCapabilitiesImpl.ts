import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {IntegerRangeImpl} from './index';
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
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCapabilitiesImpl implements AdditionalDataHolder, Parsable, PrinterCapabilities {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** A list of supported bottom margins(in microns) for the printer.  */
    bottomMargins?: number[] | undefined;
    /** True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.  */
    collation?: boolean | undefined;
    /** The color modes supported by the printer. Valid values are described in the following table.  */
    colorModes?: PrintColorMode[] | undefined;
    /** A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.  */
    contentTypes?: string[] | undefined;
    /** The range of copies per job supported by the printer.  */
    copiesPerJob?: IntegerRange | undefined;
    /** The list of print resolutions in DPI that are supported by the printer.  */
    dpis?: number[] | undefined;
    /** The list of duplex modes that are supported by the printer. Valid values are described in the following table.  */
    duplexModes?: PrintDuplexMode[] | undefined;
    /** The list of feed orientations that are supported by the printer.  */
    feedOrientations?: PrinterFeedOrientation[] | undefined;
    /** Finishing processes the printer supports for a printed document.  */
    finishings?: PrintFinishing[] | undefined;
    /** Supported input bins for the printer.  */
    inputBins?: string[] | undefined;
    /** True if color printing is supported by the printer; false otherwise. Read-only.  */
    isColorPrintingSupported?: boolean | undefined;
    /** True if the printer supports printing by page ranges; false otherwise.  */
    isPageRangeSupported?: boolean | undefined;
    /** A list of supported left margins(in microns) for the printer.  */
    leftMargins?: number[] | undefined;
    /** The media (i.e., paper) colors supported by the printer.  */
    mediaColors?: string[] | undefined;
    /** The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.  */
    mediaSizes?: string[] | undefined;
    /** The media types supported by the printer.  */
    mediaTypes?: string[] | undefined;
    /** The presentation directions supported by the printer. Supported values are described in the following table.  */
    multipageLayouts?: PrintMultipageLayout[] | undefined;
    /** The print orientations supported by the printer. Valid values are described in the following table.  */
    orientations?: PrintOrientation[] | undefined;
    /** The printer's supported output bins (trays).  */
    outputBins?: string[] | undefined;
    /** Supported number of Input Pages to impose upon a single Impression.  */
    pagesPerSheet?: number[] | undefined;
    /** The print qualities supported by the printer.  */
    qualities?: PrintQuality[] | undefined;
    /** A list of supported right margins(in microns) for the printer.  */
    rightMargins?: number[] | undefined;
    /** Supported print scalings.  */
    scalings?: PrintScaling[] | undefined;
    /** True if the printer supports scaling PDF pages to match the print media size; false otherwise.  */
    supportsFitPdfToPage?: boolean | undefined;
    /** A list of supported top margins(in microns) for the printer.  */
    topMargins?: number[] | undefined;
    /**
     * Instantiates a new printerCapabilities and sets the default values.
     * @param printerCapabilitiesParameterValue 
     */
    public constructor(printerCapabilitiesParameterValue?: PrinterCapabilities | undefined) {
        this.additionalData = {};
        this.additionalData = printerCapabilitiesParameterValue?.additionalData ? {} : printerCapabilitiesParameterValue?.additionalData!
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
            "colorModes": n => { this.colorModes = n.getEnumValues<PrintColorMode>(PrintColorMode); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "copiesPerJob": n => { this.copiesPerJob = n.getObjectValue<IntegerRangeImpl>(createIntegerRangeFromDiscriminatorValue); },
            "dpis": n => { this.dpis = n.getCollectionOfPrimitiveValues<number>(); },
            "duplexModes": n => { this.duplexModes = n.getEnumValues<PrintDuplexMode>(PrintDuplexMode); },
            "feedOrientations": n => { this.feedOrientations = n.getEnumValues<PrinterFeedOrientation>(PrinterFeedOrientation); },
            "finishings": n => { this.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); },
            "inputBins": n => { this.inputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "isColorPrintingSupported": n => { this.isColorPrintingSupported = n.getBooleanValue(); },
            "isPageRangeSupported": n => { this.isPageRangeSupported = n.getBooleanValue(); },
            "leftMargins": n => { this.leftMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "mediaColors": n => { this.mediaColors = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaSizes": n => { this.mediaSizes = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaTypes": n => { this.mediaTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "multipageLayouts": n => { this.multipageLayouts = n.getEnumValues<PrintMultipageLayout>(PrintMultipageLayout); },
            "orientations": n => { this.orientations = n.getEnumValues<PrintOrientation>(PrintOrientation); },
            "outputBins": n => { this.outputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getCollectionOfPrimitiveValues<number>(); },
            "qualities": n => { this.qualities = n.getEnumValues<PrintQuality>(PrintQuality); },
            "rightMargins": n => { this.rightMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "scalings": n => { this.scalings = n.getEnumValues<PrintScaling>(PrintScaling); },
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
        if(this.bottomMargins)
        writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", this.bottomMargins);
        }
        if(this.collation){
        if(this.collation)
        writer.writeBooleanValue("collation", this.collation);
        }
        if(this.colorModes){
        if(this.colorModes)
        this.colorModes && writer.writeEnumValue<PrintColorMode>("colorModes", ...this.colorModes);
        }
        if(this.contentTypes){
        if(this.contentTypes)
        writer.writeCollectionOfPrimitiveValues<string>("contentTypes", this.contentTypes);
        }
        if(this.copiesPerJob){
        if(this.copiesPerJob)
        writer.writeObjectValue<IntegerRangeImpl>("copiesPerJob", new IntegerRangeImpl(this.copiesPerJob));
        }
        if(this.dpis){
        if(this.dpis)
        writer.writeCollectionOfPrimitiveValues<number>("dpis", this.dpis);
        }
        if(this.duplexModes){
        if(this.duplexModes)
        this.duplexModes && writer.writeEnumValue<PrintDuplexMode>("duplexModes", ...this.duplexModes);
        }
        if(this.feedOrientations){
        if(this.feedOrientations)
        this.feedOrientations && writer.writeEnumValue<PrinterFeedOrientation>("feedOrientations", ...this.feedOrientations);
        }
        if(this.finishings){
        if(this.finishings)
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        }
        if(this.inputBins){
        if(this.inputBins)
        writer.writeCollectionOfPrimitiveValues<string>("inputBins", this.inputBins);
        }
        if(this.isColorPrintingSupported){
        if(this.isColorPrintingSupported)
        writer.writeBooleanValue("isColorPrintingSupported", this.isColorPrintingSupported);
        }
        if(this.isPageRangeSupported){
        if(this.isPageRangeSupported)
        writer.writeBooleanValue("isPageRangeSupported", this.isPageRangeSupported);
        }
        if(this.leftMargins){
        if(this.leftMargins)
        writer.writeCollectionOfPrimitiveValues<number>("leftMargins", this.leftMargins);
        }
        if(this.mediaColors){
        if(this.mediaColors)
        writer.writeCollectionOfPrimitiveValues<string>("mediaColors", this.mediaColors);
        }
        if(this.mediaSizes){
        if(this.mediaSizes)
        writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", this.mediaSizes);
        }
        if(this.mediaTypes){
        if(this.mediaTypes)
        writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", this.mediaTypes);
        }
        if(this.multipageLayouts){
        if(this.multipageLayouts)
        this.multipageLayouts && writer.writeEnumValue<PrintMultipageLayout>("multipageLayouts", ...this.multipageLayouts);
        }
        if(this.orientations){
        if(this.orientations)
        this.orientations && writer.writeEnumValue<PrintOrientation>("orientations", ...this.orientations);
        }
        if(this.outputBins){
        if(this.outputBins)
        writer.writeCollectionOfPrimitiveValues<string>("outputBins", this.outputBins);
        }
        if(this.pagesPerSheet){
        if(this.pagesPerSheet)
        writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", this.pagesPerSheet);
        }
        if(this.qualities){
        if(this.qualities)
        this.qualities && writer.writeEnumValue<PrintQuality>("qualities", ...this.qualities);
        }
        if(this.rightMargins){
        if(this.rightMargins)
        writer.writeCollectionOfPrimitiveValues<number>("rightMargins", this.rightMargins);
        }
        if(this.scalings){
        if(this.scalings)
        this.scalings && writer.writeEnumValue<PrintScaling>("scalings", ...this.scalings);
        }
        if(this.supportsFitPdfToPage){
        if(this.supportsFitPdfToPage)
        writer.writeBooleanValue("supportsFitPdfToPage", this.supportsFitPdfToPage);
        }
        if(this.topMargins){
        if(this.topMargins)
        writer.writeCollectionOfPrimitiveValues<number>("topMargins", this.topMargins);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
