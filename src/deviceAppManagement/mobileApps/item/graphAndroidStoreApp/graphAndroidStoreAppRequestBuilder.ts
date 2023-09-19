import { type AndroidStoreApp } from '../../../../models/';
import { createAndroidStoreAppFromDiscriminatorValue } from '../../../../models/createAndroidStoreAppFromDiscriminatorValue';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type GraphAndroidStoreAppRequestBuilderGetRequestConfiguration } from './graphAndroidStoreAppRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to androidStoreApp.
 */
export class GraphAndroidStoreAppRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GraphAndroidStoreAppRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.androidStoreApp{?%24select,%24expand}");
    };
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.androidStoreApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AndroidStoreApp
     */
    public get(requestConfiguration?: GraphAndroidStoreAppRequestBuilderGetRequestConfiguration | undefined) : Promise<AndroidStoreApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AndroidStoreApp>(requestInfo, createAndroidStoreAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.androidStoreApp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GraphAndroidStoreAppRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a graphAndroidStoreAppRequestBuilder
     */
    public withUrl(rawUrl: string) : GraphAndroidStoreAppRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GraphAndroidStoreAppRequestBuilder(rawUrl, this.requestAdapter);
    };
}
