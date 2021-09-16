import {Domain} from '../../domain';
import {DomainNameReferencesRequestBuilder} from '../domainNameReferences/domainNameReferencesRequestBuilder';
import {ForceDeleteRequestBuilder} from '../forceDelete/forceDeleteRequestBuilder';
import {DomainDnsRecordRequestBuilder} from '../serviceConfigurationRecords/item/item/domainDnsRecordRequestBuilder';
import {ServiceConfigurationRecordsRequestBuilder} from '../serviceConfigurationRecords/serviceConfigurationRecordsRequestBuilder';
import {DomainDnsRecordRequestBuilder} from '../verificationDnsRecords/item/item/domainDnsRecordRequestBuilder';
import {VerificationDnsRecordsRequestBuilder} from '../verificationDnsRecords/verificationDnsRecordsRequestBuilder';
import {VerifyRequestBuilder} from '../verify/verifyRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /domains/{domain-id}  */
export class DomainRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get forceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get verify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new DomainRequestBuilder and sets the default values.
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
     * Delete entity from domains
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
     * Get entity from domains by key
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
     * Update entity in domains
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Domain | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Delete entity from domains
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
     * Get entity from domains by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Domain>(requestInfo, Domain, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update entity in domains
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Domain | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.domains.item.serviceConfigurationRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public serviceConfigurationRecordsById(id: String) : DomainDnsRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DomainDnsRecordRequestBuilder(this.currentPath + this.pathSegment + "/serviceConfigurationRecords/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.domains.item.verificationDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public verificationDnsRecordsById(id: String) : DomainDnsRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DomainDnsRecordRequestBuilder(this.currentPath + this.pathSegment + "/verificationDnsRecords/" + id, this.httpCore, false);
    };
}
