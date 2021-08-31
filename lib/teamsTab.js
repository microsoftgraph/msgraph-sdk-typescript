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
exports.TeamsTab = void 0;
var teamsApp_1 = require("./appCatalogs/teamsApp");
var entity_1 = require("./entity");
var TeamsTab = /** @class */ (function (_super) {
    __extends(TeamsTab, _super);
    /**
     * Instantiates a new teamsTab and sets the default values.
     */
    function TeamsTab() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(TeamsTab.prototype, "configuration", {
        /**
         * Gets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
         * @returns a teamsTabConfiguration
         */
        get: function () {
            return this._configuration;
        },
        /**
         * Sets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
         * @param value Value to set for the configuration property.
         */
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsTab.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the tab.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the tab.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsTab.prototype, "teamsApp", {
        /**
         * Gets the teamsApp property value. The application that is linked to the tab.
         * @returns a teamsApp
         */
        get: function () {
            return this._teamsApp;
        },
        /**
         * Sets the teamsApp property value. The application that is linked to the tab.
         * @param value Value to set for the teamsApp property.
         */
        set: function (value) {
            this._teamsApp = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeamsTab.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. Deep link URL of the tab instance. Read only.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. Deep link URL of the tab instance. Read only.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeamsTab.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["configuration", function (o, n) { o.configuration = n.getObjectValue(TeamsTabConfiguration); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["teamsApp", function (o, n) { o.teamsApp = n.getObjectValue(teamsApp_1.TeamsApp); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeamsTab.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("configuration", this.configuration);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("teamsApp", this.teamsApp);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    ;
    ;
    ;
    ;
    ;
    return TeamsTab;
}(entity_1.Entity));
exports.TeamsTab = TeamsTab;
