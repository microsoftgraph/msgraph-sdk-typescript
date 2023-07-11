import {createScopedRoleMembershipFromDiscriminatorValue} from '../../../models/createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoScopedRoleMembership} from '../../../models/deserializeIntoScopedRoleMembership';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {ScopedRoleMembership} from '../../../models/scopedRoleMembership';
import {serializeScopedRoleMembership} from '../../../models/serializeScopedRoleMembership';
import {ScopedRoleMembershipItemRequestBuilderDeleteRequestConfiguration} from './scopedRoleMembershipItemRequestBuilderDeleteRequestConfiguration';
import {ScopedRoleMembershipItemRequestBuilderGetRequestConfiguration} from './scopedRoleMembershipItemRequestBuilderGetRequestConfiguration';
import {ScopedRoleMembershipItemRequestBuilderPatchRequestConfiguration} from './scopedRoleMembershipItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity.
 */
export class ScopedRoleMembershipItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ScopedRoleMembershipItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/scopedRoleMemberOf/{scopedRoleMembership%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property scopedRoleMemberOf for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ScopedRoleMembershipItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get scopedRoleMemberOf from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembership
     */
    public get(requestConfiguration?: ScopedRoleMembershipItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ScopedRoleMembership | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembership>(requestInfo, createScopedRoleMembershipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property scopedRoleMemberOf in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ScopedRoleMembership
     */
    public patch(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMembershipItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ScopedRoleMembership | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ScopedRoleMembership>(requestInfo, createScopedRoleMembershipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property scopedRoleMemberOf for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ScopedRoleMembershipItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get scopedRoleMemberOf from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScopedRoleMembershipItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property scopedRoleMemberOf in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMembershipItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeScopedRoleMembership);
        return requestInfo;
    };
}
