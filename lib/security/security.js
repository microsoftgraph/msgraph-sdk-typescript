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
exports.Security = void 0;
var entity_1 = require("../entity");
var alert_1 = require("./alert");
var secureScore_1 = require("./secureScore");
var secureScoreControlProfile_1 = require("./secureScoreControlProfile");
var Security = /** @class */ (function (_super) {
    __extends(Security, _super);
    /**
     * Instantiates a new Security and sets the default values.
     */
    function Security() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Security.prototype, "alerts", {
        /**
         * Gets the alerts property value. Read-only. Nullable.
         * @returns a alert
         */
        get: function () {
            return this._alerts;
        },
        /**
         * Sets the alerts property value. Read-only. Nullable.
         * @param value Value to set for the alerts property.
         */
        set: function (value) {
            this._alerts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Security.prototype, "secureScoreControlProfiles", {
        /**
         * Gets the secureScoreControlProfiles property value.
         * @returns a secureScoreControlProfile
         */
        get: function () {
            return this._secureScoreControlProfiles;
        },
        /**
         * Sets the secureScoreControlProfiles property value.
         * @param value Value to set for the secureScoreControlProfiles property.
         */
        set: function (value) {
            this._secureScoreControlProfiles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Security.prototype, "secureScores", {
        /**
         * Gets the secureScores property value.
         * @returns a secureScore
         */
        get: function () {
            return this._secureScores;
        },
        /**
         * Sets the secureScores property value.
         * @param value Value to set for the secureScores property.
         */
        set: function (value) {
            this._secureScores = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Security.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["alerts", function (o, n) { o.alerts = n.getCollectionOfObjectValues(alert_1.Alert); }],
            ["secureScoreControlProfiles", function (o, n) { o.secureScoreControlProfiles = n.getCollectionOfObjectValues(secureScoreControlProfile_1.SecureScoreControlProfile); }],
            ["secureScores", function (o, n) { o.secureScores = n.getCollectionOfObjectValues(secureScore_1.SecureScore); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Security.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("alerts", this.alerts);
        writer.writeCollectionOfObjectValues("secureScoreControlProfiles", this.secureScoreControlProfiles);
        writer.writeCollectionOfObjectValues("secureScores", this.secureScores);
    };
    ;
    ;
    ;
    ;
    return Security;
}(entity_1.Entity));
exports.Security = Security;
