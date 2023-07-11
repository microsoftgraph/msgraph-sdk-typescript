import {AudioRoutingGroupCollectionResponse} from '../../../../models/';
import {AudioRoutingGroup} from '../../../../models/audioRoutingGroup';
import {createAudioRoutingGroupCollectionResponseFromDiscriminatorValue} from '../../../../models/createAudioRoutingGroupCollectionResponseFromDiscriminatorValue';
import {createAudioRoutingGroupFromDiscriminatorValue} from '../../../../models/createAudioRoutingGroupFromDiscriminatorValue';
import {deserializeIntoAudioRoutingGroup} from '../../../../models/deserializeIntoAudioRoutingGroup';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAudioRoutingGroup} from '../../../../models/serializeAudioRoutingGroup';
import {AudioRoutingGroupsRequestBuilderGetRequestConfiguration} from './audioRoutingGroupsRequestBuilderGetRequestConfiguration';
import {AudioRoutingGroupsRequestBuilderPostRequestConfiguration} from './audioRoutingGroupsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AudioRoutingGroupItemRequestBuilder} from './item/audioRoutingGroupItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
 */
export class AudioRoutingGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
     * @param audioRoutingGroupId Unique identifier of the item
     * @returns a AudioRoutingGroupItemRequestBuilder
     */
    public byAudioRoutingGroupId(audioRoutingGroupId: string) : AudioRoutingGroupItemRequestBuilder {
        if(!audioRoutingGroupId) throw new Error("audioRoutingGroupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["audioRoutingGroup%2Did"] = audioRoutingGroupId
        return new AudioRoutingGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AudioRoutingGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/audioRoutingGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get audioRoutingGroups from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AudioRoutingGroupCollectionResponse
     */
    public get(requestConfiguration?: AudioRoutingGroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<AudioRoutingGroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AudioRoutingGroupCollectionResponse>(requestInfo, createAudioRoutingGroupCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to audioRoutingGroups for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AudioRoutingGroup
     */
    public post(body: AudioRoutingGroup | undefined, requestConfiguration?: AudioRoutingGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<AudioRoutingGroup | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AudioRoutingGroup>(requestInfo, createAudioRoutingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get audioRoutingGroups from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AudioRoutingGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to audioRoutingGroups for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AudioRoutingGroup | undefined, requestConfiguration?: AudioRoutingGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAudioRoutingGroup);
        return requestInfo;
    };
}
