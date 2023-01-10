import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {createPrintMarginFromDiscriminatorValue} from './createPrintMarginFromDiscriminatorValue';
import {IntegerRange, PrintMargin} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJobConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Whether the printer should collate pages wehen printing multiple copies of a multi-page document. */
    private _collate?: boolean | undefined;
    /** The color mode the printer should use to print the job. Valid values are described in the table below. Read-only. */
    private _colorMode?: PrintColorMode | undefined;
    /** The number of copies that should be printed. Read-only. */
    private _copies?: number | undefined;
    /** The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only. */
    private _dpi?: number | undefined;
    /** The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only. */
    private _duplexMode?: PrintDuplexMode | undefined;
    /** The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only. */
    private _feedOrientation?: PrinterFeedOrientation | undefined;
    /** Finishing processes to use when printing. */
    private _finishings?: PrintFinishing[] | undefined;
    /** The fitPdfToPage property */
    private _fitPdfToPage?: boolean | undefined;
    /** The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins. */
    private _inputBin?: string | undefined;
    /** The margin settings to use when printing. */
    private _margin?: PrintMargin | undefined;
    /** The media size to use when printing. Supports standard size names for ISO and ANSI media sizes. */
    private _mediaSize?: string | undefined;
    /** The mediaType property */
    private _mediaType?: string | undefined;
    /** The multipageLayout property */
    private _multipageLayout?: PrintMultipageLayout | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The orientation property */
    private _orientation?: PrintOrientation | undefined;
    /** The outputBin property */
    private _outputBin?: string | undefined;
    /** The pageRanges property */
    private _pageRanges?: IntegerRange[] | undefined;
    /** The pagesPerSheet property */
    private _pagesPerSheet?: number | undefined;
    /** The quality property */
    private _quality?: PrintQuality | undefined;
    /** The scaling property */
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
        this._additionalData = value;
    };
    /**
     * Gets the collate property value. Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
     * @returns a boolean
     */
    public get collate() {
        return this._collate;
    };
    /**
     * Sets the collate property value. Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
     * @param value Value to set for the collate property.
     */
    public set collate(value: boolean | undefined) {
        this._collate = value;
    };
    /**
     * Gets the colorMode property value. The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
     * @returns a printColorMode
     */
    public get colorMode() {
        return this._colorMode;
    };
    /**
     * Sets the colorMode property value. The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
     * @param value Value to set for the colorMode property.
     */
    public set colorMode(value: PrintColorMode | undefined) {
        this._colorMode = value;
    };
    /**
     * Instantiates a new printJobConfiguration and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the copies property value. The number of copies that should be printed. Read-only.
     * @returns a integer
     */
    public get copies() {
        return this._copies;
    };
    /**
     * Sets the copies property value. The number of copies that should be printed. Read-only.
     * @param value Value to set for the copies property.
     */
    public set copies(value: number | undefined) {
        this._copies = value;
    };
    /**
     * Gets the dpi property value. The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
     * @returns a integer
     */
    public get dpi() {
        return this._dpi;
    };
    /**
     * Sets the dpi property value. The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
     * @param value Value to set for the dpi property.
     */
    public set dpi(value: number | undefined) {
        this._dpi = value;
    };
    /**
     * Gets the duplexMode property value. The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
     * @returns a printDuplexMode
     */
    public get duplexMode() {
        return this._duplexMode;
    };
    /**
     * Sets the duplexMode property value. The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
     * @param value Value to set for the duplexMode property.
     */
    public set duplexMode(value: PrintDuplexMode | undefined) {
        this._duplexMode = value;
    };
    /**
     * Gets the feedOrientation property value. The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only.
     * @returns a printerFeedOrientation
     */
    public get feedOrientation() {
        return this._feedOrientation;
    };
    /**
     * Sets the feedOrientation property value. The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only.
     * @param value Value to set for the feedOrientation property.
     */
    public set feedOrientation(value: PrinterFeedOrientation | undefined) {
        this._feedOrientation = value;
    };
    /**
     * Gets the finishings property value. Finishing processes to use when printing.
     * @returns a printFinishing
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Sets the finishings property value. Finishing processes to use when printing.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: PrintFinishing[] | undefined) {
        this._finishings = value;
    };
    /**
     * Gets the fitPdfToPage property value. The fitPdfToPage property
     * @returns a boolean
     */
    public get fitPdfToPage() {
        return this._fitPdfToPage;
    };
    /**
     * Sets the fitPdfToPage property value. The fitPdfToPage property
     * @param value Value to set for the fitPdfToPage property.
     */
    public set fitPdfToPage(value: boolean | undefined) {
        this._fitPdfToPage = value;
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
            "finishings": n => { this.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); },
            "fitPdfToPage": n => { this.fitPdfToPage = n.getBooleanValue(); },
            "inputBin": n => { this.inputBin = n.getStringValue(); },
            "margin": n => { this.margin = n.getObjectValue<PrintMargin>(createPrintMarginFromDiscriminatorValue); },
            "mediaSize": n => { this.mediaSize = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "multipageLayout": n => { this.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "orientation": n => { this.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
            "outputBin": n => { this.outputBin = n.getStringValue(); },
            "pageRanges": n => { this.pageRanges = n.getCollectionOfObjectValues<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getNumberValue(); },
            "quality": n => { this.quality = n.getEnumValue<PrintQuality>(PrintQuality); },
            "scaling": n => { this.scaling = n.getEnumValue<PrintScaling>(PrintScaling); },
        };
    };
    /**
     * Gets the inputBin property value. The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
     * @returns a string
     */
    public get inputBin() {
        return this._inputBin;
    };
    /**
     * Sets the inputBin property value. The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
     * @param value Value to set for the inputBin property.
     */
    public set inputBin(value: string | undefined) {
        this._inputBin = value;
    };
    /**
     * Gets the margin property value. The margin settings to use when printing.
     * @returns a printMargin
     */
    public get margin() {
        return this._margin;
    };
    /**
     * Sets the margin property value. The margin settings to use when printing.
     * @param value Value to set for the margin property.
     */
    public set margin(value: PrintMargin | undefined) {
        this._margin = value;
    };
    /**
     * Gets the mediaSize property value. The media size to use when printing. Supports standard size names for ISO and ANSI media sizes.
     * @returns a string
     */
    public get mediaSize() {
        return this._mediaSize;
    };
    /**
     * Sets the mediaSize property value. The media size to use when printing. Supports standard size names for ISO and ANSI media sizes.
     * @param value Value to set for the mediaSize property.
     */
    public set mediaSize(value: string | undefined) {
        this._mediaSize = value;
    };
    /**
     * Gets the mediaType property value. The mediaType property
     * @returns a string
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The mediaType property
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: string | undefined) {
        this._mediaType = value;
    };
    /**
     * Gets the multipageLayout property value. The multipageLayout property
     * @returns a printMultipageLayout
     */
    public get multipageLayout() {
        return this._multipageLayout;
    };
    /**
     * Sets the multipageLayout property value. The multipageLayout property
     * @param value Value to set for the multipageLayout property.
     */
    public set multipageLayout(value: PrintMultipageLayout | undefined) {
        this._multipageLayout = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the orientation property value. The orientation property
     * @returns a printOrientation
     */
    public get orientation() {
        return this._orientation;
    };
    /**
     * Sets the orientation property value. The orientation property
     * @param value Value to set for the orientation property.
     */
    public set orientation(value: PrintOrientation | undefined) {
        this._orientation = value;
    };
    /**
     * Gets the outputBin property value. The outputBin property
     * @returns a string
     */
    public get outputBin() {
        return this._outputBin;
    };
    /**
     * Sets the outputBin property value. The outputBin property
     * @param value Value to set for the outputBin property.
     */
    public set outputBin(value: string | undefined) {
        this._outputBin = value;
    };
    /**
     * Gets the pageRanges property value. The pageRanges property
     * @returns a integerRange
     */
    public get pageRanges() {
        return this._pageRanges;
    };
    /**
     * Sets the pageRanges property value. The pageRanges property
     * @param value Value to set for the pageRanges property.
     */
    public set pageRanges(value: IntegerRange[] | undefined) {
        this._pageRanges = value;
    };
    /**
     * Gets the pagesPerSheet property value. The pagesPerSheet property
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Sets the pagesPerSheet property value. The pagesPerSheet property
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number | undefined) {
        this._pagesPerSheet = value;
    };
    /**
     * Gets the quality property value. The quality property
     * @returns a printQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * Sets the quality property value. The quality property
     * @param value Value to set for the quality property.
     */
    public set quality(value: PrintQuality | undefined) {
        this._quality = value;
    };
    /**
     * Gets the scaling property value. The scaling property
     * @returns a printScaling
     */
    public get scaling() {
        return this._scaling;
    };
    /**
     * Sets the scaling property value. The scaling property
     * @param value Value to set for the scaling property.
     */
    public set scaling(value: PrintScaling | undefined) {
        this._scaling = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("collate", this.collate);
        writer.writeEnumValue<PrintColorMode>("colorMode", this.colorMode);
        writer.writeNumberValue("copies", this.copies);
        writer.writeNumberValue("dpi", this.dpi);
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", this.duplexMode);
        writer.writeEnumValue<PrinterFeedOrientation>("feedOrientation", this.feedOrientation);
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        writer.writeBooleanValue("fitPdfToPage", this.fitPdfToPage);
        writer.writeStringValue("inputBin", this.inputBin);
        writer.writeObjectValue<PrintMargin>("margin", this.margin);
        writer.writeStringValue("mediaSize", this.mediaSize);
        writer.writeStringValue("mediaType", this.mediaType);
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", this.multipageLayout);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<PrintOrientation>("orientation", this.orientation);
        writer.writeStringValue("outputBin", this.outputBin);
        writer.writeCollectionOfObjectValues<IntegerRange>("pageRanges", this.pageRanges);
        writer.writeNumberValue("pagesPerSheet", this.pagesPerSheet);
        writer.writeEnumValue<PrintQuality>("quality", this.quality);
        writer.writeEnumValue<PrintScaling>("scaling", this.scaling);
        writer.writeAdditionalData(this.additionalData);
    };
}
