import {createOnenoteSectionFromDiscriminatorValue} from '../../../../../../../../../models/createOnenoteSectionFromDiscriminatorValue';
import {deserializeIntoOnenoteSection} from '../../../../../../../../../models/deserializeIntoOnenoteSection';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import type {OnenoteSection} from '../../../../../../../../../models/onenoteSection';
import {serializeOnenoteSection} from '../../../../../../../../../models/serializeOnenoteSection';
import {CopyToNotebookRequestBuilder} from './copyToNotebook/copyToNotebookRequestBuilder';
import {CopyToSectionGroupRequestBuilder} from './copyToSectionGroup/copyToSectionGroupRequestBuilder';
import {OnenoteSectionItemRequestBuilderDeleteRequestConfiguration} from './onenoteSectionItemRequestBuilderDeleteRequestConfiguration';
import {OnenoteSectionItemRequestBuilderGetRequestConfiguration} from './onenoteSectionItemRequestBuilderGetRequestConfiguration';
import {OnenoteSectionItemRequestBuilderPatchRequestConfiguration} from './onenoteSectionItemRequestBuilderPatchRequestConfiguration';
import {PagesRequestBuilder} from './pages/pagesRequestBuilder';
import {ParentNotebookRequestBuilder} from './parentNotebook/parentNotebookRequestBuilder';
import {ParentSectionGroupRequestBuilder} from './parentSectionGroup/parentSectionGroupRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sections property of the microsoft.graph.notebook entity.
 */
export class OnenoteSectionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the copyToNotebook method.
     */
    public get copyToNotebook(): CopyToNotebookRequestBuilder {
        return new CopyToNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the copyToSectionGroup method.
     */
    public get copyToSectionGroup(): CopyToSectionGroupRequestBuilder {
        return new CopyToSectionGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
     */
    public get pages(): PagesRequestBuilder {
        return new PagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentNotebook property of the microsoft.graph.onenoteSection entity.
     */
    public get parentNotebook(): ParentNotebookRequestBuilder {
        return new ParentNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentSectionGroup property of the microsoft.graph.onenoteSection entity.
     */
    public get parentSectionGroup(): ParentSectionGroupRequestBuilder {
        return new ParentSectionGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OnenoteSectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}/sections/{onenoteSection%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property sections for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OnenoteSectionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The sections in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSection
     */
    public get(requestConfiguration?: OnenoteSectionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenoteSection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSection>(requestInfo, createOnenoteSectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property sections in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSection
     */
    public patch(body: OnenoteSection | undefined, requestConfiguration?: OnenoteSectionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OnenoteSection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSection>(requestInfo, createOnenoteSectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property sections for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OnenoteSectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The sections in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnenoteSectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property sections in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OnenoteSection | undefined, requestConfiguration?: OnenoteSectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOnenoteSection);
        return requestInfo;
    };
}
