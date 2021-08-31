"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var post_1 = require("../../../../../../post");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.replyResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _post ?  : post_1.Post | undefined;
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
    post();
    {
        return this._post;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["post", function (o, n) { o.post = n.getObjectValue(post_1.Post); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("post", this.post),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    post(value, post_1.Post | undefined);
    {
        this._post = value;
    }
    ;
}
