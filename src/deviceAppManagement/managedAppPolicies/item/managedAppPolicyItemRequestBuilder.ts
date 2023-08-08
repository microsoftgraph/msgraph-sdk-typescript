import {createManagedAppPolicyFromDiscriminatorValue} from '../../../models/createManagedAppPolicyFromDiscriminatorValue';
import {deserializeIntoManagedAppPolicy} from '../../../models/deserializeIntoManagedAppPolicy';
import type {ManagedAppPolicy} from '../../../models/managedAppPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeManagedAppPolicy} from '../../../models/serializeManagedAppPolicy';
import {ManagedAppPolicyItemRequestBuilderDeleteRequestConfiguration} from './managedAppPolicyItemRequestBuilderDeleteRequestConfiguration';
import {ManagedAppPolicyItemRequestBuilderGetRequestConfiguration} from './managedAppPolicyItemRequestBuilderGetRequestConfiguration';
import {ManagedAppPolicyItemRequestBuilderPatchRequestConfiguration} from './managedAppPolicyItemRequestBuilderPatchRequestConfiguration';
import {TargetAppsRequestBuilder} from './targetApps/targetAppsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedAppPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedAppPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the targetApps method.
     */
    public get targetApps(): TargetAppsRequestBuilder {
        return new TargetAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedAppPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppPolicies/{managedAppPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property managedAppPolicies for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ManagedAppPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedAppProtection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedappprotection-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedAppPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicy>(requestInfo, createManagedAppPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property managedAppPolicies in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicy
     */
    public patch(body: ManagedAppPolicy, requestConfiguration?: ManagedAppPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedAppPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppPolicy>(requestInfo, createManagedAppPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property managedAppPolicies for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedAppPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedAppProtection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedAppPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property managedAppPolicies in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedAppPolicy, requestConfiguration?: ManagedAppPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppPolicy);
        return requestInfo;
    };
}
