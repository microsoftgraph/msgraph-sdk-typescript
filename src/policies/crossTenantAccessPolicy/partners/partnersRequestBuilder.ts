import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from '../../../models/';
import {createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue} from '../../../models/createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue';
import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from '../../../models/createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import type {CrossTenantAccessPolicyConfigurationPartner} from '../../../models/crossTenantAccessPolicyConfigurationPartner';
import {deserializeIntoCrossTenantAccessPolicyConfigurationPartner} from '../../../models/deserializeIntoCrossTenantAccessPolicyConfigurationPartner';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from '../../../models/serializeCrossTenantAccessPolicyConfigurationPartner';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder} from './item/crossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder';
import {PartnersRequestBuilderGetRequestConfiguration} from './partnersRequestBuilderGetRequestConfiguration';
import {PartnersRequestBuilderPostRequestConfiguration} from './partnersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export class PartnersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity.
     * @param crossTenantAccessPolicyConfigurationPartnerTenantId The unique identifier of crossTenantAccessPolicyConfigurationPartner
     * @returns a CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder
     */
    public byCrossTenantAccessPolicyConfigurationPartnerTenantId(crossTenantAccessPolicyConfigurationPartnerTenantId: string) : CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder {
        if(!crossTenantAccessPolicyConfigurationPartnerTenantId) throw new Error("crossTenantAccessPolicyConfigurationPartnerTenantId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["crossTenantAccessPolicyConfigurationPartner%2DtenantId"] = crossTenantAccessPolicyConfigurationPartnerTenantId
        return new CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/crossTenantAccessPolicy/partners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of all partner configurations within a cross-tenant access policy. You can also use the $expand parameter to list the user synchronization policy for all partner configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationPartnerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicy-list-partners?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PartnersRequestBuilderGetRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationPartnerCollectionResponse>(requestInfo, createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new partner configuration in a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationPartner
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicy-post-partners?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: PartnersRequestBuilderPostRequestConfiguration | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartner | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CrossTenantAccessPolicyConfigurationPartner>(requestInfo, createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of all partner configurations within a cross-tenant access policy. You can also use the $expand parameter to list the user synchronization policy for all partner configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new partner configuration in a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: PartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCrossTenantAccessPolicyConfigurationPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a partnersRequestBuilder
     */
    public withUrl(rawUrl: string) : PartnersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PartnersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
