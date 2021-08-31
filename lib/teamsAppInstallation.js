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
exports.TeamsAppInstallation = void 0;
var teamsApp_1 = require("./appCatalogs/teamsApp");
var teamsAppDefinition_1 = require("./appCatalogs/teamsAppDefinition");
var entity_1 = require("./entity");
var TeamsAppInstallation = /** @class */ (function (_super) {
    __extends(TeamsAppInstallation, _super);
    /**
     * Instantiates a new teamsAppInstallation and sets the default values.
     */
    function TeamsAppInstallation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TeamsAppInstallation.prototype, "teamsApp", {
        /**
         * Gets the teamsApp property value. The app that is installed.
         * @returns a teamsApp
         */
        get: function () {
            return this._teamsApp;
        },
        /**
         * Sets the teamsApp property value. The app that is installed.
         * @param value Value to set for the teamsApp property.
         */
        set: function (value) {
            this._teamsApp = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsAppInstallation.prototype, "teamsAppDefinition", {
        /**
         * Gets the teamsAppDefinition property value. The details of this version of the app.
         * @returns a teamsAppDefinition
         */
        get: function () {
            return this._teamsAppDefinition;
        },
        /**
         * Sets the teamsAppDefinition property value. The details of this version of the app.
         * @param value Value to set for the teamsAppDefinition property.
         */
        set: function (value) {
            this._teamsAppDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeamsAppInstallation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["teamsApp", function (o, n) { o.teamsApp = n.getObjectValue(teamsApp_1.TeamsApp); }],
            ["teamsAppDefinition", function (o, n) { o.teamsAppDefinition = n.getObjectValue(teamsAppDefinition_1.TeamsAppDefinition); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeamsAppInstallation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("teamsApp", this.teamsApp);
        writer.writeObjectValue("teamsAppDefinition", this.teamsAppDefinition);
    };
    ;
    ;
    ;
    return TeamsAppInstallation;
}(entity_1.Entity));
exports.TeamsAppInstallation = TeamsAppInstallation;
