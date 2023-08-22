import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder} from '@microsoft/kiota-abstractions';
import type {RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of policyRoot entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/featureRolloutPolicies/{featureRolloutPolicy%2Did}/appliesTo/{directoryObject%2Did}");
    };
}
