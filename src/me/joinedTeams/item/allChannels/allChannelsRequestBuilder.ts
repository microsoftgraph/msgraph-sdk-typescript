import {ChannelCollectionResponse} from '../../../../models/';
import {createChannelCollectionResponseFromDiscriminatorValue} from '../../../../models/createChannelCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllChannelsRequestBuilderGetRequestConfiguration} from './allChannelsRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ChannelItemRequestBuilder} from './item/channelItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
 */
export class AllChannelsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
     * @param channelId Unique identifier of the item
     * @returns a ChannelItemRequestBuilder
     */
    public byChannelId(channelId: string) : ChannelItemRequestBuilder {
        if(!channelId) throw new Error("channelId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["channel%2Did"] = channelId
        return new ChannelItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AllChannelsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/allChannels{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of channels either hosted in or shared with the team (incoming channels).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ChannelCollectionResponse
     */
    public get(requestConfiguration?: AllChannelsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ChannelCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ChannelCollectionResponse>(requestInfo, createChannelCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of channels either hosted in or shared with the team (incoming channels).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllChannelsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
