import type {AppManagementPolicy} from '../../../models/appManagementPolicy';
import {createAppManagementPolicyFromDiscriminatorValue} from '../../../models/createAppManagementPolicyFromDiscriminatorValue';
import {deserializeIntoAppManagementPolicy} from '../../../models/deserializeIntoAppManagementPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAppManagementPolicy} from '../../../models/serializeAppManagementPolicy';
import {AppliesToRequestBuilder} from './appliesTo/appliesToRequestBuilder';
import {AppManagementPolicyItemRequestBuilderDeleteRequestConfiguration} from './appManagementPolicyItemRequestBuilderDeleteRequestConfiguration';
import {AppManagementPolicyItemRequestBuilderGetRequestConfiguration} from './appManagementPolicyItemRequestBuilderGetRequestConfiguration';
import {AppManagementPolicyItemRequestBuilderPatchRequestConfiguration} from './appManagementPolicyItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appManagementPolicies property of the microsoft.graph.policyRoot entity.
 */
export class AppManagementPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.appManagementPolicy entity.
     */
    public get appliesTo(): AppliesToRequestBuilder {
        return new AppliesToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AppManagementPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/appManagementPolicies/{appManagementPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an appManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/appmanagementpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AppManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of an appManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/appmanagementpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AppManagementPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppManagementPolicy>(requestInfo, createAppManagementPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update an appManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/appmanagementpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AppManagementPolicy, requestConfiguration?: AppManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AppManagementPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppManagementPolicy>(requestInfo, createAppManagementPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an appManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AppManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of an appManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update an appManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AppManagementPolicy, requestConfiguration?: AppManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppManagementPolicy);
        return requestInfo;
    };
}
