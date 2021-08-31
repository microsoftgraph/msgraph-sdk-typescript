"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalConnection = void 0;
var connectionOperation_1 = require("./connectionOperation");
var schema_1 = require("./connections/schema/schema");
var entity_1 = require("./entity");
var externalItem_1 = require("./externalItem");
var ExternalConnection = /** @class */ (function (_super) {
    __extends(ExternalConnection, _super);
    /**
     * Instantiates a new externalConnection and sets the default values.
     */
    function ExternalConnection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ExternalConnection.prototype, "configuration", {
        /**
         * Gets the configuration property value.
         * @returns a configuration
         */
        get: function () {
            return this._configuration;
        },
        /**
         * Sets the configuration property value.
         * @param value Value to set for the configuration property.
         */
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "description", {
        /**
         * Gets the description property value.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "items", {
        /**
         * Gets the items property value.
         * @returns a externalItem
         */
        get: function () {
            return this._items;
        },
        /**
         * Sets the items property value.
         * @param value Value to set for the items property.
         */
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "name", {
        /**
         * Gets the name property value.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "operations", {
        /**
         * Gets the operations property value.
         * @returns a connectionOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "schema", {
        /**
         * Gets the schema property value.
         * @returns a schema
         */
        get: function () {
            return this._schema;
        },
        /**
         * Sets the schema property value.
         * @param value Value to set for the schema property.
         */
        set: function (value) {
            this._schema = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExternalConnection.prototype, "state", {
        /**
         * Gets the state property value.
         * @returns a connectionState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ExternalConnection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["configuration", function (o, n) { o.configuration = n.getObjectValue(Configuration); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["items", function (o, n) { o.items = n.getCollectionOfObjectValues(externalItem_1.ExternalItem); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(connectionOperation_1.ConnectionOperation); }],
            ["schema", function (o, n) { o.schema = n.getObjectValue(schema_1.Schema); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ConnectionState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ExternalConnection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("configuration", this.configuration);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues("items", this.items);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeObjectValue("schema", this.schema);
        writer.writeObjectValue("state", this.state);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ExternalConnection;
}(entity_1.Entity));
exports.ExternalConnection = ExternalConnection;
