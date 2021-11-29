import {ClearRequestBuilder} from './clear/clearRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRangeFill  */
export class WorkbookRangeFillRequestBuilder {
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new WorkbookRangeFillRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/insights/shared/{sharedInsight_id}/lastSharedMethod/microsoft.graph.workbookRangeFill";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
