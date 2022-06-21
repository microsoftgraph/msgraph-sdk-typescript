import {Device} from '../../../../../models/';
import {createDeviceFromDiscriminatorValue} from '../../../../../models/createDeviceFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {DeviceRequestBuilderDeleteRequestConfiguration} from './deviceRequestBuilderDeleteRequestConfiguration';
import {DeviceRequestBuilderGetRequestConfiguration} from './deviceRequestBuilderGetRequestConfiguration';
import {DeviceRequestBuilderPatchRequestConfiguration} from './deviceRequestBuilderPatchRequestConfiguration';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i8a8383253fcd5a21c35c5c8dee8d83195be6a4871220632a479f331dcd9ac79a} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i98e75702b3a8275a006ead3fcbd2a79bc9e58753ff70eb0137aa91a8bac1c183} from './registeredOwners/item/directoryObjectItemRequestBuilder';
import {RegisteredOwnersRequestBuilder} from './registeredOwners/registeredOwnersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ieb0981796e327751c10af6bccd605d525ecd4b4c08a7358c1606cf5a14999dd0} from './registeredUsers/item/directoryObjectItemRequestBuilder';
import {RegisteredUsersRequestBuilder} from './registeredUsers/registeredUsersRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i6f38ee384b10320bfe694fe3b57fada14cdc67634a1c63d56028ad8eaf6ab61e} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the device property of the microsoft.graph.windowsHelloForBusinessAuthenticationMethod entity. */
export class DeviceRequestBuilder {
    /** The checkMemberGroups property */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberObjects property */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The extensions property */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberGroups property */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberObjects property */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The memberOf property */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The registeredOwners property */
    public get registeredOwners(): RegisteredOwnersRequestBuilder {
        return new RegisteredOwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The registeredUsers property */
    public get registeredUsers(): RegisteredUsersRequestBuilder {
        return new RegisteredUsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The restore property */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMemberOf property */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DeviceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod%2Did}/device{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property device for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DeviceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property device in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Device | undefined, requestConfiguration?: DeviceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property device for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item.device.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension%2Did"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Device
     */
    public get(requestConfiguration?: DeviceRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Device | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Device>(requestInfo, createDeviceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item.device.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i8a8383253fcd5a21c35c5c8dee8d83195be6a4871220632a479f331dcd9ac79a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i8a8383253fcd5a21c35c5c8dee8d83195be6a4871220632a479f331dcd9ac79a(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property device in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Device | undefined, requestConfiguration?: DeviceRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item.device.registeredOwners.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public registeredOwnersById(id: string) : i98e75702b3a8275a006ead3fcbd2a79bc9e58753ff70eb0137aa91a8bac1c183 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i98e75702b3a8275a006ead3fcbd2a79bc9e58753ff70eb0137aa91a8bac1c183(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item.device.registeredUsers.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public registeredUsersById(id: string) : ieb0981796e327751c10af6bccd605d525ecd4b4c08a7358c1606cf5a14999dd0 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ieb0981796e327751c10af6bccd605d525ecd4b4c08a7358c1606cf5a14999dd0(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.authentication.windowsHelloForBusinessMethods.item.device.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : i6f38ee384b10320bfe694fe3b57fada14cdc67634a1c63d56028ad8eaf6ab61e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i6f38ee384b10320bfe694fe3b57fada14cdc67634a1c63d56028ad8eaf6ab61e(urlTplParams, this.requestAdapter);
    };
}
