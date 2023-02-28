import {GraphAppRoleAssignmentRequestBuilder} from './graphAppRoleAssignment/graphAppRoleAssignmentRequestBuilder';
import {GraphEndpointRequestBuilder} from './graphEndpoint/graphEndpointRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import {GraphUserRequestBuilder} from './graphUser/graphUserRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /applications/{application-id}/owners/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder {
    /** Casts the previous resource to appRoleAssignment. */
    public get graphAppRoleAssignment(): GraphAppRoleAssignmentRequestBuilder {
        return new GraphAppRoleAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to endpoint. */
    public get graphEndpoint(): GraphEndpointRequestBuilder {
        return new GraphEndpointRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to servicePrincipal. */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get graphUser(): GraphUserRequestBuilder {
        return new GraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/applications/{application%2Did}/owners/{directoryObject%2Did}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
