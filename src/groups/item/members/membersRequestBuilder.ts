import {DirectoryObjectCollectionResponse} from '../../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ApplicationRequestBuilder} from './application/applicationRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceRequestBuilder} from './device/deviceRequestBuilder';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {MembersRequestBuilderGetRequestConfiguration} from './membersRequestBuilderGetRequestConfiguration';
import {OrgContactRequestBuilder} from './orgContact/orgContactRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {ServicePrincipalRequestBuilder} from './servicePrincipal/servicePrincipalRequestBuilder';
import {UserRequestBuilder} from './user/userRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the members property of the microsoft.graph.group entity. */
export class MembersRequestBuilder {
    /** The application property */
    public get application(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The count property */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The device property */
    public get device(): DeviceRequestBuilder {
        return new DeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The group property */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The orgContact property */
    public get orgContact(): OrgContactRequestBuilder {
        return new OrgContactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The ref property */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The servicePrincipal property */
    public get servicePrincipal(): ServicePrincipalRequestBuilder {
        return new ServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The user property */
    public get user(): UserRequestBuilder {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryObjectCollectionResponse
     */
    public get(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
