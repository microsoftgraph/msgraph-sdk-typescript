"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var attachmentItem_1 = require("../../../../../../../groups/calendarView/attachments/microsoft/graph/attachmentItem");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.createUploadSessionResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _attachmentItem ?  : attachmentItem_1.AttachmentItem | undefined;
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
    attachmentItem();
    {
        return this._attachmentItem;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["attachmentItem", function (o, n) { o.attachmentItem = n.getObjectValue(attachmentItem_1.AttachmentItem); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("attachmentItem", this.attachmentItem),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    attachmentItem(value, attachmentItem_1.AttachmentItem | undefined);
    {
        this._attachmentItem = value;
    }
    ;
}
