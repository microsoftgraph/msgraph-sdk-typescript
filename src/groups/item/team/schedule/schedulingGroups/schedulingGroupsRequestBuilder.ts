import { type SchedulingGroupCollectionResponse } from '../../../../../models/';
import { createSchedulingGroupCollectionResponseFromDiscriminatorValue } from '../../../../../models/createSchedulingGroupCollectionResponseFromDiscriminatorValue';
import { createSchedulingGroupFromDiscriminatorValue } from '../../../../../models/createSchedulingGroupFromDiscriminatorValue';
import { deserializeIntoSchedulingGroup } from '../../../../../models/deserializeIntoSchedulingGroup';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type SchedulingGroup } from '../../../../../models/schedulingGroup';
import { serializeSchedulingGroup } from '../../../../../models/serializeSchedulingGroup';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SchedulingGroupItemRequestBuilder } from './item/schedulingGroupItemRequestBuilder';
import { type SchedulingGroupsRequestBuilderGetRequestConfiguration } from './schedulingGroupsRequestBuilderGetRequestConfiguration';
import { type SchedulingGroupsRequestBuilderPostRequestConfiguration } from './schedulingGroupsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
 */
export class SchedulingGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
     * @param schedulingGroupId The unique identifier of schedulingGroup
     * @returns a SchedulingGroupItemRequestBuilder
     */
    public bySchedulingGroupId(schedulingGroupId: string) : SchedulingGroupItemRequestBuilder {
        if(!schedulingGroupId) throw new Error("schedulingGroupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schedulingGroup%2Did"] = schedulingGroupId
        return new SchedulingGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SchedulingGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/schedulingGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the list of schedulingGroups in this schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SchedulingGroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/schedule-list-schedulinggroups?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SchedulingGroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<SchedulingGroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SchedulingGroupCollectionResponse>(requestInfo, createSchedulingGroupCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new schedulingGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SchedulingGroup
     * @see {@link https://learn.microsoft.com/graph/api/schedule-post-schedulinggroups?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SchedulingGroup, requestConfiguration?: SchedulingGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<SchedulingGroup | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SchedulingGroup>(requestInfo, createSchedulingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of schedulingGroups in this schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchedulingGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new schedulingGroup.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SchedulingGroup, requestConfiguration?: SchedulingGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSchedulingGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a schedulingGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : SchedulingGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SchedulingGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
