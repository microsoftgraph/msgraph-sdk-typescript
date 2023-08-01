import type {AccessPackageResourceEnvironment} from '../../../../models/accessPackageResourceEnvironment';
import {createAccessPackageResourceEnvironmentFromDiscriminatorValue} from '../../../../models/createAccessPackageResourceEnvironmentFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceEnvironment} from '../../../../models/deserializeIntoAccessPackageResourceEnvironment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceEnvironment} from '../../../../models/serializeAccessPackageResourceEnvironment';
import {AccessPackageResourceEnvironmentItemRequestBuilderDeleteRequestConfiguration} from './accessPackageResourceEnvironmentItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageResourceEnvironmentItemRequestBuilderGetRequestConfiguration} from './accessPackageResourceEnvironmentItemRequestBuilderGetRequestConfiguration';
import {AccessPackageResourceEnvironmentItemRequestBuilderPatchRequestConfiguration} from './accessPackageResourceEnvironmentItemRequestBuilderPatchRequestConfiguration';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceEnvironments property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageResourceEnvironmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the resources property of the microsoft.graph.accessPackageResourceEnvironment entity.
     */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessPackageResourceEnvironmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceEnvironments/{accessPackageResourceEnvironment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property resourceEnvironments for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A reference to the geolocation environments in which a resource is located.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironment
     */
    public get(requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceEnvironment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceEnvironment>(requestInfo, createAccessPackageResourceEnvironmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resourceEnvironments in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironment
     */
    public patch(body: AccessPackageResourceEnvironment | undefined, requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageResourceEnvironment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceEnvironment>(requestInfo, createAccessPackageResourceEnvironmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property resourceEnvironments for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A reference to the geolocation environments in which a resource is located.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resourceEnvironments in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageResourceEnvironment | undefined, requestConfiguration?: AccessPackageResourceEnvironmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceEnvironment);
        return requestInfo;
    };
}
