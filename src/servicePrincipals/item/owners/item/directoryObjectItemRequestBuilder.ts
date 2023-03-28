import {GraphAppRoleAssignmentRequestBuilder} from './graphAppRoleAssignment/graphAppRoleAssignmentRequestBuilder';
import {GraphEndpointRequestBuilder} from './graphEndpoint/graphEndpointRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import {GraphUserRequestBuilder} from './graphUser/graphUserRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
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
    /** Provides operations to manage the collection of servicePrincipal entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/owners/{directoryObject%2Did}");
    };
}
