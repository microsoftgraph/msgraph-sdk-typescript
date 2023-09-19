import { type IosStoreApp } from '../../../../models/';
import { createIosStoreAppFromDiscriminatorValue } from '../../../../models/createIosStoreAppFromDiscriminatorValue';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type GraphIosStoreAppRequestBuilderGetRequestConfiguration } from './graphIosStoreAppRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to iosStoreApp.
 */
export class GraphIosStoreAppRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GraphIosStoreAppRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.iosStoreApp{?%24select,%24expand}");
    };
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.iosStoreApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosStoreApp
     */
    public get(requestConfiguration?: GraphIosStoreAppRequestBuilderGetRequestConfiguration | undefined) : Promise<IosStoreApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IosStoreApp>(requestInfo, createIosStoreAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.iosStoreApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GraphIosStoreAppRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a graphIosStoreAppRequestBuilder
     */
    public withUrl(rawUrl: string) : GraphIosStoreAppRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GraphIosStoreAppRequestBuilder(rawUrl, this.requestAdapter);
    };
}
