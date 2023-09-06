import { type ResourceSpecificPermissionGrantCollectionResponse } from '../../../../models/';
import { createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue } from '../../../../models/createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue';
import { createResourceSpecificPermissionGrantFromDiscriminatorValue } from '../../../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import { deserializeIntoResourceSpecificPermissionGrant } from '../../../../models/deserializeIntoResourceSpecificPermissionGrant';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type ResourceSpecificPermissionGrant } from '../../../../models/resourceSpecificPermissionGrant';
import { serializeResourceSpecificPermissionGrant } from '../../../../models/serializeResourceSpecificPermissionGrant';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { GetAvailableExtensionPropertiesRequestBuilder } from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import { GetByIdsRequestBuilder } from './getByIds/getByIdsRequestBuilder';
import { ResourceSpecificPermissionGrantItemRequestBuilder } from './item/resourceSpecificPermissionGrantItemRequestBuilder';
import { type PermissionGrantsRequestBuilderGetRequestConfiguration } from './permissionGrantsRequestBuilderGetRequestConfiguration';
import { type PermissionGrantsRequestBuilderPostRequestConfiguration } from './permissionGrantsRequestBuilderPostRequestConfiguration';
import { ValidatePropertiesRequestBuilder } from './validateProperties/validatePropertiesRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissionGrants property of the microsoft.graph.team entity.
 */
export class PermissionGrantsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the permissionGrants property of the microsoft.graph.team entity.
     * @param resourceSpecificPermissionGrantId The unique identifier of resourceSpecificPermissionGrant
     * @returns a ResourceSpecificPermissionGrantItemRequestBuilder
     */
    public byResourceSpecificPermissionGrantId(resourceSpecificPermissionGrantId: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!resourceSpecificPermissionGrantId) throw new Error("resourceSpecificPermissionGrantId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant%2Did"] = resourceSpecificPermissionGrantId
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PermissionGrantsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/permissionGrants{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all resource-specific permission grants on the team. This list specifies the Azure AD apps that have access to the team, along with each app's corresponding type of resource-specific access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceSpecificPermissionGrantCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/team-list-permissiongrants?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PermissionGrantsRequestBuilderGetRequestConfiguration | undefined) : Promise<ResourceSpecificPermissionGrantCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceSpecificPermissionGrantCollectionResponse>(requestInfo, createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to permissionGrants for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceSpecificPermissionGrant
     */
    public post(body: ResourceSpecificPermissionGrant, requestConfiguration?: PermissionGrantsRequestBuilderPostRequestConfiguration | undefined) : Promise<ResourceSpecificPermissionGrant | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceSpecificPermissionGrant>(requestInfo, createResourceSpecificPermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * List all resource-specific permission grants on the team. This list specifies the Azure AD apps that have access to the team, along with each app's corresponding type of resource-specific access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionGrantsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to permissionGrants for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ResourceSpecificPermissionGrant, requestConfiguration?: PermissionGrantsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeResourceSpecificPermissionGrant);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a permissionGrantsRequestBuilder
     */
    public withUrl(rawUrl: string) : PermissionGrantsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PermissionGrantsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
