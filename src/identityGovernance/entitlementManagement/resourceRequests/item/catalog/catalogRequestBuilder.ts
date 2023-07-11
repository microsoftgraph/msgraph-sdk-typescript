import {AccessPackageCatalog} from '../../../../../models/accessPackageCatalog';
import {createAccessPackageCatalogFromDiscriminatorValue} from '../../../../../models/createAccessPackageCatalogFromDiscriminatorValue';
import {deserializeIntoAccessPackageCatalog} from '../../../../../models/deserializeIntoAccessPackageCatalog';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageCatalog} from '../../../../../models/serializeAccessPackageCatalog';
import {AccessPackagesRequestBuilder} from './accessPackages/accessPackagesRequestBuilder';
import {CatalogRequestBuilderDeleteRequestConfiguration} from './catalogRequestBuilderDeleteRequestConfiguration';
import {CatalogRequestBuilderGetRequestConfiguration} from './catalogRequestBuilderGetRequestConfiguration';
import {CatalogRequestBuilderPatchRequestConfiguration} from './catalogRequestBuilderPatchRequestConfiguration';
import {CustomWorkflowExtensionsRequestBuilder} from './customWorkflowExtensions/customWorkflowExtensionsRequestBuilder';
import {ResourceRolesRequestBuilder} from './resourceRoles/resourceRolesRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {ResourceScopesRequestBuilder} from './resourceScopes/resourceScopesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the catalog property of the microsoft.graph.accessPackageResourceRequest entity.
 */
export class CatalogRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
     */
    public get accessPackages(): AccessPackagesRequestBuilder {
        return new AccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
     */
    public get customWorkflowExtensions(): CustomWorkflowExtensionsRequestBuilder {
        return new CustomWorkflowExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRoles property of the microsoft.graph.accessPackageCatalog entity.
     */
    public get resourceRoles(): ResourceRolesRequestBuilder {
        return new ResourceRolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.accessPackageCatalog entity.
     */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceScopes property of the microsoft.graph.accessPackageCatalog entity.
     */
    public get resourceScopes(): ResourceScopesRequestBuilder {
        return new ResourceScopesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CatalogRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest%2Did}/catalog{?%24select,%24expand}");
    };
    /**
     * Delete navigation property catalog for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CatalogRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get catalog from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCatalog
     */
    public get(requestConfiguration?: CatalogRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageCatalog | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageCatalog>(requestInfo, createAccessPackageCatalogFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property catalog in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCatalog
     */
    public patch(body: AccessPackageCatalog | undefined, requestConfiguration?: CatalogRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageCatalog | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageCatalog>(requestInfo, createAccessPackageCatalogFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property catalog for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CatalogRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get catalog from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CatalogRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property catalog in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageCatalog | undefined, requestConfiguration?: CatalogRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageCatalog);
        return requestInfo;
    };
}
