import {HomeRealmDiscoveryPolicy} from '../../../../models/';
import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from '../../../../models/createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration} from './homeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.application entity.
 */
export class HomeRealmDiscoveryPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new HomeRealmDiscoveryPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Get homeRealmDiscoveryPolicies from applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HomeRealmDiscoveryPolicy
     */
    public get(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<HomeRealmDiscoveryPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HomeRealmDiscoveryPolicy>(requestInfo, createHomeRealmDiscoveryPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get homeRealmDiscoveryPolicies from applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HomeRealmDiscoveryPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
