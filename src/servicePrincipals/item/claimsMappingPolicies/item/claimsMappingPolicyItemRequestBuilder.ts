import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder} from '@microsoft/kiota-abstractions';
import type {RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}/claimsMappingPolicies/{claimsMappingPolicy-id}
 */
export class ClaimsMappingPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ClaimsMappingPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/claimsMappingPolicies/{claimsMappingPolicy%2Did}");
    };
}
