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
exports.TeamsApp = void 0;
var entity_1 = require("../entity");
var teamsAppDefinition_1 = require("./teamsAppDefinition");
var TeamsApp = /** @class */ (function (_super) {
    __extends(TeamsApp, _super);
    /**
     * Instantiates a new teamsApp and sets the default values.
     */
    function TeamsApp() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TeamsApp.prototype, "appDefinitions", {
        /**
         * Gets the appDefinitions property value. The details for each version of the app.
         * @returns a teamsAppDefinition
         */
        get: function () {
            return this._appDefinitions;
        },
        /**
         * Sets the appDefinitions property value. The details for each version of the app.
         * @param value Value to set for the appDefinitions property.
         */
        set: function (value) {
            this._appDefinitions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsApp.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsApp.prototype, "distributionMethod", {
        /**
         * Gets the distributionMethod property value. The method of distribution for the app. Read-only.
         * @returns a teamsAppDistributionMethod
         */
        get: function () {
            return this._distributionMethod;
        },
        /**
         * Sets the distributionMethod property value. The method of distribution for the app. Read-only.
         * @param value Value to set for the distributionMethod property.
         */
        set: function (value) {
            this._distributionMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsApp.prototype, "externalId", {
        /**
         * Gets the externalId property value. The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
         * @returns a string
         */
        get: function () {
            return this._externalId;
        },
        /**
         * Sets the externalId property value. The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
         * @param value Value to set for the externalId property.
         */
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeamsApp.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDefinitions", function (o, n) { o.appDefinitions = n.getCollectionOfObjectValues(teamsAppDefinition_1.TeamsAppDefinition); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["distributionMethod", function (o, n) { o.distributionMethod = n.getObjectValue(TeamsAppDistributionMethod); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeamsApp.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("appDefinitions", this.appDefinitions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("distributionMethod", this.distributionMethod);
        writer.writeStringValue("externalId", this.externalId);
    };
    ;
    ;
    ;
    ;
    ;
    return TeamsApp;
}(entity_1.Entity));
exports.TeamsApp = TeamsApp;
