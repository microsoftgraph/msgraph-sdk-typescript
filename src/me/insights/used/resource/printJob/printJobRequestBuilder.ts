import {AbortRequestBuilder} from './abort/abortRequestBuilder';
import {CancelRequestBuilder} from './cancel/cancelRequestBuilder';
import {RedirectRequestBuilder} from './redirect/redirectRequestBuilder';
import {StartRequestBuilder} from './start/startRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/used/{usedInsight-id}/resource/microsoft.graph.printJob  */
export class PrintJobRequestBuilder {
    public get abort(): AbortRequestBuilder {
        return new AbortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get start(): StartRequestBuilder {
        return new StartRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new PrintJobRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.printJob";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
