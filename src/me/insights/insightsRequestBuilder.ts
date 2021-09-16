import {OfficeGraphInsights} from '../../officeGraphInsights';
import {SharedInsightRequestBuilder} from './shared/item/sharedInsightRequestBuilder';
import {SharedRequestBuilder} from './shared/sharedRequestBuilder';
import {TrendingRequestBuilder} from './trending/trendingRequestBuilder';
import {UsedInsightRequestBuilder} from './used/item/usedInsightRequestBuilder';
import {UsedRequestBuilder} from './used/usedRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights  */
export class InsightsRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get shared(): SharedRequestBuilder {
        return new SharedRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get trending(): TrendingRequestBuilder {
        return new TrendingRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get used(): UsedRequestBuilder {
        return new UsedRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new InsightsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/insights";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Read-only. Nullable.
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
     * Read-only. Nullable.
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
     * Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OfficeGraphInsights | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Read-only. Nullable.
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
     * Read-only. Nullable.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OfficeGraphInsights
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OfficeGraphInsights | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<OfficeGraphInsights>(requestInfo, OfficeGraphInsights, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: OfficeGraphInsights | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.insights.shared collection
     * @param id Unique identifier of the item
     * @returns a sharedInsightRequestBuilder
     */
    public sharedById(id: String) : SharedInsightRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SharedInsightRequestBuilder(this.currentPath + this.pathSegment + "/shared/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.insights.trending collection
     * @param id Unique identifier of the item
     * @returns a trendingRequestBuilder
     */
    public trendingById(id: String) : TrendingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TrendingRequestBuilder(this.currentPath + this.pathSegment + "/trending/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.me.insights.used collection
     * @param id Unique identifier of the item
     * @returns a usedInsightRequestBuilder
     */
    public usedById(id: String) : UsedInsightRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new UsedInsightRequestBuilder(this.currentPath + this.pathSegment + "/used/" + id, this.httpCore, false);
    };
}
