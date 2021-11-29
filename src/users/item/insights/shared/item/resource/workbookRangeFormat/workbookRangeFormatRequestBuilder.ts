import {AutofitColumnsRequestBuilder} from './autofitColumns/autofitColumnsRequestBuilder';
import {AutofitRowsRequestBuilder} from './autofitRows/autofitRowsRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/resource/microsoft.graph.workbookRangeFormat  */
export class WorkbookRangeFormatRequestBuilder {
    public get autofitColumns(): AutofitColumnsRequestBuilder {
        return new AutofitColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get autofitRows(): AutofitRowsRequestBuilder {
        return new AutofitRowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new WorkbookRangeFormatRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/insights/shared/{sharedInsight_id}/resource/microsoft.graph.workbookRangeFormat";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
