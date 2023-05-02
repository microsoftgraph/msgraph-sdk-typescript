import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue} from './createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue';
import {GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration} from './getAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration';
import {GetAttackSimulationTrainingUserCoverageResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getAttackSimulationTrainingUserCoverage method.
 */
export class GetAttackSimulationTrainingUserCoverageRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAttackSimulationTrainingUserCoverageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/security/getAttackSimulationTrainingUserCoverage(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Invoke function getAttackSimulationTrainingUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetAttackSimulationTrainingUserCoverageResponse
     */
    public get(requestConfiguration?: GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetAttackSimulationTrainingUserCoverageResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<GetAttackSimulationTrainingUserCoverageResponse>(requestInfo, createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke function getAttackSimulationTrainingUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
