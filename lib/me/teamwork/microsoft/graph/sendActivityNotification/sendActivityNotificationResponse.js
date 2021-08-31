"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var itemBody_1 = require("../../../../../chats/itemBody");
var keyValuePair_1 = require("../../../../../deviceAppManagement/keyValuePair");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.sendActivityNotificationResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _activityType ?  : string | undefined;
    _additionalData: Map();
    _chainId ?  : Int64 | undefined;
    _previewText ?  : itemBody_1.ItemBody | undefined;
    _templateParameters ?  : keyValuePair_1.KeyValuePair[] | undefined;
    _topic ?  : TeamworkActivityTopic | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    activityType();
    {
        return this._activityType;
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    get;
    chainId();
    {
        return this._chainId;
    }
    ;
    get;
    previewText();
    {
        return this._previewText;
    }
    ;
    get;
    templateParameters();
    {
        return this._templateParameters;
    }
    ;
    get;
    topic();
    {
        return this._topic;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["activityType", function (o, n) { o.activityType = n.getStringValue(); }],
            ["chainId", function (o, n) { o.chainId = n.getObjectValue(Int64); }],
            ["previewText", function (o, n) { o.previewText = n.getObjectValue(itemBody_1.ItemBody); }],
            ["templateParameters", function (o, n) { o.templateParameters = n.getCollectionOfObjectValues(keyValuePair_1.KeyValuePair); }],
            ["topic", function (o, n) { o.topic = n.getObjectValue(TeamworkActivityTopic); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("activityType", this.activityType),
        writer: writer,
        : .writeObjectValue("chainId", this.chainId),
        writer: writer,
        : .writeObjectValue("previewText", this.previewText),
        writer: writer,
        : .writeCollectionOfObjectValues("templateParameters", this.templateParameters),
        writer: writer,
        : .writeObjectValue("topic", this.topic),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    activityType(value, string | undefined);
    {
        this._activityType = value;
    }
    ;
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    chainId(value, Int64 | undefined);
    {
        this._chainId = value;
    }
    ;
    set;
    previewText(value, itemBody_1.ItemBody | undefined);
    {
        this._previewText = value;
    }
    ;
    set;
    templateParameters(value, keyValuePair_1.KeyValuePair[] | undefined);
    {
        this._templateParameters = value;
    }
    ;
    set;
    topic(value, TeamworkActivityTopic | undefined);
    {
        this._topic = value;
    }
    ;
}
