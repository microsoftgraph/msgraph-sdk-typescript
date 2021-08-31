"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var prompt_1 = require("./prompt");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.playPromptResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _clientContext ?  : string | undefined;
    _prompts ?  : prompt_1.Prompt[] | undefined;
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
    clientContext();
    {
        return this._clientContext;
    }
    ;
    get;
    prompts();
    {
        return this._prompts;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["clientContext", function (o, n) { o.clientContext = n.getStringValue(); }],
            ["prompts", function (o, n) { o.prompts = n.getCollectionOfObjectValues(prompt_1.Prompt); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("clientContext", this.clientContext),
        writer: writer,
        : .writeCollectionOfObjectValues("prompts", this.prompts),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    clientContext(value, string | undefined);
    {
        this._clientContext = value;
    }
    ;
    set;
    prompts(value, prompt_1.Prompt[] | undefined);
    {
        this._prompts = value;
    }
    ;
}
