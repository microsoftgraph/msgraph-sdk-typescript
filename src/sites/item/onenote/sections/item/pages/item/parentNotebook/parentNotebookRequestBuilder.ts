import {Notebook} from '../../../../../../../../models/';
import {createNotebookFromDiscriminatorValue} from '../../../../../../../../models/createNotebookFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {ParentNotebookRequestBuilderGetRequestConfiguration} from './parentNotebookRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the parentNotebook property of the microsoft.graph.onenotePage entity.
 */
export class ParentNotebookRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ParentNotebookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/onenote/sections/{onenoteSection%2Did}/pages/{onenotePage%2Did}/parentNotebook{?%24select,%24expand}");
    };
    /**
     * The notebook that contains the page.  Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Notebook
     */
    public get(requestConfiguration?: ParentNotebookRequestBuilderGetRequestConfiguration | undefined) : Promise<Notebook | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Notebook>(requestInfo, createNotebookFromDiscriminatorValue, errorMapping);
    };
    /**
     * The notebook that contains the page.  Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ParentNotebookRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a parentNotebookRequestBuilder
     */
    public withUrl(rawUrl: string) : ParentNotebookRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ParentNotebookRequestBuilder(rawUrl, this.requestAdapter);
    };
}
