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
graph.commitResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fileEncryptionInfo ?  : FileEncryptionInfo | undefined;
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
    fileEncryptionInfo();
    {
        return this._fileEncryptionInfo;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fileEncryptionInfo", function (o, n) { o.fileEncryptionInfo = n.getObjectValue(FileEncryptionInfo); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("fileEncryptionInfo", this.fileEncryptionInfo),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    fileEncryptionInfo(value, FileEncryptionInfo | undefined);
    {
        this._fileEncryptionInfo = value;
    }
    ;
}
