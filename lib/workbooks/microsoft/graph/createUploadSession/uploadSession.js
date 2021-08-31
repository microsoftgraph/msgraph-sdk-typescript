"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSession = void 0;
var UploadSession = /** @class */ (function () {
    /**
     * Instantiates a new uploadSession and sets the default values.
     */
    function UploadSession() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(UploadSession.prototype, "additionalData", {
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
    Object.defineProperty(UploadSession.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UploadSession.prototype, "nextExpectedRanges", {
        /**
         * Gets the nextExpectedRanges property value. When uploading files to document libraries, this is a collection of byte ranges that the server is missing for the file. These ranges are zero-indexed and of the format, '{start}-{end}' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin.
         * @returns a string
         */
        get: function () {
            return this._nextExpectedRanges;
        },
        /**
         * Sets the nextExpectedRanges property value. When uploading files to document libraries, this is a collection of byte ranges that the server is missing for the file. These ranges are zero-indexed and of the format, '{start}-{end}' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin.
         * @param value Value to set for the nextExpectedRanges property.
         */
        set: function (value) {
            this._nextExpectedRanges = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UploadSession.prototype, "uploadUrl", {
        /**
         * Gets the uploadUrl property value. The URL endpoint that accepts PUT requests for byte ranges of the file.
         * @returns a string
         */
        get: function () {
            return this._uploadUrl;
        },
        /**
         * Sets the uploadUrl property value. The URL endpoint that accepts PUT requests for byte ranges of the file.
         * @param value Value to set for the uploadUrl property.
         */
        set: function (value) {
            this._uploadUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    UploadSession.prototype.getFieldDeserializers = function () {
        return new Map([
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["nextExpectedRanges", function (o, n) { o.nextExpectedRanges = n.getCollectionOfPrimitiveValues(); }],
            ["uploadUrl", function (o, n) { o.uploadUrl = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UploadSession.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues("nextExpectedRanges", this.nextExpectedRanges);
        writer.writeStringValue("uploadUrl", this.uploadUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return UploadSession;
}());
exports.UploadSession = UploadSession;
