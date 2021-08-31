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
graph.supportedLanguages;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _displayName ?  : string | undefined;
    _locale ?  : string | undefined;
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
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    locale();
    {
        return this._locale;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["locale", function (o, n) { o.locale = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeStringValue("locale", this.locale),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    locale(value, string | undefined);
    {
        this._locale = value;
    }
    ;
}
