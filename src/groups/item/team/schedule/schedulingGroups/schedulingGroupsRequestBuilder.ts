import {SchedulingGroup, SchedulingGroupCollectionResponse} from '../../../../../models/';
import {createSchedulingGroupCollectionResponseFromDiscriminatorValue} from '../../../../../models/createSchedulingGroupCollectionResponseFromDiscriminatorValue';
import {createSchedulingGroupFromDiscriminatorValue} from '../../../../../models/createSchedulingGroupFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SchedulingGroupItemRequestBuilder} from './item/schedulingGroupItemRequestBuilder';
import {SchedulingGroupsRequestBuilderGetRequestConfiguration} from './schedulingGroupsRequestBuilderGetRequestConfiguration';
import {SchedulingGroupsRequestBuilderPostRequestConfiguration} from './schedulingGroupsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
 */
export class SchedulingGroupsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
     * @param schedulingGroupId Unique identifier of the item
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
     * The logical grouping of users in the schedule (usually by role).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchedulingGroupCollectionResponse
     */
    public get(requestConfiguration?: SchedulingGroupsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchedulingGroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SchedulingGroupCollectionResponse>(requestInfo, createSchedulingGroupCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to schedulingGroups for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchedulingGroup
     */
    public post(body: SchedulingGroup | undefined, requestConfiguration?: SchedulingGroupsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchedulingGroup | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SchedulingGroup>(requestInfo, createSchedulingGroupFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The logical grouping of users in the schedule (usually by role).
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
     * Create new navigation property to schedulingGroups for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SchedulingGroup | undefined, requestConfiguration?: SchedulingGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
