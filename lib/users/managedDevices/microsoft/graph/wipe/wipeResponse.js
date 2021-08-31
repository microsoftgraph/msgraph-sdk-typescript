"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.wipeResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _keepEnrollmentData ?  : boolean | undefined;
    _keepUserData ?  : boolean | undefined;
    _macOsUnlockCode ?  : string | undefined;
    _persistEsimDataPlan ?  : boolean | undefined;
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
    keepEnrollmentData();
    {
        return this._keepEnrollmentData;
    }
    ;
    get;
    keepUserData();
    {
        return this._keepUserData;
    }
    ;
    get;
    macOsUnlockCode();
    {
        return this._macOsUnlockCode;
    }
    ;
    get;
    persistEsimDataPlan();
    {
        return this._persistEsimDataPlan;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["keepEnrollmentData", function (o, n) { o.keepEnrollmentData = n.getBooleanValue(); }],
            ["keepUserData", function (o, n) { o.keepUserData = n.getBooleanValue(); }],
            ["macOsUnlockCode", function (o, n) { o.macOsUnlockCode = n.getStringValue(); }],
            ["persistEsimDataPlan", function (o, n) { o.persistEsimDataPlan = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("keepEnrollmentData", this.keepEnrollmentData),
        writer: writer,
        : .writeBooleanValue("keepUserData", this.keepUserData),
        writer: writer,
        : .writeStringValue("macOsUnlockCode", this.macOsUnlockCode),
        writer: writer,
        : .writeBooleanValue("persistEsimDataPlan", this.persistEsimDataPlan),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    keepEnrollmentData(value, boolean | undefined);
    {
        this._keepEnrollmentData = value;
    }
    ;
    set;
    keepUserData(value, boolean | undefined);
    {
        this._keepUserData = value;
    }
    ;
    set;
    macOsUnlockCode(value, string | undefined);
    {
        this._macOsUnlockCode = value;
    }
    ;
    set;
    persistEsimDataPlan(value, boolean | undefined);
    {
        this._persistEsimDataPlan = value;
    }
    ;
}
