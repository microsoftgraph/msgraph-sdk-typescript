import { type VppTokenCollectionResponse } from '../../models/';
import { createVppTokenCollectionResponseFromDiscriminatorValue } from '../../models/createVppTokenCollectionResponseFromDiscriminatorValue';
import { createVppTokenFromDiscriminatorValue } from '../../models/createVppTokenFromDiscriminatorValue';
import { deserializeIntoVppToken } from '../../models/deserializeIntoVppToken';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeVppToken } from '../../models/serializeVppToken';
import { type VppToken } from '../../models/vppToken';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { VppTokenItemRequestBuilder } from './item/vppTokenItemRequestBuilder';
import { type VppTokensRequestBuilderGetRequestConfiguration } from './vppTokensRequestBuilderGetRequestConfiguration';
import { type VppTokensRequestBuilderPostRequestConfiguration } from './vppTokensRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
 */
export class VppTokensRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
     * @param vppTokenId The unique identifier of vppToken
     * @returns a VppTokenItemRequestBuilder
     */
    public byVppTokenId(vppTokenId: string) : VppTokenItemRequestBuilder {
        if(!vppTokenId) throw new Error("vppTokenId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vppToken%2Did"] = vppTokenId
        return new VppTokenItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VppTokensRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/vppTokens{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the vppToken objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppTokenCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VppTokensRequestBuilderGetRequestConfiguration | undefined) : Promise<VppTokenCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VppTokenCollectionResponse>(requestInfo, createVppTokenCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: VppToken, requestConfiguration?: VppTokensRequestBuilderPostRequestConfiguration | undefined) : Promise<VppToken | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VppToken>(requestInfo, createVppTokenFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the vppToken objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VppTokensRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: VppToken, requestConfiguration?: VppTokensRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeVppToken);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a vppTokensRequestBuilder
     */
    public withUrl(rawUrl: string) : VppTokensRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VppTokensRequestBuilder(rawUrl, this.requestAdapter);
    };
}
