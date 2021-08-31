"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var prompt_1 = require("../playPrompt/prompt");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.recordResponseResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _bargeInAllowed ?  : boolean | undefined;
    _clientContext ?  : string | undefined;
    _initialSilenceTimeoutInSeconds ?  : number | undefined;
    _maxRecordDurationInSeconds ?  : number | undefined;
    _maxSilenceTimeoutInSeconds ?  : number | undefined;
    _playBeep ?  : boolean | undefined;
    _prompts ?  : prompt_1.Prompt[] | undefined;
    _stopTones ?  : string[] | undefined;
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
    bargeInAllowed();
    {
        return this._bargeInAllowed;
    }
    ;
    get;
    clientContext();
    {
        return this._clientContext;
    }
    ;
    get;
    initialSilenceTimeoutInSeconds();
    {
        return this._initialSilenceTimeoutInSeconds;
    }
    ;
    get;
    maxRecordDurationInSeconds();
    {
        return this._maxRecordDurationInSeconds;
    }
    ;
    get;
    maxSilenceTimeoutInSeconds();
    {
        return this._maxSilenceTimeoutInSeconds;
    }
    ;
    get;
    playBeep();
    {
        return this._playBeep;
    }
    ;
    get;
    prompts();
    {
        return this._prompts;
    }
    ;
    get;
    stopTones();
    {
        return this._stopTones;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["bargeInAllowed", function (o, n) { o.bargeInAllowed = n.getBooleanValue(); }],
            ["clientContext", function (o, n) { o.clientContext = n.getStringValue(); }],
            ["initialSilenceTimeoutInSeconds", function (o, n) { o.initialSilenceTimeoutInSeconds = n.getNumberValue(); }],
            ["maxRecordDurationInSeconds", function (o, n) { o.maxRecordDurationInSeconds = n.getNumberValue(); }],
            ["maxSilenceTimeoutInSeconds", function (o, n) { o.maxSilenceTimeoutInSeconds = n.getNumberValue(); }],
            ["playBeep", function (o, n) { o.playBeep = n.getBooleanValue(); }],
            ["prompts", function (o, n) { o.prompts = n.getCollectionOfObjectValues(prompt_1.Prompt); }],
            ["stopTones", function (o, n) { o.stopTones = n.getCollectionOfPrimitiveValues(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("bargeInAllowed", this.bargeInAllowed),
        writer: writer,
        : .writeStringValue("clientContext", this.clientContext),
        writer: writer,
        : .writeNumberValue("initialSilenceTimeoutInSeconds", this.initialSilenceTimeoutInSeconds),
        writer: writer,
        : .writeNumberValue("maxRecordDurationInSeconds", this.maxRecordDurationInSeconds),
        writer: writer,
        : .writeNumberValue("maxSilenceTimeoutInSeconds", this.maxSilenceTimeoutInSeconds),
        writer: writer,
        : .writeBooleanValue("playBeep", this.playBeep),
        writer: writer,
        : .writeCollectionOfObjectValues("prompts", this.prompts),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("stopTones", this.stopTones),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    bargeInAllowed(value, boolean | undefined);
    {
        this._bargeInAllowed = value;
    }
    ;
    set;
    clientContext(value, string | undefined);
    {
        this._clientContext = value;
    }
    ;
    set;
    initialSilenceTimeoutInSeconds(value, number | undefined);
    {
        this._initialSilenceTimeoutInSeconds = value;
    }
    ;
    set;
    maxRecordDurationInSeconds(value, number | undefined);
    {
        this._maxRecordDurationInSeconds = value;
    }
    ;
    set;
    maxSilenceTimeoutInSeconds(value, number | undefined);
    {
        this._maxSilenceTimeoutInSeconds = value;
    }
    ;
    set;
    playBeep(value, boolean | undefined);
    {
        this._playBeep = value;
    }
    ;
    set;
    prompts(value, prompt_1.Prompt[] | undefined);
    {
        this._prompts = value;
    }
    ;
    set;
    stopTones(value, string[] | undefined);
    {
        this._stopTones = value;
    }
    ;
}
