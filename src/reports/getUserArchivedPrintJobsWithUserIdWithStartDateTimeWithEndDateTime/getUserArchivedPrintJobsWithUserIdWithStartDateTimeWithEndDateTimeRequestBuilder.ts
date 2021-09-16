import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /reports/microsoft.graph.getUserArchivedPrintJobs(userId='{userId}',startDateTime={startDateTime},endDateTime={endDateTime})  */
export class GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @param userId Usage: userId={userId}
     */
    public constructor(currentPath: string, httpCore: HttpCore, userId?: string | undefined, startDateTime?: Date | undefined, endDateTime?: Date | undefined, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = `/microsoft.graph.getUserArchivedPrintJobs(userId='${userId ?? ''}',startDateTime=${startDateTime ?? ''},endDateTime=${endDateTime ?? ''})`;
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Invoke function getUserArchivedPrintJobs
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
     * Invoke function getUserArchivedPrintJobs
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime
     */
    public get(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime[] | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.httpCore?.sendCollectionAsync<GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime>(requestInfo, GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
