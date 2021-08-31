"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var managedMobileApp_1 = require("../../../../../../../managedMobileApp");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.targetAppsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _apps ?  : managedMobileApp_1.ManagedMobileApp[] | undefined;
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
    apps();
    {
        return this._apps;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["apps", function (o, n) { o.apps = n.getCollectionOfObjectValues(managedMobileApp_1.ManagedMobileApp); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("apps", this.apps),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    apps(value, managedMobileApp_1.ManagedMobileApp[] | undefined);
    {
        this._apps = value;
    }
    ;
}
