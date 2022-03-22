import {Device} from '../../../../../models/microsoft/graph/';
import {createDeviceFromDiscriminatorValue} from '../../../../../models/microsoft/graph/createDeviceFromDiscriminatorValue';
import {ODataError} from '../../../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i8a8383253fcd5a21c35c5c8dee8d83195be6a4871220632a479f331dcd9ac79a} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i98e75702b3a8275a006ead3fcbd2a79bc9e58753ff70eb0137aa91a8bac1c183} from './registeredOwners/item/directoryObjectItemRequestBuilder';
import {RegisteredOwnersRequestBuilder} from './registeredOwners/registeredOwnersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ieb0981796e327751c10af6bccd605d525ecd4b4c08a7358c1606cf5a14999dd0} from './registeredUsers/item/directoryObjectItemRequestBuilder';
import {RegisteredUsersRequestBuilder} from './registeredUsers/registeredUsersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i6f38ee384b10320bfe694fe3b57fada14cdc67634a1c63d56028ad8eaf6ab61e} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the device property of the microsoft.graph.windowsHelloForBusinessAuthenticationMethod entity.  */
export class DeviceRequestBuilder {
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get registeredOwners(): RegisteredOwnersRequestBuilder {
        return new RegisteredOwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get registeredUsers(): RegisteredUsersRequestBuilder {
        return new RegisteredUsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DeviceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod_id}/device{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property device for me
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property device in me
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Device | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property device for me
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
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
        urlTplParams["extension_id"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Device
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Device | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
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
        urlTplParams["directoryObject_id"] = id
        return new i8a8383253fcd5a21c35c5c8dee8d83195be6a4871220632a479f331dcd9ac79a(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property device in me
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Device | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
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
        urlTplParams["directoryObject_id"] = id
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
        urlTplParams["directoryObject_id"] = id
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
        urlTplParams["directoryObject_id"] = id
        return new i6f38ee384b10320bfe694fe3b57fada14cdc67634a1c63d56028ad8eaf6ab61e(urlTplParams, this.requestAdapter);
    };
}
