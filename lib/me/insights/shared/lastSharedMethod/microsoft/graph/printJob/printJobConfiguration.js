"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintJobConfiguration = void 0;
var PrintJobConfiguration = /** @class */ (function () {
    /**
     * Instantiates a new printJobConfiguration and sets the default values.
     */
    function PrintJobConfiguration() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "collate", {
        /**
         * Gets the collate property value. Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
         * @returns a boolean
         */
        get: function () {
            return this._collate;
        },
        /**
         * Sets the collate property value. Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
         * @param value Value to set for the collate property.
         */
        set: function (value) {
            this._collate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "colorMode", {
        /**
         * Gets the colorMode property value. The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
         * @returns a printColorMode
         */
        get: function () {
            return this._colorMode;
        },
        /**
         * Sets the colorMode property value. The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
         * @param value Value to set for the colorMode property.
         */
        set: function (value) {
            this._colorMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "copies", {
        /**
         * Gets the copies property value. The number of copies that should be printed. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._copies;
        },
        /**
         * Sets the copies property value. The number of copies that should be printed. Read-only.
         * @param value Value to set for the copies property.
         */
        set: function (value) {
            this._copies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "dpi", {
        /**
         * Gets the dpi property value. The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
         * @returns a integer
         */
        get: function () {
            return this._dpi;
        },
        /**
         * Sets the dpi property value. The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
         * @param value Value to set for the dpi property.
         */
        set: function (value) {
            this._dpi = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "duplexMode", {
        /**
         * Gets the duplexMode property value. The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
         * @returns a printDuplexMode
         */
        get: function () {
            return this._duplexMode;
        },
        /**
         * Sets the duplexMode property value. The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
         * @param value Value to set for the duplexMode property.
         */
        set: function (value) {
            this._duplexMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "feedOrientation", {
        /**
         * Gets the feedOrientation property value. The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only.
         * @returns a printerFeedOrientation
         */
        get: function () {
            return this._feedOrientation;
        },
        /**
         * Sets the feedOrientation property value. The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only.
         * @param value Value to set for the feedOrientation property.
         */
        set: function (value) {
            this._feedOrientation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "finishings", {
        /**
         * Gets the finishings property value. Finishing processes to use when printing.
         * @returns a printFinishing
         */
        get: function () {
            return this._finishings;
        },
        /**
         * Sets the finishings property value. Finishing processes to use when printing.
         * @param value Value to set for the finishings property.
         */
        set: function (value) {
            this._finishings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "fitPdfToPage", {
        /**
         * Gets the fitPdfToPage property value.
         * @returns a boolean
         */
        get: function () {
            return this._fitPdfToPage;
        },
        /**
         * Sets the fitPdfToPage property value.
         * @param value Value to set for the fitPdfToPage property.
         */
        set: function (value) {
            this._fitPdfToPage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "inputBin", {
        /**
         * Gets the inputBin property value. The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
         * @returns a string
         */
        get: function () {
            return this._inputBin;
        },
        /**
         * Sets the inputBin property value. The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
         * @param value Value to set for the inputBin property.
         */
        set: function (value) {
            this._inputBin = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "margin", {
        /**
         * Gets the margin property value. The margin settings to use when printing.
         * @returns a printMargin
         */
        get: function () {
            return this._margin;
        },
        /**
         * Sets the margin property value. The margin settings to use when printing.
         * @param value Value to set for the margin property.
         */
        set: function (value) {
            this._margin = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "mediaSize", {
        /**
         * Gets the mediaSize property value. The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
         * @returns a string
         */
        get: function () {
            return this._mediaSize;
        },
        /**
         * Sets the mediaSize property value. The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
         * @param value Value to set for the mediaSize property.
         */
        set: function (value) {
            this._mediaSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "mediaType", {
        /**
         * Gets the mediaType property value. The default media (such as paper) type to print the document on.
         * @returns a string
         */
        get: function () {
            return this._mediaType;
        },
        /**
         * Sets the mediaType property value. The default media (such as paper) type to print the document on.
         * @param value Value to set for the mediaType property.
         */
        set: function (value) {
            this._mediaType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "multipageLayout", {
        /**
         * Gets the multipageLayout property value. The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
         * @returns a printMultipageLayout
         */
        get: function () {
            return this._multipageLayout;
        },
        /**
         * Sets the multipageLayout property value. The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
         * @param value Value to set for the multipageLayout property.
         */
        set: function (value) {
            this._multipageLayout = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "orientation", {
        /**
         * Gets the orientation property value. The orientation setting the printer should use when printing the job. Valid values are described in the following table.
         * @returns a printOrientation
         */
        get: function () {
            return this._orientation;
        },
        /**
         * Sets the orientation property value. The orientation setting the printer should use when printing the job. Valid values are described in the following table.
         * @param value Value to set for the orientation property.
         */
        set: function (value) {
            this._orientation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "outputBin", {
        /**
         * Gets the outputBin property value. The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
         * @returns a string
         */
        get: function () {
            return this._outputBin;
        },
        /**
         * Sets the outputBin property value. The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
         * @param value Value to set for the outputBin property.
         */
        set: function (value) {
            this._outputBin = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "pageRanges", {
        /**
         * Gets the pageRanges property value. The page ranges to print. Read-only.
         * @returns a integerRange
         */
        get: function () {
            return this._pageRanges;
        },
        /**
         * Sets the pageRanges property value. The page ranges to print. Read-only.
         * @param value Value to set for the pageRanges property.
         */
        set: function (value) {
            this._pageRanges = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "pagesPerSheet", {
        /**
         * Gets the pagesPerSheet property value. The number of document pages to print on each sheet.
         * @returns a integer
         */
        get: function () {
            return this._pagesPerSheet;
        },
        /**
         * Sets the pagesPerSheet property value. The number of document pages to print on each sheet.
         * @param value Value to set for the pagesPerSheet property.
         */
        set: function (value) {
            this._pagesPerSheet = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "quality", {
        /**
         * Gets the quality property value. The print quality to use when printing the job. Valid values are described in the table below. Read-only.
         * @returns a printQuality
         */
        get: function () {
            return this._quality;
        },
        /**
         * Sets the quality property value. The print quality to use when printing the job. Valid values are described in the table below. Read-only.
         * @param value Value to set for the quality property.
         */
        set: function (value) {
            this._quality = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobConfiguration.prototype, "scaling", {
        /**
         * Gets the scaling property value. Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the following table.
         * @returns a printScaling
         */
        get: function () {
            return this._scaling;
        },
        /**
         * Sets the scaling property value. Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the following table.
         * @param value Value to set for the scaling property.
         */
        set: function (value) {
            this._scaling = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrintJobConfiguration.prototype.getFieldDeserializers = function () {
        return new Map([
            ["collate", function (o, n) { o.collate = n.getBooleanValue(); }],
            ["colorMode", function (o, n) { o.colorMode = n.getObjectValue(PrintColorMode); }],
            ["copies", function (o, n) { o.copies = n.getNumberValue(); }],
            ["dpi", function (o, n) { o.dpi = n.getNumberValue(); }],
            ["duplexMode", function (o, n) { o.duplexMode = n.getObjectValue(PrintDuplexMode); }],
            ["feedOrientation", function (o, n) { o.feedOrientation = n.getObjectValue(PrinterFeedOrientation); }],
            ["finishings", function (o, n) { o.finishings = n.getCollectionOfPrimitiveValues(); }],
            ["fitPdfToPage", function (o, n) { o.fitPdfToPage = n.getBooleanValue(); }],
            ["inputBin", function (o, n) { o.inputBin = n.getStringValue(); }],
            ["margin", function (o, n) { o.margin = n.getObjectValue(PrintMargin); }],
            ["mediaSize", function (o, n) { o.mediaSize = n.getStringValue(); }],
            ["mediaType", function (o, n) { o.mediaType = n.getStringValue(); }],
            ["multipageLayout", function (o, n) { o.multipageLayout = n.getObjectValue(PrintMultipageLayout); }],
            ["orientation", function (o, n) { o.orientation = n.getObjectValue(PrintOrientation); }],
            ["outputBin", function (o, n) { o.outputBin = n.getStringValue(); }],
            ["pageRanges", function (o, n) { o.pageRanges = n.getCollectionOfPrimitiveValues(); }],
            ["pagesPerSheet", function (o, n) { o.pagesPerSheet = n.getNumberValue(); }],
            ["quality", function (o, n) { o.quality = n.getObjectValue(PrintQuality); }],
            ["scaling", function (o, n) { o.scaling = n.getObjectValue(PrintScaling); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintJobConfiguration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("collate", this.collate);
        writer.writeObjectValue("colorMode", this.colorMode);
        writer.writeNumberValue("copies", this.copies);
        writer.writeNumberValue("dpi", this.dpi);
        writer.writeObjectValue("duplexMode", this.duplexMode);
        writer.writeObjectValue("feedOrientation", this.feedOrientation);
        writer.writeCollectionOfPrimitiveValues("finishings", this.finishings);
        writer.writeBooleanValue("fitPdfToPage", this.fitPdfToPage);
        writer.writeStringValue("inputBin", this.inputBin);
        writer.writeObjectValue("margin", this.margin);
        writer.writeStringValue("mediaSize", this.mediaSize);
        writer.writeStringValue("mediaType", this.mediaType);
        writer.writeObjectValue("multipageLayout", this.multipageLayout);
        writer.writeObjectValue("orientation", this.orientation);
        writer.writeStringValue("outputBin", this.outputBin);
        writer.writeCollectionOfPrimitiveValues("pageRanges", this.pageRanges);
        writer.writeNumberValue("pagesPerSheet", this.pagesPerSheet);
        writer.writeObjectValue("quality", this.quality);
        writer.writeObjectValue("scaling", this.scaling);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return PrintJobConfiguration;
}());
exports.PrintJobConfiguration = PrintJobConfiguration;
