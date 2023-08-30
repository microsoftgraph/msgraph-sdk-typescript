import {createNotebookFromDiscriminatorValue} from '../../../../../../../models/createNotebookFromDiscriminatorValue';
import {deserializeIntoNotebook} from '../../../../../../../models/deserializeIntoNotebook';
import type {Notebook} from '../../../../../../../models/notebook';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeNotebook} from '../../../../../../../models/serializeNotebook';
import {CopyNotebookRequestBuilder} from './copyNotebook/copyNotebookRequestBuilder';
import {NotebookItemRequestBuilderDeleteRequestConfiguration} from './notebookItemRequestBuilderDeleteRequestConfiguration';
import {NotebookItemRequestBuilderGetRequestConfiguration} from './notebookItemRequestBuilderGetRequestConfiguration';
import {NotebookItemRequestBuilderPatchRequestConfiguration} from './notebookItemRequestBuilderPatchRequestConfiguration';
import {SectionGroupsRequestBuilder} from './sectionGroups/sectionGroupsRequestBuilder';
import {SectionsRequestBuilder} from './sections/sectionsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
 */
export class NotebookItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the copyNotebook method.
     */
    public get copyNotebook(): CopyNotebookRequestBuilder {
        return new CopyNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.notebook entity.
     */
    public get sectionGroups(): SectionGroupsRequestBuilder {
        return new SectionGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sections property of the microsoft.graph.notebook entity.
     */
    public get sections(): SectionsRequestBuilder {
        return new SectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new NotebookItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property notebooks for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: NotebookItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a notebook object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Notebook
     * @see {@link https://learn.microsoft.com/graph/api/notebook-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NotebookItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Notebook | undefined> {
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
     * Update the navigation property notebooks in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Notebook
     */
    public patch(body: Notebook, requestConfiguration?: NotebookItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Notebook | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Notebook>(requestInfo, createNotebookFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property notebooks for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: NotebookItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a notebook object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NotebookItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property notebooks in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Notebook, requestConfiguration?: NotebookItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeNotebook);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a NotebookItemRequestBuilder
     */
    public withUrl(rawUrl: string) : NotebookItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new NotebookItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
