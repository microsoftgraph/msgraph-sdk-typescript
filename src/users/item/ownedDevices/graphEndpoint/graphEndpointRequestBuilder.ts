import {EndpointCollectionResponse} from '../../../../models/';
import {createEndpointCollectionResponseFromDiscriminatorValue} from '../../../../models/createEndpointCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphEndpointRequestBuilderGetRequestConfiguration} from './graphEndpointRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to endpoint.
 */
export class GraphEndpointRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new GraphEndpointRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/ownedDevices/graph.endpoint{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EndpointCollectionResponse
     */
    public get(requestConfiguration?: GraphEndpointRequestBuilderGetRequestConfiguration | undefined) : Promise<EndpointCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EndpointCollectionResponse>(requestInfo, createEndpointCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GraphEndpointRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
