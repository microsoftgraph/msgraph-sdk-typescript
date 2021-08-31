"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var mediaConfig_1 = require("../../../../mediaConfig");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.answerResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _acceptedModalities ?  : Modality[] | undefined;
    _additionalData: Map();
    _callbackUri ?  : string | undefined;
    _mediaConfig ?  : mediaConfig_1.MediaConfig | undefined;
    _participantCapacity ?  : number | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    acceptedModalities();
    {
        return this._acceptedModalities;
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    get;
    callbackUri();
    {
        return this._callbackUri;
    }
    ;
    get;
    mediaConfig();
    {
        return this._mediaConfig;
    }
    ;
    get;
    participantCapacity();
    {
        return this._participantCapacity;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["acceptedModalities", function (o, n) { o.acceptedModalities = n.getCollectionOfPrimitiveValues(); }],
            ["callbackUri", function (o, n) { o.callbackUri = n.getStringValue(); }],
            ["mediaConfig", function (o, n) { o.mediaConfig = n.getObjectValue(mediaConfig_1.MediaConfig); }],
            ["participantCapacity", function (o, n) { o.participantCapacity = n.getNumberValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("acceptedModalities", this.acceptedModalities),
        writer: writer,
        : .writeStringValue("callbackUri", this.callbackUri),
        writer: writer,
        : .writeObjectValue("mediaConfig", this.mediaConfig),
        writer: writer,
        : .writeNumberValue("participantCapacity", this.participantCapacity),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    acceptedModalities(value, Modality[] | undefined);
    {
        this._acceptedModalities = value;
    }
    ;
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    callbackUri(value, string | undefined);
    {
        this._callbackUri = value;
    }
    ;
    set;
    mediaConfig(value, mediaConfig_1.MediaConfig | undefined);
    {
        this._mediaConfig = value;
    }
    ;
    set;
    participantCapacity(value, number | undefined);
    {
        this._participantCapacity = value;
    }
    ;
}
