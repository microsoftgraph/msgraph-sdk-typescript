import {WorkbookFunctions} from '../../../../../../models/';
import {createWorkbookFunctionsFromDiscriminatorValue} from '../../../../../../models/createWorkbookFunctionsFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {FunctionsRequestBuilderDeleteRequestConfiguration} from './functionsRequestBuilderDeleteRequestConfiguration';
import {FunctionsRequestBuilderGetRequestConfiguration} from './functionsRequestBuilderGetRequestConfiguration';
import {FunctionsRequestBuilderPatchRequestConfiguration} from './functionsRequestBuilderPatchRequestConfiguration';
import {MicrosoftGraphAbsRequestBuilder} from './microsoftGraphAbs/microsoftGraphAbsRequestBuilder';
import {MicrosoftGraphAccrIntRequestBuilder} from './microsoftGraphAccrInt/microsoftGraphAccrIntRequestBuilder';
import {MicrosoftGraphAccrIntMRequestBuilder} from './microsoftGraphAccrIntM/microsoftGraphAccrIntMRequestBuilder';
import {MicrosoftGraphAcosRequestBuilder} from './microsoftGraphAcos/microsoftGraphAcosRequestBuilder';
import {MicrosoftGraphAcoshRequestBuilder} from './microsoftGraphAcosh/microsoftGraphAcoshRequestBuilder';
import {MicrosoftGraphAcotRequestBuilder} from './microsoftGraphAcot/microsoftGraphAcotRequestBuilder';
import {MicrosoftGraphAcothRequestBuilder} from './microsoftGraphAcoth/microsoftGraphAcothRequestBuilder';
import {MicrosoftGraphAmorDegrcRequestBuilder} from './microsoftGraphAmorDegrc/microsoftGraphAmorDegrcRequestBuilder';
import {MicrosoftGraphAmorLincRequestBuilder} from './microsoftGraphAmorLinc/microsoftGraphAmorLincRequestBuilder';
import {MicrosoftGraphAndRequestBuilder} from './microsoftGraphAnd/microsoftGraphAndRequestBuilder';
import {MicrosoftGraphArabicRequestBuilder} from './microsoftGraphArabic/microsoftGraphArabicRequestBuilder';
import {MicrosoftGraphAreasRequestBuilder} from './microsoftGraphAreas/microsoftGraphAreasRequestBuilder';
import {MicrosoftGraphAscRequestBuilder} from './microsoftGraphAsc/microsoftGraphAscRequestBuilder';
import {MicrosoftGraphAsinRequestBuilder} from './microsoftGraphAsin/microsoftGraphAsinRequestBuilder';
import {MicrosoftGraphAsinhRequestBuilder} from './microsoftGraphAsinh/microsoftGraphAsinhRequestBuilder';
import {MicrosoftGraphAtanRequestBuilder} from './microsoftGraphAtan/microsoftGraphAtanRequestBuilder';
import {MicrosoftGraphAtan2RequestBuilder} from './microsoftGraphAtan2/microsoftGraphAtan2RequestBuilder';
import {MicrosoftGraphAtanhRequestBuilder} from './microsoftGraphAtanh/microsoftGraphAtanhRequestBuilder';
import {MicrosoftGraphAveDevRequestBuilder} from './microsoftGraphAveDev/microsoftGraphAveDevRequestBuilder';
import {MicrosoftGraphAverageRequestBuilder} from './microsoftGraphAverage/microsoftGraphAverageRequestBuilder';
import {MicrosoftGraphAverageARequestBuilder} from './microsoftGraphAverageA/microsoftGraphAverageARequestBuilder';
import {MicrosoftGraphAverageIfRequestBuilder} from './microsoftGraphAverageIf/microsoftGraphAverageIfRequestBuilder';
import {MicrosoftGraphAverageIfsRequestBuilder} from './microsoftGraphAverageIfs/microsoftGraphAverageIfsRequestBuilder';
import {MicrosoftGraphBahtTextRequestBuilder} from './microsoftGraphBahtText/microsoftGraphBahtTextRequestBuilder';
import {MicrosoftGraphBaseRequestBuilder} from './microsoftGraphBase/microsoftGraphBaseRequestBuilder';
import {MicrosoftGraphBesselIRequestBuilder} from './microsoftGraphBesselI/microsoftGraphBesselIRequestBuilder';
import {MicrosoftGraphBesselJRequestBuilder} from './microsoftGraphBesselJ/microsoftGraphBesselJRequestBuilder';
import {MicrosoftGraphBesselKRequestBuilder} from './microsoftGraphBesselK/microsoftGraphBesselKRequestBuilder';
import {MicrosoftGraphBesselYRequestBuilder} from './microsoftGraphBesselY/microsoftGraphBesselYRequestBuilder';
import {MicrosoftGraphBeta_DistRequestBuilder} from './microsoftGraphBeta_Dist/microsoftGraphBeta_DistRequestBuilder';
import {MicrosoftGraphBeta_InvRequestBuilder} from './microsoftGraphBeta_Inv/microsoftGraphBeta_InvRequestBuilder';
import {MicrosoftGraphBin2DecRequestBuilder} from './microsoftGraphBin2Dec/microsoftGraphBin2DecRequestBuilder';
import {MicrosoftGraphBin2HexRequestBuilder} from './microsoftGraphBin2Hex/microsoftGraphBin2HexRequestBuilder';
import {MicrosoftGraphBin2OctRequestBuilder} from './microsoftGraphBin2Oct/microsoftGraphBin2OctRequestBuilder';
import {MicrosoftGraphBinom_Dist_RangeRequestBuilder} from './microsoftGraphBinom_Dist_Range/microsoftGraphBinom_Dist_RangeRequestBuilder';
import {MicrosoftGraphBinom_DistRequestBuilder} from './microsoftGraphBinom_Dist/microsoftGraphBinom_DistRequestBuilder';
import {MicrosoftGraphBinom_InvRequestBuilder} from './microsoftGraphBinom_Inv/microsoftGraphBinom_InvRequestBuilder';
import {MicrosoftGraphBitandRequestBuilder} from './microsoftGraphBitand/microsoftGraphBitandRequestBuilder';
import {MicrosoftGraphBitlshiftRequestBuilder} from './microsoftGraphBitlshift/microsoftGraphBitlshiftRequestBuilder';
import {MicrosoftGraphBitorRequestBuilder} from './microsoftGraphBitor/microsoftGraphBitorRequestBuilder';
import {MicrosoftGraphBitrshiftRequestBuilder} from './microsoftGraphBitrshift/microsoftGraphBitrshiftRequestBuilder';
import {MicrosoftGraphBitxorRequestBuilder} from './microsoftGraphBitxor/microsoftGraphBitxorRequestBuilder';
import {MicrosoftGraphCeiling_MathRequestBuilder} from './microsoftGraphCeiling_Math/microsoftGraphCeiling_MathRequestBuilder';
import {MicrosoftGraphCeiling_PreciseRequestBuilder} from './microsoftGraphCeiling_Precise/microsoftGraphCeiling_PreciseRequestBuilder';
import {MicrosoftGraphCharRequestBuilder} from './microsoftGraphChar/microsoftGraphCharRequestBuilder';
import {MicrosoftGraphChiSq_Dist_RTRequestBuilder} from './microsoftGraphChiSq_Dist_RT/microsoftGraphChiSq_Dist_RTRequestBuilder';
import {MicrosoftGraphChiSq_DistRequestBuilder} from './microsoftGraphChiSq_Dist/microsoftGraphChiSq_DistRequestBuilder';
import {MicrosoftGraphChiSq_Inv_RTRequestBuilder} from './microsoftGraphChiSq_Inv_RT/microsoftGraphChiSq_Inv_RTRequestBuilder';
import {MicrosoftGraphChiSq_InvRequestBuilder} from './microsoftGraphChiSq_Inv/microsoftGraphChiSq_InvRequestBuilder';
import {MicrosoftGraphChooseRequestBuilder} from './microsoftGraphChoose/microsoftGraphChooseRequestBuilder';
import {MicrosoftGraphCleanRequestBuilder} from './microsoftGraphClean/microsoftGraphCleanRequestBuilder';
import {MicrosoftGraphCodeRequestBuilder} from './microsoftGraphCode/microsoftGraphCodeRequestBuilder';
import {MicrosoftGraphColumnsRequestBuilder} from './microsoftGraphColumns/microsoftGraphColumnsRequestBuilder';
import {MicrosoftGraphCombinRequestBuilder} from './microsoftGraphCombin/microsoftGraphCombinRequestBuilder';
import {MicrosoftGraphCombinaRequestBuilder} from './microsoftGraphCombina/microsoftGraphCombinaRequestBuilder';
import {MicrosoftGraphComplexRequestBuilder} from './microsoftGraphComplex/microsoftGraphComplexRequestBuilder';
import {MicrosoftGraphConcatenateRequestBuilder} from './microsoftGraphConcatenate/microsoftGraphConcatenateRequestBuilder';
import {MicrosoftGraphConfidence_NormRequestBuilder} from './microsoftGraphConfidence_Norm/microsoftGraphConfidence_NormRequestBuilder';
import {MicrosoftGraphConfidence_TRequestBuilder} from './microsoftGraphConfidence_T/microsoftGraphConfidence_TRequestBuilder';
import {MicrosoftGraphConvertRequestBuilder} from './microsoftGraphConvert/microsoftGraphConvertRequestBuilder';
import {MicrosoftGraphCosRequestBuilder} from './microsoftGraphCos/microsoftGraphCosRequestBuilder';
import {MicrosoftGraphCoshRequestBuilder} from './microsoftGraphCosh/microsoftGraphCoshRequestBuilder';
import {MicrosoftGraphCotRequestBuilder} from './microsoftGraphCot/microsoftGraphCotRequestBuilder';
import {MicrosoftGraphCothRequestBuilder} from './microsoftGraphCoth/microsoftGraphCothRequestBuilder';
import {MicrosoftGraphCountRequestBuilder} from './microsoftGraphCount/microsoftGraphCountRequestBuilder';
import {MicrosoftGraphCountARequestBuilder} from './microsoftGraphCountA/microsoftGraphCountARequestBuilder';
import {MicrosoftGraphCountBlankRequestBuilder} from './microsoftGraphCountBlank/microsoftGraphCountBlankRequestBuilder';
import {MicrosoftGraphCountIfRequestBuilder} from './microsoftGraphCountIf/microsoftGraphCountIfRequestBuilder';
import {MicrosoftGraphCountIfsRequestBuilder} from './microsoftGraphCountIfs/microsoftGraphCountIfsRequestBuilder';
import {MicrosoftGraphCoupDayBsRequestBuilder} from './microsoftGraphCoupDayBs/microsoftGraphCoupDayBsRequestBuilder';
import {MicrosoftGraphCoupDaysRequestBuilder} from './microsoftGraphCoupDays/microsoftGraphCoupDaysRequestBuilder';
import {MicrosoftGraphCoupDaysNcRequestBuilder} from './microsoftGraphCoupDaysNc/microsoftGraphCoupDaysNcRequestBuilder';
import {MicrosoftGraphCoupNcdRequestBuilder} from './microsoftGraphCoupNcd/microsoftGraphCoupNcdRequestBuilder';
import {MicrosoftGraphCoupNumRequestBuilder} from './microsoftGraphCoupNum/microsoftGraphCoupNumRequestBuilder';
import {MicrosoftGraphCoupPcdRequestBuilder} from './microsoftGraphCoupPcd/microsoftGraphCoupPcdRequestBuilder';
import {MicrosoftGraphCscRequestBuilder} from './microsoftGraphCsc/microsoftGraphCscRequestBuilder';
import {MicrosoftGraphCschRequestBuilder} from './microsoftGraphCsch/microsoftGraphCschRequestBuilder';
import {MicrosoftGraphCumIPmtRequestBuilder} from './microsoftGraphCumIPmt/microsoftGraphCumIPmtRequestBuilder';
import {MicrosoftGraphCumPrincRequestBuilder} from './microsoftGraphCumPrinc/microsoftGraphCumPrincRequestBuilder';
import {MicrosoftGraphDateRequestBuilder} from './microsoftGraphDate/microsoftGraphDateRequestBuilder';
import {MicrosoftGraphDatevalueRequestBuilder} from './microsoftGraphDatevalue/microsoftGraphDatevalueRequestBuilder';
import {MicrosoftGraphDaverageRequestBuilder} from './microsoftGraphDaverage/microsoftGraphDaverageRequestBuilder';
import {MicrosoftGraphDayRequestBuilder} from './microsoftGraphDay/microsoftGraphDayRequestBuilder';
import {MicrosoftGraphDaysRequestBuilder} from './microsoftGraphDays/microsoftGraphDaysRequestBuilder';
import {MicrosoftGraphDays360RequestBuilder} from './microsoftGraphDays360/microsoftGraphDays360RequestBuilder';
import {MicrosoftGraphDbRequestBuilder} from './microsoftGraphDb/microsoftGraphDbRequestBuilder';
import {MicrosoftGraphDbcsRequestBuilder} from './microsoftGraphDbcs/microsoftGraphDbcsRequestBuilder';
import {MicrosoftGraphDcountRequestBuilder} from './microsoftGraphDcount/microsoftGraphDcountRequestBuilder';
import {MicrosoftGraphDcountARequestBuilder} from './microsoftGraphDcountA/microsoftGraphDcountARequestBuilder';
import {MicrosoftGraphDdbRequestBuilder} from './microsoftGraphDdb/microsoftGraphDdbRequestBuilder';
import {MicrosoftGraphDec2BinRequestBuilder} from './microsoftGraphDec2Bin/microsoftGraphDec2BinRequestBuilder';
import {MicrosoftGraphDec2HexRequestBuilder} from './microsoftGraphDec2Hex/microsoftGraphDec2HexRequestBuilder';
import {MicrosoftGraphDec2OctRequestBuilder} from './microsoftGraphDec2Oct/microsoftGraphDec2OctRequestBuilder';
import {MicrosoftGraphDecimalRequestBuilder} from './microsoftGraphDecimal/microsoftGraphDecimalRequestBuilder';
import {MicrosoftGraphDegreesRequestBuilder} from './microsoftGraphDegrees/microsoftGraphDegreesRequestBuilder';
import {MicrosoftGraphDeltaRequestBuilder} from './microsoftGraphDelta/microsoftGraphDeltaRequestBuilder';
import {MicrosoftGraphDevSqRequestBuilder} from './microsoftGraphDevSq/microsoftGraphDevSqRequestBuilder';
import {MicrosoftGraphDgetRequestBuilder} from './microsoftGraphDget/microsoftGraphDgetRequestBuilder';
import {MicrosoftGraphDiscRequestBuilder} from './microsoftGraphDisc/microsoftGraphDiscRequestBuilder';
import {MicrosoftGraphDmaxRequestBuilder} from './microsoftGraphDmax/microsoftGraphDmaxRequestBuilder';
import {MicrosoftGraphDminRequestBuilder} from './microsoftGraphDmin/microsoftGraphDminRequestBuilder';
import {MicrosoftGraphDollarRequestBuilder} from './microsoftGraphDollar/microsoftGraphDollarRequestBuilder';
import {MicrosoftGraphDollarDeRequestBuilder} from './microsoftGraphDollarDe/microsoftGraphDollarDeRequestBuilder';
import {MicrosoftGraphDollarFrRequestBuilder} from './microsoftGraphDollarFr/microsoftGraphDollarFrRequestBuilder';
import {MicrosoftGraphDproductRequestBuilder} from './microsoftGraphDproduct/microsoftGraphDproductRequestBuilder';
import {MicrosoftGraphDstDevRequestBuilder} from './microsoftGraphDstDev/microsoftGraphDstDevRequestBuilder';
import {MicrosoftGraphDstDevPRequestBuilder} from './microsoftGraphDstDevP/microsoftGraphDstDevPRequestBuilder';
import {MicrosoftGraphDsumRequestBuilder} from './microsoftGraphDsum/microsoftGraphDsumRequestBuilder';
import {MicrosoftGraphDurationRequestBuilder} from './microsoftGraphDuration/microsoftGraphDurationRequestBuilder';
import {MicrosoftGraphDvarRequestBuilder} from './microsoftGraphDvar/microsoftGraphDvarRequestBuilder';
import {MicrosoftGraphDvarPRequestBuilder} from './microsoftGraphDvarP/microsoftGraphDvarPRequestBuilder';
import {MicrosoftGraphEcma_CeilingRequestBuilder} from './microsoftGraphEcma_Ceiling/microsoftGraphEcma_CeilingRequestBuilder';
import {MicrosoftGraphEdateRequestBuilder} from './microsoftGraphEdate/microsoftGraphEdateRequestBuilder';
import {MicrosoftGraphEffectRequestBuilder} from './microsoftGraphEffect/microsoftGraphEffectRequestBuilder';
import {MicrosoftGraphEoMonthRequestBuilder} from './microsoftGraphEoMonth/microsoftGraphEoMonthRequestBuilder';
import {MicrosoftGraphErf_PreciseRequestBuilder} from './microsoftGraphErf_Precise/microsoftGraphErf_PreciseRequestBuilder';
import {MicrosoftGraphErfRequestBuilder} from './microsoftGraphErf/microsoftGraphErfRequestBuilder';
import {MicrosoftGraphErfC_PreciseRequestBuilder} from './microsoftGraphErfC_Precise/microsoftGraphErfC_PreciseRequestBuilder';
import {MicrosoftGraphErfCRequestBuilder} from './microsoftGraphErfC/microsoftGraphErfCRequestBuilder';
import {MicrosoftGraphError_TypeRequestBuilder} from './microsoftGraphError_Type/microsoftGraphError_TypeRequestBuilder';
import {MicrosoftGraphEvenRequestBuilder} from './microsoftGraphEven/microsoftGraphEvenRequestBuilder';
import {MicrosoftGraphExactRequestBuilder} from './microsoftGraphExact/microsoftGraphExactRequestBuilder';
import {MicrosoftGraphExpRequestBuilder} from './microsoftGraphExp/microsoftGraphExpRequestBuilder';
import {MicrosoftGraphExpon_DistRequestBuilder} from './microsoftGraphExpon_Dist/microsoftGraphExpon_DistRequestBuilder';
import {MicrosoftGraphF_Dist_RTRequestBuilder} from './microsoftGraphF_Dist_RT/microsoftGraphF_Dist_RTRequestBuilder';
import {MicrosoftGraphF_DistRequestBuilder} from './microsoftGraphF_Dist/microsoftGraphF_DistRequestBuilder';
import {MicrosoftGraphF_Inv_RTRequestBuilder} from './microsoftGraphF_Inv_RT/microsoftGraphF_Inv_RTRequestBuilder';
import {MicrosoftGraphF_InvRequestBuilder} from './microsoftGraphF_Inv/microsoftGraphF_InvRequestBuilder';
import {MicrosoftGraphFactRequestBuilder} from './microsoftGraphFact/microsoftGraphFactRequestBuilder';
import {MicrosoftGraphFactDoubleRequestBuilder} from './microsoftGraphFactDouble/microsoftGraphFactDoubleRequestBuilder';
import {MicrosoftGraphFalseRequestBuilder} from './microsoftGraphFalse/microsoftGraphFalseRequestBuilder';
import {MicrosoftGraphFindRequestBuilder} from './microsoftGraphFind/microsoftGraphFindRequestBuilder';
import {MicrosoftGraphFindBRequestBuilder} from './microsoftGraphFindB/microsoftGraphFindBRequestBuilder';
import {MicrosoftGraphFisherRequestBuilder} from './microsoftGraphFisher/microsoftGraphFisherRequestBuilder';
import {MicrosoftGraphFisherInvRequestBuilder} from './microsoftGraphFisherInv/microsoftGraphFisherInvRequestBuilder';
import {MicrosoftGraphFixedRequestBuilder} from './microsoftGraphFixed/microsoftGraphFixedRequestBuilder';
import {MicrosoftGraphFloor_MathRequestBuilder} from './microsoftGraphFloor_Math/microsoftGraphFloor_MathRequestBuilder';
import {MicrosoftGraphFloor_PreciseRequestBuilder} from './microsoftGraphFloor_Precise/microsoftGraphFloor_PreciseRequestBuilder';
import {MicrosoftGraphFvRequestBuilder} from './microsoftGraphFv/microsoftGraphFvRequestBuilder';
import {MicrosoftGraphFvscheduleRequestBuilder} from './microsoftGraphFvschedule/microsoftGraphFvscheduleRequestBuilder';
import {MicrosoftGraphGamma_DistRequestBuilder} from './microsoftGraphGamma_Dist/microsoftGraphGamma_DistRequestBuilder';
import {MicrosoftGraphGamma_InvRequestBuilder} from './microsoftGraphGamma_Inv/microsoftGraphGamma_InvRequestBuilder';
import {MicrosoftGraphGammaRequestBuilder} from './microsoftGraphGamma/microsoftGraphGammaRequestBuilder';
import {MicrosoftGraphGammaLn_PreciseRequestBuilder} from './microsoftGraphGammaLn_Precise/microsoftGraphGammaLn_PreciseRequestBuilder';
import {MicrosoftGraphGammaLnRequestBuilder} from './microsoftGraphGammaLn/microsoftGraphGammaLnRequestBuilder';
import {MicrosoftGraphGaussRequestBuilder} from './microsoftGraphGauss/microsoftGraphGaussRequestBuilder';
import {MicrosoftGraphGcdRequestBuilder} from './microsoftGraphGcd/microsoftGraphGcdRequestBuilder';
import {MicrosoftGraphGeoMeanRequestBuilder} from './microsoftGraphGeoMean/microsoftGraphGeoMeanRequestBuilder';
import {MicrosoftGraphGeStepRequestBuilder} from './microsoftGraphGeStep/microsoftGraphGeStepRequestBuilder';
import {MicrosoftGraphHarMeanRequestBuilder} from './microsoftGraphHarMean/microsoftGraphHarMeanRequestBuilder';
import {MicrosoftGraphHex2BinRequestBuilder} from './microsoftGraphHex2Bin/microsoftGraphHex2BinRequestBuilder';
import {MicrosoftGraphHex2DecRequestBuilder} from './microsoftGraphHex2Dec/microsoftGraphHex2DecRequestBuilder';
import {MicrosoftGraphHex2OctRequestBuilder} from './microsoftGraphHex2Oct/microsoftGraphHex2OctRequestBuilder';
import {MicrosoftGraphHlookupRequestBuilder} from './microsoftGraphHlookup/microsoftGraphHlookupRequestBuilder';
import {MicrosoftGraphHourRequestBuilder} from './microsoftGraphHour/microsoftGraphHourRequestBuilder';
import {MicrosoftGraphHyperlinkRequestBuilder} from './microsoftGraphHyperlink/microsoftGraphHyperlinkRequestBuilder';
import {MicrosoftGraphHypGeom_DistRequestBuilder} from './microsoftGraphHypGeom_Dist/microsoftGraphHypGeom_DistRequestBuilder';
import {MicrosoftGraphIfRequestBuilder} from './microsoftGraphIf/microsoftGraphIfRequestBuilder';
import {MicrosoftGraphImAbsRequestBuilder} from './microsoftGraphImAbs/microsoftGraphImAbsRequestBuilder';
import {MicrosoftGraphImaginaryRequestBuilder} from './microsoftGraphImaginary/microsoftGraphImaginaryRequestBuilder';
import {MicrosoftGraphImArgumentRequestBuilder} from './microsoftGraphImArgument/microsoftGraphImArgumentRequestBuilder';
import {MicrosoftGraphImConjugateRequestBuilder} from './microsoftGraphImConjugate/microsoftGraphImConjugateRequestBuilder';
import {MicrosoftGraphImCosRequestBuilder} from './microsoftGraphImCos/microsoftGraphImCosRequestBuilder';
import {MicrosoftGraphImCoshRequestBuilder} from './microsoftGraphImCosh/microsoftGraphImCoshRequestBuilder';
import {MicrosoftGraphImCotRequestBuilder} from './microsoftGraphImCot/microsoftGraphImCotRequestBuilder';
import {MicrosoftGraphImCscRequestBuilder} from './microsoftGraphImCsc/microsoftGraphImCscRequestBuilder';
import {MicrosoftGraphImCschRequestBuilder} from './microsoftGraphImCsch/microsoftGraphImCschRequestBuilder';
import {MicrosoftGraphImDivRequestBuilder} from './microsoftGraphImDiv/microsoftGraphImDivRequestBuilder';
import {MicrosoftGraphImExpRequestBuilder} from './microsoftGraphImExp/microsoftGraphImExpRequestBuilder';
import {MicrosoftGraphImLnRequestBuilder} from './microsoftGraphImLn/microsoftGraphImLnRequestBuilder';
import {MicrosoftGraphImLog10RequestBuilder} from './microsoftGraphImLog10/microsoftGraphImLog10RequestBuilder';
import {MicrosoftGraphImLog2RequestBuilder} from './microsoftGraphImLog2/microsoftGraphImLog2RequestBuilder';
import {MicrosoftGraphImPowerRequestBuilder} from './microsoftGraphImPower/microsoftGraphImPowerRequestBuilder';
import {MicrosoftGraphImProductRequestBuilder} from './microsoftGraphImProduct/microsoftGraphImProductRequestBuilder';
import {MicrosoftGraphImRealRequestBuilder} from './microsoftGraphImReal/microsoftGraphImRealRequestBuilder';
import {MicrosoftGraphImSecRequestBuilder} from './microsoftGraphImSec/microsoftGraphImSecRequestBuilder';
import {MicrosoftGraphImSechRequestBuilder} from './microsoftGraphImSech/microsoftGraphImSechRequestBuilder';
import {MicrosoftGraphImSinRequestBuilder} from './microsoftGraphImSin/microsoftGraphImSinRequestBuilder';
import {MicrosoftGraphImSinhRequestBuilder} from './microsoftGraphImSinh/microsoftGraphImSinhRequestBuilder';
import {MicrosoftGraphImSqrtRequestBuilder} from './microsoftGraphImSqrt/microsoftGraphImSqrtRequestBuilder';
import {MicrosoftGraphImSubRequestBuilder} from './microsoftGraphImSub/microsoftGraphImSubRequestBuilder';
import {MicrosoftGraphImSumRequestBuilder} from './microsoftGraphImSum/microsoftGraphImSumRequestBuilder';
import {MicrosoftGraphImTanRequestBuilder} from './microsoftGraphImTan/microsoftGraphImTanRequestBuilder';
import {MicrosoftGraphIntRequestBuilder} from './microsoftGraphInt/microsoftGraphIntRequestBuilder';
import {MicrosoftGraphIntRateRequestBuilder} from './microsoftGraphIntRate/microsoftGraphIntRateRequestBuilder';
import {MicrosoftGraphIpmtRequestBuilder} from './microsoftGraphIpmt/microsoftGraphIpmtRequestBuilder';
import {MicrosoftGraphIrrRequestBuilder} from './microsoftGraphIrr/microsoftGraphIrrRequestBuilder';
import {MicrosoftGraphIsErrRequestBuilder} from './microsoftGraphIsErr/microsoftGraphIsErrRequestBuilder';
import {MicrosoftGraphIsErrorRequestBuilder} from './microsoftGraphIsError/microsoftGraphIsErrorRequestBuilder';
import {MicrosoftGraphIsEvenRequestBuilder} from './microsoftGraphIsEven/microsoftGraphIsEvenRequestBuilder';
import {MicrosoftGraphIsFormulaRequestBuilder} from './microsoftGraphIsFormula/microsoftGraphIsFormulaRequestBuilder';
import {MicrosoftGraphIsLogicalRequestBuilder} from './microsoftGraphIsLogical/microsoftGraphIsLogicalRequestBuilder';
import {MicrosoftGraphIsNARequestBuilder} from './microsoftGraphIsNA/microsoftGraphIsNARequestBuilder';
import {MicrosoftGraphIsNonTextRequestBuilder} from './microsoftGraphIsNonText/microsoftGraphIsNonTextRequestBuilder';
import {MicrosoftGraphIsNumberRequestBuilder} from './microsoftGraphIsNumber/microsoftGraphIsNumberRequestBuilder';
import {MicrosoftGraphIso_CeilingRequestBuilder} from './microsoftGraphIso_Ceiling/microsoftGraphIso_CeilingRequestBuilder';
import {MicrosoftGraphIsOddRequestBuilder} from './microsoftGraphIsOdd/microsoftGraphIsOddRequestBuilder';
import {MicrosoftGraphIsoWeekNumRequestBuilder} from './microsoftGraphIsoWeekNum/microsoftGraphIsoWeekNumRequestBuilder';
import {MicrosoftGraphIspmtRequestBuilder} from './microsoftGraphIspmt/microsoftGraphIspmtRequestBuilder';
import {MicrosoftGraphIsrefRequestBuilder} from './microsoftGraphIsref/microsoftGraphIsrefRequestBuilder';
import {MicrosoftGraphIsTextRequestBuilder} from './microsoftGraphIsText/microsoftGraphIsTextRequestBuilder';
import {MicrosoftGraphKurtRequestBuilder} from './microsoftGraphKurt/microsoftGraphKurtRequestBuilder';
import {MicrosoftGraphLargeRequestBuilder} from './microsoftGraphLarge/microsoftGraphLargeRequestBuilder';
import {MicrosoftGraphLcmRequestBuilder} from './microsoftGraphLcm/microsoftGraphLcmRequestBuilder';
import {MicrosoftGraphLeftRequestBuilder} from './microsoftGraphLeft/microsoftGraphLeftRequestBuilder';
import {MicrosoftGraphLeftbRequestBuilder} from './microsoftGraphLeftb/microsoftGraphLeftbRequestBuilder';
import {MicrosoftGraphLenRequestBuilder} from './microsoftGraphLen/microsoftGraphLenRequestBuilder';
import {MicrosoftGraphLenbRequestBuilder} from './microsoftGraphLenb/microsoftGraphLenbRequestBuilder';
import {MicrosoftGraphLnRequestBuilder} from './microsoftGraphLn/microsoftGraphLnRequestBuilder';
import {MicrosoftGraphLogRequestBuilder} from './microsoftGraphLog/microsoftGraphLogRequestBuilder';
import {MicrosoftGraphLog10RequestBuilder} from './microsoftGraphLog10/microsoftGraphLog10RequestBuilder';
import {MicrosoftGraphLogNorm_DistRequestBuilder} from './microsoftGraphLogNorm_Dist/microsoftGraphLogNorm_DistRequestBuilder';
import {MicrosoftGraphLogNorm_InvRequestBuilder} from './microsoftGraphLogNorm_Inv/microsoftGraphLogNorm_InvRequestBuilder';
import {MicrosoftGraphLookupRequestBuilder} from './microsoftGraphLookup/microsoftGraphLookupRequestBuilder';
import {MicrosoftGraphLowerRequestBuilder} from './microsoftGraphLower/microsoftGraphLowerRequestBuilder';
import {MicrosoftGraphMatchRequestBuilder} from './microsoftGraphMatch/microsoftGraphMatchRequestBuilder';
import {MicrosoftGraphMaxRequestBuilder} from './microsoftGraphMax/microsoftGraphMaxRequestBuilder';
import {MicrosoftGraphMaxARequestBuilder} from './microsoftGraphMaxA/microsoftGraphMaxARequestBuilder';
import {MicrosoftGraphMdurationRequestBuilder} from './microsoftGraphMduration/microsoftGraphMdurationRequestBuilder';
import {MicrosoftGraphMedianRequestBuilder} from './microsoftGraphMedian/microsoftGraphMedianRequestBuilder';
import {MicrosoftGraphMidRequestBuilder} from './microsoftGraphMid/microsoftGraphMidRequestBuilder';
import {MicrosoftGraphMidbRequestBuilder} from './microsoftGraphMidb/microsoftGraphMidbRequestBuilder';
import {MicrosoftGraphMinRequestBuilder} from './microsoftGraphMin/microsoftGraphMinRequestBuilder';
import {MicrosoftGraphMinARequestBuilder} from './microsoftGraphMinA/microsoftGraphMinARequestBuilder';
import {MicrosoftGraphMinuteRequestBuilder} from './microsoftGraphMinute/microsoftGraphMinuteRequestBuilder';
import {MicrosoftGraphMirrRequestBuilder} from './microsoftGraphMirr/microsoftGraphMirrRequestBuilder';
import {MicrosoftGraphModRequestBuilder} from './microsoftGraphMod/microsoftGraphModRequestBuilder';
import {MicrosoftGraphMonthRequestBuilder} from './microsoftGraphMonth/microsoftGraphMonthRequestBuilder';
import {MicrosoftGraphMroundRequestBuilder} from './microsoftGraphMround/microsoftGraphMroundRequestBuilder';
import {MicrosoftGraphMultiNomialRequestBuilder} from './microsoftGraphMultiNomial/microsoftGraphMultiNomialRequestBuilder';
import {MicrosoftGraphNRequestBuilder} from './microsoftGraphN/microsoftGraphNRequestBuilder';
import {MicrosoftGraphNaRequestBuilder} from './microsoftGraphNa/microsoftGraphNaRequestBuilder';
import {MicrosoftGraphNegBinom_DistRequestBuilder} from './microsoftGraphNegBinom_Dist/microsoftGraphNegBinom_DistRequestBuilder';
import {MicrosoftGraphNetworkDays_IntlRequestBuilder} from './microsoftGraphNetworkDays_Intl/microsoftGraphNetworkDays_IntlRequestBuilder';
import {MicrosoftGraphNetworkDaysRequestBuilder} from './microsoftGraphNetworkDays/microsoftGraphNetworkDaysRequestBuilder';
import {MicrosoftGraphNominalRequestBuilder} from './microsoftGraphNominal/microsoftGraphNominalRequestBuilder';
import {MicrosoftGraphNorm_DistRequestBuilder} from './microsoftGraphNorm_Dist/microsoftGraphNorm_DistRequestBuilder';
import {MicrosoftGraphNorm_InvRequestBuilder} from './microsoftGraphNorm_Inv/microsoftGraphNorm_InvRequestBuilder';
import {MicrosoftGraphNorm_S_DistRequestBuilder} from './microsoftGraphNorm_S_Dist/microsoftGraphNorm_S_DistRequestBuilder';
import {MicrosoftGraphNorm_S_InvRequestBuilder} from './microsoftGraphNorm_S_Inv/microsoftGraphNorm_S_InvRequestBuilder';
import {MicrosoftGraphNotRequestBuilder} from './microsoftGraphNot/microsoftGraphNotRequestBuilder';
import {MicrosoftGraphNowRequestBuilder} from './microsoftGraphNow/microsoftGraphNowRequestBuilder';
import {MicrosoftGraphNperRequestBuilder} from './microsoftGraphNper/microsoftGraphNperRequestBuilder';
import {MicrosoftGraphNpvRequestBuilder} from './microsoftGraphNpv/microsoftGraphNpvRequestBuilder';
import {MicrosoftGraphNumberValueRequestBuilder} from './microsoftGraphNumberValue/microsoftGraphNumberValueRequestBuilder';
import {MicrosoftGraphOct2BinRequestBuilder} from './microsoftGraphOct2Bin/microsoftGraphOct2BinRequestBuilder';
import {MicrosoftGraphOct2DecRequestBuilder} from './microsoftGraphOct2Dec/microsoftGraphOct2DecRequestBuilder';
import {MicrosoftGraphOct2HexRequestBuilder} from './microsoftGraphOct2Hex/microsoftGraphOct2HexRequestBuilder';
import {MicrosoftGraphOddRequestBuilder} from './microsoftGraphOdd/microsoftGraphOddRequestBuilder';
import {MicrosoftGraphOddFPriceRequestBuilder} from './microsoftGraphOddFPrice/microsoftGraphOddFPriceRequestBuilder';
import {MicrosoftGraphOddFYieldRequestBuilder} from './microsoftGraphOddFYield/microsoftGraphOddFYieldRequestBuilder';
import {MicrosoftGraphOddLPriceRequestBuilder} from './microsoftGraphOddLPrice/microsoftGraphOddLPriceRequestBuilder';
import {MicrosoftGraphOddLYieldRequestBuilder} from './microsoftGraphOddLYield/microsoftGraphOddLYieldRequestBuilder';
import {MicrosoftGraphOrRequestBuilder} from './microsoftGraphOr/microsoftGraphOrRequestBuilder';
import {MicrosoftGraphPdurationRequestBuilder} from './microsoftGraphPduration/microsoftGraphPdurationRequestBuilder';
import {MicrosoftGraphPercentile_ExcRequestBuilder} from './microsoftGraphPercentile_Exc/microsoftGraphPercentile_ExcRequestBuilder';
import {MicrosoftGraphPercentile_IncRequestBuilder} from './microsoftGraphPercentile_Inc/microsoftGraphPercentile_IncRequestBuilder';
import {MicrosoftGraphPercentRank_ExcRequestBuilder} from './microsoftGraphPercentRank_Exc/microsoftGraphPercentRank_ExcRequestBuilder';
import {MicrosoftGraphPercentRank_IncRequestBuilder} from './microsoftGraphPercentRank_Inc/microsoftGraphPercentRank_IncRequestBuilder';
import {MicrosoftGraphPermutRequestBuilder} from './microsoftGraphPermut/microsoftGraphPermutRequestBuilder';
import {MicrosoftGraphPermutationaRequestBuilder} from './microsoftGraphPermutationa/microsoftGraphPermutationaRequestBuilder';
import {MicrosoftGraphPhiRequestBuilder} from './microsoftGraphPhi/microsoftGraphPhiRequestBuilder';
import {MicrosoftGraphPiRequestBuilder} from './microsoftGraphPi/microsoftGraphPiRequestBuilder';
import {MicrosoftGraphPmtRequestBuilder} from './microsoftGraphPmt/microsoftGraphPmtRequestBuilder';
import {MicrosoftGraphPoisson_DistRequestBuilder} from './microsoftGraphPoisson_Dist/microsoftGraphPoisson_DistRequestBuilder';
import {MicrosoftGraphPowerRequestBuilder} from './microsoftGraphPower/microsoftGraphPowerRequestBuilder';
import {MicrosoftGraphPpmtRequestBuilder} from './microsoftGraphPpmt/microsoftGraphPpmtRequestBuilder';
import {MicrosoftGraphPriceRequestBuilder} from './microsoftGraphPrice/microsoftGraphPriceRequestBuilder';
import {MicrosoftGraphPriceDiscRequestBuilder} from './microsoftGraphPriceDisc/microsoftGraphPriceDiscRequestBuilder';
import {MicrosoftGraphPriceMatRequestBuilder} from './microsoftGraphPriceMat/microsoftGraphPriceMatRequestBuilder';
import {MicrosoftGraphProductRequestBuilder} from './microsoftGraphProduct/microsoftGraphProductRequestBuilder';
import {MicrosoftGraphProperRequestBuilder} from './microsoftGraphProper/microsoftGraphProperRequestBuilder';
import {MicrosoftGraphPvRequestBuilder} from './microsoftGraphPv/microsoftGraphPvRequestBuilder';
import {MicrosoftGraphQuartile_ExcRequestBuilder} from './microsoftGraphQuartile_Exc/microsoftGraphQuartile_ExcRequestBuilder';
import {MicrosoftGraphQuartile_IncRequestBuilder} from './microsoftGraphQuartile_Inc/microsoftGraphQuartile_IncRequestBuilder';
import {MicrosoftGraphQuotientRequestBuilder} from './microsoftGraphQuotient/microsoftGraphQuotientRequestBuilder';
import {MicrosoftGraphRadiansRequestBuilder} from './microsoftGraphRadians/microsoftGraphRadiansRequestBuilder';
import {MicrosoftGraphRandRequestBuilder} from './microsoftGraphRand/microsoftGraphRandRequestBuilder';
import {MicrosoftGraphRandBetweenRequestBuilder} from './microsoftGraphRandBetween/microsoftGraphRandBetweenRequestBuilder';
import {MicrosoftGraphRank_AvgRequestBuilder} from './microsoftGraphRank_Avg/microsoftGraphRank_AvgRequestBuilder';
import {MicrosoftGraphRank_EqRequestBuilder} from './microsoftGraphRank_Eq/microsoftGraphRank_EqRequestBuilder';
import {MicrosoftGraphRateRequestBuilder} from './microsoftGraphRate/microsoftGraphRateRequestBuilder';
import {MicrosoftGraphReceivedRequestBuilder} from './microsoftGraphReceived/microsoftGraphReceivedRequestBuilder';
import {MicrosoftGraphReplaceRequestBuilder} from './microsoftGraphReplace/microsoftGraphReplaceRequestBuilder';
import {MicrosoftGraphReplaceBRequestBuilder} from './microsoftGraphReplaceB/microsoftGraphReplaceBRequestBuilder';
import {MicrosoftGraphReptRequestBuilder} from './microsoftGraphRept/microsoftGraphReptRequestBuilder';
import {MicrosoftGraphRightRequestBuilder} from './microsoftGraphRight/microsoftGraphRightRequestBuilder';
import {MicrosoftGraphRightbRequestBuilder} from './microsoftGraphRightb/microsoftGraphRightbRequestBuilder';
import {MicrosoftGraphRomanRequestBuilder} from './microsoftGraphRoman/microsoftGraphRomanRequestBuilder';
import {MicrosoftGraphRoundRequestBuilder} from './microsoftGraphRound/microsoftGraphRoundRequestBuilder';
import {MicrosoftGraphRoundDownRequestBuilder} from './microsoftGraphRoundDown/microsoftGraphRoundDownRequestBuilder';
import {MicrosoftGraphRoundUpRequestBuilder} from './microsoftGraphRoundUp/microsoftGraphRoundUpRequestBuilder';
import {MicrosoftGraphRowsRequestBuilder} from './microsoftGraphRows/microsoftGraphRowsRequestBuilder';
import {MicrosoftGraphRriRequestBuilder} from './microsoftGraphRri/microsoftGraphRriRequestBuilder';
import {MicrosoftGraphSecRequestBuilder} from './microsoftGraphSec/microsoftGraphSecRequestBuilder';
import {MicrosoftGraphSechRequestBuilder} from './microsoftGraphSech/microsoftGraphSechRequestBuilder';
import {MicrosoftGraphSecondRequestBuilder} from './microsoftGraphSecond/microsoftGraphSecondRequestBuilder';
import {MicrosoftGraphSeriesSumRequestBuilder} from './microsoftGraphSeriesSum/microsoftGraphSeriesSumRequestBuilder';
import {MicrosoftGraphSheetRequestBuilder} from './microsoftGraphSheet/microsoftGraphSheetRequestBuilder';
import {MicrosoftGraphSheetsRequestBuilder} from './microsoftGraphSheets/microsoftGraphSheetsRequestBuilder';
import {MicrosoftGraphSignRequestBuilder} from './microsoftGraphSign/microsoftGraphSignRequestBuilder';
import {MicrosoftGraphSinRequestBuilder} from './microsoftGraphSin/microsoftGraphSinRequestBuilder';
import {MicrosoftGraphSinhRequestBuilder} from './microsoftGraphSinh/microsoftGraphSinhRequestBuilder';
import {MicrosoftGraphSkew_pRequestBuilder} from './microsoftGraphSkew_p/microsoftGraphSkew_pRequestBuilder';
import {MicrosoftGraphSkewRequestBuilder} from './microsoftGraphSkew/microsoftGraphSkewRequestBuilder';
import {MicrosoftGraphSlnRequestBuilder} from './microsoftGraphSln/microsoftGraphSlnRequestBuilder';
import {MicrosoftGraphSmallRequestBuilder} from './microsoftGraphSmall/microsoftGraphSmallRequestBuilder';
import {MicrosoftGraphSqrtRequestBuilder} from './microsoftGraphSqrt/microsoftGraphSqrtRequestBuilder';
import {MicrosoftGraphSqrtPiRequestBuilder} from './microsoftGraphSqrtPi/microsoftGraphSqrtPiRequestBuilder';
import {MicrosoftGraphStandardizeRequestBuilder} from './microsoftGraphStandardize/microsoftGraphStandardizeRequestBuilder';
import {MicrosoftGraphStDev_PRequestBuilder} from './microsoftGraphStDev_P/microsoftGraphStDev_PRequestBuilder';
import {MicrosoftGraphStDev_SRequestBuilder} from './microsoftGraphStDev_S/microsoftGraphStDev_SRequestBuilder';
import {MicrosoftGraphStDevARequestBuilder} from './microsoftGraphStDevA/microsoftGraphStDevARequestBuilder';
import {MicrosoftGraphStDevPARequestBuilder} from './microsoftGraphStDevPA/microsoftGraphStDevPARequestBuilder';
import {MicrosoftGraphSubstituteRequestBuilder} from './microsoftGraphSubstitute/microsoftGraphSubstituteRequestBuilder';
import {MicrosoftGraphSubtotalRequestBuilder} from './microsoftGraphSubtotal/microsoftGraphSubtotalRequestBuilder';
import {MicrosoftGraphSumRequestBuilder} from './microsoftGraphSum/microsoftGraphSumRequestBuilder';
import {MicrosoftGraphSumIfRequestBuilder} from './microsoftGraphSumIf/microsoftGraphSumIfRequestBuilder';
import {MicrosoftGraphSumIfsRequestBuilder} from './microsoftGraphSumIfs/microsoftGraphSumIfsRequestBuilder';
import {MicrosoftGraphSumSqRequestBuilder} from './microsoftGraphSumSq/microsoftGraphSumSqRequestBuilder';
import {MicrosoftGraphSydRequestBuilder} from './microsoftGraphSyd/microsoftGraphSydRequestBuilder';
import {MicrosoftGraphT_Dist_2TRequestBuilder} from './microsoftGraphT_Dist_2T/microsoftGraphT_Dist_2TRequestBuilder';
import {MicrosoftGraphT_Dist_RTRequestBuilder} from './microsoftGraphT_Dist_RT/microsoftGraphT_Dist_RTRequestBuilder';
import {MicrosoftGraphT_DistRequestBuilder} from './microsoftGraphT_Dist/microsoftGraphT_DistRequestBuilder';
import {MicrosoftGraphT_Inv_2TRequestBuilder} from './microsoftGraphT_Inv_2T/microsoftGraphT_Inv_2TRequestBuilder';
import {MicrosoftGraphT_InvRequestBuilder} from './microsoftGraphT_Inv/microsoftGraphT_InvRequestBuilder';
import {MicrosoftGraphTRequestBuilder} from './microsoftGraphT/microsoftGraphTRequestBuilder';
import {MicrosoftGraphTanRequestBuilder} from './microsoftGraphTan/microsoftGraphTanRequestBuilder';
import {MicrosoftGraphTanhRequestBuilder} from './microsoftGraphTanh/microsoftGraphTanhRequestBuilder';
import {MicrosoftGraphTbillEqRequestBuilder} from './microsoftGraphTbillEq/microsoftGraphTbillEqRequestBuilder';
import {MicrosoftGraphTbillPriceRequestBuilder} from './microsoftGraphTbillPrice/microsoftGraphTbillPriceRequestBuilder';
import {MicrosoftGraphTbillYieldRequestBuilder} from './microsoftGraphTbillYield/microsoftGraphTbillYieldRequestBuilder';
import {MicrosoftGraphTextRequestBuilder} from './microsoftGraphText/microsoftGraphTextRequestBuilder';
import {MicrosoftGraphTimeRequestBuilder} from './microsoftGraphTime/microsoftGraphTimeRequestBuilder';
import {MicrosoftGraphTimevalueRequestBuilder} from './microsoftGraphTimevalue/microsoftGraphTimevalueRequestBuilder';
import {MicrosoftGraphTodayRequestBuilder} from './microsoftGraphToday/microsoftGraphTodayRequestBuilder';
import {MicrosoftGraphTrimRequestBuilder} from './microsoftGraphTrim/microsoftGraphTrimRequestBuilder';
import {MicrosoftGraphTrimMeanRequestBuilder} from './microsoftGraphTrimMean/microsoftGraphTrimMeanRequestBuilder';
import {MicrosoftGraphTrueRequestBuilder} from './microsoftGraphTrue/microsoftGraphTrueRequestBuilder';
import {MicrosoftGraphTruncRequestBuilder} from './microsoftGraphTrunc/microsoftGraphTruncRequestBuilder';
import {MicrosoftGraphTypeRequestBuilder} from './microsoftGraphType/microsoftGraphTypeRequestBuilder';
import {MicrosoftGraphUnicharRequestBuilder} from './microsoftGraphUnichar/microsoftGraphUnicharRequestBuilder';
import {MicrosoftGraphUnicodeRequestBuilder} from './microsoftGraphUnicode/microsoftGraphUnicodeRequestBuilder';
import {MicrosoftGraphUpperRequestBuilder} from './microsoftGraphUpper/microsoftGraphUpperRequestBuilder';
import {MicrosoftGraphUsdollarRequestBuilder} from './microsoftGraphUsdollar/microsoftGraphUsdollarRequestBuilder';
import {MicrosoftGraphValueRequestBuilder} from './microsoftGraphValue/microsoftGraphValueRequestBuilder';
import {MicrosoftGraphVar_PRequestBuilder} from './microsoftGraphVar_P/microsoftGraphVar_PRequestBuilder';
import {MicrosoftGraphVar_SRequestBuilder} from './microsoftGraphVar_S/microsoftGraphVar_SRequestBuilder';
import {MicrosoftGraphVarARequestBuilder} from './microsoftGraphVarA/microsoftGraphVarARequestBuilder';
import {MicrosoftGraphVarPARequestBuilder} from './microsoftGraphVarPA/microsoftGraphVarPARequestBuilder';
import {MicrosoftGraphVdbRequestBuilder} from './microsoftGraphVdb/microsoftGraphVdbRequestBuilder';
import {MicrosoftGraphVlookupRequestBuilder} from './microsoftGraphVlookup/microsoftGraphVlookupRequestBuilder';
import {MicrosoftGraphWeekdayRequestBuilder} from './microsoftGraphWeekday/microsoftGraphWeekdayRequestBuilder';
import {MicrosoftGraphWeekNumRequestBuilder} from './microsoftGraphWeekNum/microsoftGraphWeekNumRequestBuilder';
import {MicrosoftGraphWeibull_DistRequestBuilder} from './microsoftGraphWeibull_Dist/microsoftGraphWeibull_DistRequestBuilder';
import {MicrosoftGraphWorkDay_IntlRequestBuilder} from './microsoftGraphWorkDay_Intl/microsoftGraphWorkDay_IntlRequestBuilder';
import {MicrosoftGraphWorkDayRequestBuilder} from './microsoftGraphWorkDay/microsoftGraphWorkDayRequestBuilder';
import {MicrosoftGraphXirrRequestBuilder} from './microsoftGraphXirr/microsoftGraphXirrRequestBuilder';
import {MicrosoftGraphXnpvRequestBuilder} from './microsoftGraphXnpv/microsoftGraphXnpvRequestBuilder';
import {MicrosoftGraphXorRequestBuilder} from './microsoftGraphXor/microsoftGraphXorRequestBuilder';
import {MicrosoftGraphYearRequestBuilder} from './microsoftGraphYear/microsoftGraphYearRequestBuilder';
import {MicrosoftGraphYearFracRequestBuilder} from './microsoftGraphYearFrac/microsoftGraphYearFracRequestBuilder';
import {MicrosoftGraphYieldRequestBuilder} from './microsoftGraphYield/microsoftGraphYieldRequestBuilder';
import {MicrosoftGraphYieldDiscRequestBuilder} from './microsoftGraphYieldDisc/microsoftGraphYieldDiscRequestBuilder';
import {MicrosoftGraphYieldMatRequestBuilder} from './microsoftGraphYieldMat/microsoftGraphYieldMatRequestBuilder';
import {MicrosoftGraphZ_TestRequestBuilder} from './microsoftGraphZ_Test/microsoftGraphZ_TestRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the functions property of the microsoft.graph.workbook entity.
 */
export class FunctionsRequestBuilder {
    /** Provides operations to call the abs method. */
    public get microsoftGraphAbs(): MicrosoftGraphAbsRequestBuilder {
        return new MicrosoftGraphAbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the accrInt method. */
    public get microsoftGraphAccrInt(): MicrosoftGraphAccrIntRequestBuilder {
        return new MicrosoftGraphAccrIntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the accrIntM method. */
    public get microsoftGraphAccrIntM(): MicrosoftGraphAccrIntMRequestBuilder {
        return new MicrosoftGraphAccrIntMRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acos method. */
    public get microsoftGraphAcos(): MicrosoftGraphAcosRequestBuilder {
        return new MicrosoftGraphAcosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acosh method. */
    public get microsoftGraphAcosh(): MicrosoftGraphAcoshRequestBuilder {
        return new MicrosoftGraphAcoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acot method. */
    public get microsoftGraphAcot(): MicrosoftGraphAcotRequestBuilder {
        return new MicrosoftGraphAcotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the acoth method. */
    public get microsoftGraphAcoth(): MicrosoftGraphAcothRequestBuilder {
        return new MicrosoftGraphAcothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the amorDegrc method. */
    public get microsoftGraphAmorDegrc(): MicrosoftGraphAmorDegrcRequestBuilder {
        return new MicrosoftGraphAmorDegrcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the amorLinc method. */
    public get microsoftGraphAmorLinc(): MicrosoftGraphAmorLincRequestBuilder {
        return new MicrosoftGraphAmorLincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the and method. */
    public get microsoftGraphAnd(): MicrosoftGraphAndRequestBuilder {
        return new MicrosoftGraphAndRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the arabic method. */
    public get microsoftGraphArabic(): MicrosoftGraphArabicRequestBuilder {
        return new MicrosoftGraphArabicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the areas method. */
    public get microsoftGraphAreas(): MicrosoftGraphAreasRequestBuilder {
        return new MicrosoftGraphAreasRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asc method. */
    public get microsoftGraphAsc(): MicrosoftGraphAscRequestBuilder {
        return new MicrosoftGraphAscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asin method. */
    public get microsoftGraphAsin(): MicrosoftGraphAsinRequestBuilder {
        return new MicrosoftGraphAsinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the asinh method. */
    public get microsoftGraphAsinh(): MicrosoftGraphAsinhRequestBuilder {
        return new MicrosoftGraphAsinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atan method. */
    public get microsoftGraphAtan(): MicrosoftGraphAtanRequestBuilder {
        return new MicrosoftGraphAtanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atan2 method. */
    public get microsoftGraphAtan2(): MicrosoftGraphAtan2RequestBuilder {
        return new MicrosoftGraphAtan2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the atanh method. */
    public get microsoftGraphAtanh(): MicrosoftGraphAtanhRequestBuilder {
        return new MicrosoftGraphAtanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the aveDev method. */
    public get microsoftGraphAveDev(): MicrosoftGraphAveDevRequestBuilder {
        return new MicrosoftGraphAveDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the average method. */
    public get microsoftGraphAverage(): MicrosoftGraphAverageRequestBuilder {
        return new MicrosoftGraphAverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageA method. */
    public get microsoftGraphAverageA(): MicrosoftGraphAverageARequestBuilder {
        return new MicrosoftGraphAverageARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageIf method. */
    public get microsoftGraphAverageIf(): MicrosoftGraphAverageIfRequestBuilder {
        return new MicrosoftGraphAverageIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the averageIfs method. */
    public get microsoftGraphAverageIfs(): MicrosoftGraphAverageIfsRequestBuilder {
        return new MicrosoftGraphAverageIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bahtText method. */
    public get microsoftGraphBahtText(): MicrosoftGraphBahtTextRequestBuilder {
        return new MicrosoftGraphBahtTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the base method. */
    public get microsoftGraphBase(): MicrosoftGraphBaseRequestBuilder {
        return new MicrosoftGraphBaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselI method. */
    public get microsoftGraphBesselI(): MicrosoftGraphBesselIRequestBuilder {
        return new MicrosoftGraphBesselIRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselJ method. */
    public get microsoftGraphBesselJ(): MicrosoftGraphBesselJRequestBuilder {
        return new MicrosoftGraphBesselJRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselK method. */
    public get microsoftGraphBesselK(): MicrosoftGraphBesselKRequestBuilder {
        return new MicrosoftGraphBesselKRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the besselY method. */
    public get microsoftGraphBesselY(): MicrosoftGraphBesselYRequestBuilder {
        return new MicrosoftGraphBesselYRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the beta_Dist method. */
    public get microsoftGraphBeta_Dist(): MicrosoftGraphBeta_DistRequestBuilder {
        return new MicrosoftGraphBeta_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the beta_Inv method. */
    public get microsoftGraphBeta_Inv(): MicrosoftGraphBeta_InvRequestBuilder {
        return new MicrosoftGraphBeta_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Dec method. */
    public get microsoftGraphBin2Dec(): MicrosoftGraphBin2DecRequestBuilder {
        return new MicrosoftGraphBin2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Hex method. */
    public get microsoftGraphBin2Hex(): MicrosoftGraphBin2HexRequestBuilder {
        return new MicrosoftGraphBin2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bin2Oct method. */
    public get microsoftGraphBin2Oct(): MicrosoftGraphBin2OctRequestBuilder {
        return new MicrosoftGraphBin2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Dist method. */
    public get microsoftGraphBinom_Dist(): MicrosoftGraphBinom_DistRequestBuilder {
        return new MicrosoftGraphBinom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Dist_Range method. */
    public get microsoftGraphBinom_Dist_Range(): MicrosoftGraphBinom_Dist_RangeRequestBuilder {
        return new MicrosoftGraphBinom_Dist_RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the binom_Inv method. */
    public get microsoftGraphBinom_Inv(): MicrosoftGraphBinom_InvRequestBuilder {
        return new MicrosoftGraphBinom_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitand method. */
    public get microsoftGraphBitand(): MicrosoftGraphBitandRequestBuilder {
        return new MicrosoftGraphBitandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitlshift method. */
    public get microsoftGraphBitlshift(): MicrosoftGraphBitlshiftRequestBuilder {
        return new MicrosoftGraphBitlshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitor method. */
    public get microsoftGraphBitor(): MicrosoftGraphBitorRequestBuilder {
        return new MicrosoftGraphBitorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitrshift method. */
    public get microsoftGraphBitrshift(): MicrosoftGraphBitrshiftRequestBuilder {
        return new MicrosoftGraphBitrshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bitxor method. */
    public get microsoftGraphBitxor(): MicrosoftGraphBitxorRequestBuilder {
        return new MicrosoftGraphBitxorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ceiling_Math method. */
    public get microsoftGraphCeiling_Math(): MicrosoftGraphCeiling_MathRequestBuilder {
        return new MicrosoftGraphCeiling_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ceiling_Precise method. */
    public get microsoftGraphCeiling_Precise(): MicrosoftGraphCeiling_PreciseRequestBuilder {
        return new MicrosoftGraphCeiling_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the char method. */
    public get microsoftGraphChar(): MicrosoftGraphCharRequestBuilder {
        return new MicrosoftGraphCharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Dist method. */
    public get microsoftGraphChiSq_Dist(): MicrosoftGraphChiSq_DistRequestBuilder {
        return new MicrosoftGraphChiSq_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Dist_RT method. */
    public get microsoftGraphChiSq_Dist_RT(): MicrosoftGraphChiSq_Dist_RTRequestBuilder {
        return new MicrosoftGraphChiSq_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Inv method. */
    public get microsoftGraphChiSq_Inv(): MicrosoftGraphChiSq_InvRequestBuilder {
        return new MicrosoftGraphChiSq_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the chiSq_Inv_RT method. */
    public get microsoftGraphChiSq_Inv_RT(): MicrosoftGraphChiSq_Inv_RTRequestBuilder {
        return new MicrosoftGraphChiSq_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the choose method. */
    public get microsoftGraphChoose(): MicrosoftGraphChooseRequestBuilder {
        return new MicrosoftGraphChooseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clean method. */
    public get microsoftGraphClean(): MicrosoftGraphCleanRequestBuilder {
        return new MicrosoftGraphCleanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the code method. */
    public get microsoftGraphCode(): MicrosoftGraphCodeRequestBuilder {
        return new MicrosoftGraphCodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the columns method. */
    public get microsoftGraphColumns(): MicrosoftGraphColumnsRequestBuilder {
        return new MicrosoftGraphColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the combin method. */
    public get microsoftGraphCombin(): MicrosoftGraphCombinRequestBuilder {
        return new MicrosoftGraphCombinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the combina method. */
    public get microsoftGraphCombina(): MicrosoftGraphCombinaRequestBuilder {
        return new MicrosoftGraphCombinaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the complex method. */
    public get microsoftGraphComplex(): MicrosoftGraphComplexRequestBuilder {
        return new MicrosoftGraphComplexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the concatenate method. */
    public get microsoftGraphConcatenate(): MicrosoftGraphConcatenateRequestBuilder {
        return new MicrosoftGraphConcatenateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the confidence_Norm method. */
    public get microsoftGraphConfidence_Norm(): MicrosoftGraphConfidence_NormRequestBuilder {
        return new MicrosoftGraphConfidence_NormRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the confidence_T method. */
    public get microsoftGraphConfidence_T(): MicrosoftGraphConfidence_TRequestBuilder {
        return new MicrosoftGraphConfidence_TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the convert method. */
    public get microsoftGraphConvert(): MicrosoftGraphConvertRequestBuilder {
        return new MicrosoftGraphConvertRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cos method. */
    public get microsoftGraphCos(): MicrosoftGraphCosRequestBuilder {
        return new MicrosoftGraphCosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cosh method. */
    public get microsoftGraphCosh(): MicrosoftGraphCoshRequestBuilder {
        return new MicrosoftGraphCoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cot method. */
    public get microsoftGraphCot(): MicrosoftGraphCotRequestBuilder {
        return new MicrosoftGraphCotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coth method. */
    public get microsoftGraphCoth(): MicrosoftGraphCothRequestBuilder {
        return new MicrosoftGraphCothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the count method. */
    public get microsoftGraphCount(): MicrosoftGraphCountRequestBuilder {
        return new MicrosoftGraphCountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countA method. */
    public get microsoftGraphCountA(): MicrosoftGraphCountARequestBuilder {
        return new MicrosoftGraphCountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countBlank method. */
    public get microsoftGraphCountBlank(): MicrosoftGraphCountBlankRequestBuilder {
        return new MicrosoftGraphCountBlankRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countIf method. */
    public get microsoftGraphCountIf(): MicrosoftGraphCountIfRequestBuilder {
        return new MicrosoftGraphCountIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the countIfs method. */
    public get microsoftGraphCountIfs(): MicrosoftGraphCountIfsRequestBuilder {
        return new MicrosoftGraphCountIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDayBs method. */
    public get microsoftGraphCoupDayBs(): MicrosoftGraphCoupDayBsRequestBuilder {
        return new MicrosoftGraphCoupDayBsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDays method. */
    public get microsoftGraphCoupDays(): MicrosoftGraphCoupDaysRequestBuilder {
        return new MicrosoftGraphCoupDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupDaysNc method. */
    public get microsoftGraphCoupDaysNc(): MicrosoftGraphCoupDaysNcRequestBuilder {
        return new MicrosoftGraphCoupDaysNcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupNcd method. */
    public get microsoftGraphCoupNcd(): MicrosoftGraphCoupNcdRequestBuilder {
        return new MicrosoftGraphCoupNcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupNum method. */
    public get microsoftGraphCoupNum(): MicrosoftGraphCoupNumRequestBuilder {
        return new MicrosoftGraphCoupNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the coupPcd method. */
    public get microsoftGraphCoupPcd(): MicrosoftGraphCoupPcdRequestBuilder {
        return new MicrosoftGraphCoupPcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the csc method. */
    public get microsoftGraphCsc(): MicrosoftGraphCscRequestBuilder {
        return new MicrosoftGraphCscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the csch method. */
    public get microsoftGraphCsch(): MicrosoftGraphCschRequestBuilder {
        return new MicrosoftGraphCschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cumIPmt method. */
    public get microsoftGraphCumIPmt(): MicrosoftGraphCumIPmtRequestBuilder {
        return new MicrosoftGraphCumIPmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cumPrinc method. */
    public get microsoftGraphCumPrinc(): MicrosoftGraphCumPrincRequestBuilder {
        return new MicrosoftGraphCumPrincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the date method. */
    public get microsoftGraphDate(): MicrosoftGraphDateRequestBuilder {
        return new MicrosoftGraphDateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the datevalue method. */
    public get microsoftGraphDatevalue(): MicrosoftGraphDatevalueRequestBuilder {
        return new MicrosoftGraphDatevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the daverage method. */
    public get microsoftGraphDaverage(): MicrosoftGraphDaverageRequestBuilder {
        return new MicrosoftGraphDaverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the day method. */
    public get microsoftGraphDay(): MicrosoftGraphDayRequestBuilder {
        return new MicrosoftGraphDayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the days method. */
    public get microsoftGraphDays(): MicrosoftGraphDaysRequestBuilder {
        return new MicrosoftGraphDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the days360 method. */
    public get microsoftGraphDays360(): MicrosoftGraphDays360RequestBuilder {
        return new MicrosoftGraphDays360RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the db method. */
    public get microsoftGraphDb(): MicrosoftGraphDbRequestBuilder {
        return new MicrosoftGraphDbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dbcs method. */
    public get microsoftGraphDbcs(): MicrosoftGraphDbcsRequestBuilder {
        return new MicrosoftGraphDbcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dcount method. */
    public get microsoftGraphDcount(): MicrosoftGraphDcountRequestBuilder {
        return new MicrosoftGraphDcountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dcountA method. */
    public get microsoftGraphDcountA(): MicrosoftGraphDcountARequestBuilder {
        return new MicrosoftGraphDcountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ddb method. */
    public get microsoftGraphDdb(): MicrosoftGraphDdbRequestBuilder {
        return new MicrosoftGraphDdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Bin method. */
    public get microsoftGraphDec2Bin(): MicrosoftGraphDec2BinRequestBuilder {
        return new MicrosoftGraphDec2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Hex method. */
    public get microsoftGraphDec2Hex(): MicrosoftGraphDec2HexRequestBuilder {
        return new MicrosoftGraphDec2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dec2Oct method. */
    public get microsoftGraphDec2Oct(): MicrosoftGraphDec2OctRequestBuilder {
        return new MicrosoftGraphDec2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the decimal method. */
    public get microsoftGraphDecimal(): MicrosoftGraphDecimalRequestBuilder {
        return new MicrosoftGraphDecimalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the degrees method. */
    public get microsoftGraphDegrees(): MicrosoftGraphDegreesRequestBuilder {
        return new MicrosoftGraphDegreesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get microsoftGraphDelta(): MicrosoftGraphDeltaRequestBuilder {
        return new MicrosoftGraphDeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the devSq method. */
    public get microsoftGraphDevSq(): MicrosoftGraphDevSqRequestBuilder {
        return new MicrosoftGraphDevSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dget method. */
    public get microsoftGraphDget(): MicrosoftGraphDgetRequestBuilder {
        return new MicrosoftGraphDgetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the disc method. */
    public get microsoftGraphDisc(): MicrosoftGraphDiscRequestBuilder {
        return new MicrosoftGraphDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dmax method. */
    public get microsoftGraphDmax(): MicrosoftGraphDmaxRequestBuilder {
        return new MicrosoftGraphDmaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dmin method. */
    public get microsoftGraphDmin(): MicrosoftGraphDminRequestBuilder {
        return new MicrosoftGraphDminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollar method. */
    public get microsoftGraphDollar(): MicrosoftGraphDollarRequestBuilder {
        return new MicrosoftGraphDollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollarDe method. */
    public get microsoftGraphDollarDe(): MicrosoftGraphDollarDeRequestBuilder {
        return new MicrosoftGraphDollarDeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dollarFr method. */
    public get microsoftGraphDollarFr(): MicrosoftGraphDollarFrRequestBuilder {
        return new MicrosoftGraphDollarFrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dproduct method. */
    public get microsoftGraphDproduct(): MicrosoftGraphDproductRequestBuilder {
        return new MicrosoftGraphDproductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dstDev method. */
    public get microsoftGraphDstDev(): MicrosoftGraphDstDevRequestBuilder {
        return new MicrosoftGraphDstDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dstDevP method. */
    public get microsoftGraphDstDevP(): MicrosoftGraphDstDevPRequestBuilder {
        return new MicrosoftGraphDstDevPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dsum method. */
    public get microsoftGraphDsum(): MicrosoftGraphDsumRequestBuilder {
        return new MicrosoftGraphDsumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the duration method. */
    public get microsoftGraphDuration(): MicrosoftGraphDurationRequestBuilder {
        return new MicrosoftGraphDurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dvar method. */
    public get microsoftGraphDvar(): MicrosoftGraphDvarRequestBuilder {
        return new MicrosoftGraphDvarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dvarP method. */
    public get microsoftGraphDvarP(): MicrosoftGraphDvarPRequestBuilder {
        return new MicrosoftGraphDvarPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ecma_Ceiling method. */
    public get microsoftGraphEcma_Ceiling(): MicrosoftGraphEcma_CeilingRequestBuilder {
        return new MicrosoftGraphEcma_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the edate method. */
    public get microsoftGraphEdate(): MicrosoftGraphEdateRequestBuilder {
        return new MicrosoftGraphEdateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the effect method. */
    public get microsoftGraphEffect(): MicrosoftGraphEffectRequestBuilder {
        return new MicrosoftGraphEffectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the eoMonth method. */
    public get microsoftGraphEoMonth(): MicrosoftGraphEoMonthRequestBuilder {
        return new MicrosoftGraphEoMonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erf method. */
    public get microsoftGraphErf(): MicrosoftGraphErfRequestBuilder {
        return new MicrosoftGraphErfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erf_Precise method. */
    public get microsoftGraphErf_Precise(): MicrosoftGraphErf_PreciseRequestBuilder {
        return new MicrosoftGraphErf_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erfC method. */
    public get microsoftGraphErfC(): MicrosoftGraphErfCRequestBuilder {
        return new MicrosoftGraphErfCRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the erfC_Precise method. */
    public get microsoftGraphErfC_Precise(): MicrosoftGraphErfC_PreciseRequestBuilder {
        return new MicrosoftGraphErfC_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the error_Type method. */
    public get microsoftGraphError_Type(): MicrosoftGraphError_TypeRequestBuilder {
        return new MicrosoftGraphError_TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the even method. */
    public get microsoftGraphEven(): MicrosoftGraphEvenRequestBuilder {
        return new MicrosoftGraphEvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exact method. */
    public get microsoftGraphExact(): MicrosoftGraphExactRequestBuilder {
        return new MicrosoftGraphExactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the exp method. */
    public get microsoftGraphExp(): MicrosoftGraphExpRequestBuilder {
        return new MicrosoftGraphExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the expon_Dist method. */
    public get microsoftGraphExpon_Dist(): MicrosoftGraphExpon_DistRequestBuilder {
        return new MicrosoftGraphExpon_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Dist method. */
    public get microsoftGraphF_Dist(): MicrosoftGraphF_DistRequestBuilder {
        return new MicrosoftGraphF_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Dist_RT method. */
    public get microsoftGraphF_Dist_RT(): MicrosoftGraphF_Dist_RTRequestBuilder {
        return new MicrosoftGraphF_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Inv method. */
    public get microsoftGraphF_Inv(): MicrosoftGraphF_InvRequestBuilder {
        return new MicrosoftGraphF_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the f_Inv_RT method. */
    public get microsoftGraphF_Inv_RT(): MicrosoftGraphF_Inv_RTRequestBuilder {
        return new MicrosoftGraphF_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fact method. */
    public get microsoftGraphFact(): MicrosoftGraphFactRequestBuilder {
        return new MicrosoftGraphFactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the factDouble method. */
    public get microsoftGraphFactDouble(): MicrosoftGraphFactDoubleRequestBuilder {
        return new MicrosoftGraphFactDoubleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the false method. */
    public get microsoftGraphFalse(): MicrosoftGraphFalseRequestBuilder {
        return new MicrosoftGraphFalseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the find method. */
    public get microsoftGraphFind(): MicrosoftGraphFindRequestBuilder {
        return new MicrosoftGraphFindRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the findB method. */
    public get microsoftGraphFindB(): MicrosoftGraphFindBRequestBuilder {
        return new MicrosoftGraphFindBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fisher method. */
    public get microsoftGraphFisher(): MicrosoftGraphFisherRequestBuilder {
        return new MicrosoftGraphFisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fisherInv method. */
    public get microsoftGraphFisherInv(): MicrosoftGraphFisherInvRequestBuilder {
        return new MicrosoftGraphFisherInvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fixed method. */
    public get microsoftGraphFixed(): MicrosoftGraphFixedRequestBuilder {
        return new MicrosoftGraphFixedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the floor_Math method. */
    public get microsoftGraphFloor_Math(): MicrosoftGraphFloor_MathRequestBuilder {
        return new MicrosoftGraphFloor_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the floor_Precise method. */
    public get microsoftGraphFloor_Precise(): MicrosoftGraphFloor_PreciseRequestBuilder {
        return new MicrosoftGraphFloor_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fv method. */
    public get microsoftGraphFv(): MicrosoftGraphFvRequestBuilder {
        return new MicrosoftGraphFvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the fvschedule method. */
    public get microsoftGraphFvschedule(): MicrosoftGraphFvscheduleRequestBuilder {
        return new MicrosoftGraphFvscheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma method. */
    public get microsoftGraphGamma(): MicrosoftGraphGammaRequestBuilder {
        return new MicrosoftGraphGammaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma_Dist method. */
    public get microsoftGraphGamma_Dist(): MicrosoftGraphGamma_DistRequestBuilder {
        return new MicrosoftGraphGamma_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gamma_Inv method. */
    public get microsoftGraphGamma_Inv(): MicrosoftGraphGamma_InvRequestBuilder {
        return new MicrosoftGraphGamma_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gammaLn method. */
    public get microsoftGraphGammaLn(): MicrosoftGraphGammaLnRequestBuilder {
        return new MicrosoftGraphGammaLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gammaLn_Precise method. */
    public get microsoftGraphGammaLn_Precise(): MicrosoftGraphGammaLn_PreciseRequestBuilder {
        return new MicrosoftGraphGammaLn_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gauss method. */
    public get microsoftGraphGauss(): MicrosoftGraphGaussRequestBuilder {
        return new MicrosoftGraphGaussRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the gcd method. */
    public get microsoftGraphGcd(): MicrosoftGraphGcdRequestBuilder {
        return new MicrosoftGraphGcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the geoMean method. */
    public get microsoftGraphGeoMean(): MicrosoftGraphGeoMeanRequestBuilder {
        return new MicrosoftGraphGeoMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the geStep method. */
    public get microsoftGraphGeStep(): MicrosoftGraphGeStepRequestBuilder {
        return new MicrosoftGraphGeStepRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the harMean method. */
    public get microsoftGraphHarMean(): MicrosoftGraphHarMeanRequestBuilder {
        return new MicrosoftGraphHarMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Bin method. */
    public get microsoftGraphHex2Bin(): MicrosoftGraphHex2BinRequestBuilder {
        return new MicrosoftGraphHex2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Dec method. */
    public get microsoftGraphHex2Dec(): MicrosoftGraphHex2DecRequestBuilder {
        return new MicrosoftGraphHex2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hex2Oct method. */
    public get microsoftGraphHex2Oct(): MicrosoftGraphHex2OctRequestBuilder {
        return new MicrosoftGraphHex2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hlookup method. */
    public get microsoftGraphHlookup(): MicrosoftGraphHlookupRequestBuilder {
        return new MicrosoftGraphHlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hour method. */
    public get microsoftGraphHour(): MicrosoftGraphHourRequestBuilder {
        return new MicrosoftGraphHourRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hyperlink method. */
    public get microsoftGraphHyperlink(): MicrosoftGraphHyperlinkRequestBuilder {
        return new MicrosoftGraphHyperlinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the hypGeom_Dist method. */
    public get microsoftGraphHypGeom_Dist(): MicrosoftGraphHypGeom_DistRequestBuilder {
        return new MicrosoftGraphHypGeom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the if method. */
    public get microsoftGraphIf(): MicrosoftGraphIfRequestBuilder {
        return new MicrosoftGraphIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imAbs method. */
    public get microsoftGraphImAbs(): MicrosoftGraphImAbsRequestBuilder {
        return new MicrosoftGraphImAbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imaginary method. */
    public get microsoftGraphImaginary(): MicrosoftGraphImaginaryRequestBuilder {
        return new MicrosoftGraphImaginaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imArgument method. */
    public get microsoftGraphImArgument(): MicrosoftGraphImArgumentRequestBuilder {
        return new MicrosoftGraphImArgumentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imConjugate method. */
    public get microsoftGraphImConjugate(): MicrosoftGraphImConjugateRequestBuilder {
        return new MicrosoftGraphImConjugateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCos method. */
    public get microsoftGraphImCos(): MicrosoftGraphImCosRequestBuilder {
        return new MicrosoftGraphImCosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCosh method. */
    public get microsoftGraphImCosh(): MicrosoftGraphImCoshRequestBuilder {
        return new MicrosoftGraphImCoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCot method. */
    public get microsoftGraphImCot(): MicrosoftGraphImCotRequestBuilder {
        return new MicrosoftGraphImCotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCsc method. */
    public get microsoftGraphImCsc(): MicrosoftGraphImCscRequestBuilder {
        return new MicrosoftGraphImCscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imCsch method. */
    public get microsoftGraphImCsch(): MicrosoftGraphImCschRequestBuilder {
        return new MicrosoftGraphImCschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imDiv method. */
    public get microsoftGraphImDiv(): MicrosoftGraphImDivRequestBuilder {
        return new MicrosoftGraphImDivRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imExp method. */
    public get microsoftGraphImExp(): MicrosoftGraphImExpRequestBuilder {
        return new MicrosoftGraphImExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLn method. */
    public get microsoftGraphImLn(): MicrosoftGraphImLnRequestBuilder {
        return new MicrosoftGraphImLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLog10 method. */
    public get microsoftGraphImLog10(): MicrosoftGraphImLog10RequestBuilder {
        return new MicrosoftGraphImLog10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imLog2 method. */
    public get microsoftGraphImLog2(): MicrosoftGraphImLog2RequestBuilder {
        return new MicrosoftGraphImLog2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imPower method. */
    public get microsoftGraphImPower(): MicrosoftGraphImPowerRequestBuilder {
        return new MicrosoftGraphImPowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imProduct method. */
    public get microsoftGraphImProduct(): MicrosoftGraphImProductRequestBuilder {
        return new MicrosoftGraphImProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imReal method. */
    public get microsoftGraphImReal(): MicrosoftGraphImRealRequestBuilder {
        return new MicrosoftGraphImRealRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSec method. */
    public get microsoftGraphImSec(): MicrosoftGraphImSecRequestBuilder {
        return new MicrosoftGraphImSecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSech method. */
    public get microsoftGraphImSech(): MicrosoftGraphImSechRequestBuilder {
        return new MicrosoftGraphImSechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSin method. */
    public get microsoftGraphImSin(): MicrosoftGraphImSinRequestBuilder {
        return new MicrosoftGraphImSinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSinh method. */
    public get microsoftGraphImSinh(): MicrosoftGraphImSinhRequestBuilder {
        return new MicrosoftGraphImSinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSqrt method. */
    public get microsoftGraphImSqrt(): MicrosoftGraphImSqrtRequestBuilder {
        return new MicrosoftGraphImSqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSub method. */
    public get microsoftGraphImSub(): MicrosoftGraphImSubRequestBuilder {
        return new MicrosoftGraphImSubRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imSum method. */
    public get microsoftGraphImSum(): MicrosoftGraphImSumRequestBuilder {
        return new MicrosoftGraphImSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the imTan method. */
    public get microsoftGraphImTan(): MicrosoftGraphImTanRequestBuilder {
        return new MicrosoftGraphImTanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the int method. */
    public get microsoftGraphInt(): MicrosoftGraphIntRequestBuilder {
        return new MicrosoftGraphIntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the intRate method. */
    public get microsoftGraphIntRate(): MicrosoftGraphIntRateRequestBuilder {
        return new MicrosoftGraphIntRateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ipmt method. */
    public get microsoftGraphIpmt(): MicrosoftGraphIpmtRequestBuilder {
        return new MicrosoftGraphIpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the irr method. */
    public get microsoftGraphIrr(): MicrosoftGraphIrrRequestBuilder {
        return new MicrosoftGraphIrrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isErr method. */
    public get microsoftGraphIsErr(): MicrosoftGraphIsErrRequestBuilder {
        return new MicrosoftGraphIsErrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isError method. */
    public get microsoftGraphIsError(): MicrosoftGraphIsErrorRequestBuilder {
        return new MicrosoftGraphIsErrorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isEven method. */
    public get microsoftGraphIsEven(): MicrosoftGraphIsEvenRequestBuilder {
        return new MicrosoftGraphIsEvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isFormula method. */
    public get microsoftGraphIsFormula(): MicrosoftGraphIsFormulaRequestBuilder {
        return new MicrosoftGraphIsFormulaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isLogical method. */
    public get microsoftGraphIsLogical(): MicrosoftGraphIsLogicalRequestBuilder {
        return new MicrosoftGraphIsLogicalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNA method. */
    public get microsoftGraphIsNA(): MicrosoftGraphIsNARequestBuilder {
        return new MicrosoftGraphIsNARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNonText method. */
    public get microsoftGraphIsNonText(): MicrosoftGraphIsNonTextRequestBuilder {
        return new MicrosoftGraphIsNonTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isNumber method. */
    public get microsoftGraphIsNumber(): MicrosoftGraphIsNumberRequestBuilder {
        return new MicrosoftGraphIsNumberRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the iso_Ceiling method. */
    public get microsoftGraphIso_Ceiling(): MicrosoftGraphIso_CeilingRequestBuilder {
        return new MicrosoftGraphIso_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isOdd method. */
    public get microsoftGraphIsOdd(): MicrosoftGraphIsOddRequestBuilder {
        return new MicrosoftGraphIsOddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isoWeekNum method. */
    public get microsoftGraphIsoWeekNum(): MicrosoftGraphIsoWeekNumRequestBuilder {
        return new MicrosoftGraphIsoWeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ispmt method. */
    public get microsoftGraphIspmt(): MicrosoftGraphIspmtRequestBuilder {
        return new MicrosoftGraphIspmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isref method. */
    public get microsoftGraphIsref(): MicrosoftGraphIsrefRequestBuilder {
        return new MicrosoftGraphIsrefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the isText method. */
    public get microsoftGraphIsText(): MicrosoftGraphIsTextRequestBuilder {
        return new MicrosoftGraphIsTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the kurt method. */
    public get microsoftGraphKurt(): MicrosoftGraphKurtRequestBuilder {
        return new MicrosoftGraphKurtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the large method. */
    public get microsoftGraphLarge(): MicrosoftGraphLargeRequestBuilder {
        return new MicrosoftGraphLargeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lcm method. */
    public get microsoftGraphLcm(): MicrosoftGraphLcmRequestBuilder {
        return new MicrosoftGraphLcmRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the left method. */
    public get microsoftGraphLeft(): MicrosoftGraphLeftRequestBuilder {
        return new MicrosoftGraphLeftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the leftb method. */
    public get microsoftGraphLeftb(): MicrosoftGraphLeftbRequestBuilder {
        return new MicrosoftGraphLeftbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the len method. */
    public get microsoftGraphLen(): MicrosoftGraphLenRequestBuilder {
        return new MicrosoftGraphLenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lenb method. */
    public get microsoftGraphLenb(): MicrosoftGraphLenbRequestBuilder {
        return new MicrosoftGraphLenbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ln method. */
    public get microsoftGraphLn(): MicrosoftGraphLnRequestBuilder {
        return new MicrosoftGraphLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the log method. */
    public get microsoftGraphLog(): MicrosoftGraphLogRequestBuilder {
        return new MicrosoftGraphLogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the log10 method. */
    public get microsoftGraphLog10(): MicrosoftGraphLog10RequestBuilder {
        return new MicrosoftGraphLog10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logNorm_Dist method. */
    public get microsoftGraphLogNorm_Dist(): MicrosoftGraphLogNorm_DistRequestBuilder {
        return new MicrosoftGraphLogNorm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logNorm_Inv method. */
    public get microsoftGraphLogNorm_Inv(): MicrosoftGraphLogNorm_InvRequestBuilder {
        return new MicrosoftGraphLogNorm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lookup method. */
    public get microsoftGraphLookup(): MicrosoftGraphLookupRequestBuilder {
        return new MicrosoftGraphLookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the lower method. */
    public get microsoftGraphLower(): MicrosoftGraphLowerRequestBuilder {
        return new MicrosoftGraphLowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the match method. */
    public get microsoftGraphMatch(): MicrosoftGraphMatchRequestBuilder {
        return new MicrosoftGraphMatchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the max method. */
    public get microsoftGraphMax(): MicrosoftGraphMaxRequestBuilder {
        return new MicrosoftGraphMaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the maxA method. */
    public get microsoftGraphMaxA(): MicrosoftGraphMaxARequestBuilder {
        return new MicrosoftGraphMaxARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mduration method. */
    public get microsoftGraphMduration(): MicrosoftGraphMdurationRequestBuilder {
        return new MicrosoftGraphMdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the median method. */
    public get microsoftGraphMedian(): MicrosoftGraphMedianRequestBuilder {
        return new MicrosoftGraphMedianRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mid method. */
    public get microsoftGraphMid(): MicrosoftGraphMidRequestBuilder {
        return new MicrosoftGraphMidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the midb method. */
    public get microsoftGraphMidb(): MicrosoftGraphMidbRequestBuilder {
        return new MicrosoftGraphMidbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the min method. */
    public get microsoftGraphMin(): MicrosoftGraphMinRequestBuilder {
        return new MicrosoftGraphMinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the minA method. */
    public get microsoftGraphMinA(): MicrosoftGraphMinARequestBuilder {
        return new MicrosoftGraphMinARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the minute method. */
    public get microsoftGraphMinute(): MicrosoftGraphMinuteRequestBuilder {
        return new MicrosoftGraphMinuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mirr method. */
    public get microsoftGraphMirr(): MicrosoftGraphMirrRequestBuilder {
        return new MicrosoftGraphMirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mod method. */
    public get microsoftGraphMod(): MicrosoftGraphModRequestBuilder {
        return new MicrosoftGraphModRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the month method. */
    public get microsoftGraphMonth(): MicrosoftGraphMonthRequestBuilder {
        return new MicrosoftGraphMonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the mround method. */
    public get microsoftGraphMround(): MicrosoftGraphMroundRequestBuilder {
        return new MicrosoftGraphMroundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the multiNomial method. */
    public get microsoftGraphMultiNomial(): MicrosoftGraphMultiNomialRequestBuilder {
        return new MicrosoftGraphMultiNomialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the n method. */
    public get microsoftGraphN(): MicrosoftGraphNRequestBuilder {
        return new MicrosoftGraphNRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the na method. */
    public get microsoftGraphNa(): MicrosoftGraphNaRequestBuilder {
        return new MicrosoftGraphNaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the negBinom_Dist method. */
    public get microsoftGraphNegBinom_Dist(): MicrosoftGraphNegBinom_DistRequestBuilder {
        return new MicrosoftGraphNegBinom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the networkDays method. */
    public get microsoftGraphNetworkDays(): MicrosoftGraphNetworkDaysRequestBuilder {
        return new MicrosoftGraphNetworkDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the networkDays_Intl method. */
    public get microsoftGraphNetworkDays_Intl(): MicrosoftGraphNetworkDays_IntlRequestBuilder {
        return new MicrosoftGraphNetworkDays_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the nominal method. */
    public get microsoftGraphNominal(): MicrosoftGraphNominalRequestBuilder {
        return new MicrosoftGraphNominalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_Dist method. */
    public get microsoftGraphNorm_Dist(): MicrosoftGraphNorm_DistRequestBuilder {
        return new MicrosoftGraphNorm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_Inv method. */
    public get microsoftGraphNorm_Inv(): MicrosoftGraphNorm_InvRequestBuilder {
        return new MicrosoftGraphNorm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_S_Dist method. */
    public get microsoftGraphNorm_S_Dist(): MicrosoftGraphNorm_S_DistRequestBuilder {
        return new MicrosoftGraphNorm_S_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the norm_S_Inv method. */
    public get microsoftGraphNorm_S_Inv(): MicrosoftGraphNorm_S_InvRequestBuilder {
        return new MicrosoftGraphNorm_S_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the not method. */
    public get microsoftGraphNot(): MicrosoftGraphNotRequestBuilder {
        return new MicrosoftGraphNotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the now method. */
    public get microsoftGraphNow(): MicrosoftGraphNowRequestBuilder {
        return new MicrosoftGraphNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the nper method. */
    public get microsoftGraphNper(): MicrosoftGraphNperRequestBuilder {
        return new MicrosoftGraphNperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the npv method. */
    public get microsoftGraphNpv(): MicrosoftGraphNpvRequestBuilder {
        return new MicrosoftGraphNpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the numberValue method. */
    public get microsoftGraphNumberValue(): MicrosoftGraphNumberValueRequestBuilder {
        return new MicrosoftGraphNumberValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Bin method. */
    public get microsoftGraphOct2Bin(): MicrosoftGraphOct2BinRequestBuilder {
        return new MicrosoftGraphOct2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Dec method. */
    public get microsoftGraphOct2Dec(): MicrosoftGraphOct2DecRequestBuilder {
        return new MicrosoftGraphOct2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oct2Hex method. */
    public get microsoftGraphOct2Hex(): MicrosoftGraphOct2HexRequestBuilder {
        return new MicrosoftGraphOct2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the odd method. */
    public get microsoftGraphOdd(): MicrosoftGraphOddRequestBuilder {
        return new MicrosoftGraphOddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddFPrice method. */
    public get microsoftGraphOddFPrice(): MicrosoftGraphOddFPriceRequestBuilder {
        return new MicrosoftGraphOddFPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddFYield method. */
    public get microsoftGraphOddFYield(): MicrosoftGraphOddFYieldRequestBuilder {
        return new MicrosoftGraphOddFYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddLPrice method. */
    public get microsoftGraphOddLPrice(): MicrosoftGraphOddLPriceRequestBuilder {
        return new MicrosoftGraphOddLPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the oddLYield method. */
    public get microsoftGraphOddLYield(): MicrosoftGraphOddLYieldRequestBuilder {
        return new MicrosoftGraphOddLYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the or method. */
    public get microsoftGraphOr(): MicrosoftGraphOrRequestBuilder {
        return new MicrosoftGraphOrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pduration method. */
    public get microsoftGraphPduration(): MicrosoftGraphPdurationRequestBuilder {
        return new MicrosoftGraphPdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentile_Exc method. */
    public get microsoftGraphPercentile_Exc(): MicrosoftGraphPercentile_ExcRequestBuilder {
        return new MicrosoftGraphPercentile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentile_Inc method. */
    public get microsoftGraphPercentile_Inc(): MicrosoftGraphPercentile_IncRequestBuilder {
        return new MicrosoftGraphPercentile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentRank_Exc method. */
    public get microsoftGraphPercentRank_Exc(): MicrosoftGraphPercentRank_ExcRequestBuilder {
        return new MicrosoftGraphPercentRank_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the percentRank_Inc method. */
    public get microsoftGraphPercentRank_Inc(): MicrosoftGraphPercentRank_IncRequestBuilder {
        return new MicrosoftGraphPercentRank_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the permut method. */
    public get microsoftGraphPermut(): MicrosoftGraphPermutRequestBuilder {
        return new MicrosoftGraphPermutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the permutationa method. */
    public get microsoftGraphPermutationa(): MicrosoftGraphPermutationaRequestBuilder {
        return new MicrosoftGraphPermutationaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the phi method. */
    public get microsoftGraphPhi(): MicrosoftGraphPhiRequestBuilder {
        return new MicrosoftGraphPhiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pi method. */
    public get microsoftGraphPi(): MicrosoftGraphPiRequestBuilder {
        return new MicrosoftGraphPiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pmt method. */
    public get microsoftGraphPmt(): MicrosoftGraphPmtRequestBuilder {
        return new MicrosoftGraphPmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the poisson_Dist method. */
    public get microsoftGraphPoisson_Dist(): MicrosoftGraphPoisson_DistRequestBuilder {
        return new MicrosoftGraphPoisson_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the power method. */
    public get microsoftGraphPower(): MicrosoftGraphPowerRequestBuilder {
        return new MicrosoftGraphPowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the ppmt method. */
    public get microsoftGraphPpmt(): MicrosoftGraphPpmtRequestBuilder {
        return new MicrosoftGraphPpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the price method. */
    public get microsoftGraphPrice(): MicrosoftGraphPriceRequestBuilder {
        return new MicrosoftGraphPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the priceDisc method. */
    public get microsoftGraphPriceDisc(): MicrosoftGraphPriceDiscRequestBuilder {
        return new MicrosoftGraphPriceDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the priceMat method. */
    public get microsoftGraphPriceMat(): MicrosoftGraphPriceMatRequestBuilder {
        return new MicrosoftGraphPriceMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the product method. */
    public get microsoftGraphProduct(): MicrosoftGraphProductRequestBuilder {
        return new MicrosoftGraphProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the proper method. */
    public get microsoftGraphProper(): MicrosoftGraphProperRequestBuilder {
        return new MicrosoftGraphProperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the pv method. */
    public get microsoftGraphPv(): MicrosoftGraphPvRequestBuilder {
        return new MicrosoftGraphPvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quartile_Exc method. */
    public get microsoftGraphQuartile_Exc(): MicrosoftGraphQuartile_ExcRequestBuilder {
        return new MicrosoftGraphQuartile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quartile_Inc method. */
    public get microsoftGraphQuartile_Inc(): MicrosoftGraphQuartile_IncRequestBuilder {
        return new MicrosoftGraphQuartile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the quotient method. */
    public get microsoftGraphQuotient(): MicrosoftGraphQuotientRequestBuilder {
        return new MicrosoftGraphQuotientRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the radians method. */
    public get microsoftGraphRadians(): MicrosoftGraphRadiansRequestBuilder {
        return new MicrosoftGraphRadiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rand method. */
    public get microsoftGraphRand(): MicrosoftGraphRandRequestBuilder {
        return new MicrosoftGraphRandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the randBetween method. */
    public get microsoftGraphRandBetween(): MicrosoftGraphRandBetweenRequestBuilder {
        return new MicrosoftGraphRandBetweenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rank_Avg method. */
    public get microsoftGraphRank_Avg(): MicrosoftGraphRank_AvgRequestBuilder {
        return new MicrosoftGraphRank_AvgRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rank_Eq method. */
    public get microsoftGraphRank_Eq(): MicrosoftGraphRank_EqRequestBuilder {
        return new MicrosoftGraphRank_EqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rate method. */
    public get microsoftGraphRate(): MicrosoftGraphRateRequestBuilder {
        return new MicrosoftGraphRateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the received method. */
    public get microsoftGraphReceived(): MicrosoftGraphReceivedRequestBuilder {
        return new MicrosoftGraphReceivedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the replace method. */
    public get microsoftGraphReplace(): MicrosoftGraphReplaceRequestBuilder {
        return new MicrosoftGraphReplaceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the replaceB method. */
    public get microsoftGraphReplaceB(): MicrosoftGraphReplaceBRequestBuilder {
        return new MicrosoftGraphReplaceBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rept method. */
    public get microsoftGraphRept(): MicrosoftGraphReptRequestBuilder {
        return new MicrosoftGraphReptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the right method. */
    public get microsoftGraphRight(): MicrosoftGraphRightRequestBuilder {
        return new MicrosoftGraphRightRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rightb method. */
    public get microsoftGraphRightb(): MicrosoftGraphRightbRequestBuilder {
        return new MicrosoftGraphRightbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roman method. */
    public get microsoftGraphRoman(): MicrosoftGraphRomanRequestBuilder {
        return new MicrosoftGraphRomanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the round method. */
    public get microsoftGraphRound(): MicrosoftGraphRoundRequestBuilder {
        return new MicrosoftGraphRoundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roundDown method. */
    public get microsoftGraphRoundDown(): MicrosoftGraphRoundDownRequestBuilder {
        return new MicrosoftGraphRoundDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the roundUp method. */
    public get microsoftGraphRoundUp(): MicrosoftGraphRoundUpRequestBuilder {
        return new MicrosoftGraphRoundUpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rows method. */
    public get microsoftGraphRows(): MicrosoftGraphRowsRequestBuilder {
        return new MicrosoftGraphRowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rri method. */
    public get microsoftGraphRri(): MicrosoftGraphRriRequestBuilder {
        return new MicrosoftGraphRriRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sec method. */
    public get microsoftGraphSec(): MicrosoftGraphSecRequestBuilder {
        return new MicrosoftGraphSecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sech method. */
    public get microsoftGraphSech(): MicrosoftGraphSechRequestBuilder {
        return new MicrosoftGraphSechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the second method. */
    public get microsoftGraphSecond(): MicrosoftGraphSecondRequestBuilder {
        return new MicrosoftGraphSecondRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the seriesSum method. */
    public get microsoftGraphSeriesSum(): MicrosoftGraphSeriesSumRequestBuilder {
        return new MicrosoftGraphSeriesSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sheet method. */
    public get microsoftGraphSheet(): MicrosoftGraphSheetRequestBuilder {
        return new MicrosoftGraphSheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sheets method. */
    public get microsoftGraphSheets(): MicrosoftGraphSheetsRequestBuilder {
        return new MicrosoftGraphSheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sign method. */
    public get microsoftGraphSign(): MicrosoftGraphSignRequestBuilder {
        return new MicrosoftGraphSignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sin method. */
    public get microsoftGraphSin(): MicrosoftGraphSinRequestBuilder {
        return new MicrosoftGraphSinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sinh method. */
    public get microsoftGraphSinh(): MicrosoftGraphSinhRequestBuilder {
        return new MicrosoftGraphSinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the skew method. */
    public get microsoftGraphSkew(): MicrosoftGraphSkewRequestBuilder {
        return new MicrosoftGraphSkewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the skew_p method. */
    public get microsoftGraphSkew_p(): MicrosoftGraphSkew_pRequestBuilder {
        return new MicrosoftGraphSkew_pRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sln method. */
    public get microsoftGraphSln(): MicrosoftGraphSlnRequestBuilder {
        return new MicrosoftGraphSlnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the small method. */
    public get microsoftGraphSmall(): MicrosoftGraphSmallRequestBuilder {
        return new MicrosoftGraphSmallRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sqrt method. */
    public get microsoftGraphSqrt(): MicrosoftGraphSqrtRequestBuilder {
        return new MicrosoftGraphSqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sqrtPi method. */
    public get microsoftGraphSqrtPi(): MicrosoftGraphSqrtPiRequestBuilder {
        return new MicrosoftGraphSqrtPiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the standardize method. */
    public get microsoftGraphStandardize(): MicrosoftGraphStandardizeRequestBuilder {
        return new MicrosoftGraphStandardizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDev_P method. */
    public get microsoftGraphStDev_P(): MicrosoftGraphStDev_PRequestBuilder {
        return new MicrosoftGraphStDev_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDev_S method. */
    public get microsoftGraphStDev_S(): MicrosoftGraphStDev_SRequestBuilder {
        return new MicrosoftGraphStDev_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDevA method. */
    public get microsoftGraphStDevA(): MicrosoftGraphStDevARequestBuilder {
        return new MicrosoftGraphStDevARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the stDevPA method. */
    public get microsoftGraphStDevPA(): MicrosoftGraphStDevPARequestBuilder {
        return new MicrosoftGraphStDevPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the substitute method. */
    public get microsoftGraphSubstitute(): MicrosoftGraphSubstituteRequestBuilder {
        return new MicrosoftGraphSubstituteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the subtotal method. */
    public get microsoftGraphSubtotal(): MicrosoftGraphSubtotalRequestBuilder {
        return new MicrosoftGraphSubtotalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sum method. */
    public get microsoftGraphSum(): MicrosoftGraphSumRequestBuilder {
        return new MicrosoftGraphSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumIf method. */
    public get microsoftGraphSumIf(): MicrosoftGraphSumIfRequestBuilder {
        return new MicrosoftGraphSumIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumIfs method. */
    public get microsoftGraphSumIfs(): MicrosoftGraphSumIfsRequestBuilder {
        return new MicrosoftGraphSumIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the sumSq method. */
    public get microsoftGraphSumSq(): MicrosoftGraphSumSqRequestBuilder {
        return new MicrosoftGraphSumSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the syd method. */
    public get microsoftGraphSyd(): MicrosoftGraphSydRequestBuilder {
        return new MicrosoftGraphSydRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t method. */
    public get microsoftGraphT(): MicrosoftGraphTRequestBuilder {
        return new MicrosoftGraphTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist method. */
    public get microsoftGraphT_Dist(): MicrosoftGraphT_DistRequestBuilder {
        return new MicrosoftGraphT_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist_2T method. */
    public get microsoftGraphT_Dist_2T(): MicrosoftGraphT_Dist_2TRequestBuilder {
        return new MicrosoftGraphT_Dist_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Dist_RT method. */
    public get microsoftGraphT_Dist_RT(): MicrosoftGraphT_Dist_RTRequestBuilder {
        return new MicrosoftGraphT_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Inv method. */
    public get microsoftGraphT_Inv(): MicrosoftGraphT_InvRequestBuilder {
        return new MicrosoftGraphT_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the t_Inv_2T method. */
    public get microsoftGraphT_Inv_2T(): MicrosoftGraphT_Inv_2TRequestBuilder {
        return new MicrosoftGraphT_Inv_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tan method. */
    public get microsoftGraphTan(): MicrosoftGraphTanRequestBuilder {
        return new MicrosoftGraphTanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tanh method. */
    public get microsoftGraphTanh(): MicrosoftGraphTanhRequestBuilder {
        return new MicrosoftGraphTanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillEq method. */
    public get microsoftGraphTbillEq(): MicrosoftGraphTbillEqRequestBuilder {
        return new MicrosoftGraphTbillEqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillPrice method. */
    public get microsoftGraphTbillPrice(): MicrosoftGraphTbillPriceRequestBuilder {
        return new MicrosoftGraphTbillPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the tbillYield method. */
    public get microsoftGraphTbillYield(): MicrosoftGraphTbillYieldRequestBuilder {
        return new MicrosoftGraphTbillYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the text method. */
    public get microsoftGraphText(): MicrosoftGraphTextRequestBuilder {
        return new MicrosoftGraphTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the time method. */
    public get microsoftGraphTime(): MicrosoftGraphTimeRequestBuilder {
        return new MicrosoftGraphTimeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the timevalue method. */
    public get microsoftGraphTimevalue(): MicrosoftGraphTimevalueRequestBuilder {
        return new MicrosoftGraphTimevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the today method. */
    public get microsoftGraphToday(): MicrosoftGraphTodayRequestBuilder {
        return new MicrosoftGraphTodayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trim method. */
    public get microsoftGraphTrim(): MicrosoftGraphTrimRequestBuilder {
        return new MicrosoftGraphTrimRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trimMean method. */
    public get microsoftGraphTrimMean(): MicrosoftGraphTrimMeanRequestBuilder {
        return new MicrosoftGraphTrimMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the true method. */
    public get microsoftGraphTrue(): MicrosoftGraphTrueRequestBuilder {
        return new MicrosoftGraphTrueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the trunc method. */
    public get microsoftGraphTrunc(): MicrosoftGraphTruncRequestBuilder {
        return new MicrosoftGraphTruncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the type method. */
    public get microsoftGraphType(): MicrosoftGraphTypeRequestBuilder {
        return new MicrosoftGraphTypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unichar method. */
    public get microsoftGraphUnichar(): MicrosoftGraphUnicharRequestBuilder {
        return new MicrosoftGraphUnicharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unicode method. */
    public get microsoftGraphUnicode(): MicrosoftGraphUnicodeRequestBuilder {
        return new MicrosoftGraphUnicodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the upper method. */
    public get microsoftGraphUpper(): MicrosoftGraphUpperRequestBuilder {
        return new MicrosoftGraphUpperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the usdollar method. */
    public get microsoftGraphUsdollar(): MicrosoftGraphUsdollarRequestBuilder {
        return new MicrosoftGraphUsdollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the value method. */
    public get microsoftGraphValue(): MicrosoftGraphValueRequestBuilder {
        return new MicrosoftGraphValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the var_P method. */
    public get microsoftGraphVar_P(): MicrosoftGraphVar_PRequestBuilder {
        return new MicrosoftGraphVar_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the var_S method. */
    public get microsoftGraphVar_S(): MicrosoftGraphVar_SRequestBuilder {
        return new MicrosoftGraphVar_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the varA method. */
    public get microsoftGraphVarA(): MicrosoftGraphVarARequestBuilder {
        return new MicrosoftGraphVarARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the varPA method. */
    public get microsoftGraphVarPA(): MicrosoftGraphVarPARequestBuilder {
        return new MicrosoftGraphVarPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the vdb method. */
    public get microsoftGraphVdb(): MicrosoftGraphVdbRequestBuilder {
        return new MicrosoftGraphVdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the vlookup method. */
    public get microsoftGraphVlookup(): MicrosoftGraphVlookupRequestBuilder {
        return new MicrosoftGraphVlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weekday method. */
    public get microsoftGraphWeekday(): MicrosoftGraphWeekdayRequestBuilder {
        return new MicrosoftGraphWeekdayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weekNum method. */
    public get microsoftGraphWeekNum(): MicrosoftGraphWeekNumRequestBuilder {
        return new MicrosoftGraphWeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the weibull_Dist method. */
    public get microsoftGraphWeibull_Dist(): MicrosoftGraphWeibull_DistRequestBuilder {
        return new MicrosoftGraphWeibull_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the workDay method. */
    public get microsoftGraphWorkDay(): MicrosoftGraphWorkDayRequestBuilder {
        return new MicrosoftGraphWorkDayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the workDay_Intl method. */
    public get microsoftGraphWorkDay_Intl(): MicrosoftGraphWorkDay_IntlRequestBuilder {
        return new MicrosoftGraphWorkDay_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xirr method. */
    public get microsoftGraphXirr(): MicrosoftGraphXirrRequestBuilder {
        return new MicrosoftGraphXirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xnpv method. */
    public get microsoftGraphXnpv(): MicrosoftGraphXnpvRequestBuilder {
        return new MicrosoftGraphXnpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the xor method. */
    public get microsoftGraphXor(): MicrosoftGraphXorRequestBuilder {
        return new MicrosoftGraphXorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the year method. */
    public get microsoftGraphYear(): MicrosoftGraphYearRequestBuilder {
        return new MicrosoftGraphYearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yearFrac method. */
    public get microsoftGraphYearFrac(): MicrosoftGraphYearFracRequestBuilder {
        return new MicrosoftGraphYearFracRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yield method. */
    public get microsoftGraphYield(): MicrosoftGraphYieldRequestBuilder {
        return new MicrosoftGraphYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yieldDisc method. */
    public get microsoftGraphYieldDisc(): MicrosoftGraphYieldDiscRequestBuilder {
        return new MicrosoftGraphYieldDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the yieldMat method. */
    public get microsoftGraphYieldMat(): MicrosoftGraphYieldMatRequestBuilder {
        return new MicrosoftGraphYieldMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the z_Test method. */
    public get microsoftGraphZ_Test(): MicrosoftGraphZ_TestRequestBuilder {
        return new MicrosoftGraphZ_TestRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * @param body The request body
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
     * @param body The request body
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
