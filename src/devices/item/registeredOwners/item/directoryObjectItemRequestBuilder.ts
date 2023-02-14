import {MicrosoftGraphAppRoleAssignmentRequestBuilder} from './microsoftGraphAppRoleAssignment/microsoftGraphAppRoleAssignmentRequestBuilder';
import {MicrosoftGraphEndpointRequestBuilder} from './microsoftGraphEndpoint/microsoftGraphEndpointRequestBuilder';
import {MicrosoftGraphServicePrincipalRequestBuilder} from './microsoftGraphServicePrincipal/microsoftGraphServicePrincipalRequestBuilder';
import {MicrosoftGraphUserRequestBuilder} from './microsoftGraphUser/microsoftGraphUserRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /devices/{device-id}/registeredOwners/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder {
    /** Casts the previous resource to appRoleAssignment. */
    public get microsoftGraphAppRoleAssignment(): MicrosoftGraphAppRoleAssignmentRequestBuilder {
        return new MicrosoftGraphAppRoleAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to endpoint. */
    public get microsoftGraphEndpoint(): MicrosoftGraphEndpointRequestBuilder {
        return new MicrosoftGraphEndpointRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to servicePrincipal. */
    public get microsoftGraphServicePrincipal(): MicrosoftGraphServicePrincipalRequestBuilder {
        return new MicrosoftGraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get microsoftGraphUser(): MicrosoftGraphUserRequestBuilder {
        return new MicrosoftGraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the collection of device entities. */
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
        this.urlTemplate = "{+baseurl}/devices/{device%2Did}/registeredOwners/{directoryObject%2Did}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
