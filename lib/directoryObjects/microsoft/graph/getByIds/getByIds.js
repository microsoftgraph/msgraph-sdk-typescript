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
var entity_1 = require("../../../../entity");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.getByIds;
entity_1.Entity;
implements;
kiota_abstractions_1.Parsable;
{
    _deletedDateTime ?  : Date | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    deletedDateTime();
    {
        return this._deletedDateTime;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["deletedDateTime", function (o, n) { o.deletedDateTime = n.getDateValue(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeDateValue("deletedDateTime", this.deletedDateTime)
    };
    set;
    deletedDateTime(value, Date | undefined);
    {
        this._deletedDateTime = value;
    }
    ;
}
