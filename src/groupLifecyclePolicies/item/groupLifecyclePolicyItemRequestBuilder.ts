import {createGroupLifecyclePolicyFromDiscriminatorValue} from '../../models/createGroupLifecyclePolicyFromDiscriminatorValue';
import {deserializeIntoGroupLifecyclePolicy} from '../../models/deserializeIntoGroupLifecyclePolicy';
import {GroupLifecyclePolicy} from '../../models/groupLifecyclePolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeGroupLifecyclePolicy} from '../../models/serializeGroupLifecyclePolicy';
import {AddGroupRequestBuilder} from './addGroup/addGroupRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration';
import {GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderGetRequestConfiguration';
import {GroupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration} from './groupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration';
import {RemoveGroupRequestBuilder} from './removeGroup/removeGroupRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of groupLifecyclePolicy entities.
 */
export class GroupLifecyclePolicyItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the addGroup method. */
    public get addGroup(): AddGroupRequestBuilder {
        return new AddGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeGroup method. */
    public get removeGroup(): RemoveGroupRequestBuilder {
        return new RemoveGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new GroupLifecyclePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupLifecyclePolicies/{groupLifecyclePolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a groupLifecyclePolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/grouplifecyclepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the properties and relationships of a groupLifecyclePolicies object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GroupLifecyclePolicy
     * @see {@link https://docs.microsoft.com/graph/api/grouplifecyclepolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GroupLifecyclePolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<GroupLifecyclePolicy>(requestInfo, createGroupLifecyclePolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of a groupLifecyclePolicygroupLifecyclePolicy resource type object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GroupLifecyclePolicy
     * @see {@link https://docs.microsoft.com/graph/api/grouplifecyclepolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: GroupLifecyclePolicy | undefined, requestConfiguration?: GroupLifecyclePolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GroupLifecyclePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<GroupLifecyclePolicy>(requestInfo, createGroupLifecyclePolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete a groupLifecyclePolicy.
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
     * Retrieve the properties and relationships of a groupLifecyclePolicies object.
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
     * Update the properties of a groupLifecyclePolicygroupLifecyclePolicy resource type object.
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
