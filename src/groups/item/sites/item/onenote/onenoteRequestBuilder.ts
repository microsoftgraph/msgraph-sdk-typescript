import {Onenote} from '../../../../../models/';
import {createOnenoteFromDiscriminatorValue} from '../../../../../models/createOnenoteFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {NotebookItemRequestBuilder} from './notebooks/item/notebookItemRequestBuilder';
import {NotebooksRequestBuilder} from './notebooks/notebooksRequestBuilder';
import {OnenoteRequestBuilderDeleteRequestConfiguration} from './onenoteRequestBuilderDeleteRequestConfiguration';
import {OnenoteRequestBuilderGetRequestConfiguration} from './onenoteRequestBuilderGetRequestConfiguration';
import {OnenoteRequestBuilderPatchRequestConfiguration} from './onenoteRequestBuilderPatchRequestConfiguration';
import {OnenoteOperationItemRequestBuilder} from './operations/item/onenoteOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {OnenotePageItemRequestBuilder} from './pages/item/onenotePageItemRequestBuilder';
import {PagesRequestBuilder} from './pages/pagesRequestBuilder';
import {OnenoteResourceItemRequestBuilder} from './resources/item/onenoteResourceItemRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {SectionGroupItemRequestBuilder} from './sectionGroups/item/sectionGroupItemRequestBuilder';
import {SectionGroupsRequestBuilder} from './sectionGroups/sectionGroupsRequestBuilder';
import {OnenoteSectionItemRequestBuilder} from './sections/item/onenoteSectionItemRequestBuilder';
import {SectionsRequestBuilder} from './sections/sectionsRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onenote property of the microsoft.graph.site entity.
 */
export class OnenoteRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the notebooks property of the microsoft.graph.onenote entity. */
    public get notebooks(): NotebooksRequestBuilder {
        return new NotebooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.onenote entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the pages property of the microsoft.graph.onenote entity. */
    public get pages(): PagesRequestBuilder {
        return new PagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the resources property of the microsoft.graph.onenote entity. */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity. */
    public get sectionGroups(): SectionGroupsRequestBuilder {
        return new SectionGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the sections property of the microsoft.graph.onenote entity. */
    public get sections(): SectionsRequestBuilder {
        return new SectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OnenoteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote{?%24select,%24expand}");
    };
    /**
     * Delete navigation property onenote for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public delete(requestConfiguration?: OnenoteRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Calls the OneNote service for notebook related operations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Onenote
     */
    public get(requestConfiguration?: OnenoteRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Onenote | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Onenote>(requestInfo, createOnenoteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a NotebookItemRequestBuilder
     */
    public notebooksById(id: string) : NotebookItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notebook%2Did"] = id
        return new NotebookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a OnenoteOperationItemRequestBuilder
     */
    public operationsById(id: string) : OnenoteOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteOperation%2Did"] = id
        return new OnenoteOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the pages property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a OnenotePageItemRequestBuilder
     */
    public pagesById(id: string) : OnenotePageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenotePage%2Did"] = id
        return new OnenotePageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property onenote in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Onenote
     */
    public patch(body: Onenote | undefined, requestConfiguration?: OnenoteRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Onenote | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Onenote>(requestInfo, createOnenoteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the resources property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a OnenoteResourceItemRequestBuilder
     */
    public resourcesById(id: string) : OnenoteResourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteResource%2Did"] = id
        return new OnenoteResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a SectionGroupItemRequestBuilder
     */
    public sectionGroupsById(id: string) : SectionGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sectionGroup%2Did"] = id
        return new SectionGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the sections property of the microsoft.graph.onenote entity.
     * @param id Unique identifier of the item
     * @returns a OnenoteSectionItemRequestBuilder
     */
    public sectionsById(id: string) : OnenoteSectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteSection%2Did"] = id
        return new OnenoteSectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property onenote for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OnenoteRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Calls the OneNote service for notebook related operations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnenoteRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property onenote in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Onenote | undefined, requestConfiguration?: OnenoteRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
