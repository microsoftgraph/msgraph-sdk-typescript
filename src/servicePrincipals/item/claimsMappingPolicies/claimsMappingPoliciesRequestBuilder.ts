import {ClaimsMappingPolicyCollectionResponse} from '../../../models/';
import {createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue} from '../../../models/createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration} from './claimsMappingPoliciesRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ClaimsMappingPolicyItemRequestBuilder} from './item/claimsMappingPolicyItemRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.servicePrincipal entity.
 */
export class ClaimsMappingPoliciesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of servicePrincipal entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item.claimsMappingPolicies.item collection
     * @param claimsMappingPolicyId Unique identifier of the item
     * @returns a ClaimsMappingPolicyItemRequestBuilder
     */
    public byClaimsMappingPolicyId(claimsMappingPolicyId: string) : ClaimsMappingPolicyItemRequestBuilder {
        if(!claimsMappingPolicyId) throw new Error("claimsMappingPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["claimsMappingPolicy%2Did"] = claimsMappingPolicyId
        return new ClaimsMappingPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ClaimsMappingPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/claimsMappingPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ClaimsMappingPolicyCollectionResponse
     */
    public get(requestConfiguration?: ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ClaimsMappingPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ClaimsMappingPolicyCollectionResponse>(requestInfo, createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The claimsMappingPolicies assigned to this service principal. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
