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
graph.dvarResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _criteria ?  : Json | undefined;
    _database ?  : Json | undefined;
    _field ?  : Json | undefined;
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
    criteria();
    {
        return this._criteria;
    }
    ;
    get;
    database();
    {
        return this._database;
    }
    ;
    get;
    field();
    {
        return this._field;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["criteria", function (o, n) { o.criteria = n.getObjectValue(Json); }],
            ["database", function (o, n) { o.database = n.getObjectValue(Json); }],
            ["field", function (o, n) { o.field = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("criteria", this.criteria),
        writer: writer,
        : .writeObjectValue("database", this.database),
        writer: writer,
        : .writeObjectValue("field", this.field),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    criteria(value, Json | undefined);
    {
        this._criteria = value;
    }
    ;
    set;
    database(value, Json | undefined);
    {
        this._database = value;
    }
    ;
    set;
    field(value, Json | undefined);
    {
        this._field = value;
    }
    ;
}
