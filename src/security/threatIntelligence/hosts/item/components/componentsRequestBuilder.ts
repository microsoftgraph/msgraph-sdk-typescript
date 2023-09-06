import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type HostComponentCollectionResponse } from '../../../../../models/security/';
import { createHostComponentCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/createHostComponentCollectionResponseFromDiscriminatorValue';
import { type ComponentsRequestBuilderGetRequestConfiguration } from './componentsRequestBuilderGetRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { HostComponentItemRequestBuilder } from './item/hostComponentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the components property of the microsoft.graph.security.host entity.
 */
export class ComponentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the components property of the microsoft.graph.security.host entity.
     * @param hostComponentId The unique identifier of hostComponent
     * @returns a HostComponentItemRequestBuilder
     */
    public byHostComponentId(hostComponentId: string) : HostComponentItemRequestBuilder {
        if(!hostComponentId) throw new Error("hostComponentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostComponent%2Did"] = hostComponentId
        return new HostComponentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ComponentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/components{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of hostComponent resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostComponentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-components?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ComponentsRequestBuilderGetRequestConfiguration | undefined) : Promise<HostComponentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostComponentCollectionResponse>(requestInfo, createHostComponentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of hostComponent resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ComponentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a componentsRequestBuilder
     */
    public withUrl(rawUrl: string) : ComponentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ComponentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
