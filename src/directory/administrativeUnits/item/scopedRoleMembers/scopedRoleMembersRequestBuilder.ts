import {ScopedRoleMembership, ScopedRoleMembershipCollectionResponse} from '../../../../models/';
import {createScopedRoleMembershipCollectionResponseFromDiscriminatorValue} from '../../../../models/createScopedRoleMembershipCollectionResponseFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from '../../../../models/createScopedRoleMembershipFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ScopedRoleMembershipItemRequestBuilder} from './item/scopedRoleMembershipItemRequestBuilder';
import {ScopedRoleMembersRequestBuilderGetRequestConfiguration} from './scopedRoleMembersRequestBuilderGetRequestConfiguration';
import {ScopedRoleMembersRequestBuilderPostRequestConfiguration} from './scopedRoleMembersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scopedRoleMembers property of the microsoft.graph.administrativeUnit entity.
 */
export class ScopedRoleMembersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopedRoleMembers property of the microsoft.graph.administrativeUnit entity.
     * @param scopedRoleMembershipId Unique identifier of the item
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public byScopedRoleMembershipId(scopedRoleMembershipId: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!scopedRoleMembershipId) throw new Error("scopedRoleMembershipId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = scopedRoleMembershipId
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScopedRoleMembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/administrativeUnits/{administrativeUnit%2Did}/scopedRoleMembers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Scoped-role members of this administrative unit.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ScopedRoleMembershipCollectionResponse
     */
    public get(requestConfiguration?: ScopedRoleMembersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ScopedRoleMembershipCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ScopedRoleMembershipCollectionResponse>(requestInfo, createScopedRoleMembershipCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to scopedRoleMembers for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ScopedRoleMembership
     */
    public post(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMembersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ScopedRoleMembership | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ScopedRoleMembership>(requestInfo, createScopedRoleMembershipFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Scoped-role members of this administrative unit.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScopedRoleMembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scopedRoleMembers for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
