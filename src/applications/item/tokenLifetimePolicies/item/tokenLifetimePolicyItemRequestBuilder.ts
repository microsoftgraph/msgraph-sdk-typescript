import {RefRequestBuilder} from './ref/refRequestBuilder';
import type {RequestAdapter} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /applications/{application-id}/tokenLifetimePolicies/{tokenLifetimePolicy-id}
 */
export class TokenLifetimePolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of application entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TokenLifetimePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/tokenLifetimePolicies/{tokenLifetimePolicy%2Did}");
    };
}
