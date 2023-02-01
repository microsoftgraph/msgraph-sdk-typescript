import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /applications/{application-id}/tokenLifetimePolicies/{tokenLifetimePolicy-id}
 */
export class TokenLifetimePolicyItemRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the collection of application entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new TokenLifetimePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param tokenLifetimePolicyId key: id of tokenLifetimePolicy
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, tokenLifetimePolicyId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/applications/{application%2Did}/tokenLifetimePolicies/{tokenLifetimePolicy%2Did}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = tokenLifetimePolicyId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
