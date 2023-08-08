import {createWorkbookFunctionsFromDiscriminatorValue} from '../../../../../../models/createWorkbookFunctionsFromDiscriminatorValue';
import {deserializeIntoWorkbookFunctions} from '../../../../../../models/deserializeIntoWorkbookFunctions';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookFunctions} from '../../../../../../models/serializeWorkbookFunctions';
import type {WorkbookFunctions} from '../../../../../../models/workbookFunctions';
import {AbsRequestBuilder} from './abs/absRequestBuilder';
import {AccrIntRequestBuilder} from './accrInt/accrIntRequestBuilder';
import {AccrIntMRequestBuilder} from './accrIntM/accrIntMRequestBuilder';
import {AcosRequestBuilder} from './acos/acosRequestBuilder';
import {AcoshRequestBuilder} from './acosh/acoshRequestBuilder';
import {AcotRequestBuilder} from './acot/acotRequestBuilder';
import {AcothRequestBuilder} from './acoth/acothRequestBuilder';
import {AmorDegrcRequestBuilder} from './amorDegrc/amorDegrcRequestBuilder';
import {AmorLincRequestBuilder} from './amorLinc/amorLincRequestBuilder';
import {AndRequestBuilder} from './and/andRequestBuilder';
import {ArabicRequestBuilder} from './arabic/arabicRequestBuilder';
import {AreasRequestBuilder} from './areas/areasRequestBuilder';
import {AscRequestBuilder} from './asc/ascRequestBuilder';
import {AsinRequestBuilder} from './asin/asinRequestBuilder';
import {AsinhRequestBuilder} from './asinh/asinhRequestBuilder';
import {AtanRequestBuilder} from './atan/atanRequestBuilder';
import {Atan2RequestBuilder} from './atan2/atan2RequestBuilder';
import {AtanhRequestBuilder} from './atanh/atanhRequestBuilder';
import {AveDevRequestBuilder} from './aveDev/aveDevRequestBuilder';
import {AverageRequestBuilder} from './average/averageRequestBuilder';
import {AverageARequestBuilder} from './averageA/averageARequestBuilder';
import {AverageIfRequestBuilder} from './averageIf/averageIfRequestBuilder';
import {AverageIfsRequestBuilder} from './averageIfs/averageIfsRequestBuilder';
import {BahtTextRequestBuilder} from './bahtText/bahtTextRequestBuilder';
import {BaseRequestBuilderEscaped} from './base/baseRequestBuilderEscaped';
import {BesselIRequestBuilder} from './besselI/besselIRequestBuilder';
import {BesselJRequestBuilder} from './besselJ/besselJRequestBuilder';
import {BesselKRequestBuilder} from './besselK/besselKRequestBuilder';
import {BesselYRequestBuilder} from './besselY/besselYRequestBuilder';
import {Beta_DistRequestBuilder} from './beta_Dist/beta_DistRequestBuilder';
import {Beta_InvRequestBuilder} from './beta_Inv/beta_InvRequestBuilder';
import {Bin2DecRequestBuilder} from './bin2Dec/bin2DecRequestBuilder';
import {Bin2HexRequestBuilder} from './bin2Hex/bin2HexRequestBuilder';
import {Bin2OctRequestBuilder} from './bin2Oct/bin2OctRequestBuilder';
import {Binom_Dist_RangeRequestBuilder} from './binom_Dist_Range/binom_Dist_RangeRequestBuilder';
import {Binom_DistRequestBuilder} from './binom_Dist/binom_DistRequestBuilder';
import {Binom_InvRequestBuilder} from './binom_Inv/binom_InvRequestBuilder';
import {BitandRequestBuilder} from './bitand/bitandRequestBuilder';
import {BitlshiftRequestBuilder} from './bitlshift/bitlshiftRequestBuilder';
import {BitorRequestBuilder} from './bitor/bitorRequestBuilder';
import {BitrshiftRequestBuilder} from './bitrshift/bitrshiftRequestBuilder';
import {BitxorRequestBuilder} from './bitxor/bitxorRequestBuilder';
import {Ceiling_MathRequestBuilder} from './ceiling_Math/ceiling_MathRequestBuilder';
import {Ceiling_PreciseRequestBuilder} from './ceiling_Precise/ceiling_PreciseRequestBuilder';
import {CharRequestBuilder} from './char/charRequestBuilder';
import {ChiSq_Dist_RTRequestBuilder} from './chiSq_Dist_RT/chiSq_Dist_RTRequestBuilder';
import {ChiSq_DistRequestBuilder} from './chiSq_Dist/chiSq_DistRequestBuilder';
import {ChiSq_Inv_RTRequestBuilder} from './chiSq_Inv_RT/chiSq_Inv_RTRequestBuilder';
import {ChiSq_InvRequestBuilder} from './chiSq_Inv/chiSq_InvRequestBuilder';
import {ChooseRequestBuilder} from './choose/chooseRequestBuilder';
import {CleanRequestBuilder} from './clean/cleanRequestBuilder';
import {CodeRequestBuilder} from './code/codeRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {CombinRequestBuilder} from './combin/combinRequestBuilder';
import {CombinaRequestBuilder} from './combina/combinaRequestBuilder';
import {ComplexRequestBuilder} from './complex/complexRequestBuilder';
import {ConcatenateRequestBuilder} from './concatenate/concatenateRequestBuilder';
import {Confidence_NormRequestBuilder} from './confidence_Norm/confidence_NormRequestBuilder';
import {Confidence_TRequestBuilder} from './confidence_T/confidence_TRequestBuilder';
import {ConvertRequestBuilder} from './convert/convertRequestBuilder';
import {CosRequestBuilder} from './cos/cosRequestBuilder';
import {CoshRequestBuilder} from './cosh/coshRequestBuilder';
import {CotRequestBuilder} from './cot/cotRequestBuilder';
import {CothRequestBuilder} from './coth/cothRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CountARequestBuilder} from './countA/countARequestBuilder';
import {CountBlankRequestBuilder} from './countBlank/countBlankRequestBuilder';
import {CountIfRequestBuilder} from './countIf/countIfRequestBuilder';
import {CountIfsRequestBuilder} from './countIfs/countIfsRequestBuilder';
import {CoupDayBsRequestBuilder} from './coupDayBs/coupDayBsRequestBuilder';
import {CoupDaysRequestBuilder} from './coupDays/coupDaysRequestBuilder';
import {CoupDaysNcRequestBuilder} from './coupDaysNc/coupDaysNcRequestBuilder';
import {CoupNcdRequestBuilder} from './coupNcd/coupNcdRequestBuilder';
import {CoupNumRequestBuilder} from './coupNum/coupNumRequestBuilder';
import {CoupPcdRequestBuilder} from './coupPcd/coupPcdRequestBuilder';
import {CscRequestBuilder} from './csc/cscRequestBuilder';
import {CschRequestBuilder} from './csch/cschRequestBuilder';
import {CumIPmtRequestBuilder} from './cumIPmt/cumIPmtRequestBuilder';
import {CumPrincRequestBuilder} from './cumPrinc/cumPrincRequestBuilder';
import {DateRequestBuilder} from './date/dateRequestBuilder';
import {DatevalueRequestBuilder} from './datevalue/datevalueRequestBuilder';
import {DaverageRequestBuilder} from './daverage/daverageRequestBuilder';
import {DayRequestBuilder} from './day/dayRequestBuilder';
import {DaysRequestBuilder} from './days/daysRequestBuilder';
import {Days360RequestBuilder} from './days360/days360RequestBuilder';
import {DbRequestBuilder} from './db/dbRequestBuilder';
import {DbcsRequestBuilder} from './dbcs/dbcsRequestBuilder';
import {DcountRequestBuilder} from './dcount/dcountRequestBuilder';
import {DcountARequestBuilder} from './dcountA/dcountARequestBuilder';
import {DdbRequestBuilder} from './ddb/ddbRequestBuilder';
import {Dec2BinRequestBuilder} from './dec2Bin/dec2BinRequestBuilder';
import {Dec2HexRequestBuilder} from './dec2Hex/dec2HexRequestBuilder';
import {Dec2OctRequestBuilder} from './dec2Oct/dec2OctRequestBuilder';
import {DecimalRequestBuilder} from './decimal/decimalRequestBuilder';
import {DegreesRequestBuilder} from './degrees/degreesRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {DevSqRequestBuilder} from './devSq/devSqRequestBuilder';
import {DgetRequestBuilder} from './dget/dgetRequestBuilder';
import {DiscRequestBuilder} from './disc/discRequestBuilder';
import {DmaxRequestBuilder} from './dmax/dmaxRequestBuilder';
import {DminRequestBuilder} from './dmin/dminRequestBuilder';
import {DollarRequestBuilder} from './dollar/dollarRequestBuilder';
import {DollarDeRequestBuilder} from './dollarDe/dollarDeRequestBuilder';
import {DollarFrRequestBuilder} from './dollarFr/dollarFrRequestBuilder';
import {DproductRequestBuilder} from './dproduct/dproductRequestBuilder';
import {DstDevRequestBuilder} from './dstDev/dstDevRequestBuilder';
import {DstDevPRequestBuilder} from './dstDevP/dstDevPRequestBuilder';
import {DsumRequestBuilder} from './dsum/dsumRequestBuilder';
import {DurationRequestBuilder} from './duration/durationRequestBuilder';
import {DvarRequestBuilder} from './dvar/dvarRequestBuilder';
import {DvarPRequestBuilder} from './dvarP/dvarPRequestBuilder';
import {Ecma_CeilingRequestBuilder} from './ecma_Ceiling/ecma_CeilingRequestBuilder';
import {EdateRequestBuilder} from './edate/edateRequestBuilder';
import {EffectRequestBuilder} from './effect/effectRequestBuilder';
import {EoMonthRequestBuilder} from './eoMonth/eoMonthRequestBuilder';
import {Erf_PreciseRequestBuilder} from './erf_Precise/erf_PreciseRequestBuilder';
import {ErfRequestBuilder} from './erf/erfRequestBuilder';
import {ErfC_PreciseRequestBuilder} from './erfC_Precise/erfC_PreciseRequestBuilder';
import {ErfCRequestBuilder} from './erfC/erfCRequestBuilder';
import {Error_TypeRequestBuilder} from './error_Type/error_TypeRequestBuilder';
import {EvenRequestBuilder} from './even/evenRequestBuilder';
import {ExactRequestBuilder} from './exact/exactRequestBuilder';
import {ExpRequestBuilder} from './exp/expRequestBuilder';
import {Expon_DistRequestBuilder} from './expon_Dist/expon_DistRequestBuilder';
import {F_Dist_RTRequestBuilder} from './f_Dist_RT/f_Dist_RTRequestBuilder';
import {F_DistRequestBuilder} from './f_Dist/f_DistRequestBuilder';
import {F_Inv_RTRequestBuilder} from './f_Inv_RT/f_Inv_RTRequestBuilder';
import {F_InvRequestBuilder} from './f_Inv/f_InvRequestBuilder';
import {FactRequestBuilder} from './fact/factRequestBuilder';
import {FactDoubleRequestBuilder} from './factDouble/factDoubleRequestBuilder';
import {FalseRequestBuilder} from './falseEscaped/falseRequestBuilder';
import {FindRequestBuilder} from './find/findRequestBuilder';
import {FindBRequestBuilder} from './findB/findBRequestBuilder';
import {FisherRequestBuilder} from './fisher/fisherRequestBuilder';
import {FisherInvRequestBuilder} from './fisherInv/fisherInvRequestBuilder';
import {FixedRequestBuilder} from './fixed/fixedRequestBuilder';
import {Floor_MathRequestBuilder} from './floor_Math/floor_MathRequestBuilder';
import {Floor_PreciseRequestBuilder} from './floor_Precise/floor_PreciseRequestBuilder';
import {FunctionsRequestBuilderDeleteRequestConfiguration} from './functionsRequestBuilderDeleteRequestConfiguration';
import {FunctionsRequestBuilderGetRequestConfiguration} from './functionsRequestBuilderGetRequestConfiguration';
import {FunctionsRequestBuilderPatchRequestConfiguration} from './functionsRequestBuilderPatchRequestConfiguration';
import {FvRequestBuilder} from './fv/fvRequestBuilder';
import {FvscheduleRequestBuilder} from './fvschedule/fvscheduleRequestBuilder';
import {Gamma_DistRequestBuilder} from './gamma_Dist/gamma_DistRequestBuilder';
import {Gamma_InvRequestBuilder} from './gamma_Inv/gamma_InvRequestBuilder';
import {GammaRequestBuilder} from './gamma/gammaRequestBuilder';
import {GammaLn_PreciseRequestBuilder} from './gammaLn_Precise/gammaLn_PreciseRequestBuilder';
import {GammaLnRequestBuilder} from './gammaLn/gammaLnRequestBuilder';
import {GaussRequestBuilder} from './gauss/gaussRequestBuilder';
import {GcdRequestBuilder} from './gcd/gcdRequestBuilder';
import {GeoMeanRequestBuilder} from './geoMean/geoMeanRequestBuilder';
import {GeStepRequestBuilder} from './geStep/geStepRequestBuilder';
import {HarMeanRequestBuilder} from './harMean/harMeanRequestBuilder';
import {Hex2BinRequestBuilder} from './hex2Bin/hex2BinRequestBuilder';
import {Hex2DecRequestBuilder} from './hex2Dec/hex2DecRequestBuilder';
import {Hex2OctRequestBuilder} from './hex2Oct/hex2OctRequestBuilder';
import {HlookupRequestBuilder} from './hlookup/hlookupRequestBuilder';
import {HourRequestBuilder} from './hour/hourRequestBuilder';
import {HyperlinkRequestBuilder} from './hyperlink/hyperlinkRequestBuilder';
import {HypGeom_DistRequestBuilder} from './hypGeom_Dist/hypGeom_DistRequestBuilder';
import {IfRequestBuilder} from './ifEscaped/ifRequestBuilder';
import {ImAbsRequestBuilder} from './imAbs/imAbsRequestBuilder';
import {ImaginaryRequestBuilder} from './imaginary/imaginaryRequestBuilder';
import {ImArgumentRequestBuilder} from './imArgument/imArgumentRequestBuilder';
import {ImConjugateRequestBuilder} from './imConjugate/imConjugateRequestBuilder';
import {ImCosRequestBuilder} from './imCos/imCosRequestBuilder';
import {ImCoshRequestBuilder} from './imCosh/imCoshRequestBuilder';
import {ImCotRequestBuilder} from './imCot/imCotRequestBuilder';
import {ImCscRequestBuilder} from './imCsc/imCscRequestBuilder';
import {ImCschRequestBuilder} from './imCsch/imCschRequestBuilder';
import {ImDivRequestBuilder} from './imDiv/imDivRequestBuilder';
import {ImExpRequestBuilder} from './imExp/imExpRequestBuilder';
import {ImLnRequestBuilder} from './imLn/imLnRequestBuilder';
import {ImLog10RequestBuilder} from './imLog10/imLog10RequestBuilder';
import {ImLog2RequestBuilder} from './imLog2/imLog2RequestBuilder';
import {ImPowerRequestBuilder} from './imPower/imPowerRequestBuilder';
import {ImProductRequestBuilder} from './imProduct/imProductRequestBuilder';
import {ImRealRequestBuilder} from './imReal/imRealRequestBuilder';
import {ImSecRequestBuilder} from './imSec/imSecRequestBuilder';
import {ImSechRequestBuilder} from './imSech/imSechRequestBuilder';
import {ImSinRequestBuilder} from './imSin/imSinRequestBuilder';
import {ImSinhRequestBuilder} from './imSinh/imSinhRequestBuilder';
import {ImSqrtRequestBuilder} from './imSqrt/imSqrtRequestBuilder';
import {ImSubRequestBuilder} from './imSub/imSubRequestBuilder';
import {ImSumRequestBuilder} from './imSum/imSumRequestBuilder';
import {ImTanRequestBuilder} from './imTan/imTanRequestBuilder';
import {IntRequestBuilder} from './int/intRequestBuilder';
import {IntRateRequestBuilder} from './intRate/intRateRequestBuilder';
import {IpmtRequestBuilder} from './ipmt/ipmtRequestBuilder';
import {IrrRequestBuilder} from './irr/irrRequestBuilder';
import {IsErrRequestBuilder} from './isErr/isErrRequestBuilder';
import {IsErrorRequestBuilder} from './isError/isErrorRequestBuilder';
import {IsEvenRequestBuilder} from './isEven/isEvenRequestBuilder';
import {IsFormulaRequestBuilder} from './isFormula/isFormulaRequestBuilder';
import {IsLogicalRequestBuilder} from './isLogical/isLogicalRequestBuilder';
import {IsNARequestBuilder} from './isNA/isNARequestBuilder';
import {IsNonTextRequestBuilder} from './isNonText/isNonTextRequestBuilder';
import {IsNumberRequestBuilder} from './isNumber/isNumberRequestBuilder';
import {Iso_CeilingRequestBuilder} from './iso_Ceiling/iso_CeilingRequestBuilder';
import {IsOddRequestBuilder} from './isOdd/isOddRequestBuilder';
import {IsoWeekNumRequestBuilder} from './isoWeekNum/isoWeekNumRequestBuilder';
import {IspmtRequestBuilder} from './ispmt/ispmtRequestBuilder';
import {IsrefRequestBuilder} from './isref/isrefRequestBuilder';
import {IsTextRequestBuilder} from './isText/isTextRequestBuilder';
import {KurtRequestBuilder} from './kurt/kurtRequestBuilder';
import {LargeRequestBuilder} from './large/largeRequestBuilder';
import {LcmRequestBuilder} from './lcm/lcmRequestBuilder';
import {LeftRequestBuilder} from './left/leftRequestBuilder';
import {LeftbRequestBuilder} from './leftb/leftbRequestBuilder';
import {LenRequestBuilder} from './len/lenRequestBuilder';
import {LenbRequestBuilder} from './lenb/lenbRequestBuilder';
import {LnRequestBuilder} from './ln/lnRequestBuilder';
import {LogRequestBuilder} from './log/logRequestBuilder';
import {Log10RequestBuilder} from './log10/log10RequestBuilder';
import {LogNorm_DistRequestBuilder} from './logNorm_Dist/logNorm_DistRequestBuilder';
import {LogNorm_InvRequestBuilder} from './logNorm_Inv/logNorm_InvRequestBuilder';
import {LookupRequestBuilder} from './lookup/lookupRequestBuilder';
import {LowerRequestBuilder} from './lower/lowerRequestBuilder';
import {MatchRequestBuilder} from './match/matchRequestBuilder';
import {MaxRequestBuilder} from './max/maxRequestBuilder';
import {MaxARequestBuilder} from './maxA/maxARequestBuilder';
import {MdurationRequestBuilder} from './mduration/mdurationRequestBuilder';
import {MedianRequestBuilder} from './median/medianRequestBuilder';
import {MidRequestBuilder} from './mid/midRequestBuilder';
import {MidbRequestBuilder} from './midb/midbRequestBuilder';
import {MinRequestBuilder} from './min/minRequestBuilder';
import {MinARequestBuilder} from './minA/minARequestBuilder';
import {MinuteRequestBuilder} from './minute/minuteRequestBuilder';
import {MirrRequestBuilder} from './mirr/mirrRequestBuilder';
import {ModRequestBuilder} from './mod/modRequestBuilder';
import {MonthRequestBuilder} from './month/monthRequestBuilder';
import {MroundRequestBuilder} from './mround/mroundRequestBuilder';
import {MultiNomialRequestBuilder} from './multiNomial/multiNomialRequestBuilder';
import {NRequestBuilder} from './n/nRequestBuilder';
import {NaRequestBuilder} from './na/naRequestBuilder';
import {NegBinom_DistRequestBuilder} from './negBinom_Dist/negBinom_DistRequestBuilder';
import {NetworkDays_IntlRequestBuilder} from './networkDays_Intl/networkDays_IntlRequestBuilder';
import {NetworkDaysRequestBuilder} from './networkDays/networkDaysRequestBuilder';
import {NominalRequestBuilder} from './nominal/nominalRequestBuilder';
import {Norm_DistRequestBuilder} from './norm_Dist/norm_DistRequestBuilder';
import {Norm_InvRequestBuilder} from './norm_Inv/norm_InvRequestBuilder';
import {Norm_S_DistRequestBuilder} from './norm_S_Dist/norm_S_DistRequestBuilder';
import {Norm_S_InvRequestBuilder} from './norm_S_Inv/norm_S_InvRequestBuilder';
import {NotRequestBuilder} from './not/notRequestBuilder';
import {NowRequestBuilder} from './now/nowRequestBuilder';
import {NperRequestBuilder} from './nper/nperRequestBuilder';
import {NpvRequestBuilder} from './npv/npvRequestBuilder';
import {NumberValueRequestBuilder} from './numberValue/numberValueRequestBuilder';
import {Oct2BinRequestBuilder} from './oct2Bin/oct2BinRequestBuilder';
import {Oct2DecRequestBuilder} from './oct2Dec/oct2DecRequestBuilder';
import {Oct2HexRequestBuilder} from './oct2Hex/oct2HexRequestBuilder';
import {OddRequestBuilder} from './odd/oddRequestBuilder';
import {OddFPriceRequestBuilder} from './oddFPrice/oddFPriceRequestBuilder';
import {OddFYieldRequestBuilder} from './oddFYield/oddFYieldRequestBuilder';
import {OddLPriceRequestBuilder} from './oddLPrice/oddLPriceRequestBuilder';
import {OddLYieldRequestBuilder} from './oddLYield/oddLYieldRequestBuilder';
import {OrRequestBuilder} from './or/orRequestBuilder';
import {PdurationRequestBuilder} from './pduration/pdurationRequestBuilder';
import {Percentile_ExcRequestBuilder} from './percentile_Exc/percentile_ExcRequestBuilder';
import {Percentile_IncRequestBuilder} from './percentile_Inc/percentile_IncRequestBuilder';
import {PercentRank_ExcRequestBuilder} from './percentRank_Exc/percentRank_ExcRequestBuilder';
import {PercentRank_IncRequestBuilder} from './percentRank_Inc/percentRank_IncRequestBuilder';
import {PermutRequestBuilder} from './permut/permutRequestBuilder';
import {PermutationaRequestBuilder} from './permutationa/permutationaRequestBuilder';
import {PhiRequestBuilder} from './phi/phiRequestBuilder';
import {PiRequestBuilder} from './pi/piRequestBuilder';
import {PmtRequestBuilder} from './pmt/pmtRequestBuilder';
import {Poisson_DistRequestBuilder} from './poisson_Dist/poisson_DistRequestBuilder';
import {PowerRequestBuilder} from './power/powerRequestBuilder';
import {PpmtRequestBuilder} from './ppmt/ppmtRequestBuilder';
import {PriceRequestBuilder} from './price/priceRequestBuilder';
import {PriceDiscRequestBuilder} from './priceDisc/priceDiscRequestBuilder';
import {PriceMatRequestBuilder} from './priceMat/priceMatRequestBuilder';
import {ProductRequestBuilder} from './product/productRequestBuilder';
import {ProperRequestBuilder} from './proper/properRequestBuilder';
import {PvRequestBuilder} from './pv/pvRequestBuilder';
import {Quartile_ExcRequestBuilder} from './quartile_Exc/quartile_ExcRequestBuilder';
import {Quartile_IncRequestBuilder} from './quartile_Inc/quartile_IncRequestBuilder';
import {QuotientRequestBuilder} from './quotient/quotientRequestBuilder';
import {RadiansRequestBuilder} from './radians/radiansRequestBuilder';
import {RandRequestBuilder} from './rand/randRequestBuilder';
import {RandBetweenRequestBuilder} from './randBetween/randBetweenRequestBuilder';
import {Rank_AvgRequestBuilder} from './rank_Avg/rank_AvgRequestBuilder';
import {Rank_EqRequestBuilder} from './rank_Eq/rank_EqRequestBuilder';
import {RateRequestBuilder} from './rate/rateRequestBuilder';
import {ReceivedRequestBuilder} from './received/receivedRequestBuilder';
import {ReplaceRequestBuilder} from './replace/replaceRequestBuilder';
import {ReplaceBRequestBuilder} from './replaceB/replaceBRequestBuilder';
import {ReptRequestBuilder} from './rept/reptRequestBuilder';
import {RightRequestBuilder} from './right/rightRequestBuilder';
import {RightbRequestBuilder} from './rightb/rightbRequestBuilder';
import {RomanRequestBuilder} from './roman/romanRequestBuilder';
import {RoundRequestBuilder} from './round/roundRequestBuilder';
import {RoundDownRequestBuilder} from './roundDown/roundDownRequestBuilder';
import {RoundUpRequestBuilder} from './roundUp/roundUpRequestBuilder';
import {RowsRequestBuilder} from './rows/rowsRequestBuilder';
import {RriRequestBuilder} from './rri/rriRequestBuilder';
import {SecRequestBuilder} from './sec/secRequestBuilder';
import {SechRequestBuilder} from './sech/sechRequestBuilder';
import {SecondRequestBuilder} from './second/secondRequestBuilder';
import {SeriesSumRequestBuilder} from './seriesSum/seriesSumRequestBuilder';
import {SheetRequestBuilder} from './sheet/sheetRequestBuilder';
import {SheetsRequestBuilder} from './sheets/sheetsRequestBuilder';
import {SignRequestBuilder} from './sign/signRequestBuilder';
import {SinRequestBuilder} from './sin/sinRequestBuilder';
import {SinhRequestBuilder} from './sinh/sinhRequestBuilder';
import {Skew_pRequestBuilder} from './skew_p/skew_pRequestBuilder';
import {SkewRequestBuilder} from './skew/skewRequestBuilder';
import {SlnRequestBuilder} from './sln/slnRequestBuilder';
import {SmallRequestBuilder} from './small/smallRequestBuilder';
import {SqrtRequestBuilder} from './sqrt/sqrtRequestBuilder';
import {SqrtPiRequestBuilder} from './sqrtPi/sqrtPiRequestBuilder';
import {StandardizeRequestBuilder} from './standardize/standardizeRequestBuilder';
import {StDev_PRequestBuilder} from './stDev_P/stDev_PRequestBuilder';
import {StDev_SRequestBuilder} from './stDev_S/stDev_SRequestBuilder';
import {StDevARequestBuilder} from './stDevA/stDevARequestBuilder';
import {StDevPARequestBuilder} from './stDevPA/stDevPARequestBuilder';
import {SubstituteRequestBuilder} from './substitute/substituteRequestBuilder';
import {SubtotalRequestBuilder} from './subtotal/subtotalRequestBuilder';
import {SumRequestBuilder} from './sum/sumRequestBuilder';
import {SumIfRequestBuilder} from './sumIf/sumIfRequestBuilder';
import {SumIfsRequestBuilder} from './sumIfs/sumIfsRequestBuilder';
import {SumSqRequestBuilder} from './sumSq/sumSqRequestBuilder';
import {SydRequestBuilder} from './syd/sydRequestBuilder';
import {T_Dist_2TRequestBuilder} from './t_Dist_2T/t_Dist_2TRequestBuilder';
import {T_Dist_RTRequestBuilder} from './t_Dist_RT/t_Dist_RTRequestBuilder';
import {T_DistRequestBuilder} from './t_Dist/t_DistRequestBuilder';
import {T_Inv_2TRequestBuilder} from './t_Inv_2T/t_Inv_2TRequestBuilder';
import {T_InvRequestBuilder} from './t_Inv/t_InvRequestBuilder';
import {TRequestBuilder} from './t/tRequestBuilder';
import {TanRequestBuilder} from './tan/tanRequestBuilder';
import {TanhRequestBuilder} from './tanh/tanhRequestBuilder';
import {TbillEqRequestBuilder} from './tbillEq/tbillEqRequestBuilder';
import {TbillPriceRequestBuilder} from './tbillPrice/tbillPriceRequestBuilder';
import {TbillYieldRequestBuilder} from './tbillYield/tbillYieldRequestBuilder';
import {TextRequestBuilder} from './text/textRequestBuilder';
import {TimeRequestBuilder} from './time/timeRequestBuilder';
import {TimevalueRequestBuilder} from './timevalue/timevalueRequestBuilder';
import {TodayRequestBuilder} from './today/todayRequestBuilder';
import {TrimRequestBuilder} from './trim/trimRequestBuilder';
import {TrimMeanRequestBuilder} from './trimMean/trimMeanRequestBuilder';
import {TrueRequestBuilder} from './trueEscaped/trueRequestBuilder';
import {TruncRequestBuilder} from './trunc/truncRequestBuilder';
import {TypeRequestBuilder} from './type/typeRequestBuilder';
import {UnicharRequestBuilder} from './unichar/unicharRequestBuilder';
import {UnicodeRequestBuilder} from './unicode/unicodeRequestBuilder';
import {UpperRequestBuilder} from './upper/upperRequestBuilder';
import {UsdollarRequestBuilder} from './usdollar/usdollarRequestBuilder';
import {ValueRequestBuilder} from './value/valueRequestBuilder';
import {Var_PRequestBuilder} from './var_P/var_PRequestBuilder';
import {Var_SRequestBuilder} from './var_S/var_SRequestBuilder';
import {VarARequestBuilder} from './varA/varARequestBuilder';
import {VarPARequestBuilder} from './varPA/varPARequestBuilder';
import {VdbRequestBuilder} from './vdb/vdbRequestBuilder';
import {VlookupRequestBuilder} from './vlookup/vlookupRequestBuilder';
import {WeekdayRequestBuilder} from './weekday/weekdayRequestBuilder';
import {WeekNumRequestBuilder} from './weekNum/weekNumRequestBuilder';
import {Weibull_DistRequestBuilder} from './weibull_Dist/weibull_DistRequestBuilder';
import {WorkDay_IntlRequestBuilder} from './workDay_Intl/workDay_IntlRequestBuilder';
import {WorkDayRequestBuilder} from './workDay/workDayRequestBuilder';
import {XirrRequestBuilder} from './xirr/xirrRequestBuilder';
import {XnpvRequestBuilder} from './xnpv/xnpvRequestBuilder';
import {XorRequestBuilder} from './xor/xorRequestBuilder';
import {YearRequestBuilder} from './year/yearRequestBuilder';
import {YearFracRequestBuilder} from './yearFrac/yearFracRequestBuilder';
import {YieldRequestBuilder} from './yield/yieldRequestBuilder';
import {YieldDiscRequestBuilder} from './yieldDisc/yieldDiscRequestBuilder';
import {YieldMatRequestBuilder} from './yieldMat/yieldMatRequestBuilder';
import {Z_TestRequestBuilder} from './z_Test/z_TestRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the functions property of the microsoft.graph.workbook entity.
 */
export class FunctionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the abs method.
     */
    public get abs(): AbsRequestBuilder {
        return new AbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the accrInt method.
     */
    public get accrInt(): AccrIntRequestBuilder {
        return new AccrIntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the accrIntM method.
     */
    public get accrIntM(): AccrIntMRequestBuilder {
        return new AccrIntMRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the acos method.
     */
    public get acos(): AcosRequestBuilder {
        return new AcosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the acosh method.
     */
    public get acosh(): AcoshRequestBuilder {
        return new AcoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the acot method.
     */
    public get acot(): AcotRequestBuilder {
        return new AcotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the acoth method.
     */
    public get acoth(): AcothRequestBuilder {
        return new AcothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the amorDegrc method.
     */
    public get amorDegrc(): AmorDegrcRequestBuilder {
        return new AmorDegrcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the amorLinc method.
     */
    public get amorLinc(): AmorLincRequestBuilder {
        return new AmorLincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the and method.
     */
    public get and(): AndRequestBuilder {
        return new AndRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the arabic method.
     */
    public get arabic(): ArabicRequestBuilder {
        return new ArabicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the areas method.
     */
    public get areas(): AreasRequestBuilder {
        return new AreasRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the asc method.
     */
    public get asc(): AscRequestBuilder {
        return new AscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the asin method.
     */
    public get asin(): AsinRequestBuilder {
        return new AsinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the asinh method.
     */
    public get asinh(): AsinhRequestBuilder {
        return new AsinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the atan method.
     */
    public get atan(): AtanRequestBuilder {
        return new AtanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the atan2 method.
     */
    public get atan2(): Atan2RequestBuilder {
        return new Atan2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the atanh method.
     */
    public get atanh(): AtanhRequestBuilder {
        return new AtanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the aveDev method.
     */
    public get aveDev(): AveDevRequestBuilder {
        return new AveDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the average method.
     */
    public get average(): AverageRequestBuilder {
        return new AverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the averageA method.
     */
    public get averageA(): AverageARequestBuilder {
        return new AverageARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the averageIf method.
     */
    public get averageIf(): AverageIfRequestBuilder {
        return new AverageIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the averageIfs method.
     */
    public get averageIfs(): AverageIfsRequestBuilder {
        return new AverageIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bahtText method.
     */
    public get bahtText(): BahtTextRequestBuilder {
        return new BahtTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the base method.
     */
    public get base(): BaseRequestBuilderEscaped {
        return new BaseRequestBuilderEscaped(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the besselI method.
     */
    public get besselI(): BesselIRequestBuilder {
        return new BesselIRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the besselJ method.
     */
    public get besselJ(): BesselJRequestBuilder {
        return new BesselJRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the besselK method.
     */
    public get besselK(): BesselKRequestBuilder {
        return new BesselKRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the besselY method.
     */
    public get besselY(): BesselYRequestBuilder {
        return new BesselYRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the beta_Dist method.
     */
    public get beta_Dist(): Beta_DistRequestBuilder {
        return new Beta_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the beta_Inv method.
     */
    public get beta_Inv(): Beta_InvRequestBuilder {
        return new Beta_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bin2Dec method.
     */
    public get bin2Dec(): Bin2DecRequestBuilder {
        return new Bin2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bin2Hex method.
     */
    public get bin2Hex(): Bin2HexRequestBuilder {
        return new Bin2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bin2Oct method.
     */
    public get bin2Oct(): Bin2OctRequestBuilder {
        return new Bin2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the binom_Dist method.
     */
    public get binom_Dist(): Binom_DistRequestBuilder {
        return new Binom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the binom_Dist_Range method.
     */
    public get binom_Dist_Range(): Binom_Dist_RangeRequestBuilder {
        return new Binom_Dist_RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the binom_Inv method.
     */
    public get binom_Inv(): Binom_InvRequestBuilder {
        return new Binom_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bitand method.
     */
    public get bitand(): BitandRequestBuilder {
        return new BitandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bitlshift method.
     */
    public get bitlshift(): BitlshiftRequestBuilder {
        return new BitlshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bitor method.
     */
    public get bitor(): BitorRequestBuilder {
        return new BitorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bitrshift method.
     */
    public get bitrshift(): BitrshiftRequestBuilder {
        return new BitrshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the bitxor method.
     */
    public get bitxor(): BitxorRequestBuilder {
        return new BitxorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ceiling_Math method.
     */
    public get ceiling_Math(): Ceiling_MathRequestBuilder {
        return new Ceiling_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ceiling_Precise method.
     */
    public get ceiling_Precise(): Ceiling_PreciseRequestBuilder {
        return new Ceiling_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the char method.
     */
    public get char(): CharRequestBuilder {
        return new CharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the chiSq_Dist method.
     */
    public get chiSq_Dist(): ChiSq_DistRequestBuilder {
        return new ChiSq_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the chiSq_Dist_RT method.
     */
    public get chiSq_Dist_RT(): ChiSq_Dist_RTRequestBuilder {
        return new ChiSq_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the chiSq_Inv method.
     */
    public get chiSq_Inv(): ChiSq_InvRequestBuilder {
        return new ChiSq_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the chiSq_Inv_RT method.
     */
    public get chiSq_Inv_RT(): ChiSq_Inv_RTRequestBuilder {
        return new ChiSq_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the choose method.
     */
    public get choose(): ChooseRequestBuilder {
        return new ChooseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the clean method.
     */
    public get clean(): CleanRequestBuilder {
        return new CleanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the code method.
     */
    public get code(): CodeRequestBuilder {
        return new CodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the columns method.
     */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the combin method.
     */
    public get combin(): CombinRequestBuilder {
        return new CombinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the combina method.
     */
    public get combina(): CombinaRequestBuilder {
        return new CombinaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the complex method.
     */
    public get complex(): ComplexRequestBuilder {
        return new ComplexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the concatenate method.
     */
    public get concatenate(): ConcatenateRequestBuilder {
        return new ConcatenateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the confidence_Norm method.
     */
    public get confidence_Norm(): Confidence_NormRequestBuilder {
        return new Confidence_NormRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the confidence_T method.
     */
    public get confidence_T(): Confidence_TRequestBuilder {
        return new Confidence_TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the convert method.
     */
    public get convert(): ConvertRequestBuilder {
        return new ConvertRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cos method.
     */
    public get cos(): CosRequestBuilder {
        return new CosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cosh method.
     */
    public get cosh(): CoshRequestBuilder {
        return new CoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cot method.
     */
    public get cot(): CotRequestBuilder {
        return new CotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coth method.
     */
    public get coth(): CothRequestBuilder {
        return new CothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the count method.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the countA method.
     */
    public get countA(): CountARequestBuilder {
        return new CountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the countBlank method.
     */
    public get countBlank(): CountBlankRequestBuilder {
        return new CountBlankRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the countIf method.
     */
    public get countIf(): CountIfRequestBuilder {
        return new CountIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the countIfs method.
     */
    public get countIfs(): CountIfsRequestBuilder {
        return new CountIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupDayBs method.
     */
    public get coupDayBs(): CoupDayBsRequestBuilder {
        return new CoupDayBsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupDays method.
     */
    public get coupDays(): CoupDaysRequestBuilder {
        return new CoupDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupDaysNc method.
     */
    public get coupDaysNc(): CoupDaysNcRequestBuilder {
        return new CoupDaysNcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupNcd method.
     */
    public get coupNcd(): CoupNcdRequestBuilder {
        return new CoupNcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupNum method.
     */
    public get coupNum(): CoupNumRequestBuilder {
        return new CoupNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the coupPcd method.
     */
    public get coupPcd(): CoupPcdRequestBuilder {
        return new CoupPcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the csc method.
     */
    public get csc(): CscRequestBuilder {
        return new CscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the csch method.
     */
    public get csch(): CschRequestBuilder {
        return new CschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cumIPmt method.
     */
    public get cumIPmt(): CumIPmtRequestBuilder {
        return new CumIPmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cumPrinc method.
     */
    public get cumPrinc(): CumPrincRequestBuilder {
        return new CumPrincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the date method.
     */
    public get date(): DateRequestBuilder {
        return new DateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the datevalue method.
     */
    public get datevalue(): DatevalueRequestBuilder {
        return new DatevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the daverage method.
     */
    public get daverage(): DaverageRequestBuilder {
        return new DaverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the day method.
     */
    public get day(): DayRequestBuilder {
        return new DayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the days method.
     */
    public get days(): DaysRequestBuilder {
        return new DaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the days360 method.
     */
    public get days360(): Days360RequestBuilder {
        return new Days360RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the db method.
     */
    public get db(): DbRequestBuilder {
        return new DbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dbcs method.
     */
    public get dbcs(): DbcsRequestBuilder {
        return new DbcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dcount method.
     */
    public get dcount(): DcountRequestBuilder {
        return new DcountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dcountA method.
     */
    public get dcountA(): DcountARequestBuilder {
        return new DcountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ddb method.
     */
    public get ddb(): DdbRequestBuilder {
        return new DdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dec2Bin method.
     */
    public get dec2Bin(): Dec2BinRequestBuilder {
        return new Dec2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dec2Hex method.
     */
    public get dec2Hex(): Dec2HexRequestBuilder {
        return new Dec2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dec2Oct method.
     */
    public get dec2Oct(): Dec2OctRequestBuilder {
        return new Dec2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the decimal method.
     */
    public get decimal(): DecimalRequestBuilder {
        return new DecimalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the degrees method.
     */
    public get degrees(): DegreesRequestBuilder {
        return new DegreesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the devSq method.
     */
    public get devSq(): DevSqRequestBuilder {
        return new DevSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dget method.
     */
    public get dget(): DgetRequestBuilder {
        return new DgetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the disc method.
     */
    public get disc(): DiscRequestBuilder {
        return new DiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dmax method.
     */
    public get dmax(): DmaxRequestBuilder {
        return new DmaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dmin method.
     */
    public get dmin(): DminRequestBuilder {
        return new DminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dollar method.
     */
    public get dollar(): DollarRequestBuilder {
        return new DollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dollarDe method.
     */
    public get dollarDe(): DollarDeRequestBuilder {
        return new DollarDeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dollarFr method.
     */
    public get dollarFr(): DollarFrRequestBuilder {
        return new DollarFrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dproduct method.
     */
    public get dproduct(): DproductRequestBuilder {
        return new DproductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dstDev method.
     */
    public get dstDev(): DstDevRequestBuilder {
        return new DstDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dstDevP method.
     */
    public get dstDevP(): DstDevPRequestBuilder {
        return new DstDevPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dsum method.
     */
    public get dsum(): DsumRequestBuilder {
        return new DsumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the duration method.
     */
    public get duration(): DurationRequestBuilder {
        return new DurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dvar method.
     */
    public get dvar(): DvarRequestBuilder {
        return new DvarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the dvarP method.
     */
    public get dvarP(): DvarPRequestBuilder {
        return new DvarPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ecma_Ceiling method.
     */
    public get ecma_Ceiling(): Ecma_CeilingRequestBuilder {
        return new Ecma_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the edate method.
     */
    public get edate(): EdateRequestBuilder {
        return new EdateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the effect method.
     */
    public get effect(): EffectRequestBuilder {
        return new EffectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the eoMonth method.
     */
    public get eoMonth(): EoMonthRequestBuilder {
        return new EoMonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the erf method.
     */
    public get erf(): ErfRequestBuilder {
        return new ErfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the erf_Precise method.
     */
    public get erf_Precise(): Erf_PreciseRequestBuilder {
        return new Erf_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the erfC method.
     */
    public get erfC(): ErfCRequestBuilder {
        return new ErfCRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the erfC_Precise method.
     */
    public get erfC_Precise(): ErfC_PreciseRequestBuilder {
        return new ErfC_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the error_Type method.
     */
    public get error_Type(): Error_TypeRequestBuilder {
        return new Error_TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the even method.
     */
    public get even(): EvenRequestBuilder {
        return new EvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the exact method.
     */
    public get exact(): ExactRequestBuilder {
        return new ExactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the exp method.
     */
    public get exp(): ExpRequestBuilder {
        return new ExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the expon_Dist method.
     */
    public get expon_Dist(): Expon_DistRequestBuilder {
        return new Expon_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the f_Dist method.
     */
    public get f_Dist(): F_DistRequestBuilder {
        return new F_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the f_Dist_RT method.
     */
    public get f_Dist_RT(): F_Dist_RTRequestBuilder {
        return new F_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the f_Inv method.
     */
    public get f_Inv(): F_InvRequestBuilder {
        return new F_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the f_Inv_RT method.
     */
    public get f_Inv_RT(): F_Inv_RTRequestBuilder {
        return new F_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fact method.
     */
    public get fact(): FactRequestBuilder {
        return new FactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the factDouble method.
     */
    public get factDouble(): FactDoubleRequestBuilder {
        return new FactDoubleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the false method.
     */
    public get falseEscaped(): FalseRequestBuilder {
        return new FalseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the find method.
     */
    public get find(): FindRequestBuilder {
        return new FindRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the findB method.
     */
    public get findB(): FindBRequestBuilder {
        return new FindBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fisher method.
     */
    public get fisher(): FisherRequestBuilder {
        return new FisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fisherInv method.
     */
    public get fisherInv(): FisherInvRequestBuilder {
        return new FisherInvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fixed method.
     */
    public get fixed(): FixedRequestBuilder {
        return new FixedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the floor_Math method.
     */
    public get floor_Math(): Floor_MathRequestBuilder {
        return new Floor_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the floor_Precise method.
     */
    public get floor_Precise(): Floor_PreciseRequestBuilder {
        return new Floor_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fv method.
     */
    public get fv(): FvRequestBuilder {
        return new FvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the fvschedule method.
     */
    public get fvschedule(): FvscheduleRequestBuilder {
        return new FvscheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gamma method.
     */
    public get gamma(): GammaRequestBuilder {
        return new GammaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gamma_Dist method.
     */
    public get gamma_Dist(): Gamma_DistRequestBuilder {
        return new Gamma_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gamma_Inv method.
     */
    public get gamma_Inv(): Gamma_InvRequestBuilder {
        return new Gamma_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gammaLn method.
     */
    public get gammaLn(): GammaLnRequestBuilder {
        return new GammaLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gammaLn_Precise method.
     */
    public get gammaLn_Precise(): GammaLn_PreciseRequestBuilder {
        return new GammaLn_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gauss method.
     */
    public get gauss(): GaussRequestBuilder {
        return new GaussRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the gcd method.
     */
    public get gcd(): GcdRequestBuilder {
        return new GcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the geoMean method.
     */
    public get geoMean(): GeoMeanRequestBuilder {
        return new GeoMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the geStep method.
     */
    public get geStep(): GeStepRequestBuilder {
        return new GeStepRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the harMean method.
     */
    public get harMean(): HarMeanRequestBuilder {
        return new HarMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hex2Bin method.
     */
    public get hex2Bin(): Hex2BinRequestBuilder {
        return new Hex2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hex2Dec method.
     */
    public get hex2Dec(): Hex2DecRequestBuilder {
        return new Hex2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hex2Oct method.
     */
    public get hex2Oct(): Hex2OctRequestBuilder {
        return new Hex2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hlookup method.
     */
    public get hlookup(): HlookupRequestBuilder {
        return new HlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hour method.
     */
    public get hour(): HourRequestBuilder {
        return new HourRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hyperlink method.
     */
    public get hyperlink(): HyperlinkRequestBuilder {
        return new HyperlinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the hypGeom_Dist method.
     */
    public get hypGeom_Dist(): HypGeom_DistRequestBuilder {
        return new HypGeom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the if method.
     */
    public get ifEscaped(): IfRequestBuilder {
        return new IfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imAbs method.
     */
    public get imAbs(): ImAbsRequestBuilder {
        return new ImAbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imaginary method.
     */
    public get imaginary(): ImaginaryRequestBuilder {
        return new ImaginaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imArgument method.
     */
    public get imArgument(): ImArgumentRequestBuilder {
        return new ImArgumentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imConjugate method.
     */
    public get imConjugate(): ImConjugateRequestBuilder {
        return new ImConjugateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imCos method.
     */
    public get imCos(): ImCosRequestBuilder {
        return new ImCosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imCosh method.
     */
    public get imCosh(): ImCoshRequestBuilder {
        return new ImCoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imCot method.
     */
    public get imCot(): ImCotRequestBuilder {
        return new ImCotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imCsc method.
     */
    public get imCsc(): ImCscRequestBuilder {
        return new ImCscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imCsch method.
     */
    public get imCsch(): ImCschRequestBuilder {
        return new ImCschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imDiv method.
     */
    public get imDiv(): ImDivRequestBuilder {
        return new ImDivRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imExp method.
     */
    public get imExp(): ImExpRequestBuilder {
        return new ImExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imLn method.
     */
    public get imLn(): ImLnRequestBuilder {
        return new ImLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imLog10 method.
     */
    public get imLog10(): ImLog10RequestBuilder {
        return new ImLog10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imLog2 method.
     */
    public get imLog2(): ImLog2RequestBuilder {
        return new ImLog2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imPower method.
     */
    public get imPower(): ImPowerRequestBuilder {
        return new ImPowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imProduct method.
     */
    public get imProduct(): ImProductRequestBuilder {
        return new ImProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imReal method.
     */
    public get imReal(): ImRealRequestBuilder {
        return new ImRealRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSec method.
     */
    public get imSec(): ImSecRequestBuilder {
        return new ImSecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSech method.
     */
    public get imSech(): ImSechRequestBuilder {
        return new ImSechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSin method.
     */
    public get imSin(): ImSinRequestBuilder {
        return new ImSinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSinh method.
     */
    public get imSinh(): ImSinhRequestBuilder {
        return new ImSinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSqrt method.
     */
    public get imSqrt(): ImSqrtRequestBuilder {
        return new ImSqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSub method.
     */
    public get imSub(): ImSubRequestBuilder {
        return new ImSubRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imSum method.
     */
    public get imSum(): ImSumRequestBuilder {
        return new ImSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the imTan method.
     */
    public get imTan(): ImTanRequestBuilder {
        return new ImTanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the int method.
     */
    public get int(): IntRequestBuilder {
        return new IntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the intRate method.
     */
    public get intRate(): IntRateRequestBuilder {
        return new IntRateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ipmt method.
     */
    public get ipmt(): IpmtRequestBuilder {
        return new IpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the irr method.
     */
    public get irr(): IrrRequestBuilder {
        return new IrrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isErr method.
     */
    public get isErr(): IsErrRequestBuilder {
        return new IsErrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isError method.
     */
    public get isError(): IsErrorRequestBuilder {
        return new IsErrorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isEven method.
     */
    public get isEven(): IsEvenRequestBuilder {
        return new IsEvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isFormula method.
     */
    public get isFormula(): IsFormulaRequestBuilder {
        return new IsFormulaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isLogical method.
     */
    public get isLogical(): IsLogicalRequestBuilder {
        return new IsLogicalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isNA method.
     */
    public get isNA(): IsNARequestBuilder {
        return new IsNARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isNonText method.
     */
    public get isNonText(): IsNonTextRequestBuilder {
        return new IsNonTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isNumber method.
     */
    public get isNumber(): IsNumberRequestBuilder {
        return new IsNumberRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the iso_Ceiling method.
     */
    public get iso_Ceiling(): Iso_CeilingRequestBuilder {
        return new Iso_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isOdd method.
     */
    public get isOdd(): IsOddRequestBuilder {
        return new IsOddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isoWeekNum method.
     */
    public get isoWeekNum(): IsoWeekNumRequestBuilder {
        return new IsoWeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ispmt method.
     */
    public get ispmt(): IspmtRequestBuilder {
        return new IspmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isref method.
     */
    public get isref(): IsrefRequestBuilder {
        return new IsrefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the isText method.
     */
    public get isText(): IsTextRequestBuilder {
        return new IsTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the kurt method.
     */
    public get kurt(): KurtRequestBuilder {
        return new KurtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the large method.
     */
    public get large(): LargeRequestBuilder {
        return new LargeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the lcm method.
     */
    public get lcm(): LcmRequestBuilder {
        return new LcmRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the left method.
     */
    public get left(): LeftRequestBuilder {
        return new LeftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the leftb method.
     */
    public get leftb(): LeftbRequestBuilder {
        return new LeftbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the len method.
     */
    public get len(): LenRequestBuilder {
        return new LenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the lenb method.
     */
    public get lenb(): LenbRequestBuilder {
        return new LenbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ln method.
     */
    public get ln(): LnRequestBuilder {
        return new LnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the log method.
     */
    public get log(): LogRequestBuilder {
        return new LogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the log10 method.
     */
    public get log10(): Log10RequestBuilder {
        return new Log10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the logNorm_Dist method.
     */
    public get logNorm_Dist(): LogNorm_DistRequestBuilder {
        return new LogNorm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the logNorm_Inv method.
     */
    public get logNorm_Inv(): LogNorm_InvRequestBuilder {
        return new LogNorm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the lookup method.
     */
    public get lookup(): LookupRequestBuilder {
        return new LookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the lower method.
     */
    public get lower(): LowerRequestBuilder {
        return new LowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the match method.
     */
    public get match(): MatchRequestBuilder {
        return new MatchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the max method.
     */
    public get max(): MaxRequestBuilder {
        return new MaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the maxA method.
     */
    public get maxA(): MaxARequestBuilder {
        return new MaxARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the mduration method.
     */
    public get mduration(): MdurationRequestBuilder {
        return new MdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the median method.
     */
    public get median(): MedianRequestBuilder {
        return new MedianRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the mid method.
     */
    public get mid(): MidRequestBuilder {
        return new MidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the midb method.
     */
    public get midb(): MidbRequestBuilder {
        return new MidbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the min method.
     */
    public get min(): MinRequestBuilder {
        return new MinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the minA method.
     */
    public get minA(): MinARequestBuilder {
        return new MinARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the minute method.
     */
    public get minute(): MinuteRequestBuilder {
        return new MinuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the mirr method.
     */
    public get mirr(): MirrRequestBuilder {
        return new MirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the mod method.
     */
    public get mod(): ModRequestBuilder {
        return new ModRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the month method.
     */
    public get month(): MonthRequestBuilder {
        return new MonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the mround method.
     */
    public get mround(): MroundRequestBuilder {
        return new MroundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the multiNomial method.
     */
    public get multiNomial(): MultiNomialRequestBuilder {
        return new MultiNomialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the n method.
     */
    public get n(): NRequestBuilder {
        return new NRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the na method.
     */
    public get na(): NaRequestBuilder {
        return new NaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the negBinom_Dist method.
     */
    public get negBinom_Dist(): NegBinom_DistRequestBuilder {
        return new NegBinom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the networkDays method.
     */
    public get networkDays(): NetworkDaysRequestBuilder {
        return new NetworkDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the networkDays_Intl method.
     */
    public get networkDays_Intl(): NetworkDays_IntlRequestBuilder {
        return new NetworkDays_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the nominal method.
     */
    public get nominal(): NominalRequestBuilder {
        return new NominalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the norm_Dist method.
     */
    public get norm_Dist(): Norm_DistRequestBuilder {
        return new Norm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the norm_Inv method.
     */
    public get norm_Inv(): Norm_InvRequestBuilder {
        return new Norm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the norm_S_Dist method.
     */
    public get norm_S_Dist(): Norm_S_DistRequestBuilder {
        return new Norm_S_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the norm_S_Inv method.
     */
    public get norm_S_Inv(): Norm_S_InvRequestBuilder {
        return new Norm_S_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the not method.
     */
    public get not(): NotRequestBuilder {
        return new NotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the now method.
     */
    public get now(): NowRequestBuilder {
        return new NowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the nper method.
     */
    public get nper(): NperRequestBuilder {
        return new NperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the npv method.
     */
    public get npv(): NpvRequestBuilder {
        return new NpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the numberValue method.
     */
    public get numberValue(): NumberValueRequestBuilder {
        return new NumberValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oct2Bin method.
     */
    public get oct2Bin(): Oct2BinRequestBuilder {
        return new Oct2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oct2Dec method.
     */
    public get oct2Dec(): Oct2DecRequestBuilder {
        return new Oct2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oct2Hex method.
     */
    public get oct2Hex(): Oct2HexRequestBuilder {
        return new Oct2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the odd method.
     */
    public get odd(): OddRequestBuilder {
        return new OddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oddFPrice method.
     */
    public get oddFPrice(): OddFPriceRequestBuilder {
        return new OddFPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oddFYield method.
     */
    public get oddFYield(): OddFYieldRequestBuilder {
        return new OddFYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oddLPrice method.
     */
    public get oddLPrice(): OddLPriceRequestBuilder {
        return new OddLPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the oddLYield method.
     */
    public get oddLYield(): OddLYieldRequestBuilder {
        return new OddLYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the or method.
     */
    public get or(): OrRequestBuilder {
        return new OrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the pduration method.
     */
    public get pduration(): PdurationRequestBuilder {
        return new PdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the percentile_Exc method.
     */
    public get percentile_Exc(): Percentile_ExcRequestBuilder {
        return new Percentile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the percentile_Inc method.
     */
    public get percentile_Inc(): Percentile_IncRequestBuilder {
        return new Percentile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the percentRank_Exc method.
     */
    public get percentRank_Exc(): PercentRank_ExcRequestBuilder {
        return new PercentRank_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the percentRank_Inc method.
     */
    public get percentRank_Inc(): PercentRank_IncRequestBuilder {
        return new PercentRank_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the permut method.
     */
    public get permut(): PermutRequestBuilder {
        return new PermutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the permutationa method.
     */
    public get permutationa(): PermutationaRequestBuilder {
        return new PermutationaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the phi method.
     */
    public get phi(): PhiRequestBuilder {
        return new PhiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the pi method.
     */
    public get pi(): PiRequestBuilder {
        return new PiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the pmt method.
     */
    public get pmt(): PmtRequestBuilder {
        return new PmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the poisson_Dist method.
     */
    public get poisson_Dist(): Poisson_DistRequestBuilder {
        return new Poisson_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the power method.
     */
    public get power(): PowerRequestBuilder {
        return new PowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the ppmt method.
     */
    public get ppmt(): PpmtRequestBuilder {
        return new PpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the price method.
     */
    public get price(): PriceRequestBuilder {
        return new PriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the priceDisc method.
     */
    public get priceDisc(): PriceDiscRequestBuilder {
        return new PriceDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the priceMat method.
     */
    public get priceMat(): PriceMatRequestBuilder {
        return new PriceMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the product method.
     */
    public get product(): ProductRequestBuilder {
        return new ProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the proper method.
     */
    public get proper(): ProperRequestBuilder {
        return new ProperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the pv method.
     */
    public get pv(): PvRequestBuilder {
        return new PvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the quartile_Exc method.
     */
    public get quartile_Exc(): Quartile_ExcRequestBuilder {
        return new Quartile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the quartile_Inc method.
     */
    public get quartile_Inc(): Quartile_IncRequestBuilder {
        return new Quartile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the quotient method.
     */
    public get quotient(): QuotientRequestBuilder {
        return new QuotientRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the radians method.
     */
    public get radians(): RadiansRequestBuilder {
        return new RadiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rand method.
     */
    public get rand(): RandRequestBuilder {
        return new RandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the randBetween method.
     */
    public get randBetween(): RandBetweenRequestBuilder {
        return new RandBetweenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rank_Avg method.
     */
    public get rank_Avg(): Rank_AvgRequestBuilder {
        return new Rank_AvgRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rank_Eq method.
     */
    public get rank_Eq(): Rank_EqRequestBuilder {
        return new Rank_EqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rate method.
     */
    public get rate(): RateRequestBuilder {
        return new RateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the received method.
     */
    public get received(): ReceivedRequestBuilder {
        return new ReceivedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the replace method.
     */
    public get replace(): ReplaceRequestBuilder {
        return new ReplaceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the replaceB method.
     */
    public get replaceB(): ReplaceBRequestBuilder {
        return new ReplaceBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rept method.
     */
    public get rept(): ReptRequestBuilder {
        return new ReptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the right method.
     */
    public get right(): RightRequestBuilder {
        return new RightRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rightb method.
     */
    public get rightb(): RightbRequestBuilder {
        return new RightbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the roman method.
     */
    public get roman(): RomanRequestBuilder {
        return new RomanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the round method.
     */
    public get round(): RoundRequestBuilder {
        return new RoundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the roundDown method.
     */
    public get roundDown(): RoundDownRequestBuilder {
        return new RoundDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the roundUp method.
     */
    public get roundUp(): RoundUpRequestBuilder {
        return new RoundUpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rows method.
     */
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the rri method.
     */
    public get rri(): RriRequestBuilder {
        return new RriRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sec method.
     */
    public get sec(): SecRequestBuilder {
        return new SecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sech method.
     */
    public get sech(): SechRequestBuilder {
        return new SechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the second method.
     */
    public get second(): SecondRequestBuilder {
        return new SecondRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the seriesSum method.
     */
    public get seriesSum(): SeriesSumRequestBuilder {
        return new SeriesSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sheet method.
     */
    public get sheet(): SheetRequestBuilder {
        return new SheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sheets method.
     */
    public get sheets(): SheetsRequestBuilder {
        return new SheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sign method.
     */
    public get sign(): SignRequestBuilder {
        return new SignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sin method.
     */
    public get sin(): SinRequestBuilder {
        return new SinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sinh method.
     */
    public get sinh(): SinhRequestBuilder {
        return new SinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the skew method.
     */
    public get skew(): SkewRequestBuilder {
        return new SkewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the skew_p method.
     */
    public get skew_p(): Skew_pRequestBuilder {
        return new Skew_pRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sln method.
     */
    public get sln(): SlnRequestBuilder {
        return new SlnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the small method.
     */
    public get small(): SmallRequestBuilder {
        return new SmallRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sqrt method.
     */
    public get sqrt(): SqrtRequestBuilder {
        return new SqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sqrtPi method.
     */
    public get sqrtPi(): SqrtPiRequestBuilder {
        return new SqrtPiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the standardize method.
     */
    public get standardize(): StandardizeRequestBuilder {
        return new StandardizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the stDev_P method.
     */
    public get stDev_P(): StDev_PRequestBuilder {
        return new StDev_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the stDev_S method.
     */
    public get stDev_S(): StDev_SRequestBuilder {
        return new StDev_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the stDevA method.
     */
    public get stDevA(): StDevARequestBuilder {
        return new StDevARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the stDevPA method.
     */
    public get stDevPA(): StDevPARequestBuilder {
        return new StDevPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the substitute method.
     */
    public get substitute(): SubstituteRequestBuilder {
        return new SubstituteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the subtotal method.
     */
    public get subtotal(): SubtotalRequestBuilder {
        return new SubtotalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sum method.
     */
    public get sum(): SumRequestBuilder {
        return new SumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sumIf method.
     */
    public get sumIf(): SumIfRequestBuilder {
        return new SumIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sumIfs method.
     */
    public get sumIfs(): SumIfsRequestBuilder {
        return new SumIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the sumSq method.
     */
    public get sumSq(): SumSqRequestBuilder {
        return new SumSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the syd method.
     */
    public get syd(): SydRequestBuilder {
        return new SydRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t method.
     */
    public get t(): TRequestBuilder {
        return new TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t_Dist method.
     */
    public get t_Dist(): T_DistRequestBuilder {
        return new T_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t_Dist_2T method.
     */
    public get t_Dist_2T(): T_Dist_2TRequestBuilder {
        return new T_Dist_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t_Dist_RT method.
     */
    public get t_Dist_RT(): T_Dist_RTRequestBuilder {
        return new T_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t_Inv method.
     */
    public get t_Inv(): T_InvRequestBuilder {
        return new T_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the t_Inv_2T method.
     */
    public get t_Inv_2T(): T_Inv_2TRequestBuilder {
        return new T_Inv_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tan method.
     */
    public get tan(): TanRequestBuilder {
        return new TanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tanh method.
     */
    public get tanh(): TanhRequestBuilder {
        return new TanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tbillEq method.
     */
    public get tbillEq(): TbillEqRequestBuilder {
        return new TbillEqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tbillPrice method.
     */
    public get tbillPrice(): TbillPriceRequestBuilder {
        return new TbillPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the tbillYield method.
     */
    public get tbillYield(): TbillYieldRequestBuilder {
        return new TbillYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the text method.
     */
    public get text(): TextRequestBuilder {
        return new TextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the time method.
     */
    public get time(): TimeRequestBuilder {
        return new TimeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the timevalue method.
     */
    public get timevalue(): TimevalueRequestBuilder {
        return new TimevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the today method.
     */
    public get today(): TodayRequestBuilder {
        return new TodayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the trim method.
     */
    public get trim(): TrimRequestBuilder {
        return new TrimRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the trimMean method.
     */
    public get trimMean(): TrimMeanRequestBuilder {
        return new TrimMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the true method.
     */
    public get trueEscaped(): TrueRequestBuilder {
        return new TrueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the trunc method.
     */
    public get trunc(): TruncRequestBuilder {
        return new TruncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the type method.
     */
    public get type(): TypeRequestBuilder {
        return new TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unichar method.
     */
    public get unichar(): UnicharRequestBuilder {
        return new UnicharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unicode method.
     */
    public get unicode(): UnicodeRequestBuilder {
        return new UnicodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the upper method.
     */
    public get upper(): UpperRequestBuilder {
        return new UpperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the usdollar method.
     */
    public get usdollar(): UsdollarRequestBuilder {
        return new UsdollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the value method.
     */
    public get value(): ValueRequestBuilder {
        return new ValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the var_P method.
     */
    public get var_P(): Var_PRequestBuilder {
        return new Var_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the var_S method.
     */
    public get var_S(): Var_SRequestBuilder {
        return new Var_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the varA method.
     */
    public get varA(): VarARequestBuilder {
        return new VarARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the varPA method.
     */
    public get varPA(): VarPARequestBuilder {
        return new VarPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the vdb method.
     */
    public get vdb(): VdbRequestBuilder {
        return new VdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the vlookup method.
     */
    public get vlookup(): VlookupRequestBuilder {
        return new VlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the weekday method.
     */
    public get weekday(): WeekdayRequestBuilder {
        return new WeekdayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the weekNum method.
     */
    public get weekNum(): WeekNumRequestBuilder {
        return new WeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the weibull_Dist method.
     */
    public get weibull_Dist(): Weibull_DistRequestBuilder {
        return new Weibull_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the workDay method.
     */
    public get workDay(): WorkDayRequestBuilder {
        return new WorkDayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the workDay_Intl method.
     */
    public get workDay_Intl(): WorkDay_IntlRequestBuilder {
        return new WorkDay_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the xirr method.
     */
    public get xirr(): XirrRequestBuilder {
        return new XirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the xnpv method.
     */
    public get xnpv(): XnpvRequestBuilder {
        return new XnpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the xor method.
     */
    public get xor(): XorRequestBuilder {
        return new XorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the year method.
     */
    public get year(): YearRequestBuilder {
        return new YearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the yearFrac method.
     */
    public get yearFrac(): YearFracRequestBuilder {
        return new YearFracRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the yield method.
     */
    public get yield(): YieldRequestBuilder {
        return new YieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the yieldDisc method.
     */
    public get yieldDisc(): YieldDiscRequestBuilder {
        return new YieldDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the yieldMat method.
     */
    public get yieldMat(): YieldMatRequestBuilder {
        return new YieldMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the z_Test method.
     */
    public get z_Test(): Z_TestRequestBuilder {
        return new Z_TestRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FunctionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions{?%24select,%24expand}");
    };
    /**
     * Delete navigation property functions for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: FunctionsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get functions from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctions
     */
    public get(requestConfiguration?: FunctionsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookFunctions | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFunctions>(requestInfo, createWorkbookFunctionsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property functions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctions
     */
    public patch(body: WorkbookFunctions, requestConfiguration?: FunctionsRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookFunctions | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFunctions>(requestInfo, createWorkbookFunctionsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property functions for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: FunctionsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get functions from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FunctionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property functions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookFunctions, requestConfiguration?: FunctionsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookFunctions);
        return requestInfo;
    };
}
