import {WorkbookFunctions} from '../../../../../../models/';
import {createWorkbookFunctionsFromDiscriminatorValue} from '../../../../../../models/createWorkbookFunctionsFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {FunctionsRequestBuilderDeleteRequestConfiguration} from './functionsRequestBuilderDeleteRequestConfiguration';
import {FunctionsRequestBuilderGetRequestConfiguration} from './functionsRequestBuilderGetRequestConfiguration';
import {FunctionsRequestBuilderPatchRequestConfiguration} from './functionsRequestBuilderPatchRequestConfiguration';
import {AbsRequestBuilder} from './microsoftGraphAbs/absRequestBuilder';
import {AccrIntRequestBuilder} from './microsoftGraphAccrInt/accrIntRequestBuilder';
import {AccrIntMRequestBuilder} from './microsoftGraphAccrIntM/accrIntMRequestBuilder';
import {AcosRequestBuilder} from './microsoftGraphAcos/acosRequestBuilder';
import {AcoshRequestBuilder} from './microsoftGraphAcosh/acoshRequestBuilder';
import {AcotRequestBuilder} from './microsoftGraphAcot/acotRequestBuilder';
import {AcothRequestBuilder} from './microsoftGraphAcoth/acothRequestBuilder';
import {AmorDegrcRequestBuilder} from './microsoftGraphAmorDegrc/amorDegrcRequestBuilder';
import {AmorLincRequestBuilder} from './microsoftGraphAmorLinc/amorLincRequestBuilder';
import {AndRequestBuilder} from './microsoftGraphAnd/andRequestBuilder';
import {ArabicRequestBuilder} from './microsoftGraphArabic/arabicRequestBuilder';
import {AreasRequestBuilder} from './microsoftGraphAreas/areasRequestBuilder';
import {AscRequestBuilder} from './microsoftGraphAsc/ascRequestBuilder';
import {AsinRequestBuilder} from './microsoftGraphAsin/asinRequestBuilder';
import {AsinhRequestBuilder} from './microsoftGraphAsinh/asinhRequestBuilder';
import {AtanRequestBuilder} from './microsoftGraphAtan/atanRequestBuilder';
import {Atan2RequestBuilder} from './microsoftGraphAtan2/atan2RequestBuilder';
import {AtanhRequestBuilder} from './microsoftGraphAtanh/atanhRequestBuilder';
import {AveDevRequestBuilder} from './microsoftGraphAveDev/aveDevRequestBuilder';
import {AverageRequestBuilder} from './microsoftGraphAverage/averageRequestBuilder';
import {AverageARequestBuilder} from './microsoftGraphAverageA/averageARequestBuilder';
import {AverageIfRequestBuilder} from './microsoftGraphAverageIf/averageIfRequestBuilder';
import {AverageIfsRequestBuilder} from './microsoftGraphAverageIfs/averageIfsRequestBuilder';
import {BahtTextRequestBuilder} from './microsoftGraphBahtText/bahtTextRequestBuilder';
import {BaseRequestBuilder} from './microsoftGraphBase/baseRequestBuilder';
import {BesselIRequestBuilder} from './microsoftGraphBesselI/besselIRequestBuilder';
import {BesselJRequestBuilder} from './microsoftGraphBesselJ/besselJRequestBuilder';
import {BesselKRequestBuilder} from './microsoftGraphBesselK/besselKRequestBuilder';
import {BesselYRequestBuilder} from './microsoftGraphBesselY/besselYRequestBuilder';
import {Beta_DistRequestBuilder} from './microsoftGraphBeta_Dist/beta_DistRequestBuilder';
import {Beta_InvRequestBuilder} from './microsoftGraphBeta_Inv/beta_InvRequestBuilder';
import {Bin2DecRequestBuilder} from './microsoftGraphBin2Dec/bin2DecRequestBuilder';
import {Bin2HexRequestBuilder} from './microsoftGraphBin2Hex/bin2HexRequestBuilder';
import {Bin2OctRequestBuilder} from './microsoftGraphBin2Oct/bin2OctRequestBuilder';
import {Binom_Dist_RangeRequestBuilder} from './microsoftGraphBinom_Dist_Range/binom_Dist_RangeRequestBuilder';
import {Binom_DistRequestBuilder} from './microsoftGraphBinom_Dist/binom_DistRequestBuilder';
import {Binom_InvRequestBuilder} from './microsoftGraphBinom_Inv/binom_InvRequestBuilder';
import {BitandRequestBuilder} from './microsoftGraphBitand/bitandRequestBuilder';
import {BitlshiftRequestBuilder} from './microsoftGraphBitlshift/bitlshiftRequestBuilder';
import {BitorRequestBuilder} from './microsoftGraphBitor/bitorRequestBuilder';
import {BitrshiftRequestBuilder} from './microsoftGraphBitrshift/bitrshiftRequestBuilder';
import {BitxorRequestBuilder} from './microsoftGraphBitxor/bitxorRequestBuilder';
import {Ceiling_MathRequestBuilder} from './microsoftGraphCeiling_Math/ceiling_MathRequestBuilder';
import {Ceiling_PreciseRequestBuilder} from './microsoftGraphCeiling_Precise/ceiling_PreciseRequestBuilder';
import {CharRequestBuilder} from './microsoftGraphChar/charRequestBuilder';
import {ChiSq_Dist_RTRequestBuilder} from './microsoftGraphChiSq_Dist_RT/chiSq_Dist_RTRequestBuilder';
import {ChiSq_DistRequestBuilder} from './microsoftGraphChiSq_Dist/chiSq_DistRequestBuilder';
import {ChiSq_Inv_RTRequestBuilder} from './microsoftGraphChiSq_Inv_RT/chiSq_Inv_RTRequestBuilder';
import {ChiSq_InvRequestBuilder} from './microsoftGraphChiSq_Inv/chiSq_InvRequestBuilder';
import {ChooseRequestBuilder} from './microsoftGraphChoose/chooseRequestBuilder';
import {CleanRequestBuilder} from './microsoftGraphClean/cleanRequestBuilder';
import {CodeRequestBuilder} from './microsoftGraphCode/codeRequestBuilder';
import {ColumnsRequestBuilder} from './microsoftGraphColumns/columnsRequestBuilder';
import {CombinRequestBuilder} from './microsoftGraphCombin/combinRequestBuilder';
import {CombinaRequestBuilder} from './microsoftGraphCombina/combinaRequestBuilder';
import {ComplexRequestBuilder} from './microsoftGraphComplex/complexRequestBuilder';
import {ConcatenateRequestBuilder} from './microsoftGraphConcatenate/concatenateRequestBuilder';
import {Confidence_NormRequestBuilder} from './microsoftGraphConfidence_Norm/confidence_NormRequestBuilder';
import {Confidence_TRequestBuilder} from './microsoftGraphConfidence_T/confidence_TRequestBuilder';
import {ConvertRequestBuilder} from './microsoftGraphConvert/convertRequestBuilder';
import {CosRequestBuilder} from './microsoftGraphCos/cosRequestBuilder';
import {CoshRequestBuilder} from './microsoftGraphCosh/coshRequestBuilder';
import {CotRequestBuilder} from './microsoftGraphCot/cotRequestBuilder';
import {CothRequestBuilder} from './microsoftGraphCoth/cothRequestBuilder';
import {CountRequestBuilder} from './microsoftGraphCount/countRequestBuilder';
import {CountARequestBuilder} from './microsoftGraphCountA/countARequestBuilder';
import {CountBlankRequestBuilder} from './microsoftGraphCountBlank/countBlankRequestBuilder';
import {CountIfRequestBuilder} from './microsoftGraphCountIf/countIfRequestBuilder';
import {CountIfsRequestBuilder} from './microsoftGraphCountIfs/countIfsRequestBuilder';
import {CoupDayBsRequestBuilder} from './microsoftGraphCoupDayBs/coupDayBsRequestBuilder';
import {CoupDaysRequestBuilder} from './microsoftGraphCoupDays/coupDaysRequestBuilder';
import {CoupDaysNcRequestBuilder} from './microsoftGraphCoupDaysNc/coupDaysNcRequestBuilder';
import {CoupNcdRequestBuilder} from './microsoftGraphCoupNcd/coupNcdRequestBuilder';
import {CoupNumRequestBuilder} from './microsoftGraphCoupNum/coupNumRequestBuilder';
import {CoupPcdRequestBuilder} from './microsoftGraphCoupPcd/coupPcdRequestBuilder';
import {CscRequestBuilder} from './microsoftGraphCsc/cscRequestBuilder';
import {CschRequestBuilder} from './microsoftGraphCsch/cschRequestBuilder';
import {CumIPmtRequestBuilder} from './microsoftGraphCumIPmt/cumIPmtRequestBuilder';
import {CumPrincRequestBuilder} from './microsoftGraphCumPrinc/cumPrincRequestBuilder';
import {DateRequestBuilder} from './microsoftGraphDate/dateRequestBuilder';
import {DatevalueRequestBuilder} from './microsoftGraphDatevalue/datevalueRequestBuilder';
import {DaverageRequestBuilder} from './microsoftGraphDaverage/daverageRequestBuilder';
import {DayRequestBuilder} from './microsoftGraphDay/dayRequestBuilder';
import {DaysRequestBuilder} from './microsoftGraphDays/daysRequestBuilder';
import {Days360RequestBuilder} from './microsoftGraphDays360/days360RequestBuilder';
import {DbRequestBuilder} from './microsoftGraphDb/dbRequestBuilder';
import {DbcsRequestBuilder} from './microsoftGraphDbcs/dbcsRequestBuilder';
import {DcountRequestBuilder} from './microsoftGraphDcount/dcountRequestBuilder';
import {DcountARequestBuilder} from './microsoftGraphDcountA/dcountARequestBuilder';
import {DdbRequestBuilder} from './microsoftGraphDdb/ddbRequestBuilder';
import {Dec2BinRequestBuilder} from './microsoftGraphDec2Bin/dec2BinRequestBuilder';
import {Dec2HexRequestBuilder} from './microsoftGraphDec2Hex/dec2HexRequestBuilder';
import {Dec2OctRequestBuilder} from './microsoftGraphDec2Oct/dec2OctRequestBuilder';
import {DecimalRequestBuilder} from './microsoftGraphDecimal/decimalRequestBuilder';
import {DegreesRequestBuilder} from './microsoftGraphDegrees/degreesRequestBuilder';
import {DeltaRequestBuilder} from './microsoftGraphDelta/deltaRequestBuilder';
import {DevSqRequestBuilder} from './microsoftGraphDevSq/devSqRequestBuilder';
import {DgetRequestBuilder} from './microsoftGraphDget/dgetRequestBuilder';
import {DiscRequestBuilder} from './microsoftGraphDisc/discRequestBuilder';
import {DmaxRequestBuilder} from './microsoftGraphDmax/dmaxRequestBuilder';
import {DminRequestBuilder} from './microsoftGraphDmin/dminRequestBuilder';
import {DollarRequestBuilder} from './microsoftGraphDollar/dollarRequestBuilder';
import {DollarDeRequestBuilder} from './microsoftGraphDollarDe/dollarDeRequestBuilder';
import {DollarFrRequestBuilder} from './microsoftGraphDollarFr/dollarFrRequestBuilder';
import {DproductRequestBuilder} from './microsoftGraphDproduct/dproductRequestBuilder';
import {DstDevRequestBuilder} from './microsoftGraphDstDev/dstDevRequestBuilder';
import {DstDevPRequestBuilder} from './microsoftGraphDstDevP/dstDevPRequestBuilder';
import {DsumRequestBuilder} from './microsoftGraphDsum/dsumRequestBuilder';
import {DurationRequestBuilder} from './microsoftGraphDuration/durationRequestBuilder';
import {DvarRequestBuilder} from './microsoftGraphDvar/dvarRequestBuilder';
import {DvarPRequestBuilder} from './microsoftGraphDvarP/dvarPRequestBuilder';
import {Ecma_CeilingRequestBuilder} from './microsoftGraphEcma_Ceiling/ecma_CeilingRequestBuilder';
import {EdateRequestBuilder} from './microsoftGraphEdate/edateRequestBuilder';
import {EffectRequestBuilder} from './microsoftGraphEffect/effectRequestBuilder';
import {EoMonthRequestBuilder} from './microsoftGraphEoMonth/eoMonthRequestBuilder';
import {Erf_PreciseRequestBuilder} from './microsoftGraphErf_Precise/erf_PreciseRequestBuilder';
import {ErfRequestBuilder} from './microsoftGraphErf/erfRequestBuilder';
import {ErfC_PreciseRequestBuilder} from './microsoftGraphErfC_Precise/erfC_PreciseRequestBuilder';
import {ErfCRequestBuilder} from './microsoftGraphErfC/erfCRequestBuilder';
import {Error_TypeRequestBuilder} from './microsoftGraphError_Type/error_TypeRequestBuilder';
import {EvenRequestBuilder} from './microsoftGraphEven/evenRequestBuilder';
import {ExactRequestBuilder} from './microsoftGraphExact/exactRequestBuilder';
import {ExpRequestBuilder} from './microsoftGraphExp/expRequestBuilder';
import {Expon_DistRequestBuilder} from './microsoftGraphExpon_Dist/expon_DistRequestBuilder';
import {F_Dist_RTRequestBuilder} from './microsoftGraphF_Dist_RT/f_Dist_RTRequestBuilder';
import {F_DistRequestBuilder} from './microsoftGraphF_Dist/f_DistRequestBuilder';
import {F_Inv_RTRequestBuilder} from './microsoftGraphF_Inv_RT/f_Inv_RTRequestBuilder';
import {F_InvRequestBuilder} from './microsoftGraphF_Inv/f_InvRequestBuilder';
import {FactRequestBuilder} from './microsoftGraphFact/factRequestBuilder';
import {FactDoubleRequestBuilder} from './microsoftGraphFactDouble/factDoubleRequestBuilder';
import {FalseRequestBuilder} from './microsoftGraphFalse/falseRequestBuilder';
import {FindRequestBuilder} from './microsoftGraphFind/findRequestBuilder';
import {FindBRequestBuilder} from './microsoftGraphFindB/findBRequestBuilder';
import {FisherRequestBuilder} from './microsoftGraphFisher/fisherRequestBuilder';
import {FisherInvRequestBuilder} from './microsoftGraphFisherInv/fisherInvRequestBuilder';
import {FixedRequestBuilder} from './microsoftGraphFixed/fixedRequestBuilder';
import {Floor_MathRequestBuilder} from './microsoftGraphFloor_Math/floor_MathRequestBuilder';
import {Floor_PreciseRequestBuilder} from './microsoftGraphFloor_Precise/floor_PreciseRequestBuilder';
import {FvRequestBuilder} from './microsoftGraphFv/fvRequestBuilder';
import {FvscheduleRequestBuilder} from './microsoftGraphFvschedule/fvscheduleRequestBuilder';
import {Gamma_DistRequestBuilder} from './microsoftGraphGamma_Dist/gamma_DistRequestBuilder';
import {Gamma_InvRequestBuilder} from './microsoftGraphGamma_Inv/gamma_InvRequestBuilder';
import {GammaRequestBuilder} from './microsoftGraphGamma/gammaRequestBuilder';
import {GammaLn_PreciseRequestBuilder} from './microsoftGraphGammaLn_Precise/gammaLn_PreciseRequestBuilder';
import {GammaLnRequestBuilder} from './microsoftGraphGammaLn/gammaLnRequestBuilder';
import {GaussRequestBuilder} from './microsoftGraphGauss/gaussRequestBuilder';
import {GcdRequestBuilder} from './microsoftGraphGcd/gcdRequestBuilder';
import {GeoMeanRequestBuilder} from './microsoftGraphGeoMean/geoMeanRequestBuilder';
import {GeStepRequestBuilder} from './microsoftGraphGeStep/geStepRequestBuilder';
import {HarMeanRequestBuilder} from './microsoftGraphHarMean/harMeanRequestBuilder';
import {Hex2BinRequestBuilder} from './microsoftGraphHex2Bin/hex2BinRequestBuilder';
import {Hex2DecRequestBuilder} from './microsoftGraphHex2Dec/hex2DecRequestBuilder';
import {Hex2OctRequestBuilder} from './microsoftGraphHex2Oct/hex2OctRequestBuilder';
import {HlookupRequestBuilder} from './microsoftGraphHlookup/hlookupRequestBuilder';
import {HourRequestBuilder} from './microsoftGraphHour/hourRequestBuilder';
import {HyperlinkRequestBuilder} from './microsoftGraphHyperlink/hyperlinkRequestBuilder';
import {HypGeom_DistRequestBuilder} from './microsoftGraphHypGeom_Dist/hypGeom_DistRequestBuilder';
import {IfRequestBuilder} from './microsoftGraphIf/ifRequestBuilder';
import {ImAbsRequestBuilder} from './microsoftGraphImAbs/imAbsRequestBuilder';
import {ImaginaryRequestBuilder} from './microsoftGraphImaginary/imaginaryRequestBuilder';
import {ImArgumentRequestBuilder} from './microsoftGraphImArgument/imArgumentRequestBuilder';
import {ImConjugateRequestBuilder} from './microsoftGraphImConjugate/imConjugateRequestBuilder';
import {ImCosRequestBuilder} from './microsoftGraphImCos/imCosRequestBuilder';
import {ImCoshRequestBuilder} from './microsoftGraphImCosh/imCoshRequestBuilder';
import {ImCotRequestBuilder} from './microsoftGraphImCot/imCotRequestBuilder';
import {ImCscRequestBuilder} from './microsoftGraphImCsc/imCscRequestBuilder';
import {ImCschRequestBuilder} from './microsoftGraphImCsch/imCschRequestBuilder';
import {ImDivRequestBuilder} from './microsoftGraphImDiv/imDivRequestBuilder';
import {ImExpRequestBuilder} from './microsoftGraphImExp/imExpRequestBuilder';
import {ImLnRequestBuilder} from './microsoftGraphImLn/imLnRequestBuilder';
import {ImLog10RequestBuilder} from './microsoftGraphImLog10/imLog10RequestBuilder';
import {ImLog2RequestBuilder} from './microsoftGraphImLog2/imLog2RequestBuilder';
import {ImPowerRequestBuilder} from './microsoftGraphImPower/imPowerRequestBuilder';
import {ImProductRequestBuilder} from './microsoftGraphImProduct/imProductRequestBuilder';
import {ImRealRequestBuilder} from './microsoftGraphImReal/imRealRequestBuilder';
import {ImSecRequestBuilder} from './microsoftGraphImSec/imSecRequestBuilder';
import {ImSechRequestBuilder} from './microsoftGraphImSech/imSechRequestBuilder';
import {ImSinRequestBuilder} from './microsoftGraphImSin/imSinRequestBuilder';
import {ImSinhRequestBuilder} from './microsoftGraphImSinh/imSinhRequestBuilder';
import {ImSqrtRequestBuilder} from './microsoftGraphImSqrt/imSqrtRequestBuilder';
import {ImSubRequestBuilder} from './microsoftGraphImSub/imSubRequestBuilder';
import {ImSumRequestBuilder} from './microsoftGraphImSum/imSumRequestBuilder';
import {ImTanRequestBuilder} from './microsoftGraphImTan/imTanRequestBuilder';
import {IntRequestBuilder} from './microsoftGraphInt/intRequestBuilder';
import {IntRateRequestBuilder} from './microsoftGraphIntRate/intRateRequestBuilder';
import {IpmtRequestBuilder} from './microsoftGraphIpmt/ipmtRequestBuilder';
import {IrrRequestBuilder} from './microsoftGraphIrr/irrRequestBuilder';
import {IsErrRequestBuilder} from './microsoftGraphIsErr/isErrRequestBuilder';
import {IsErrorRequestBuilder} from './microsoftGraphIsError/isErrorRequestBuilder';
import {IsEvenRequestBuilder} from './microsoftGraphIsEven/isEvenRequestBuilder';
import {IsFormulaRequestBuilder} from './microsoftGraphIsFormula/isFormulaRequestBuilder';
import {IsLogicalRequestBuilder} from './microsoftGraphIsLogical/isLogicalRequestBuilder';
import {IsNARequestBuilder} from './microsoftGraphIsNA/isNARequestBuilder';
import {IsNonTextRequestBuilder} from './microsoftGraphIsNonText/isNonTextRequestBuilder';
import {IsNumberRequestBuilder} from './microsoftGraphIsNumber/isNumberRequestBuilder';
import {Iso_CeilingRequestBuilder} from './microsoftGraphIso_Ceiling/iso_CeilingRequestBuilder';
import {IsOddRequestBuilder} from './microsoftGraphIsOdd/isOddRequestBuilder';
import {IsoWeekNumRequestBuilder} from './microsoftGraphIsoWeekNum/isoWeekNumRequestBuilder';
import {IspmtRequestBuilder} from './microsoftGraphIspmt/ispmtRequestBuilder';
import {IsrefRequestBuilder} from './microsoftGraphIsref/isrefRequestBuilder';
import {IsTextRequestBuilder} from './microsoftGraphIsText/isTextRequestBuilder';
import {KurtRequestBuilder} from './microsoftGraphKurt/kurtRequestBuilder';
import {LargeRequestBuilder} from './microsoftGraphLarge/largeRequestBuilder';
import {LcmRequestBuilder} from './microsoftGraphLcm/lcmRequestBuilder';
import {LeftRequestBuilder} from './microsoftGraphLeft/leftRequestBuilder';
import {LeftbRequestBuilder} from './microsoftGraphLeftb/leftbRequestBuilder';
import {LenRequestBuilder} from './microsoftGraphLen/lenRequestBuilder';
import {LenbRequestBuilder} from './microsoftGraphLenb/lenbRequestBuilder';
import {LnRequestBuilder} from './microsoftGraphLn/lnRequestBuilder';
import {LogRequestBuilder} from './microsoftGraphLog/logRequestBuilder';
import {Log10RequestBuilder} from './microsoftGraphLog10/log10RequestBuilder';
import {LogNorm_DistRequestBuilder} from './microsoftGraphLogNorm_Dist/logNorm_DistRequestBuilder';
import {LogNorm_InvRequestBuilder} from './microsoftGraphLogNorm_Inv/logNorm_InvRequestBuilder';
import {LookupRequestBuilder} from './microsoftGraphLookup/lookupRequestBuilder';
import {LowerRequestBuilder} from './microsoftGraphLower/lowerRequestBuilder';
import {MatchRequestBuilder} from './microsoftGraphMatch/matchRequestBuilder';
import {MaxRequestBuilder} from './microsoftGraphMax/maxRequestBuilder';
import {MaxARequestBuilder} from './microsoftGraphMaxA/maxARequestBuilder';
import {MdurationRequestBuilder} from './microsoftGraphMduration/mdurationRequestBuilder';
import {MedianRequestBuilder} from './microsoftGraphMedian/medianRequestBuilder';
import {MidRequestBuilder} from './microsoftGraphMid/midRequestBuilder';
import {MidbRequestBuilder} from './microsoftGraphMidb/midbRequestBuilder';
import {MinRequestBuilder} from './microsoftGraphMin/minRequestBuilder';
import {MinARequestBuilder} from './microsoftGraphMinA/minARequestBuilder';
import {MinuteRequestBuilder} from './microsoftGraphMinute/minuteRequestBuilder';
import {MirrRequestBuilder} from './microsoftGraphMirr/mirrRequestBuilder';
import {ModRequestBuilder} from './microsoftGraphMod/modRequestBuilder';
import {MonthRequestBuilder} from './microsoftGraphMonth/monthRequestBuilder';
import {MroundRequestBuilder} from './microsoftGraphMround/mroundRequestBuilder';
import {MultiNomialRequestBuilder} from './microsoftGraphMultiNomial/multiNomialRequestBuilder';
import {NRequestBuilder} from './microsoftGraphN/nRequestBuilder';
import {NaRequestBuilder} from './microsoftGraphNa/naRequestBuilder';
import {NegBinom_DistRequestBuilder} from './microsoftGraphNegBinom_Dist/negBinom_DistRequestBuilder';
import {NetworkDays_IntlRequestBuilder} from './microsoftGraphNetworkDays_Intl/networkDays_IntlRequestBuilder';
import {NetworkDaysRequestBuilder} from './microsoftGraphNetworkDays/networkDaysRequestBuilder';
import {NominalRequestBuilder} from './microsoftGraphNominal/nominalRequestBuilder';
import {Norm_DistRequestBuilder} from './microsoftGraphNorm_Dist/norm_DistRequestBuilder';
import {Norm_InvRequestBuilder} from './microsoftGraphNorm_Inv/norm_InvRequestBuilder';
import {Norm_S_DistRequestBuilder} from './microsoftGraphNorm_S_Dist/norm_S_DistRequestBuilder';
import {Norm_S_InvRequestBuilder} from './microsoftGraphNorm_S_Inv/norm_S_InvRequestBuilder';
import {NotRequestBuilder} from './microsoftGraphNot/notRequestBuilder';
import {NowRequestBuilder} from './microsoftGraphNow/nowRequestBuilder';
import {NperRequestBuilder} from './microsoftGraphNper/nperRequestBuilder';
import {NpvRequestBuilder} from './microsoftGraphNpv/npvRequestBuilder';
import {NumberValueRequestBuilder} from './microsoftGraphNumberValue/numberValueRequestBuilder';
import {Oct2BinRequestBuilder} from './microsoftGraphOct2Bin/oct2BinRequestBuilder';
import {Oct2DecRequestBuilder} from './microsoftGraphOct2Dec/oct2DecRequestBuilder';
import {Oct2HexRequestBuilder} from './microsoftGraphOct2Hex/oct2HexRequestBuilder';
import {OddRequestBuilder} from './microsoftGraphOdd/oddRequestBuilder';
import {OddFPriceRequestBuilder} from './microsoftGraphOddFPrice/oddFPriceRequestBuilder';
import {OddFYieldRequestBuilder} from './microsoftGraphOddFYield/oddFYieldRequestBuilder';
import {OddLPriceRequestBuilder} from './microsoftGraphOddLPrice/oddLPriceRequestBuilder';
import {OddLYieldRequestBuilder} from './microsoftGraphOddLYield/oddLYieldRequestBuilder';
import {OrRequestBuilder} from './microsoftGraphOr/orRequestBuilder';
import {PdurationRequestBuilder} from './microsoftGraphPduration/pdurationRequestBuilder';
import {Percentile_ExcRequestBuilder} from './microsoftGraphPercentile_Exc/percentile_ExcRequestBuilder';
import {Percentile_IncRequestBuilder} from './microsoftGraphPercentile_Inc/percentile_IncRequestBuilder';
import {PercentRank_ExcRequestBuilder} from './microsoftGraphPercentRank_Exc/percentRank_ExcRequestBuilder';
import {PercentRank_IncRequestBuilder} from './microsoftGraphPercentRank_Inc/percentRank_IncRequestBuilder';
import {PermutRequestBuilder} from './microsoftGraphPermut/permutRequestBuilder';
import {PermutationaRequestBuilder} from './microsoftGraphPermutationa/permutationaRequestBuilder';
import {PhiRequestBuilder} from './microsoftGraphPhi/phiRequestBuilder';
import {PiRequestBuilder} from './microsoftGraphPi/piRequestBuilder';
import {PmtRequestBuilder} from './microsoftGraphPmt/pmtRequestBuilder';
import {Poisson_DistRequestBuilder} from './microsoftGraphPoisson_Dist/poisson_DistRequestBuilder';
import {PowerRequestBuilder} from './microsoftGraphPower/powerRequestBuilder';
import {PpmtRequestBuilder} from './microsoftGraphPpmt/ppmtRequestBuilder';
import {PriceRequestBuilder} from './microsoftGraphPrice/priceRequestBuilder';
import {PriceDiscRequestBuilder} from './microsoftGraphPriceDisc/priceDiscRequestBuilder';
import {PriceMatRequestBuilder} from './microsoftGraphPriceMat/priceMatRequestBuilder';
import {ProductRequestBuilder} from './microsoftGraphProduct/productRequestBuilder';
import {ProperRequestBuilder} from './microsoftGraphProper/properRequestBuilder';
import {PvRequestBuilder} from './microsoftGraphPv/pvRequestBuilder';
import {Quartile_ExcRequestBuilder} from './microsoftGraphQuartile_Exc/quartile_ExcRequestBuilder';
import {Quartile_IncRequestBuilder} from './microsoftGraphQuartile_Inc/quartile_IncRequestBuilder';
import {QuotientRequestBuilder} from './microsoftGraphQuotient/quotientRequestBuilder';
import {RadiansRequestBuilder} from './microsoftGraphRadians/radiansRequestBuilder';
import {RandRequestBuilder} from './microsoftGraphRand/randRequestBuilder';
import {RandBetweenRequestBuilder} from './microsoftGraphRandBetween/randBetweenRequestBuilder';
import {Rank_AvgRequestBuilder} from './microsoftGraphRank_Avg/rank_AvgRequestBuilder';
import {Rank_EqRequestBuilder} from './microsoftGraphRank_Eq/rank_EqRequestBuilder';
import {RateRequestBuilder} from './microsoftGraphRate/rateRequestBuilder';
import {ReceivedRequestBuilder} from './microsoftGraphReceived/receivedRequestBuilder';
import {ReplaceRequestBuilder} from './microsoftGraphReplace/replaceRequestBuilder';
import {ReplaceBRequestBuilder} from './microsoftGraphReplaceB/replaceBRequestBuilder';
import {ReptRequestBuilder} from './microsoftGraphRept/reptRequestBuilder';
import {RightRequestBuilder} from './microsoftGraphRight/rightRequestBuilder';
import {RightbRequestBuilder} from './microsoftGraphRightb/rightbRequestBuilder';
import {RomanRequestBuilder} from './microsoftGraphRoman/romanRequestBuilder';
import {RoundRequestBuilder} from './microsoftGraphRound/roundRequestBuilder';
import {RoundDownRequestBuilder} from './microsoftGraphRoundDown/roundDownRequestBuilder';
import {RoundUpRequestBuilder} from './microsoftGraphRoundUp/roundUpRequestBuilder';
import {RowsRequestBuilder} from './microsoftGraphRows/rowsRequestBuilder';
import {RriRequestBuilder} from './microsoftGraphRri/rriRequestBuilder';
import {SecRequestBuilder} from './microsoftGraphSec/secRequestBuilder';
import {SechRequestBuilder} from './microsoftGraphSech/sechRequestBuilder';
import {SecondRequestBuilder} from './microsoftGraphSecond/secondRequestBuilder';
import {SeriesSumRequestBuilder} from './microsoftGraphSeriesSum/seriesSumRequestBuilder';
import {SheetRequestBuilder} from './microsoftGraphSheet/sheetRequestBuilder';
import {SheetsRequestBuilder} from './microsoftGraphSheets/sheetsRequestBuilder';
import {SignRequestBuilder} from './microsoftGraphSign/signRequestBuilder';
import {SinRequestBuilder} from './microsoftGraphSin/sinRequestBuilder';
import {SinhRequestBuilder} from './microsoftGraphSinh/sinhRequestBuilder';
import {Skew_pRequestBuilder} from './microsoftGraphSkew_p/skew_pRequestBuilder';
import {SkewRequestBuilder} from './microsoftGraphSkew/skewRequestBuilder';
import {SlnRequestBuilder} from './microsoftGraphSln/slnRequestBuilder';
import {SmallRequestBuilder} from './microsoftGraphSmall/smallRequestBuilder';
import {SqrtRequestBuilder} from './microsoftGraphSqrt/sqrtRequestBuilder';
import {SqrtPiRequestBuilder} from './microsoftGraphSqrtPi/sqrtPiRequestBuilder';
import {StandardizeRequestBuilder} from './microsoftGraphStandardize/standardizeRequestBuilder';
import {StDev_PRequestBuilder} from './microsoftGraphStDev_P/stDev_PRequestBuilder';
import {StDev_SRequestBuilder} from './microsoftGraphStDev_S/stDev_SRequestBuilder';
import {StDevARequestBuilder} from './microsoftGraphStDevA/stDevARequestBuilder';
import {StDevPARequestBuilder} from './microsoftGraphStDevPA/stDevPARequestBuilder';
import {SubstituteRequestBuilder} from './microsoftGraphSubstitute/substituteRequestBuilder';
import {SubtotalRequestBuilder} from './microsoftGraphSubtotal/subtotalRequestBuilder';
import {SumRequestBuilder} from './microsoftGraphSum/sumRequestBuilder';
import {SumIfRequestBuilder} from './microsoftGraphSumIf/sumIfRequestBuilder';
import {SumIfsRequestBuilder} from './microsoftGraphSumIfs/sumIfsRequestBuilder';
import {SumSqRequestBuilder} from './microsoftGraphSumSq/sumSqRequestBuilder';
import {SydRequestBuilder} from './microsoftGraphSyd/sydRequestBuilder';
import {T_Dist_2TRequestBuilder} from './microsoftGraphT_Dist_2T/t_Dist_2TRequestBuilder';
import {T_Dist_RTRequestBuilder} from './microsoftGraphT_Dist_RT/t_Dist_RTRequestBuilder';
import {T_DistRequestBuilder} from './microsoftGraphT_Dist/t_DistRequestBuilder';
import {T_Inv_2TRequestBuilder} from './microsoftGraphT_Inv_2T/t_Inv_2TRequestBuilder';
import {T_InvRequestBuilder} from './microsoftGraphT_Inv/t_InvRequestBuilder';
import {TRequestBuilder} from './microsoftGraphT/tRequestBuilder';
import {TanRequestBuilder} from './microsoftGraphTan/tanRequestBuilder';
import {TanhRequestBuilder} from './microsoftGraphTanh/tanhRequestBuilder';
import {TbillEqRequestBuilder} from './microsoftGraphTbillEq/tbillEqRequestBuilder';
import {TbillPriceRequestBuilder} from './microsoftGraphTbillPrice/tbillPriceRequestBuilder';
import {TbillYieldRequestBuilder} from './microsoftGraphTbillYield/tbillYieldRequestBuilder';
import {TextRequestBuilder} from './microsoftGraphText/textRequestBuilder';
import {TimeRequestBuilder} from './microsoftGraphTime/timeRequestBuilder';
import {TimevalueRequestBuilder} from './microsoftGraphTimevalue/timevalueRequestBuilder';
import {TodayRequestBuilder} from './microsoftGraphToday/todayRequestBuilder';
import {TrimRequestBuilder} from './microsoftGraphTrim/trimRequestBuilder';
import {TrimMeanRequestBuilder} from './microsoftGraphTrimMean/trimMeanRequestBuilder';
import {TrueRequestBuilder} from './microsoftGraphTrue/trueRequestBuilder';
import {TruncRequestBuilder} from './microsoftGraphTrunc/truncRequestBuilder';
import {TypeRequestBuilder} from './microsoftGraphType/typeRequestBuilder';
import {UnicharRequestBuilder} from './microsoftGraphUnichar/unicharRequestBuilder';
import {UnicodeRequestBuilder} from './microsoftGraphUnicode/unicodeRequestBuilder';
import {UpperRequestBuilder} from './microsoftGraphUpper/upperRequestBuilder';
import {UsdollarRequestBuilder} from './microsoftGraphUsdollar/usdollarRequestBuilder';
import {ValueRequestBuilder} from './microsoftGraphValue/valueRequestBuilder';
import {Var_PRequestBuilder} from './microsoftGraphVar_P/var_PRequestBuilder';
import {Var_SRequestBuilder} from './microsoftGraphVar_S/var_SRequestBuilder';
import {VarARequestBuilder} from './microsoftGraphVarA/varARequestBuilder';
import {VarPARequestBuilder} from './microsoftGraphVarPA/varPARequestBuilder';
import {VdbRequestBuilder} from './microsoftGraphVdb/vdbRequestBuilder';
import {VlookupRequestBuilder} from './microsoftGraphVlookup/vlookupRequestBuilder';
import {WeekdayRequestBuilder} from './microsoftGraphWeekday/weekdayRequestBuilder';
import {WeekNumRequestBuilder} from './microsoftGraphWeekNum/weekNumRequestBuilder';
import {Weibull_DistRequestBuilder} from './microsoftGraphWeibull_Dist/weibull_DistRequestBuilder';
import {WorkDay_IntlRequestBuilder} from './microsoftGraphWorkDay_Intl/workDay_IntlRequestBuilder';
import {WorkDayRequestBuilder} from './microsoftGraphWorkDay/workDayRequestBuilder';
import {XirrRequestBuilder} from './microsoftGraphXirr/xirrRequestBuilder';
import {XnpvRequestBuilder} from './microsoftGraphXnpv/xnpvRequestBuilder';
import {XorRequestBuilder} from './microsoftGraphXor/xorRequestBuilder';
import {YearRequestBuilder} from './microsoftGraphYear/yearRequestBuilder';
import {YearFracRequestBuilder} from './microsoftGraphYearFrac/yearFracRequestBuilder';
import {YieldRequestBuilder} from './microsoftGraphYield/yieldRequestBuilder';
import {YieldDiscRequestBuilder} from './microsoftGraphYieldDisc/yieldDiscRequestBuilder';
import {YieldMatRequestBuilder} from './microsoftGraphYieldMat/yieldMatRequestBuilder';
import {Z_TestRequestBuilder} from './microsoftGraphZ_Test/z_TestRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the functions property of the microsoft.graph.workbook entity.
 */
export class FunctionsRequestBuilder {
    /** Provides operations to call the abs method. */
    public get microsoftGraphAbs(): AbsRequestBuilder {
        return new AbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the accrInt method. */
    public get microsoftGraphAccrInt(): AccrIntRequestBuilder {
        return new AccrIntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the accrIntM method. */
    public get microsoftGraphAccrIntM(): AccrIntMRequestBuilder {
        return new AccrIntMRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acos method. */
    public get microsoftGraphAcos(): AcosRequestBuilder {
        return new AcosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acosh method. */
    public get microsoftGraphAcosh(): AcoshRequestBuilder {
        return new AcoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acot method. */
    public get microsoftGraphAcot(): AcotRequestBuilder {
        return new AcotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acoth method. */
    public get microsoftGraphAcoth(): AcothRequestBuilder {
        return new AcothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the amorDegrc method. */
    public get microsoftGraphAmorDegrc(): AmorDegrcRequestBuilder {
        return new AmorDegrcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the amorLinc method. */
    public get microsoftGraphAmorLinc(): AmorLincRequestBuilder {
        return new AmorLincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the and method. */
    public get microsoftGraphAnd(): AndRequestBuilder {
        return new AndRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the arabic method. */
    public get microsoftGraphArabic(): ArabicRequestBuilder {
        return new ArabicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the areas method. */
    public get microsoftGraphAreas(): AreasRequestBuilder {
        return new AreasRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asc method. */
    public get microsoftGraphAsc(): AscRequestBuilder {
        return new AscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asin method. */
    public get microsoftGraphAsin(): AsinRequestBuilder {
        return new AsinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asinh method. */
    public get microsoftGraphAsinh(): AsinhRequestBuilder {
        return new AsinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atan method. */
    public get microsoftGraphAtan(): AtanRequestBuilder {
        return new AtanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atan2 method. */
    public get microsoftGraphAtan2(): Atan2RequestBuilder {
        return new Atan2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atanh method. */
    public get microsoftGraphAtanh(): AtanhRequestBuilder {
        return new AtanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the aveDev method. */
    public get microsoftGraphAveDev(): AveDevRequestBuilder {
        return new AveDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the average method. */
    public get microsoftGraphAverage(): AverageRequestBuilder {
        return new AverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageA method. */
    public get microsoftGraphAverageA(): AverageARequestBuilder {
        return new AverageARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageIf method. */
    public get microsoftGraphAverageIf(): AverageIfRequestBuilder {
        return new AverageIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageIfs method. */
    public get microsoftGraphAverageIfs(): AverageIfsRequestBuilder {
        return new AverageIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bahtText method. */
    public get microsoftGraphBahtText(): BahtTextRequestBuilder {
        return new BahtTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the base method. */
    public get microsoftGraphBase(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselI method. */
    public get microsoftGraphBesselI(): BesselIRequestBuilder {
        return new BesselIRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselJ method. */
    public get microsoftGraphBesselJ(): BesselJRequestBuilder {
        return new BesselJRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselK method. */
    public get microsoftGraphBesselK(): BesselKRequestBuilder {
        return new BesselKRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselY method. */
    public get microsoftGraphBesselY(): BesselYRequestBuilder {
        return new BesselYRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the beta_Dist method. */
    public get microsoftGraphBeta_Dist(): Beta_DistRequestBuilder {
        return new Beta_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the beta_Inv method. */
    public get microsoftGraphBeta_Inv(): Beta_InvRequestBuilder {
        return new Beta_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Dec method. */
    public get microsoftGraphBin2Dec(): Bin2DecRequestBuilder {
        return new Bin2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Hex method. */
    public get microsoftGraphBin2Hex(): Bin2HexRequestBuilder {
        return new Bin2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Oct method. */
    public get microsoftGraphBin2Oct(): Bin2OctRequestBuilder {
        return new Bin2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Dist method. */
    public get microsoftGraphBinom_Dist(): Binom_DistRequestBuilder {
        return new Binom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Dist_Range method. */
    public get microsoftGraphBinom_Dist_Range(): Binom_Dist_RangeRequestBuilder {
        return new Binom_Dist_RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Inv method. */
    public get microsoftGraphBinom_Inv(): Binom_InvRequestBuilder {
        return new Binom_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitand method. */
    public get microsoftGraphBitand(): BitandRequestBuilder {
        return new BitandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitlshift method. */
    public get microsoftGraphBitlshift(): BitlshiftRequestBuilder {
        return new BitlshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitor method. */
    public get microsoftGraphBitor(): BitorRequestBuilder {
        return new BitorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitrshift method. */
    public get microsoftGraphBitrshift(): BitrshiftRequestBuilder {
        return new BitrshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitxor method. */
    public get microsoftGraphBitxor(): BitxorRequestBuilder {
        return new BitxorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ceiling_Math method. */
    public get microsoftGraphCeiling_Math(): Ceiling_MathRequestBuilder {
        return new Ceiling_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ceiling_Precise method. */
    public get microsoftGraphCeiling_Precise(): Ceiling_PreciseRequestBuilder {
        return new Ceiling_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the char method. */
    public get microsoftGraphChar(): CharRequestBuilder {
        return new CharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Dist method. */
    public get microsoftGraphChiSq_Dist(): ChiSq_DistRequestBuilder {
        return new ChiSq_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Dist_RT method. */
    public get microsoftGraphChiSq_Dist_RT(): ChiSq_Dist_RTRequestBuilder {
        return new ChiSq_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Inv method. */
    public get microsoftGraphChiSq_Inv(): ChiSq_InvRequestBuilder {
        return new ChiSq_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Inv_RT method. */
    public get microsoftGraphChiSq_Inv_RT(): ChiSq_Inv_RTRequestBuilder {
        return new ChiSq_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the choose method. */
    public get microsoftGraphChoose(): ChooseRequestBuilder {
        return new ChooseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clean method. */
    public get microsoftGraphClean(): CleanRequestBuilder {
        return new CleanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the code method. */
    public get microsoftGraphCode(): CodeRequestBuilder {
        return new CodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the columns method. */
    public get microsoftGraphColumns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the combin method. */
    public get microsoftGraphCombin(): CombinRequestBuilder {
        return new CombinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the combina method. */
    public get microsoftGraphCombina(): CombinaRequestBuilder {
        return new CombinaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the complex method. */
    public get microsoftGraphComplex(): ComplexRequestBuilder {
        return new ComplexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the concatenate method. */
    public get microsoftGraphConcatenate(): ConcatenateRequestBuilder {
        return new ConcatenateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the confidence_Norm method. */
    public get microsoftGraphConfidence_Norm(): Confidence_NormRequestBuilder {
        return new Confidence_NormRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the confidence_T method. */
    public get microsoftGraphConfidence_T(): Confidence_TRequestBuilder {
        return new Confidence_TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the convert method. */
    public get microsoftGraphConvert(): ConvertRequestBuilder {
        return new ConvertRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cos method. */
    public get microsoftGraphCos(): CosRequestBuilder {
        return new CosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cosh method. */
    public get microsoftGraphCosh(): CoshRequestBuilder {
        return new CoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cot method. */
    public get microsoftGraphCot(): CotRequestBuilder {
        return new CotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coth method. */
    public get microsoftGraphCoth(): CothRequestBuilder {
        return new CothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the count method. */
    public get microsoftGraphCount(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countA method. */
    public get microsoftGraphCountA(): CountARequestBuilder {
        return new CountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countBlank method. */
    public get microsoftGraphCountBlank(): CountBlankRequestBuilder {
        return new CountBlankRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countIf method. */
    public get microsoftGraphCountIf(): CountIfRequestBuilder {
        return new CountIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countIfs method. */
    public get microsoftGraphCountIfs(): CountIfsRequestBuilder {
        return new CountIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDayBs method. */
    public get microsoftGraphCoupDayBs(): CoupDayBsRequestBuilder {
        return new CoupDayBsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDays method. */
    public get microsoftGraphCoupDays(): CoupDaysRequestBuilder {
        return new CoupDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDaysNc method. */
    public get microsoftGraphCoupDaysNc(): CoupDaysNcRequestBuilder {
        return new CoupDaysNcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupNcd method. */
    public get microsoftGraphCoupNcd(): CoupNcdRequestBuilder {
        return new CoupNcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupNum method. */
    public get microsoftGraphCoupNum(): CoupNumRequestBuilder {
        return new CoupNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupPcd method. */
    public get microsoftGraphCoupPcd(): CoupPcdRequestBuilder {
        return new CoupPcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the csc method. */
    public get microsoftGraphCsc(): CscRequestBuilder {
        return new CscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the csch method. */
    public get microsoftGraphCsch(): CschRequestBuilder {
        return new CschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cumIPmt method. */
    public get microsoftGraphCumIPmt(): CumIPmtRequestBuilder {
        return new CumIPmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cumPrinc method. */
    public get microsoftGraphCumPrinc(): CumPrincRequestBuilder {
        return new CumPrincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the date method. */
    public get microsoftGraphDate(): DateRequestBuilder {
        return new DateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the datevalue method. */
    public get microsoftGraphDatevalue(): DatevalueRequestBuilder {
        return new DatevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the daverage method. */
    public get microsoftGraphDaverage(): DaverageRequestBuilder {
        return new DaverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the day method. */
    public get microsoftGraphDay(): DayRequestBuilder {
        return new DayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the days method. */
    public get microsoftGraphDays(): DaysRequestBuilder {
        return new DaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the days360 method. */
    public get microsoftGraphDays360(): Days360RequestBuilder {
        return new Days360RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the db method. */
    public get microsoftGraphDb(): DbRequestBuilder {
        return new DbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dbcs method. */
    public get microsoftGraphDbcs(): DbcsRequestBuilder {
        return new DbcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dcount method. */
    public get microsoftGraphDcount(): DcountRequestBuilder {
        return new DcountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dcountA method. */
    public get microsoftGraphDcountA(): DcountARequestBuilder {
        return new DcountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ddb method. */
    public get microsoftGraphDdb(): DdbRequestBuilder {
        return new DdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Bin method. */
    public get microsoftGraphDec2Bin(): Dec2BinRequestBuilder {
        return new Dec2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Hex method. */
    public get microsoftGraphDec2Hex(): Dec2HexRequestBuilder {
        return new Dec2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Oct method. */
    public get microsoftGraphDec2Oct(): Dec2OctRequestBuilder {
        return new Dec2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the decimal method. */
    public get microsoftGraphDecimal(): DecimalRequestBuilder {
        return new DecimalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the degrees method. */
    public get microsoftGraphDegrees(): DegreesRequestBuilder {
        return new DegreesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get microsoftGraphDelta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the devSq method. */
    public get microsoftGraphDevSq(): DevSqRequestBuilder {
        return new DevSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dget method. */
    public get microsoftGraphDget(): DgetRequestBuilder {
        return new DgetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the disc method. */
    public get microsoftGraphDisc(): DiscRequestBuilder {
        return new DiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dmax method. */
    public get microsoftGraphDmax(): DmaxRequestBuilder {
        return new DmaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dmin method. */
    public get microsoftGraphDmin(): DminRequestBuilder {
        return new DminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollar method. */
    public get microsoftGraphDollar(): DollarRequestBuilder {
        return new DollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollarDe method. */
    public get microsoftGraphDollarDe(): DollarDeRequestBuilder {
        return new DollarDeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollarFr method. */
    public get microsoftGraphDollarFr(): DollarFrRequestBuilder {
        return new DollarFrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dproduct method. */
    public get microsoftGraphDproduct(): DproductRequestBuilder {
        return new DproductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dstDev method. */
    public get microsoftGraphDstDev(): DstDevRequestBuilder {
        return new DstDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dstDevP method. */
    public get microsoftGraphDstDevP(): DstDevPRequestBuilder {
        return new DstDevPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dsum method. */
    public get microsoftGraphDsum(): DsumRequestBuilder {
        return new DsumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the duration method. */
    public get microsoftGraphDuration(): DurationRequestBuilder {
        return new DurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dvar method. */
    public get microsoftGraphDvar(): DvarRequestBuilder {
        return new DvarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dvarP method. */
    public get microsoftGraphDvarP(): DvarPRequestBuilder {
        return new DvarPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ecma_Ceiling method. */
    public get microsoftGraphEcma_Ceiling(): Ecma_CeilingRequestBuilder {
        return new Ecma_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the edate method. */
    public get microsoftGraphEdate(): EdateRequestBuilder {
        return new EdateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the effect method. */
    public get microsoftGraphEffect(): EffectRequestBuilder {
        return new EffectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the eoMonth method. */
    public get microsoftGraphEoMonth(): EoMonthRequestBuilder {
        return new EoMonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erf method. */
    public get microsoftGraphErf(): ErfRequestBuilder {
        return new ErfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erf_Precise method. */
    public get microsoftGraphErf_Precise(): Erf_PreciseRequestBuilder {
        return new Erf_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erfC method. */
    public get microsoftGraphErfC(): ErfCRequestBuilder {
        return new ErfCRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erfC_Precise method. */
    public get microsoftGraphErfC_Precise(): ErfC_PreciseRequestBuilder {
        return new ErfC_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the error_Type method. */
    public get microsoftGraphError_Type(): Error_TypeRequestBuilder {
        return new Error_TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the even method. */
    public get microsoftGraphEven(): EvenRequestBuilder {
        return new EvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exact method. */
    public get microsoftGraphExact(): ExactRequestBuilder {
        return new ExactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exp method. */
    public get microsoftGraphExp(): ExpRequestBuilder {
        return new ExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the expon_Dist method. */
    public get microsoftGraphExpon_Dist(): Expon_DistRequestBuilder {
        return new Expon_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Dist method. */
    public get microsoftGraphF_Dist(): F_DistRequestBuilder {
        return new F_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Dist_RT method. */
    public get microsoftGraphF_Dist_RT(): F_Dist_RTRequestBuilder {
        return new F_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Inv method. */
    public get microsoftGraphF_Inv(): F_InvRequestBuilder {
        return new F_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Inv_RT method. */
    public get microsoftGraphF_Inv_RT(): F_Inv_RTRequestBuilder {
        return new F_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fact method. */
    public get microsoftGraphFact(): FactRequestBuilder {
        return new FactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the factDouble method. */
    public get microsoftGraphFactDouble(): FactDoubleRequestBuilder {
        return new FactDoubleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the false method. */
    public get microsoftGraphFalse(): FalseRequestBuilder {
        return new FalseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the find method. */
    public get microsoftGraphFind(): FindRequestBuilder {
        return new FindRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the findB method. */
    public get microsoftGraphFindB(): FindBRequestBuilder {
        return new FindBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fisher method. */
    public get microsoftGraphFisher(): FisherRequestBuilder {
        return new FisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fisherInv method. */
    public get microsoftGraphFisherInv(): FisherInvRequestBuilder {
        return new FisherInvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fixed method. */
    public get microsoftGraphFixed(): FixedRequestBuilder {
        return new FixedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the floor_Math method. */
    public get microsoftGraphFloor_Math(): Floor_MathRequestBuilder {
        return new Floor_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the floor_Precise method. */
    public get microsoftGraphFloor_Precise(): Floor_PreciseRequestBuilder {
        return new Floor_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fv method. */
    public get microsoftGraphFv(): FvRequestBuilder {
        return new FvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fvschedule method. */
    public get microsoftGraphFvschedule(): FvscheduleRequestBuilder {
        return new FvscheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma method. */
    public get microsoftGraphGamma(): GammaRequestBuilder {
        return new GammaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma_Dist method. */
    public get microsoftGraphGamma_Dist(): Gamma_DistRequestBuilder {
        return new Gamma_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma_Inv method. */
    public get microsoftGraphGamma_Inv(): Gamma_InvRequestBuilder {
        return new Gamma_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gammaLn method. */
    public get microsoftGraphGammaLn(): GammaLnRequestBuilder {
        return new GammaLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gammaLn_Precise method. */
    public get microsoftGraphGammaLn_Precise(): GammaLn_PreciseRequestBuilder {
        return new GammaLn_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gauss method. */
    public get microsoftGraphGauss(): GaussRequestBuilder {
        return new GaussRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gcd method. */
    public get microsoftGraphGcd(): GcdRequestBuilder {
        return new GcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the geoMean method. */
    public get microsoftGraphGeoMean(): GeoMeanRequestBuilder {
        return new GeoMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the geStep method. */
    public get microsoftGraphGeStep(): GeStepRequestBuilder {
        return new GeStepRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the harMean method. */
    public get microsoftGraphHarMean(): HarMeanRequestBuilder {
        return new HarMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Bin method. */
    public get microsoftGraphHex2Bin(): Hex2BinRequestBuilder {
        return new Hex2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Dec method. */
    public get microsoftGraphHex2Dec(): Hex2DecRequestBuilder {
        return new Hex2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Oct method. */
    public get microsoftGraphHex2Oct(): Hex2OctRequestBuilder {
        return new Hex2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hlookup method. */
    public get microsoftGraphHlookup(): HlookupRequestBuilder {
        return new HlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hour method. */
    public get microsoftGraphHour(): HourRequestBuilder {
        return new HourRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hyperlink method. */
    public get microsoftGraphHyperlink(): HyperlinkRequestBuilder {
        return new HyperlinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hypGeom_Dist method. */
    public get microsoftGraphHypGeom_Dist(): HypGeom_DistRequestBuilder {
        return new HypGeom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the if method. */
    public get microsoftGraphIf(): IfRequestBuilder {
        return new IfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imAbs method. */
    public get microsoftGraphImAbs(): ImAbsRequestBuilder {
        return new ImAbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imaginary method. */
    public get microsoftGraphImaginary(): ImaginaryRequestBuilder {
        return new ImaginaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imArgument method. */
    public get microsoftGraphImArgument(): ImArgumentRequestBuilder {
        return new ImArgumentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imConjugate method. */
    public get microsoftGraphImConjugate(): ImConjugateRequestBuilder {
        return new ImConjugateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCos method. */
    public get microsoftGraphImCos(): ImCosRequestBuilder {
        return new ImCosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCosh method. */
    public get microsoftGraphImCosh(): ImCoshRequestBuilder {
        return new ImCoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCot method. */
    public get microsoftGraphImCot(): ImCotRequestBuilder {
        return new ImCotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCsc method. */
    public get microsoftGraphImCsc(): ImCscRequestBuilder {
        return new ImCscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCsch method. */
    public get microsoftGraphImCsch(): ImCschRequestBuilder {
        return new ImCschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imDiv method. */
    public get microsoftGraphImDiv(): ImDivRequestBuilder {
        return new ImDivRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imExp method. */
    public get microsoftGraphImExp(): ImExpRequestBuilder {
        return new ImExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLn method. */
    public get microsoftGraphImLn(): ImLnRequestBuilder {
        return new ImLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLog10 method. */
    public get microsoftGraphImLog10(): ImLog10RequestBuilder {
        return new ImLog10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLog2 method. */
    public get microsoftGraphImLog2(): ImLog2RequestBuilder {
        return new ImLog2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imPower method. */
    public get microsoftGraphImPower(): ImPowerRequestBuilder {
        return new ImPowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imProduct method. */
    public get microsoftGraphImProduct(): ImProductRequestBuilder {
        return new ImProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imReal method. */
    public get microsoftGraphImReal(): ImRealRequestBuilder {
        return new ImRealRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSec method. */
    public get microsoftGraphImSec(): ImSecRequestBuilder {
        return new ImSecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSech method. */
    public get microsoftGraphImSech(): ImSechRequestBuilder {
        return new ImSechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSin method. */
    public get microsoftGraphImSin(): ImSinRequestBuilder {
        return new ImSinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSinh method. */
    public get microsoftGraphImSinh(): ImSinhRequestBuilder {
        return new ImSinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSqrt method. */
    public get microsoftGraphImSqrt(): ImSqrtRequestBuilder {
        return new ImSqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSub method. */
    public get microsoftGraphImSub(): ImSubRequestBuilder {
        return new ImSubRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSum method. */
    public get microsoftGraphImSum(): ImSumRequestBuilder {
        return new ImSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imTan method. */
    public get microsoftGraphImTan(): ImTanRequestBuilder {
        return new ImTanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the int method. */
    public get microsoftGraphInt(): IntRequestBuilder {
        return new IntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the intRate method. */
    public get microsoftGraphIntRate(): IntRateRequestBuilder {
        return new IntRateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ipmt method. */
    public get microsoftGraphIpmt(): IpmtRequestBuilder {
        return new IpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the irr method. */
    public get microsoftGraphIrr(): IrrRequestBuilder {
        return new IrrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isErr method. */
    public get microsoftGraphIsErr(): IsErrRequestBuilder {
        return new IsErrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isError method. */
    public get microsoftGraphIsError(): IsErrorRequestBuilder {
        return new IsErrorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isEven method. */
    public get microsoftGraphIsEven(): IsEvenRequestBuilder {
        return new IsEvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isFormula method. */
    public get microsoftGraphIsFormula(): IsFormulaRequestBuilder {
        return new IsFormulaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isLogical method. */
    public get microsoftGraphIsLogical(): IsLogicalRequestBuilder {
        return new IsLogicalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNA method. */
    public get microsoftGraphIsNA(): IsNARequestBuilder {
        return new IsNARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNonText method. */
    public get microsoftGraphIsNonText(): IsNonTextRequestBuilder {
        return new IsNonTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNumber method. */
    public get microsoftGraphIsNumber(): IsNumberRequestBuilder {
        return new IsNumberRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the iso_Ceiling method. */
    public get microsoftGraphIso_Ceiling(): Iso_CeilingRequestBuilder {
        return new Iso_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isOdd method. */
    public get microsoftGraphIsOdd(): IsOddRequestBuilder {
        return new IsOddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isoWeekNum method. */
    public get microsoftGraphIsoWeekNum(): IsoWeekNumRequestBuilder {
        return new IsoWeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ispmt method. */
    public get microsoftGraphIspmt(): IspmtRequestBuilder {
        return new IspmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isref method. */
    public get microsoftGraphIsref(): IsrefRequestBuilder {
        return new IsrefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isText method. */
    public get microsoftGraphIsText(): IsTextRequestBuilder {
        return new IsTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the kurt method. */
    public get microsoftGraphKurt(): KurtRequestBuilder {
        return new KurtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the large method. */
    public get microsoftGraphLarge(): LargeRequestBuilder {
        return new LargeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lcm method. */
    public get microsoftGraphLcm(): LcmRequestBuilder {
        return new LcmRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the left method. */
    public get microsoftGraphLeft(): LeftRequestBuilder {
        return new LeftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the leftb method. */
    public get microsoftGraphLeftb(): LeftbRequestBuilder {
        return new LeftbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the len method. */
    public get microsoftGraphLen(): LenRequestBuilder {
        return new LenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lenb method. */
    public get microsoftGraphLenb(): LenbRequestBuilder {
        return new LenbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ln method. */
    public get microsoftGraphLn(): LnRequestBuilder {
        return new LnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the log method. */
    public get microsoftGraphLog(): LogRequestBuilder {
        return new LogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the log10 method. */
    public get microsoftGraphLog10(): Log10RequestBuilder {
        return new Log10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logNorm_Dist method. */
    public get microsoftGraphLogNorm_Dist(): LogNorm_DistRequestBuilder {
        return new LogNorm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logNorm_Inv method. */
    public get microsoftGraphLogNorm_Inv(): LogNorm_InvRequestBuilder {
        return new LogNorm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lookup method. */
    public get microsoftGraphLookup(): LookupRequestBuilder {
        return new LookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lower method. */
    public get microsoftGraphLower(): LowerRequestBuilder {
        return new LowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the match method. */
    public get microsoftGraphMatch(): MatchRequestBuilder {
        return new MatchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the max method. */
    public get microsoftGraphMax(): MaxRequestBuilder {
        return new MaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the maxA method. */
    public get microsoftGraphMaxA(): MaxARequestBuilder {
        return new MaxARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mduration method. */
    public get microsoftGraphMduration(): MdurationRequestBuilder {
        return new MdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the median method. */
    public get microsoftGraphMedian(): MedianRequestBuilder {
        return new MedianRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mid method. */
    public get microsoftGraphMid(): MidRequestBuilder {
        return new MidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the midb method. */
    public get microsoftGraphMidb(): MidbRequestBuilder {
        return new MidbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the min method. */
    public get microsoftGraphMin(): MinRequestBuilder {
        return new MinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the minA method. */
    public get microsoftGraphMinA(): MinARequestBuilder {
        return new MinARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the minute method. */
    public get microsoftGraphMinute(): MinuteRequestBuilder {
        return new MinuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mirr method. */
    public get microsoftGraphMirr(): MirrRequestBuilder {
        return new MirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mod method. */
    public get microsoftGraphMod(): ModRequestBuilder {
        return new ModRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the month method. */
    public get microsoftGraphMonth(): MonthRequestBuilder {
        return new MonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mround method. */
    public get microsoftGraphMround(): MroundRequestBuilder {
        return new MroundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the multiNomial method. */
    public get microsoftGraphMultiNomial(): MultiNomialRequestBuilder {
        return new MultiNomialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the n method. */
    public get microsoftGraphN(): NRequestBuilder {
        return new NRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the na method. */
    public get microsoftGraphNa(): NaRequestBuilder {
        return new NaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the negBinom_Dist method. */
    public get microsoftGraphNegBinom_Dist(): NegBinom_DistRequestBuilder {
        return new NegBinom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the networkDays method. */
    public get microsoftGraphNetworkDays(): NetworkDaysRequestBuilder {
        return new NetworkDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the networkDays_Intl method. */
    public get microsoftGraphNetworkDays_Intl(): NetworkDays_IntlRequestBuilder {
        return new NetworkDays_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the nominal method. */
    public get microsoftGraphNominal(): NominalRequestBuilder {
        return new NominalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_Dist method. */
    public get microsoftGraphNorm_Dist(): Norm_DistRequestBuilder {
        return new Norm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_Inv method. */
    public get microsoftGraphNorm_Inv(): Norm_InvRequestBuilder {
        return new Norm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_S_Dist method. */
    public get microsoftGraphNorm_S_Dist(): Norm_S_DistRequestBuilder {
        return new Norm_S_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_S_Inv method. */
    public get microsoftGraphNorm_S_Inv(): Norm_S_InvRequestBuilder {
        return new Norm_S_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the not method. */
    public get microsoftGraphNot(): NotRequestBuilder {
        return new NotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the now method. */
    public get microsoftGraphNow(): NowRequestBuilder {
        return new NowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the nper method. */
    public get microsoftGraphNper(): NperRequestBuilder {
        return new NperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the npv method. */
    public get microsoftGraphNpv(): NpvRequestBuilder {
        return new NpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the numberValue method. */
    public get microsoftGraphNumberValue(): NumberValueRequestBuilder {
        return new NumberValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Bin method. */
    public get microsoftGraphOct2Bin(): Oct2BinRequestBuilder {
        return new Oct2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Dec method. */
    public get microsoftGraphOct2Dec(): Oct2DecRequestBuilder {
        return new Oct2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Hex method. */
    public get microsoftGraphOct2Hex(): Oct2HexRequestBuilder {
        return new Oct2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the odd method. */
    public get microsoftGraphOdd(): OddRequestBuilder {
        return new OddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddFPrice method. */
    public get microsoftGraphOddFPrice(): OddFPriceRequestBuilder {
        return new OddFPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddFYield method. */
    public get microsoftGraphOddFYield(): OddFYieldRequestBuilder {
        return new OddFYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddLPrice method. */
    public get microsoftGraphOddLPrice(): OddLPriceRequestBuilder {
        return new OddLPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddLYield method. */
    public get microsoftGraphOddLYield(): OddLYieldRequestBuilder {
        return new OddLYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the or method. */
    public get microsoftGraphOr(): OrRequestBuilder {
        return new OrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pduration method. */
    public get microsoftGraphPduration(): PdurationRequestBuilder {
        return new PdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentile_Exc method. */
    public get microsoftGraphPercentile_Exc(): Percentile_ExcRequestBuilder {
        return new Percentile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentile_Inc method. */
    public get microsoftGraphPercentile_Inc(): Percentile_IncRequestBuilder {
        return new Percentile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentRank_Exc method. */
    public get microsoftGraphPercentRank_Exc(): PercentRank_ExcRequestBuilder {
        return new PercentRank_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentRank_Inc method. */
    public get microsoftGraphPercentRank_Inc(): PercentRank_IncRequestBuilder {
        return new PercentRank_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the permut method. */
    public get microsoftGraphPermut(): PermutRequestBuilder {
        return new PermutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the permutationa method. */
    public get microsoftGraphPermutationa(): PermutationaRequestBuilder {
        return new PermutationaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the phi method. */
    public get microsoftGraphPhi(): PhiRequestBuilder {
        return new PhiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pi method. */
    public get microsoftGraphPi(): PiRequestBuilder {
        return new PiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pmt method. */
    public get microsoftGraphPmt(): PmtRequestBuilder {
        return new PmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the poisson_Dist method. */
    public get microsoftGraphPoisson_Dist(): Poisson_DistRequestBuilder {
        return new Poisson_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the power method. */
    public get microsoftGraphPower(): PowerRequestBuilder {
        return new PowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ppmt method. */
    public get microsoftGraphPpmt(): PpmtRequestBuilder {
        return new PpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the price method. */
    public get microsoftGraphPrice(): PriceRequestBuilder {
        return new PriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the priceDisc method. */
    public get microsoftGraphPriceDisc(): PriceDiscRequestBuilder {
        return new PriceDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the priceMat method. */
    public get microsoftGraphPriceMat(): PriceMatRequestBuilder {
        return new PriceMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the product method. */
    public get microsoftGraphProduct(): ProductRequestBuilder {
        return new ProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the proper method. */
    public get microsoftGraphProper(): ProperRequestBuilder {
        return new ProperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pv method. */
    public get microsoftGraphPv(): PvRequestBuilder {
        return new PvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quartile_Exc method. */
    public get microsoftGraphQuartile_Exc(): Quartile_ExcRequestBuilder {
        return new Quartile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quartile_Inc method. */
    public get microsoftGraphQuartile_Inc(): Quartile_IncRequestBuilder {
        return new Quartile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quotient method. */
    public get microsoftGraphQuotient(): QuotientRequestBuilder {
        return new QuotientRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the radians method. */
    public get microsoftGraphRadians(): RadiansRequestBuilder {
        return new RadiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rand method. */
    public get microsoftGraphRand(): RandRequestBuilder {
        return new RandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the randBetween method. */
    public get microsoftGraphRandBetween(): RandBetweenRequestBuilder {
        return new RandBetweenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rank_Avg method. */
    public get microsoftGraphRank_Avg(): Rank_AvgRequestBuilder {
        return new Rank_AvgRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rank_Eq method. */
    public get microsoftGraphRank_Eq(): Rank_EqRequestBuilder {
        return new Rank_EqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rate method. */
    public get microsoftGraphRate(): RateRequestBuilder {
        return new RateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the received method. */
    public get microsoftGraphReceived(): ReceivedRequestBuilder {
        return new ReceivedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the replace method. */
    public get microsoftGraphReplace(): ReplaceRequestBuilder {
        return new ReplaceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the replaceB method. */
    public get microsoftGraphReplaceB(): ReplaceBRequestBuilder {
        return new ReplaceBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rept method. */
    public get microsoftGraphRept(): ReptRequestBuilder {
        return new ReptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the right method. */
    public get microsoftGraphRight(): RightRequestBuilder {
        return new RightRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rightb method. */
    public get microsoftGraphRightb(): RightbRequestBuilder {
        return new RightbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roman method. */
    public get microsoftGraphRoman(): RomanRequestBuilder {
        return new RomanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the round method. */
    public get microsoftGraphRound(): RoundRequestBuilder {
        return new RoundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roundDown method. */
    public get microsoftGraphRoundDown(): RoundDownRequestBuilder {
        return new RoundDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roundUp method. */
    public get microsoftGraphRoundUp(): RoundUpRequestBuilder {
        return new RoundUpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rows method. */
    public get microsoftGraphRows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rri method. */
    public get microsoftGraphRri(): RriRequestBuilder {
        return new RriRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sec method. */
    public get microsoftGraphSec(): SecRequestBuilder {
        return new SecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sech method. */
    public get microsoftGraphSech(): SechRequestBuilder {
        return new SechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the second method. */
    public get microsoftGraphSecond(): SecondRequestBuilder {
        return new SecondRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the seriesSum method. */
    public get microsoftGraphSeriesSum(): SeriesSumRequestBuilder {
        return new SeriesSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sheet method. */
    public get microsoftGraphSheet(): SheetRequestBuilder {
        return new SheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sheets method. */
    public get microsoftGraphSheets(): SheetsRequestBuilder {
        return new SheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sign method. */
    public get microsoftGraphSign(): SignRequestBuilder {
        return new SignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sin method. */
    public get microsoftGraphSin(): SinRequestBuilder {
        return new SinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sinh method. */
    public get microsoftGraphSinh(): SinhRequestBuilder {
        return new SinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the skew method. */
    public get microsoftGraphSkew(): SkewRequestBuilder {
        return new SkewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the skew_p method. */
    public get microsoftGraphSkew_p(): Skew_pRequestBuilder {
        return new Skew_pRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sln method. */
    public get microsoftGraphSln(): SlnRequestBuilder {
        return new SlnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the small method. */
    public get microsoftGraphSmall(): SmallRequestBuilder {
        return new SmallRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sqrt method. */
    public get microsoftGraphSqrt(): SqrtRequestBuilder {
        return new SqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sqrtPi method. */
    public get microsoftGraphSqrtPi(): SqrtPiRequestBuilder {
        return new SqrtPiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the standardize method. */
    public get microsoftGraphStandardize(): StandardizeRequestBuilder {
        return new StandardizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDev_P method. */
    public get microsoftGraphStDev_P(): StDev_PRequestBuilder {
        return new StDev_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDev_S method. */
    public get microsoftGraphStDev_S(): StDev_SRequestBuilder {
        return new StDev_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDevA method. */
    public get microsoftGraphStDevA(): StDevARequestBuilder {
        return new StDevARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDevPA method. */
    public get microsoftGraphStDevPA(): StDevPARequestBuilder {
        return new StDevPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the substitute method. */
    public get microsoftGraphSubstitute(): SubstituteRequestBuilder {
        return new SubstituteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the subtotal method. */
    public get microsoftGraphSubtotal(): SubtotalRequestBuilder {
        return new SubtotalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sum method. */
    public get microsoftGraphSum(): SumRequestBuilder {
        return new SumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumIf method. */
    public get microsoftGraphSumIf(): SumIfRequestBuilder {
        return new SumIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumIfs method. */
    public get microsoftGraphSumIfs(): SumIfsRequestBuilder {
        return new SumIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumSq method. */
    public get microsoftGraphSumSq(): SumSqRequestBuilder {
        return new SumSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the syd method. */
    public get microsoftGraphSyd(): SydRequestBuilder {
        return new SydRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t method. */
    public get microsoftGraphT(): TRequestBuilder {
        return new TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist method. */
    public get microsoftGraphT_Dist(): T_DistRequestBuilder {
        return new T_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist_2T method. */
    public get microsoftGraphT_Dist_2T(): T_Dist_2TRequestBuilder {
        return new T_Dist_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist_RT method. */
    public get microsoftGraphT_Dist_RT(): T_Dist_RTRequestBuilder {
        return new T_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Inv method. */
    public get microsoftGraphT_Inv(): T_InvRequestBuilder {
        return new T_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Inv_2T method. */
    public get microsoftGraphT_Inv_2T(): T_Inv_2TRequestBuilder {
        return new T_Inv_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tan method. */
    public get microsoftGraphTan(): TanRequestBuilder {
        return new TanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tanh method. */
    public get microsoftGraphTanh(): TanhRequestBuilder {
        return new TanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillEq method. */
    public get microsoftGraphTbillEq(): TbillEqRequestBuilder {
        return new TbillEqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillPrice method. */
    public get microsoftGraphTbillPrice(): TbillPriceRequestBuilder {
        return new TbillPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillYield method. */
    public get microsoftGraphTbillYield(): TbillYieldRequestBuilder {
        return new TbillYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the text method. */
    public get microsoftGraphText(): TextRequestBuilder {
        return new TextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the time method. */
    public get microsoftGraphTime(): TimeRequestBuilder {
        return new TimeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the timevalue method. */
    public get microsoftGraphTimevalue(): TimevalueRequestBuilder {
        return new TimevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the today method. */
    public get microsoftGraphToday(): TodayRequestBuilder {
        return new TodayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trim method. */
    public get microsoftGraphTrim(): TrimRequestBuilder {
        return new TrimRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trimMean method. */
    public get microsoftGraphTrimMean(): TrimMeanRequestBuilder {
        return new TrimMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the true method. */
    public get microsoftGraphTrue(): TrueRequestBuilder {
        return new TrueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trunc method. */
    public get microsoftGraphTrunc(): TruncRequestBuilder {
        return new TruncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the type method. */
    public get microsoftGraphType(): TypeRequestBuilder {
        return new TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unichar method. */
    public get microsoftGraphUnichar(): UnicharRequestBuilder {
        return new UnicharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unicode method. */
    public get microsoftGraphUnicode(): UnicodeRequestBuilder {
        return new UnicodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the upper method. */
    public get microsoftGraphUpper(): UpperRequestBuilder {
        return new UpperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the usdollar method. */
    public get microsoftGraphUsdollar(): UsdollarRequestBuilder {
        return new UsdollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the value method. */
    public get microsoftGraphValue(): ValueRequestBuilder {
        return new ValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the var_P method. */
    public get microsoftGraphVar_P(): Var_PRequestBuilder {
        return new Var_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the var_S method. */
    public get microsoftGraphVar_S(): Var_SRequestBuilder {
        return new Var_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the varA method. */
    public get microsoftGraphVarA(): VarARequestBuilder {
        return new VarARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the varPA method. */
    public get microsoftGraphVarPA(): VarPARequestBuilder {
        return new VarPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the vdb method. */
    public get microsoftGraphVdb(): VdbRequestBuilder {
        return new VdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the vlookup method. */
    public get microsoftGraphVlookup(): VlookupRequestBuilder {
        return new VlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weekday method. */
    public get microsoftGraphWeekday(): WeekdayRequestBuilder {
        return new WeekdayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weekNum method. */
    public get microsoftGraphWeekNum(): WeekNumRequestBuilder {
        return new WeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weibull_Dist method. */
    public get microsoftGraphWeibull_Dist(): Weibull_DistRequestBuilder {
        return new Weibull_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the workDay method. */
    public get microsoftGraphWorkDay(): WorkDayRequestBuilder {
        return new WorkDayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the workDay_Intl method. */
    public get microsoftGraphWorkDay_Intl(): WorkDay_IntlRequestBuilder {
        return new WorkDay_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xirr method. */
    public get microsoftGraphXirr(): XirrRequestBuilder {
        return new XirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xnpv method. */
    public get microsoftGraphXnpv(): XnpvRequestBuilder {
        return new XnpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xor method. */
    public get microsoftGraphXor(): XorRequestBuilder {
        return new XorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the year method. */
    public get microsoftGraphYear(): YearRequestBuilder {
        return new YearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yearFrac method. */
    public get microsoftGraphYearFrac(): YearFracRequestBuilder {
        return new YearFracRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yield method. */
    public get microsoftGraphYield(): YieldRequestBuilder {
        return new YieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yieldDisc method. */
    public get microsoftGraphYieldDisc(): YieldDiscRequestBuilder {
        return new YieldDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yieldMat method. */
    public get microsoftGraphYieldMat(): YieldMatRequestBuilder {
        return new YieldMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the z_Test method. */
    public get microsoftGraphZ_Test(): Z_TestRequestBuilder {
        return new Z_TestRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new FunctionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property functions for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: FunctionsRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get functions from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFunctions
     */
    public get(requestConfiguration?: FunctionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFunctions | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookFunctions>(requestInfo, createWorkbookFunctionsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property functions in drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFunctions
     */
    public patch(body: WorkbookFunctions | undefined, requestConfiguration?: FunctionsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFunctions | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookFunctions>(requestInfo, createWorkbookFunctionsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookFunctions | undefined, requestConfiguration?: FunctionsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
