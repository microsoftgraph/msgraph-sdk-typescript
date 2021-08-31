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
graph.shareResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _endDateTime ?  : Date | undefined;
    _notifyTeam ?  : boolean | undefined;
    _startDateTime ?  : Date | undefined;
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
    endDateTime();
    {
        return this._endDateTime;
    }
    ;
    get;
    notifyTeam();
    {
        return this._notifyTeam;
    }
    ;
    get;
    startDateTime();
    {
        return this._startDateTime;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["notifyTeam", function (o, n) { o.notifyTeam = n.getBooleanValue(); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeDateValue("endDateTime", this.endDateTime),
        writer: writer,
        : .writeBooleanValue("notifyTeam", this.notifyTeam),
        writer: writer,
        : .writeDateValue("startDateTime", this.startDateTime),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    endDateTime(value, Date | undefined);
    {
        this._endDateTime = value;
    }
    ;
    set;
    notifyTeam(value, boolean | undefined);
    {
        this._notifyTeam = value;
    }
    ;
    set;
    startDateTime(value, Date | undefined);
    {
        this._startDateTime = value;
    }
    ;
}
