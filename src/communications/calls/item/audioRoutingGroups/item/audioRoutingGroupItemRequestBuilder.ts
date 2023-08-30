import type {AudioRoutingGroup} from '../../../../../models/audioRoutingGroup';
import {createAudioRoutingGroupFromDiscriminatorValue} from '../../../../../models/createAudioRoutingGroupFromDiscriminatorValue';
import {deserializeIntoAudioRoutingGroup} from '../../../../../models/deserializeIntoAudioRoutingGroup';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAudioRoutingGroup} from '../../../../../models/serializeAudioRoutingGroup';
import {AudioRoutingGroupItemRequestBuilderDeleteRequestConfiguration} from './audioRoutingGroupItemRequestBuilderDeleteRequestConfiguration';
import {AudioRoutingGroupItemRequestBuilderGetRequestConfiguration} from './audioRoutingGroupItemRequestBuilderGetRequestConfiguration';
import {AudioRoutingGroupItemRequestBuilderPatchRequestConfiguration} from './audioRoutingGroupItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the audioRoutingGroups property of the microsoft.graph.call entity.
 */
export class AudioRoutingGroupItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AudioRoutingGroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/audioRoutingGroups/{audioRoutingGroup%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete the specified audioRoutingGroup.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/audioroutinggroup-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AudioRoutingGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of an audioRoutingGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AudioRoutingGroup
     * @see {@link https://learn.microsoft.com/graph/api/audioroutinggroup-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AudioRoutingGroupItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AudioRoutingGroup | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AudioRoutingGroup>(requestInfo, createAudioRoutingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Modify sources and receivers of an audioRoutingGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AudioRoutingGroup
     * @see {@link https://learn.microsoft.com/graph/api/audioroutinggroup-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AudioRoutingGroup, requestConfiguration?: AudioRoutingGroupItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AudioRoutingGroup | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AudioRoutingGroup>(requestInfo, createAudioRoutingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the specified audioRoutingGroup.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AudioRoutingGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of an audioRoutingGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AudioRoutingGroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Modify sources and receivers of an audioRoutingGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AudioRoutingGroup, requestConfiguration?: AudioRoutingGroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAudioRoutingGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AudioRoutingGroupItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AudioRoutingGroupItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AudioRoutingGroupItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
