import {ScopedRoleMembershipCollectionResponse} from '../../../models/';
import {createScopedRoleMembershipCollectionResponseFromDiscriminatorValue} from '../../../models/createScopedRoleMembershipCollectionResponseFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from '../../../models/createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoScopedRoleMembership} from '../../../models/deserializeIntoScopedRoleMembership';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {ScopedRoleMembership} from '../../../models/scopedRoleMembership';
import {serializeScopedRoleMembership} from '../../../models/serializeScopedRoleMembership';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ScopedRoleMembershipItemRequestBuilder} from './item/scopedRoleMembershipItemRequestBuilder';
import {ScopedRoleMemberOfRequestBuilderGetRequestConfiguration} from './scopedRoleMemberOfRequestBuilderGetRequestConfiguration';
import {ScopedRoleMemberOfRequestBuilderPostRequestConfiguration} from './scopedRoleMemberOfRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity.
 */
export class ScopedRoleMemberOfRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity.
     * @param scopedRoleMembershipId The unique identifier of scopedRoleMembership
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public byScopedRoleMembershipId(scopedRoleMembershipId: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!scopedRoleMembershipId) throw new Error("scopedRoleMembershipId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = scopedRoleMembershipId
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScopedRoleMemberOfRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/scopedRoleMemberOf{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get scopedRoleMemberOf from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembershipCollectionResponse
     */
    public get(requestConfiguration?: ScopedRoleMemberOfRequestBuilderGetRequestConfiguration | undefined) : Promise<ScopedRoleMembershipCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembershipCollectionResponse>(requestInfo, createScopedRoleMembershipCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to scopedRoleMemberOf for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembership
     */
    public post(body: ScopedRoleMembership, requestConfiguration?: ScopedRoleMemberOfRequestBuilderPostRequestConfiguration | undefined) : Promise<ScopedRoleMembership | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembership>(requestInfo, createScopedRoleMembershipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get scopedRoleMemberOf from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScopedRoleMemberOfRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scopedRoleMemberOf for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ScopedRoleMembership, requestConfiguration?: ScopedRoleMemberOfRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeScopedRoleMembership);
        return requestInfo;
    };
}
