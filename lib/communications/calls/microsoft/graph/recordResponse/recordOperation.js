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
exports.RecordOperation = void 0;
var commsOperation_1 = require("../../../../commsOperation");
var RecordOperation = /** @class */ (function (_super) {
    __extends(RecordOperation, _super);
    /**
     * Instantiates a new recordOperation and sets the default values.
     */
    function RecordOperation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(RecordOperation.prototype, "recordingAccessToken", {
        /**
         * Gets the recordingAccessToken property value. The access token required to retrieve the recording.
         * @returns a string
         */
        get: function () {
            return this._recordingAccessToken;
        },
        /**
         * Sets the recordingAccessToken property value. The access token required to retrieve the recording.
         * @param value Value to set for the recordingAccessToken property.
         */
        set: function (value) {
            this._recordingAccessToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RecordOperation.prototype, "recordingLocation", {
        /**
         * Gets the recordingLocation property value. The location where the recording is located.
         * @returns a string
         */
        get: function () {
            return this._recordingLocation;
        },
        /**
         * Sets the recordingLocation property value. The location where the recording is located.
         * @param value Value to set for the recordingLocation property.
         */
        set: function (value) {
            this._recordingLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    RecordOperation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["recordingAccessToken", function (o, n) { o.recordingAccessToken = n.getStringValue(); }],
            ["recordingLocation", function (o, n) { o.recordingLocation = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RecordOperation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("recordingAccessToken", this.recordingAccessToken);
        writer.writeStringValue("recordingLocation", this.recordingLocation);
    };
    ;
    ;
    ;
    return RecordOperation;
}(commsOperation_1.CommsOperation));
exports.RecordOperation = RecordOperation;
