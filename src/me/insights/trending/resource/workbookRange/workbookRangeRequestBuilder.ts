import {ClearRequestBuilder} from './clear/clearRequestBuilder';
import {DeleteRequestBuilder} from './delete/deleteRequestBuilder';
import {InsertRequestBuilder} from './insert/insertRequestBuilder';
import {MergeRequestBuilder} from './merge/mergeRequestBuilder';
import {UnmergeRequestBuilder} from './unmerge/unmergeRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange  */
export class WorkbookRangeRequestBuilder {
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get delete(): DeleteRequestBuilder {
        return new DeleteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get insert(): InsertRequestBuilder {
        return new InsertRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get merge(): MergeRequestBuilder {
        return new MergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get unmerge(): UnmergeRequestBuilder {
        return new UnmergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new workbookRangeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRange";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
