import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createGetAttackSimulationSimulationUserCoverageResponseFromDiscriminatorValue } from './getAttackSimulationSimulationUserCoverageResponse';
import { type GetAttackSimulationSimulationUserCoverageResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetAttackSimulationSimulationUserCoverageRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GetAttackSimulationSimulationUserCoverageRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: GetAttackSimulationSimulationUserCoverageRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getAttackSimulationSimulationUserCoverage method.
 */
export class GetAttackSimulationSimulationUserCoverageRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAttackSimulationSimulationUserCoverageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/security/getAttackSimulationSimulationUserCoverage(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Invoke function getAttackSimulationSimulationUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAttackSimulationSimulationUserCoverageResponse
     */
    public get(requestConfiguration?: GetAttackSimulationSimulationUserCoverageRequestBuilderGetRequestConfiguration | undefined) : Promise<GetAttackSimulationSimulationUserCoverageResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetAttackSimulationSimulationUserCoverageResponse>(requestInfo, createGetAttackSimulationSimulationUserCoverageResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getAttackSimulationSimulationUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetAttackSimulationSimulationUserCoverageRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getAttackSimulationSimulationUserCoverageRequestBuilder
     */
    public withUrl(rawUrl: string) : GetAttackSimulationSimulationUserCoverageRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetAttackSimulationSimulationUserCoverageRequestBuilder(rawUrl, this.requestAdapter);
    };
}
