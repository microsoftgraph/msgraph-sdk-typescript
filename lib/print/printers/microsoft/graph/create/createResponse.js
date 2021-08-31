"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var printCertificateSigningRequest_1 = require("./printCertificateSigningRequest");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.createResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _certificateSigningRequest ?  : printCertificateSigningRequest_1.PrintCertificateSigningRequest | undefined;
    _connectorId ?  : string | undefined;
    _displayName ?  : string | undefined;
    _hasPhysicalDevice ?  : boolean | undefined;
    _manufacturer ?  : string | undefined;
    _model ?  : string | undefined;
    _physicalDeviceId ?  : string | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    get;
    certificateSigningRequest();
    {
        return this._certificateSigningRequest;
    }
    ;
    get;
    connectorId();
    {
        return this._connectorId;
    }
    ;
    get;
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    hasPhysicalDevice();
    {
        return this._hasPhysicalDevice;
    }
    ;
    get;
    manufacturer();
    {
        return this._manufacturer;
    }
    ;
    get;
    model();
    {
        return this._model;
    }
    ;
    get;
    physicalDeviceId();
    {
        return this._physicalDeviceId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["certificateSigningRequest", function (o, n) { o.certificateSigningRequest = n.getObjectValue(printCertificateSigningRequest_1.PrintCertificateSigningRequest); }],
            ["connectorId", function (o, n) { o.connectorId = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["hasPhysicalDevice", function (o, n) { o.hasPhysicalDevice = n.getBooleanValue(); }],
            ["manufacturer", function (o, n) { o.manufacturer = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],
            ["physicalDeviceId", function (o, n) { o.physicalDeviceId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("certificateSigningRequest", this.certificateSigningRequest),
        writer: writer,
        : .writeStringValue("connectorId", this.connectorId),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice),
        writer: writer,
        : .writeStringValue("manufacturer", this.manufacturer),
        writer: writer,
        : .writeStringValue("model", this.model),
        writer: writer,
        : .writeStringValue("physicalDeviceId", this.physicalDeviceId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    certificateSigningRequest(value, printCertificateSigningRequest_1.PrintCertificateSigningRequest | undefined);
    {
        this._certificateSigningRequest = value;
    }
    ;
    set;
    connectorId(value, string | undefined);
    {
        this._connectorId = value;
    }
    ;
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    hasPhysicalDevice(value, boolean | undefined);
    {
        this._hasPhysicalDevice = value;
    }
    ;
    set;
    manufacturer(value, string | undefined);
    {
        this._manufacturer = value;
    }
    ;
    set;
    model(value, string | undefined);
    {
        this._model = value;
    }
    ;
    set;
    physicalDeviceId(value, string | undefined);
    {
        this._physicalDeviceId = value;
    }
    ;
}
