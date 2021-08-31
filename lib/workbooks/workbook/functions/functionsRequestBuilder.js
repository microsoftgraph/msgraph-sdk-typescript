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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsRequestBuilder = void 0;
var microsoft_graph_absRequestBuilder_1 = require("./microsoft/graph/abs/microsoft.graph.absRequestBuilder");
var workbookFunctions_1 = require("./workbookFunctions");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/functions  */
var FunctionsRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new FunctionsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function FunctionsRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/functions";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(FunctionsRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    FunctionsRequestBuilder.prototype.abs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.absRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.accrInt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.accrIntRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.accrIntM = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.accrIntMRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.acos = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.acosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.acosh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.acoshRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.acot = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.acotRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.acoth = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.acothRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.amorDegrc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.amorDegrcRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.amorLinc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.amorLincRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.and = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.andRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.arabic = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.arabicRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.areas = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.areasRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.asc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ascRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.asin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.asinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.asinh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.asinhRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.atan = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.atanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.atan2 = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.atan2RequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.atanh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.atanhRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.aveDev = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.aveDevRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.average = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.averageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.averageA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.averageARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.averageIf = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.averageIfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.averageIfs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.averageIfsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bahtText = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bahtTextRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.base = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.baseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.besselI = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.besselIRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.besselJ = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.besselJRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.besselK = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.besselKRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.besselY = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.besselYRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.beta_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.beta_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.beta_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.beta_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bin2Dec = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bin2DecRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bin2Hex = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bin2HexRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bin2Oct = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bin2OctRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.binom_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.binom_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.binom_Dist_Range = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.binom_Dist_RangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.binom_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.binom_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bitand = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bitandRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bitlshift = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bitlshiftRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bitor = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bitorRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bitrshift = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bitrshiftRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.bitxor = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.bitxorRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ceiling_Math = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ceiling_MathRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ceiling_Precise = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ceiling_PreciseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.char = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.charRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.chiSq_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.chiSq_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.chiSq_Dist_RT = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.chiSq_Dist_RTRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.chiSq_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.chiSq_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.chiSq_Inv_RT = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.chiSq_Inv_RTRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.choose = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.chooseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.clean = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cleanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.code = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.codeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.columns = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.columnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.combin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.combinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.combina = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.combinaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.complex = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.complexRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.concatenate = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.concatenateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.confidence_Norm = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.confidence_NormRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.confidence_T = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.confidence_TRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.convert = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.convertRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.cos = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.cosh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coshRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.cot = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cotRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coth = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cothRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.count = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.countRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.countA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.countARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.countBlank = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.countBlankRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.countIf = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.countIfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.countIfs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.countIfsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupDayBs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupDayBsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupDays = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupDaysRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupDaysNc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupDaysNcRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupNcd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupNcdRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupNum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupNumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.coupPcd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.coupPcdRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.csc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cscRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.csch = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cschRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.cumIPmt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cumIPmtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.cumPrinc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.cumPrincRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.date = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.datevalue = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.datevalueRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.daverage = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.daverageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.day = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dayRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.days = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.daysRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.days360 = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.days360RequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.db = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dbcs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dbcsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dcount = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dcountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dcountA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dcountARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ddb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ddbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dec2Bin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dec2BinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dec2Hex = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dec2HexRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dec2Oct = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dec2OctRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.decimal = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.decimalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.degrees = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.degreesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.delta = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.deltaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.devSq = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.devSqRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dget = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dgetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.disc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.discRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dmax = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dmaxRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dmin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dminRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dollar = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dollarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dollarDe = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dollarDeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dollarFr = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dollarFrRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dproduct = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dproductRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dstDev = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dstDevRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dstDevP = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dstDevPRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dsum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dsumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.duration = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.durationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dvar = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dvarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.dvarP = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.dvarPRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ecma_Ceiling = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ecma_CeilingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.edate = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.edateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.effect = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.effectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.eoMonth = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.eoMonthRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.erf = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.erfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.erf_Precise = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.erf_PreciseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.erfC = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.erfCRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.erfC_Precise = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.erfC_PreciseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.error_Type = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.error_TypeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.even = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.evenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.exact = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.exactRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.exp = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.expRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.expon_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.expon_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.f_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.f_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.f_Dist_RT = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.f_Dist_RTRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.f_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.f_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.f_Inv_RT = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.f_Inv_RTRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fact = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.factRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.factDouble = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.factDoubleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.false = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.falseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.find = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.findRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.findB = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.findBRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fisher = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.fisherRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fisherInv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.fisherInvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fixed = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.fixedRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.floor_Math = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.floor_MathRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.floor_Precise = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.floor_PreciseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.fvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.fvschedule = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.fvscheduleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gamma = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gammaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gamma_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gamma_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gamma_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gamma_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gammaLn = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gammaLnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gammaLn_Precise = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gammaLn_PreciseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gauss = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gaussRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.gcd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.gcdRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.geoMean = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.geoMeanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.geStep = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.geStepRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.harMean = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.harMeanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hex2Bin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hex2BinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hex2Dec = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hex2DecRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hex2Oct = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hex2OctRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hlookup = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hlookupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hour = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hourRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hyperlink = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hyperlinkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.hypGeom_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.hypGeom_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.if = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ifRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imAbs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imAbsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imaginary = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imaginaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imArgument = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imArgumentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imConjugate = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imConjugateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imCos = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imCosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imCosh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imCoshRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imCot = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imCotRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imCsc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imCscRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imCsch = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imCschRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imDiv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imDivRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imExp = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imExpRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imLn = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imLnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imLog10 = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imLog10RequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imLog2 = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imLog2RequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imPower = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imPowerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imProduct = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imProductRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imReal = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imRealRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSec = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSecRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSech = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSechRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSinh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSinhRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSqrt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSqrtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSub = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSubRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imSum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imSumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.imTan = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.imTanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.int = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.intRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.intRate = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.intRateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ipmt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ipmtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.irr = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.irrRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isErr = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isErrRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isError = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isErrorRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isEven = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isEvenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isFormula = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isFormulaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isLogical = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isLogicalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isNA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isNARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isNonText = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isNonTextRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isNumber = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isNumberRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.iso_Ceiling = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.iso_CeilingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isOdd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isOddRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isoWeekNum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isoWeekNumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ispmt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ispmtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isref = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isrefRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.isText = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.isTextRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.kurt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.kurtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.large = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.largeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.lcm = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lcmRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.left = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.leftRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.leftb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.leftbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.len = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.lenb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lenbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ln = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.log = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.logRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.log10 = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.log10RequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.logNorm_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.logNorm_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.logNorm_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.logNorm_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.lookup = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lookupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.lower = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.lowerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.match = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.matchRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.max = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.maxRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.maxA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.maxARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.mduration = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.mdurationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.median = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.medianRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.mid = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.midRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.midb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.midbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.min = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.minRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.minA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.minARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.minute = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.minuteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.mirr = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.mirrRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.mod = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.modRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.month = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.monthRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.mround = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.mroundRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.multiNomial = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.multiNomialRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.n = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.nRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.na = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.naRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.negBinom_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.negBinom_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.networkDays = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.networkDaysRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.networkDays_Intl = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.networkDays_IntlRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.nominal = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.nominalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.norm_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.norm_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.norm_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.norm_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.norm_S_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.norm_S_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.norm_S_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.norm_S_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.not = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.notRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.now = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.nowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.nper = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.nperRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.npv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.npvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.numberValue = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.numberValueRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oct2Bin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oct2BinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oct2Dec = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oct2DecRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oct2Hex = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oct2HexRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.odd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oddRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oddFPrice = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oddFPriceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oddFYield = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oddFYieldRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oddLPrice = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oddLPriceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.oddLYield = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.oddLYieldRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.or = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.orRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.pduration = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.pdurationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.percentile_Exc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.percentile_ExcRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.percentile_Inc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.percentile_IncRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.percentRank_Exc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.percentRank_ExcRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.percentRank_Inc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.percentRank_IncRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.permut = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.permutRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.permutationa = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.permutationaRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.phi = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.phiRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.pi = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.piRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.pmt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.pmtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.poisson_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.poisson_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.power = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.powerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.ppmt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.ppmtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.price = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.priceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.priceDisc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.priceDiscRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.priceMat = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.priceMatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.product = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.productRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.proper = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.properRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.pv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.pvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.quartile_Exc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.quartile_ExcRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.quartile_Inc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.quartile_IncRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.quotient = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.quotientRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.radians = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.radiansRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rand = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.randRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.randBetween = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.randBetweenRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rank_Avg = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rank_AvgRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rank_Eq = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rank_EqRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rate = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.received = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.receivedRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.replace = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.replaceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.replaceB = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.replaceBRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rept = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.reptRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.right = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rightRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rightb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rightbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.roman = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.romanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.round = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.roundRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.roundDown = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.roundDownRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.roundUp = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.roundUpRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rows = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.rri = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.rriRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sec = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.secRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sech = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sechRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.second = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.secondRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.seriesSum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.seriesSumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sheet = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sheetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sheets = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sheetsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sign = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.signRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sin = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sinRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sinh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sinhRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.skew = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.skewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.skew_p = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.skew_pRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sln = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.slnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.small = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.smallRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sqrt = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sqrtRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sqrtPi = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sqrtPiRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.standardize = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.standardizeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.stDev_P = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.stDev_PRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.stDev_S = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.stDev_SRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.stDevA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.stDevARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.stDevPA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.stDevPARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.substitute = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.substituteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.subtotal = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.subtotalRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sumIf = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sumIfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sumIfs = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sumIfsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.sumSq = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sumSqRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.syd = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.sydRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.t_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t_Dist_2T = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.t_Dist_2TRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t_Dist_RT = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.t_Dist_RTRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t_Inv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.t_InvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.t_Inv_2T = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.t_Inv_2TRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.tan = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.tanh = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tanhRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.tbillEq = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tbillEqRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.tbillPrice = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tbillPriceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.tbillYield = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.tbillYieldRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.text = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.textRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.time = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.timeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.timevalue = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.timevalueRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.today = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.todayRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.trim = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.trimRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.trimMean = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.trimMeanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.true = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.trueRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.trunc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.truncRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.type = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.typeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.unichar = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.unicharRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.unicode = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.unicodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.upper = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.upperRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.usdollar = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.usdollarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.value = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.valueRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.var_P = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.var_PRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.var_S = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.var_SRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.varA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.varARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.varPA = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.varPARequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.vdb = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.vdbRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.vlookup = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.vlookupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.weekday = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.weekdayRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.weekNum = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.weekNumRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.weibull_Dist = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.weibull_DistRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.workDay = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.workDayRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.workDay_Intl = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.workDay_IntlRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.xirr = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.xirrRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.xnpv = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.xnpvRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.xor = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.xorRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.year = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.yearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.yearFrac = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.yearFracRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.yield = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.yieldRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.yieldDisc = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.yieldDiscRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.yieldMat = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.yieldMatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    FunctionsRequestBuilder.prototype.z_Test = function () {
        return new microsoft_graph_absRequestBuilder_1.Microsoft.graph.z_TestRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ;
    /**
     * Delete navigation property functions for workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    FunctionsRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get functions from workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    FunctionsRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Update the navigation property functions in workbooks
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    FunctionsRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Delete navigation property functions for workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    FunctionsRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get functions from workbooks
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFunctions
     */
    FunctionsRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, workbookFunctions_1.WorkbookFunctions, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update the navigation property functions in workbooks
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    FunctionsRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return FunctionsRequestBuilder;
}());
exports.FunctionsRequestBuilder = FunctionsRequestBuilder;
