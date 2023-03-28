import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /groups/{group-id}/rejectedSenders/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the collection of group entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/rejectedSenders/{directoryObject%2Did}");
    };
}
