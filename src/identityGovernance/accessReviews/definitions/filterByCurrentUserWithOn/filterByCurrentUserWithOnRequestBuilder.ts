import {FilterByCurrentUserWithOn} from './filterByCurrentUserWithOn';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityGovernance/accessReviews/definitions/microsoft.graph.filterByCurrentUser(on={on})  */
export class FilterByCurrentUserWithOnRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new FilterByCurrentUserWithOnRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     * @param on Usage: on={on}
     */
    public constructor(currentPath: string, httpCore: HttpCore, on?: string | undefined, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = `/microsoft.graph.filterByCurrentUser(on=${on ?? ''})`;
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Invoke function filterByCurrentUser
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function filterByCurrentUser
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of FilterByCurrentUserWithOn
     */
    public get(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<FilterByCurrentUserWithOn[] | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.httpCore?.sendCollectionAsync<FilterByCurrentUserWithOn>(requestInfo, FilterByCurrentUserWithOn, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
