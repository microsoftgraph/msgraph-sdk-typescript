"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.External = void 0;
var externalConnection_1 = require("../externalConnection");
var External = /** @class */ (function () {
    /**
     * Instantiates a new External and sets the default values.
     */
    function External() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(External.prototype, "additionalData", {
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
    Object.defineProperty(External.prototype, "connections", {
        /**
         * Gets the connections property value.
         * @returns a externalConnection
         */
        get: function () {
            return this._connections;
        },
        /**
         * Sets the connections property value.
         * @param value Value to set for the connections property.
         */
        set: function (value) {
            this._connections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    External.prototype.getFieldDeserializers = function () {
        return new Map([
            ["connections", function (o, n) { o.connections = n.getCollectionOfObjectValues(externalConnection_1.ExternalConnection); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    External.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("connections", this.connections);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return External;
}());
exports.External = External;
