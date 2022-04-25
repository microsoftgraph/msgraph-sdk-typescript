import {Onenote} from '../../models/';
import {createOnenoteFromDiscriminatorValue} from '../../models/createOnenoteFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {NotebookItemRequestBuilder} from './notebooks/item/notebookItemRequestBuilder';
import {NotebooksRequestBuilder} from './notebooks/notebooksRequestBuilder';
import {OnenoteRequestBuilderGetQueryParameters} from './onenoteRequestBuilderGetQueryParameters';
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
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the onenote property of the microsoft.graph.user entity.  */
export class OnenoteRequestBuilder {
    /** The notebooks property  */
    public get notebooks(): NotebooksRequestBuilder {
        return new NotebooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The operations property  */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The pages property  */
    public get pages(): PagesRequestBuilder {
        return new PagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The resources property  */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sectionGroups property  */
    public get sectionGroups(): SectionGroupsRequestBuilder {
        return new SectionGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sections property  */
    public get sections(): SectionsRequestBuilder {
        return new SectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OnenoteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/onenote{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property onenote for me
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Read-only.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: OnenoteRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property onenote in me
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Onenote | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property onenote for me
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Read-only.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Onenote
     */
    public get(queryParameters?: OnenoteRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Onenote | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Onenote>(requestInfo, createOnenoteFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.notebooks.item collection
     * @param id Unique identifier of the item
     * @returns a notebookItemRequestBuilder
     */
    public notebooksById(id: string) : NotebookItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notebook%2Did"] = id
        return new NotebookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.operations.item collection
     * @param id Unique identifier of the item
     * @returns a onenoteOperationItemRequestBuilder
     */
    public operationsById(id: string) : OnenoteOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteOperation%2Did"] = id
        return new OnenoteOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.pages.item collection
     * @param id Unique identifier of the item
     * @returns a onenotePageItemRequestBuilder
     */
    public pagesById(id: string) : OnenotePageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenotePage%2Did"] = id
        return new OnenotePageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property onenote in me
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Onenote | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.resources.item collection
     * @param id Unique identifier of the item
     * @returns a onenoteResourceItemRequestBuilder
     */
    public resourcesById(id: string) : OnenoteResourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteResource%2Did"] = id
        return new OnenoteResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.sectionGroups.item collection
     * @param id Unique identifier of the item
     * @returns a sectionGroupItemRequestBuilder
     */
    public sectionGroupsById(id: string) : SectionGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sectionGroup%2Did"] = id
        return new SectionGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.onenote.sections.item collection
     * @param id Unique identifier of the item
     * @returns a onenoteSectionItemRequestBuilder
     */
    public sectionsById(id: string) : OnenoteSectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onenoteSection%2Did"] = id
        return new OnenoteSectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
