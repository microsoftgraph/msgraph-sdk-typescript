import {createOnenotePageFromDiscriminatorValue} from '../../../../models/createOnenotePageFromDiscriminatorValue';
import {deserializeIntoOnenotePage} from '../../../../models/deserializeIntoOnenotePage';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {OnenotePage} from '../../../../models/onenotePage';
import {serializeOnenotePage} from '../../../../models/serializeOnenotePage';
import {ContentRequestBuilder} from './content/contentRequestBuilder';
import {CopyToSectionRequestBuilder} from './copyToSection/copyToSectionRequestBuilder';
import {OnenotePageItemRequestBuilderDeleteRequestConfiguration} from './onenotePageItemRequestBuilderDeleteRequestConfiguration';
import {OnenotePageItemRequestBuilderGetRequestConfiguration} from './onenotePageItemRequestBuilderGetRequestConfiguration';
import {OnenotePageItemRequestBuilderPatchRequestConfiguration} from './onenotePageItemRequestBuilderPatchRequestConfiguration';
import {OnenotePatchContentRequestBuilder} from './onenotePatchContent/onenotePatchContentRequestBuilder';
import {ParentNotebookRequestBuilder} from './parentNotebook/parentNotebookRequestBuilder';
import {ParentSectionRequestBuilder} from './parentSection/parentSectionRequestBuilder';
import {PreviewRequestBuilder} from './preview/previewRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pages property of the microsoft.graph.onenote entity.
 */
export class OnenotePageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the copyToSection method.
     */
    public get copyToSection(): CopyToSectionRequestBuilder {
        return new CopyToSectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the onenotePatchContent method.
     */
    public get onenotePatchContent(): OnenotePatchContentRequestBuilder {
        return new OnenotePatchContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentNotebook property of the microsoft.graph.onenotePage entity.
     */
    public get parentNotebook(): ParentNotebookRequestBuilder {
        return new ParentNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentSection property of the microsoft.graph.onenotePage entity.
     */
    public get parentSection(): ParentSectionRequestBuilder {
        return new ParentSectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the preview method.
     */
    public get preview(): PreviewRequestBuilder {
        return new PreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OnenotePageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/onenote/pages/{onenotePage%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a OneNote page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/page-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: OnenotePageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a page object. Getting page information Access a page's metadata by page identifier: Getting page content You can use the page's content endpoint to get the HTML content of a page: The includeIDs=true query option is used to update pages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenotePage
     * @see {@link https://learn.microsoft.com/graph/api/page-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OnenotePageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenotePage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenotePage>(requestInfo, createOnenotePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property pages in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenotePage
     */
    public patch(body: OnenotePage, requestConfiguration?: OnenotePageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OnenotePage | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenotePage>(requestInfo, createOnenotePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a OneNote page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OnenotePageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a page object. Getting page information Access a page's metadata by page identifier: Getting page content You can use the page's content endpoint to get the HTML content of a page: The includeIDs=true query option is used to update pages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnenotePageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property pages in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OnenotePage, requestConfiguration?: OnenotePageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnenotePage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a OnenotePageItemRequestBuilder
     */
    public withUrl(rawUrl: string) : OnenotePageItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OnenotePageItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
