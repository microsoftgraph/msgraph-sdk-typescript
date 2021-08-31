import {Application} from '../../application';
import {AddKeyRequestBuilder} from '../addKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from '../addPassword/addPasswordRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from '../checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from '../checkMemberObjects/checkMemberObjectsRequestBuilder';
import {CreatedOnBehalfOfRequestBuilder} from '../createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {ExtensionPropertiesRequestBuilder} from '../extensionProperties/extensionPropertiesRequestBuilder';
import {ExtensionPropertyRequestBuilder} from '../extensionProperties/item/extensionPropertyRequestBuilder';
import {GetMemberGroupsRequestBuilder} from '../getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from '../getMemberObjects/getMemberObjectsRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from '../homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {LogoRequestBuilder} from '../logo/logoRequestBuilder';
import {OwnersRequestBuilder} from '../owners/ownersRequestBuilder';
import {RemoveKeyRequestBuilder} from '../removeKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from '../removePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from '../restore/restoreRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from '../tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from '../tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /applications/{application-id}  */
export class ApplicationRequestBuilder {
    public get addKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get addPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get extensionProperties(): ExtensionPropertiesRequestBuilder {
        return new ExtensionPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get logo(): LogoRequestBuilder {
        return new LogoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get removeKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get removePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new ApplicationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Application | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.applications.extensionProperties collection
     * @param id Unique identifier of the item
     * @returns a ExtensionPropertyRequestBuilder
     */
    public extensionPropertiesById(id: String) : ExtensionPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ExtensionPropertyRequestBuilder(this.currentPath + this.pathSegment + "/extensionProperties/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Application
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Application | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Application>(requestInfo, Application, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Application | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
