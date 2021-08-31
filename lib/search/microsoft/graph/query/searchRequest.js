"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRequest = void 0;
var searchQuery_1 = require("./searchQuery");
var SearchRequest = /** @class */ (function () {
    /**
     * Instantiates a new searchRequest and sets the default values.
     */
    function SearchRequest() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(SearchRequest.prototype, "additionalData", {
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
    Object.defineProperty(SearchRequest.prototype, "contentSources", {
        /**
         * Gets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
         * @returns a string
         */
        get: function () {
            return this._contentSources;
        },
        /**
         * Sets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
         * @param value Value to set for the contentSources property.
         */
        set: function (value) {
            this._contentSources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "enableTopResults", {
        /**
         * Gets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
         * @returns a boolean
         */
        get: function () {
            return this._enableTopResults;
        },
        /**
         * Sets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
         * @param value Value to set for the enableTopResults property.
         */
        set: function (value) {
            this._enableTopResults = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "entityTypes", {
        /**
         * Gets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
         * @returns a entityType
         */
        get: function () {
            return this._entityTypes;
        },
        /**
         * Sets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
         * @param value Value to set for the entityTypes property.
         */
        set: function (value) {
            this._entityTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "fields", {
        /**
         * Gets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
         * @returns a string
         */
        get: function () {
            return this._fields;
        },
        /**
         * Sets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
         * @param value Value to set for the fields property.
         */
        set: function (value) {
            this._fields = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "from", {
        /**
         * Gets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
         * @returns a integer
         */
        get: function () {
            return this._from;
        },
        /**
         * Sets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
         * @param value Value to set for the from property.
         */
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "query", {
        /**
         * Gets the query property value.
         * @returns a searchQuery
         */
        get: function () {
            return this._query;
        },
        /**
         * Sets the query property value.
         * @param value Value to set for the query property.
         */
        set: function (value) {
            this._query = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SearchRequest.prototype, "size", {
        /**
         * Gets the size property value. The size of the page to be retrieved. Optional.
         * @returns a integer
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. The size of the page to be retrieved. Optional.
         * @param value Value to set for the size property.
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SearchRequest.prototype.getFieldDeserializers = function () {
        return new Map([
            ["contentSources", function (o, n) { o.contentSources = n.getCollectionOfPrimitiveValues(); }],
            ["enableTopResults", function (o, n) { o.enableTopResults = n.getBooleanValue(); }],
            ["entityTypes", function (o, n) { o.entityTypes = n.getCollectionOfPrimitiveValues(); }],
            ["fields", function (o, n) { o.fields = n.getCollectionOfPrimitiveValues(); }],
            ["from", function (o, n) { o.from = n.getNumberValue(); }],
            ["query", function (o, n) { o.query = n.getObjectValue(searchQuery_1.SearchQuery); }],
            ["size", function (o, n) { o.size = n.getNumberValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SearchRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("contentSources", this.contentSources);
        writer.writeBooleanValue("enableTopResults", this.enableTopResults);
        writer.writeCollectionOfPrimitiveValues("entityTypes", this.entityTypes);
        writer.writeCollectionOfPrimitiveValues("fields", this.fields);
        writer.writeNumberValue("from", this.from);
        writer.writeObjectValue("query", this.query);
        writer.writeNumberValue("size", this.size);
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
    return SearchRequest;
}());
exports.SearchRequest = SearchRequest;
