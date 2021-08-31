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
exports.SchemaExtension = void 0;
var entity_1 = require("./entity");
var extensionSchemaProperty_1 = require("./extensionSchemaProperty");
var SchemaExtension = /** @class */ (function (_super) {
    __extends(SchemaExtension, _super);
    /**
     * Instantiates a new schemaExtension and sets the default values.
     */
    function SchemaExtension() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SchemaExtension.prototype, "description", {
        /**
         * Gets the description property value. Description for the schema extension.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description for the schema extension.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SchemaExtension.prototype, "owner", {
        /**
         * Gets the owner property value. The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed.
         * @returns a string
         */
        get: function () {
            return this._owner;
        },
        /**
         * Sets the owner property value. The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed.
         * @param value Value to set for the owner property.
         */
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SchemaExtension.prototype, "properties", {
        /**
         * Gets the properties property value. The collection of property names and types that make up the schema extension definition.
         * @returns a extensionSchemaProperty
         */
        get: function () {
            return this._properties;
        },
        /**
         * Sets the properties property value. The collection of property names and types that make up the schema extension definition.
         * @param value Value to set for the properties property.
         */
        set: function (value) {
            this._properties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SchemaExtension.prototype, "status", {
        /**
         * Gets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors.
         * @returns a string
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SchemaExtension.prototype, "targetTypes", {
        /**
         * Gets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user.
         * @returns a string
         */
        get: function () {
            return this._targetTypes;
        },
        /**
         * Sets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user.
         * @param value Value to set for the targetTypes property.
         */
        set: function (value) {
            this._targetTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SchemaExtension.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["owner", function (o, n) { o.owner = n.getStringValue(); }],
            ["properties", function (o, n) { o.properties = n.getCollectionOfObjectValues(extensionSchemaProperty_1.ExtensionSchemaProperty); }],
            ["status", function (o, n) { o.status = n.getStringValue(); }],
            ["targetTypes", function (o, n) { o.targetTypes = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SchemaExtension.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues("properties", this.properties);
        writer.writeStringValue("status", this.status);
        writer.writeCollectionOfPrimitiveValues("targetTypes", this.targetTypes);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return SchemaExtension;
}(entity_1.Entity));
exports.SchemaExtension = SchemaExtension;
