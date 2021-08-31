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
exports.DomainDnsRecord = void 0;
var entity_1 = require("./entity");
var DomainDnsRecord = /** @class */ (function (_super) {
    __extends(DomainDnsRecord, _super);
    /**
     * Instantiates a new domainDnsRecord and sets the default values.
     */
    function DomainDnsRecord() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DomainDnsRecord.prototype, "isOptional", {
        /**
         * Gets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
         * @returns a boolean
         */
        get: function () {
            return this._isOptional;
        },
        /**
         * Sets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
         * @param value Value to set for the isOptional property.
         */
        set: function (value) {
            this._isOptional = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DomainDnsRecord.prototype, "label", {
        /**
         * Gets the label property value. Value used when configuring the name of the DNS record at the DNS host.
         * @returns a string
         */
        get: function () {
            return this._label;
        },
        /**
         * Sets the label property value. Value used when configuring the name of the DNS record at the DNS host.
         * @param value Value to set for the label property.
         */
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DomainDnsRecord.prototype, "recordType", {
        /**
         * Gets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
         * @returns a string
         */
        get: function () {
            return this._recordType;
        },
        /**
         * Sets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
         * @param value Value to set for the recordType property.
         */
        set: function (value) {
            this._recordType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DomainDnsRecord.prototype, "supportedService", {
        /**
         * Gets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune
         * @returns a string
         */
        get: function () {
            return this._supportedService;
        },
        /**
         * Sets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune
         * @param value Value to set for the supportedService property.
         */
        set: function (value) {
            this._supportedService = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DomainDnsRecord.prototype, "ttl", {
        /**
         * Gets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
         * @returns a integer
         */
        get: function () {
            return this._ttl;
        },
        /**
         * Sets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
         * @param value Value to set for the ttl property.
         */
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DomainDnsRecord.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["isOptional", function (o, n) { o.isOptional = n.getBooleanValue(); }],
            ["label", function (o, n) { o.label = n.getStringValue(); }],
            ["recordType", function (o, n) { o.recordType = n.getStringValue(); }],
            ["supportedService", function (o, n) { o.supportedService = n.getStringValue(); }],
            ["ttl", function (o, n) { o.ttl = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DomainDnsRecord.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("isOptional", this.isOptional);
        writer.writeStringValue("label", this.label);
        writer.writeStringValue("recordType", this.recordType);
        writer.writeStringValue("supportedService", this.supportedService);
        writer.writeNumberValue("ttl", this.ttl);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return DomainDnsRecord;
}(entity_1.Entity));
exports.DomainDnsRecord = DomainDnsRecord;
