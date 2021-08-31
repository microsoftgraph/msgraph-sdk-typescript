"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var directoryObject_1 = require("../../../../directoryObject");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.getAvailableExtensionProperties;
directoryObject_1.DirectoryObject;
implements;
kiota_abstractions_1.Parsable;
{
    _appDisplayName ?  : string | undefined;
    _dataType ?  : string | undefined;
    _isSyncedFromOnPremises ?  : boolean | undefined;
    _name ?  : string | undefined;
    _targetObjects ?  : string[] | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    appDisplayName();
    {
        return this._appDisplayName;
    }
    ;
    get;
    dataType();
    {
        return this._dataType;
    }
    ;
    get;
    isSyncedFromOnPremises();
    {
        return this._isSyncedFromOnPremises;
    }
    ;
    get;
    name();
    {
        return this._name;
    }
    ;
    get;
    targetObjects();
    {
        return this._targetObjects;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["dataType", function (o, n) { o.dataType = n.getStringValue(); }],
            ["isSyncedFromOnPremises", function (o, n) { o.isSyncedFromOnPremises = n.getBooleanValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["targetObjects", function (o, n) { o.targetObjects = n.getCollectionOfPrimitiveValues(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeStringValue("appDisplayName", this.appDisplayName),
        writer: writer,
        : .writeStringValue("dataType", this.dataType),
        writer: writer,
        : .writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises),
        writer: writer,
        : .writeStringValue("name", this.name),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("targetObjects", this.targetObjects)
    };
    set;
    appDisplayName(value, string | undefined);
    {
        this._appDisplayName = value;
    }
    ;
    set;
    dataType(value, string | undefined);
    {
        this._dataType = value;
    }
    ;
    set;
    isSyncedFromOnPremises(value, boolean | undefined);
    {
        this._isSyncedFromOnPremises = value;
    }
    ;
    set;
    name(value, string | undefined);
    {
        this._name = value;
    }
    ;
    set;
    targetObjects(value, string[] | undefined);
    {
        this._targetObjects = value;
    }
    ;
}
