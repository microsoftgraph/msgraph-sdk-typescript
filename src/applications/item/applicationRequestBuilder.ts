import {Application} from '../../application';
import {CreatedOnBehalfOfRequestBuilder} from '../createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {ExtensionPropertiesRequestBuilder} from '../extensionProperties/extensionPropertiesRequestBuilder';
import {ExtensionPropertyRequestBuilder} from '../extensionProperties/item/extensionPropertyRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from '../homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {LogoRequestBuilder} from '../logo/logoRequestBuilder';
import {Microsoft.graph.addKeyRequestBuilder} from '../microsoft/graph/addKey/microsoft.graph.addKeyRequestBuilder';
import {Microsoft.graph.addPasswordRequestBuilder} from '../microsoft/graph/addPassword/microsoft.graph.addPasswordRequestBuilder';
import {Microsoft.graph.checkMemberGroupsRequestBuilder} from '../microsoft/graph/checkMemberGroups/microsoft.graph.checkMemberGroupsRequestBuilder';
import {Microsoft.graph.checkMemberObjectsRequestBuilder} from '../microsoft/graph/checkMemberObjects/microsoft.graph.checkMemberObjectsRequestBuilder';
import {Microsoft.graph.getMemberGroupsRequestBuilder} from '../microsoft/graph/getMemberGroups/microsoft.graph.getMemberGroupsRequestBuilder';
import {Microsoft.graph.getMemberObjectsRequestBuilder} from '../microsoft/graph/getMemberObjects/microsoft.graph.getMemberObjectsRequestBuilder';
import {Microsoft.graph.removeKeyRequestBuilder} from '../microsoft/graph/removeKey/microsoft.graph.removeKeyRequestBuilder';
import {Microsoft.graph.removePasswordRequestBuilder} from '../microsoft/graph/removePassword/microsoft.graph.removePasswordRequestBuilder';
import {Microsoft.graph.restoreRequestBuilder} from '../microsoft/graph/restore/microsoft.graph.restoreRequestBuilder';
import {OwnersRequestBuilder} from '../owners/ownersRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from '../tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from '../tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /applications/{application-id}  */
export class ApplicationRequestBuilder {
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get extensionProperties(): ExtensionPropertiesRequestBuilder {
        return new ExtensionPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get microsoft.graph.addKey(): Microsoft.graph.addKeyRequestBuilder {
        return new Microsoft.graph.addKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.addPassword(): Microsoft.graph.addPasswordRequestBuilder {
        return new Microsoft.graph.addPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberGroups(): Microsoft.graph.checkMemberGroupsRequestBuilder {
        return new Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberObjects(): Microsoft.graph.checkMemberObjectsRequestBuilder {
        return new Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberGroups(): Microsoft.graph.getMemberGroupsRequestBuilder {
        return new Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberObjects(): Microsoft.graph.getMemberObjectsRequestBuilder {
        return new Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removeKey(): Microsoft.graph.removeKeyRequestBuilder {
        return new Microsoft.graph.removeKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removePassword(): Microsoft.graph.removePasswordRequestBuilder {
        return new Microsoft.graph.removePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.restore(): Microsoft.graph.restoreRequestBuilder {
        return new Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
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
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
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
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
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
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Application | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
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
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.applications.extensionProperties collection
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
        const requestInfo = this.createGetRequestInfo(
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
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
