import {OnenoteSection} from '../../../../../../../../../../../../models/microsoft/graph/onenoteSection';
import {CopyToNotebookRequestBuilder} from './copyToNotebook/copyToNotebookRequestBuilder';
import {CopyToSectionGroupRequestBuilder} from './copyToSectionGroup/copyToSectionGroupRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection  */
export class ParentSectionRequestBuilder {
    public get copyToNotebook(): CopyToNotebookRequestBuilder {
        return new CopyToNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get copyToSectionGroup(): CopyToSectionGroupRequestBuilder {
        return new CopyToSectionGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ParentSectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}/onenote/notebooks/{notebook_id}/sectionGroups/{sectionGroup_id}/sections/{onenoteSection_id}/pages/{onenotePage_id}/parentSection{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The section that contains the page. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The section that contains the page. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenoteSection
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenoteSection | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<OnenoteSection>(requestInfo, OnenoteSection, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
