import {createGroupLifecyclePolicyFromDiscriminatorValue} from '../../../../models/createGroupLifecyclePolicyFromDiscriminatorValue';
import {deserializeIntoGroupLifecyclePolicy} from '../../../../models/deserializeIntoGroupLifecyclePolicy';
import type {GroupLifecyclePolicy} from '../../../../models/groupLifecyclePolicy';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeGroupLifecyclePolicy} from '../../../../models/serializeGroupLifecyclePolicy';
import {AddGroupRequestBuilder} from './addGroup/addGroupRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration';
import {GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderGetRequestConfiguration';
import {GroupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration';
import {RemoveGroupRequestBuilder} from './removeGroup/removeGroupRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groupLifecyclePolicies property of the microsoft.graph.group entity.
 */
export class GroupLifecyclePolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the addGroup method.
     */
    public get addGroup(): AddGroupRequestBuilder {
        return new AddGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the removeGroup method.
     */
    public get removeGroup(): RemoveGroupRequestBuilder {
        return new RemoveGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new GroupLifecyclePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/groupLifecyclePolicies/{groupLifecyclePolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property groupLifecyclePolicies for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The collection of lifecycle policies for this group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupLifecyclePolicy
     */
    public get(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupLifecyclePolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupLifecyclePolicy>(requestInfo, createGroupLifecyclePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property groupLifecyclePolicies in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupLifecyclePolicy
     */
    public patch(body: GroupLifecyclePolicy | undefined, requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<GroupLifecyclePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupLifecyclePolicy>(requestInfo, createGroupLifecyclePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property groupLifecyclePolicies for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of lifecycle policies for this group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property groupLifecyclePolicies in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: GroupLifecyclePolicy | undefined, requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGroupLifecyclePolicy);
        return requestInfo;
    };
}
