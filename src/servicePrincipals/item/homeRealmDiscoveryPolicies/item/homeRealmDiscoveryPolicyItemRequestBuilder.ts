import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}
 */
export class HomeRealmDiscoveryPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new HomeRealmDiscoveryPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy%2Did}");
    };
}
