import {createSchedulingGroupFromDiscriminatorValue} from '../../../../../../models/createSchedulingGroupFromDiscriminatorValue';
import {deserializeIntoSchedulingGroup} from '../../../../../../models/deserializeIntoSchedulingGroup';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {SchedulingGroup} from '../../../../../../models/schedulingGroup';
import {serializeSchedulingGroup} from '../../../../../../models/serializeSchedulingGroup';
import {SchedulingGroupItemRequestBuilderDeleteRequestConfiguration} from './schedulingGroupItemRequestBuilderDeleteRequestConfiguration';
import {SchedulingGroupItemRequestBuilderGetRequestConfiguration} from './schedulingGroupItemRequestBuilderGetRequestConfiguration';
import {SchedulingGroupItemRequestBuilderPatchRequestConfiguration} from './schedulingGroupItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
 */
export class SchedulingGroupItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SchedulingGroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/schedulingGroups/{schedulingGroup%2Did}{?%24select}");
    };
    /**
     * Mark a schedulingGroup as inactive by setting its isActive property.This method does not remove the schedulingGroup from the schedule. Existing shift instances assigned to the scheduling group remain part of the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/schedulinggroup-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SchedulingGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a schedulingGroup by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SchedulingGroup
     * @see {@link https://learn.microsoft.com/graph/api/schedulinggroup-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SchedulingGroupItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SchedulingGroup | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SchedulingGroup>(requestInfo, createSchedulingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Replace an existing schedulingGroup. If the specified schedulingGroup doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SchedulingGroup
     * @see {@link https://learn.microsoft.com/graph/api/schedulinggroup-put?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SchedulingGroup, requestConfiguration?: SchedulingGroupItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SchedulingGroup | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SchedulingGroup>(requestInfo, createSchedulingGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Mark a schedulingGroup as inactive by setting its isActive property.This method does not remove the schedulingGroup from the schedule. Existing shift instances assigned to the scheduling group remain part of the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SchedulingGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a schedulingGroup by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchedulingGroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Replace an existing schedulingGroup. If the specified schedulingGroup doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SchedulingGroup, requestConfiguration?: SchedulingGroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSchedulingGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SchedulingGroupItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SchedulingGroupItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SchedulingGroupItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
