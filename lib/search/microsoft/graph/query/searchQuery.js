"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchQuery = void 0;
var SearchQuery = /** @class */ (function () {
    /**
     * Instantiates a new searchQuery and sets the default values.
     */
    function SearchQuery() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(SearchQuery.prototype, "additionalData", {
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
    Object.defineProperty(SearchQuery.prototype, "queryString", {
        /**
         * Gets the queryString property value. The search query containing the search terms. Required.
         * @returns a string
         */
        get: function () {
            return this._queryString;
        },
        /**
         * Sets the queryString property value. The search query containing the search terms. Required.
         * @param value Value to set for the queryString property.
         */
        set: function (value) {
            this._queryString = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SearchQuery.prototype.getFieldDeserializers = function () {
        return new Map([
            ["queryString", function (o, n) { o.queryString = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SearchQuery.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("queryString", this.queryString);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return SearchQuery;
}());
exports.SearchQuery = SearchQuery;
