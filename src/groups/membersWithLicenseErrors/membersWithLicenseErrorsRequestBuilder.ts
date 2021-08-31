import {$refRequestBuilder} from './$ref/$refRequestBuilder';
import {MembersWithLicenseErrorsResponse} from './membersWithLicenseErrorsResponse';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/membersWithLicenseErrors  */
export class MembersWithLicenseErrorsRequestBuilder {
    public get $ref(): $refRequestBuilder {
        return new $refRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new MembersWithLicenseErrorsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/membersWithLicenseErrors";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * A list of group members with license errors from this group-based license assignment. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
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
     * A list of group members with license errors from this group-based license assignment. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MembersWithLicenseErrorsResponse
     */
    public get(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MembersWithLicenseErrorsResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<MembersWithLicenseErrorsResponse>(requestInfo, MembersWithLicenseErrorsResponse, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
