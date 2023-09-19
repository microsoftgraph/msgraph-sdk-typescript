import { type Win32LobAppCollectionResponse } from '../../../models/';
import { createWin32LobAppCollectionResponseFromDiscriminatorValue } from '../../../models/createWin32LobAppCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type GraphWin32LobAppRequestBuilderGetRequestConfiguration } from './graphWin32LobAppRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to win32LobApp.
 */
export class GraphWin32LobAppRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new GraphWin32LobAppRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/graph.win32LobApp{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the items of type microsoft.graph.win32LobApp in the microsoft.graph.mobileApp collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Win32LobAppCollectionResponse
     */
    public get(requestConfiguration?: GraphWin32LobAppRequestBuilderGetRequestConfiguration | undefined) : Promise<Win32LobAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Win32LobAppCollectionResponse>(requestInfo, createWin32LobAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the items of type microsoft.graph.win32LobApp in the microsoft.graph.mobileApp collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GraphWin32LobAppRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a graphWin32LobAppRequestBuilder
     */
    public withUrl(rawUrl: string) : GraphWin32LobAppRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GraphWin32LobAppRequestBuilder(rawUrl, this.requestAdapter);
    };
}
