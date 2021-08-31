"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var assignedLicense_1 = require("../../../../assignedLicense");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.assignLicenseResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _addLicenses ?  : assignedLicense_1.AssignedLicense[] | undefined;
    _removeLicenses ?  : string[] | undefined;
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
    addLicenses();
    {
        return this._addLicenses;
    }
    ;
    get;
    removeLicenses();
    {
        return this._removeLicenses;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["addLicenses", function (o, n) { o.addLicenses = n.getCollectionOfObjectValues(assignedLicense_1.AssignedLicense); }],
            ["removeLicenses", function (o, n) { o.removeLicenses = n.getCollectionOfPrimitiveValues(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("addLicenses", this.addLicenses),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("removeLicenses", this.removeLicenses),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    addLicenses(value, assignedLicense_1.AssignedLicense[] | undefined);
    {
        this._addLicenses = value;
    }
    ;
    set;
    removeLicenses(value, string[] | undefined);
    {
        this._removeLicenses = value;
    }
    ;
}
