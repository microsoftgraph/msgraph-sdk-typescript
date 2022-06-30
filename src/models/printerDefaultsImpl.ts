import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterDefaults} from './printerDefaults';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterDefaultsImpl implements PrinterDefaults {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The default color mode to use when printing the document. Valid values are described in the following table. */
    private _colorMode?: PrintColorMode | undefined;
    /** The default content (MIME) type to use when processing documents. */
    private _contentType?: string | undefined;
    /** The default number of copies printed per job. */
    private _copiesPerJob?: number | undefined;
    /** The default resolution in DPI to use when printing the job. */
    private _dpi?: number | undefined;
    /** The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table. */
    private _duplexMode?: PrintDuplexMode | undefined;
    /** The default set of finishings to apply to print jobs. Valid values are described in the following table. */
    private _finishings?: string[] | undefined;
    /** The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions. */
    private _fitPdfToPage?: boolean | undefined;
    /** The default input bin that serves as the paper source. */
    private _inputBin?: string | undefined;
    /** The default media (such as paper) color to print the document on. */
    private _mediaColor?: string | undefined;
    /** The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    private _mediaSize?: string | undefined;
    /** The default media (such as paper) type to print the document on. */
    private _mediaType?: string | undefined;
    /** The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    private _multipageLayout?: PrintMultipageLayout | undefined;
    /** The default orientation to use when printing the document. Valid values are described in the following table. */
    private _orientation?: PrintOrientation | undefined;
    /** The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    private _outputBin?: string | undefined;
    /** The default number of document pages to print on each sheet. */
    private _pagesPerSheet?: number | undefined;
    /** The default quality to use when printing the document. Valid values are described in the following table. */
    private _quality?: PrintQuality | undefined;
    /** Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table. */
    private _scaling?: PrintScaling | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the colorMode property value. The default color mode to use when printing the document. Valid values are described in the following table.
     * @returns a printColorMode
     */
    public get colorMode() {
        return this._colorMode;
    };
    /**
     * Sets the colorMode property value. The default color mode to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the colorMode property.
     */
    public set colorMode(value: PrintColorMode | undefined) {
        if(value) {
            this._colorMode = value;
        }
    };
    /**
     * Instantiates a new printerDefaults and sets the default values.
     * @param printerDefaultsParameterValue 
     */
    public constructor(printerDefaultsParameterValue?: PrinterDefaults | undefined) {
        this._additionalData = printerDefaultsParameterValue?.additionalData ? printerDefaultsParameterValue?.additionalData! : {};
        this._colorMode = printerDefaultsParameterValue?.colorMode;
        this._contentType = printerDefaultsParameterValue?.contentType;
        this._copiesPerJob = printerDefaultsParameterValue?.copiesPerJob;
        this._dpi = printerDefaultsParameterValue?.dpi;
        this._duplexMode = printerDefaultsParameterValue?.duplexMode;
        this._finishings = printerDefaultsParameterValue?.finishings;
        this._fitPdfToPage = printerDefaultsParameterValue?.fitPdfToPage;
        this._inputBin = printerDefaultsParameterValue?.inputBin;
        this._mediaColor = printerDefaultsParameterValue?.mediaColor;
        this._mediaSize = printerDefaultsParameterValue?.mediaSize;
        this._mediaType = printerDefaultsParameterValue?.mediaType;
        this._multipageLayout = printerDefaultsParameterValue?.multipageLayout;
        this._orientation = printerDefaultsParameterValue?.orientation;
        this._outputBin = printerDefaultsParameterValue?.outputBin;
        this._pagesPerSheet = printerDefaultsParameterValue?.pagesPerSheet;
        this._quality = printerDefaultsParameterValue?.quality;
        this._scaling = printerDefaultsParameterValue?.scaling;
    };
    /**
     * Gets the contentType property value. The default content (MIME) type to use when processing documents.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The default content (MIME) type to use when processing documents.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        if(value) {
            this._contentType = value;
        }
    };
    /**
     * Gets the copiesPerJob property value. The default number of copies printed per job.
     * @returns a integer
     */
    public get copiesPerJob() {
        return this._copiesPerJob;
    };
    /**
     * Sets the copiesPerJob property value. The default number of copies printed per job.
     * @param value Value to set for the copiesPerJob property.
     */
    public set copiesPerJob(value: number | undefined) {
        if(value) {
            this._copiesPerJob = value;
        }
    };
    /**
     * Gets the dpi property value. The default resolution in DPI to use when printing the job.
     * @returns a integer
     */
    public get dpi() {
        return this._dpi;
    };
    /**
     * Sets the dpi property value. The default resolution in DPI to use when printing the job.
     * @param value Value to set for the dpi property.
     */
    public set dpi(value: number | undefined) {
        if(value) {
            this._dpi = value;
        }
    };
    /**
     * Gets the duplexMode property value. The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.
     * @returns a printDuplexMode
     */
    public get duplexMode() {
        return this._duplexMode;
    };
    /**
     * Sets the duplexMode property value. The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.
     * @param value Value to set for the duplexMode property.
     */
    public set duplexMode(value: PrintDuplexMode | undefined) {
        if(value) {
            this._duplexMode = value;
        }
    };
    /**
     * Gets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @returns a string
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Sets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: string[] | undefined) {
        if(value) {
            this._finishings = value;
        }
    };
    /**
     * Gets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @returns a boolean
     */
    public get fitPdfToPage() {
        return this._fitPdfToPage;
    };
    /**
     * Sets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @param value Value to set for the fitPdfToPage property.
     */
    public set fitPdfToPage(value: boolean | undefined) {
        if(value) {
            this._fitPdfToPage = value;
        }
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
     * Gets the inputBin property value. The default input bin that serves as the paper source.
     * @returns a string
     */
    public get inputBin() {
        return this._inputBin;
    };
    /**
     * Sets the inputBin property value. The default input bin that serves as the paper source.
     * @param value Value to set for the inputBin property.
     */
    public set inputBin(value: string | undefined) {
        if(value) {
            this._inputBin = value;
        }
    };
    /**
     * Gets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @returns a string
     */
    public get mediaColor() {
        return this._mediaColor;
    };
    /**
     * Sets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @param value Value to set for the mediaColor property.
     */
    public set mediaColor(value: string | undefined) {
        if(value) {
            this._mediaColor = value;
        }
    };
    /**
     * Gets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @returns a string
     */
    public get mediaSize() {
        return this._mediaSize;
    };
    /**
     * Sets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @param value Value to set for the mediaSize property.
     */
    public set mediaSize(value: string | undefined) {
        if(value) {
            this._mediaSize = value;
        }
    };
    /**
     * Gets the mediaType property value. The default media (such as paper) type to print the document on.
     * @returns a string
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The default media (such as paper) type to print the document on.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: string | undefined) {
        if(value) {
            this._mediaType = value;
        }
    };
    /**
     * Gets the multipageLayout property value. The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
     * @returns a printMultipageLayout
     */
    public get multipageLayout() {
        return this._multipageLayout;
    };
    /**
     * Sets the multipageLayout property value. The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
     * @param value Value to set for the multipageLayout property.
     */
    public set multipageLayout(value: PrintMultipageLayout | undefined) {
        if(value) {
            this._multipageLayout = value;
        }
    };
    /**
     * Gets the orientation property value. The default orientation to use when printing the document. Valid values are described in the following table.
     * @returns a printOrientation
     */
    public get orientation() {
        return this._orientation;
    };
    /**
     * Sets the orientation property value. The default orientation to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the orientation property.
     */
    public set orientation(value: PrintOrientation | undefined) {
        if(value) {
            this._orientation = value;
        }
    };
    /**
     * Gets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @returns a string
     */
    public get outputBin() {
        return this._outputBin;
    };
    /**
     * Sets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @param value Value to set for the outputBin property.
     */
    public set outputBin(value: string | undefined) {
        if(value) {
            this._outputBin = value;
        }
    };
    /**
     * Gets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Sets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number | undefined) {
        if(value) {
            this._pagesPerSheet = value;
        }
    };
    /**
     * Gets the quality property value. The default quality to use when printing the document. Valid values are described in the following table.
     * @returns a printQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * Sets the quality property value. The default quality to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the quality property.
     */
    public set quality(value: PrintQuality | undefined) {
        if(value) {
            this._quality = value;
        }
    };
    /**
     * Gets the scaling property value. Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.
     * @returns a printScaling
     */
    public get scaling() {
        return this._scaling;
    };
    /**
     * Sets the scaling property value. Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.
     * @param value Value to set for the scaling property.
     */
    public set scaling(value: PrintScaling | undefined) {
        if(value) {
            this._scaling = value;
        }
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
