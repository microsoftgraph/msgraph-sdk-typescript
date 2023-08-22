import {AccessPackageResourceRequestCollectionResponse} from '../../../models/';
import type {AccessPackageResourceRequest} from '../../../models/accessPackageResourceRequest';
import {createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue} from '../../../models/createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue';
import {createAccessPackageResourceRequestFromDiscriminatorValue} from '../../../models/createAccessPackageResourceRequestFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceRequest} from '../../../models/deserializeIntoAccessPackageResourceRequest';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceRequest} from '../../../models/serializeAccessPackageResourceRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageResourceRequestItemRequestBuilder} from './item/accessPackageResourceRequestItemRequestBuilder';
import {ResourceRequestsRequestBuilderGetRequestConfiguration} from './resourceRequestsRequestBuilderGetRequestConfiguration';
import {ResourceRequestsRequestBuilderPostRequestConfiguration} from './resourceRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceRequests property of the microsoft.graph.entitlementManagement entity.
 */
export class ResourceRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRequests property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceRequestId The unique identifier of accessPackageResourceRequest
     * @returns a AccessPackageResourceRequestItemRequestBuilder
     */
    public byAccessPackageResourceRequestId(accessPackageResourceRequestId: string) : AccessPackageResourceRequestItemRequestBuilder {
        if(!accessPackageResourceRequestId) throw new Error("accessPackageResourceRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceRequest%2Did"] = accessPackageResourceRequestId
        return new AccessPackageResourceRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of accessPackageResourceRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-resourcerequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ResourceRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRequestCollectionResponse>(requestInfo, createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new accessPackageResourceRequest object to request the addition of a resource to an access package catalog, update of a resource, or the removal of a resource from a catalog.  A resource must be included in an access package catalog before a role of that resource can be added to an access package. To add an Azure AD group as a resource to a catalog, set the requestType to be adminAdd, and a resource representing the resource. The value of the originSystem property within the resource should be AadGroup and the value of the originId is the identifier of the group.  If using delegated permissions, the user requesting to add a group should be an owner of the group or in a directory role which allows them to modify groups. If using application permissions, the application requesting to add the group should also be assigned the Group.ReadWrite.All permission.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRequest
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-resourcerequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessPackageResourceRequest, requestConfiguration?: ResourceRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRequest>(requestInfo, createAccessPackageResourceRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of accessPackageResourceRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessPackageResourceRequest object to request the addition of a resource to an access package catalog, update of a resource, or the removal of a resource from a catalog.  A resource must be included in an access package catalog before a role of that resource can be added to an access package. To add an Azure AD group as a resource to a catalog, set the requestType to be adminAdd, and a resource representing the resource. The value of the originSystem property within the resource should be AadGroup and the value of the originId is the identifier of the group.  If using delegated permissions, the user requesting to add a group should be an owner of the group or in a directory role which allows them to modify groups. If using application permissions, the application requesting to add the group should also be assigned the Group.ReadWrite.All permission.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceRequest, requestConfiguration?: ResourceRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageResourceRequest);
        return requestInfo;
    };
}
