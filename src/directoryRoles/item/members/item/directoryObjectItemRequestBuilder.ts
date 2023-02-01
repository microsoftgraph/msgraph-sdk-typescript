import {ApplicationRequestBuilder} from './microsoftGraphApplication/applicationRequestBuilder';
import {DeviceRequestBuilder} from './microsoftGraphDevice/deviceRequestBuilder';
import {GroupRequestBuilder} from './microsoftGraphGroup/groupRequestBuilder';
import {OrgContactRequestBuilder} from './microsoftGraphOrgContact/orgContactRequestBuilder';
import {ServicePrincipalRequestBuilder} from './microsoftGraphServicePrincipal/servicePrincipalRequestBuilder';
import {UserRequestBuilder} from './microsoftGraphUser/userRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /directoryRoles/{directoryRole-id}/members/{directoryObject-id}
 */
export class DirectoryObjectItemRequestBuilder {
    /** Casts the previous resource to application. */
    public get microsoftGraphApplication(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to device. */
    public get microsoftGraphDevice(): DeviceRequestBuilder {
        return new DeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to group. */
    public get microsoftGraphGroup(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to orgContact. */
    public get microsoftGraphOrgContact(): OrgContactRequestBuilder {
        return new OrgContactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to servicePrincipal. */
    public get microsoftGraphServicePrincipal(): ServicePrincipalRequestBuilder {
        return new ServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get microsoftGraphUser(): UserRequestBuilder {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the collection of directoryRole entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param directoryObjectId key: id of directoryObject
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, directoryObjectId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/directoryRoles/{directoryRole%2Did}/members/{directoryObject%2Did}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["directoryObject%2Did"] = directoryObjectId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
