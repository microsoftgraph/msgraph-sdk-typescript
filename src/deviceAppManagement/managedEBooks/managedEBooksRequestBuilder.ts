import {ManagedEBookCollectionResponse} from '../../models/';
import {createManagedEBookCollectionResponseFromDiscriminatorValue} from '../../models/createManagedEBookCollectionResponseFromDiscriminatorValue';
import {createManagedEBookFromDiscriminatorValue} from '../../models/createManagedEBookFromDiscriminatorValue';
import {deserializeIntoManagedEBook} from '../../models/deserializeIntoManagedEBook';
import type {ManagedEBook} from '../../models/managedEBook';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeManagedEBook} from '../../models/serializeManagedEBook';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedEBookItemRequestBuilder} from './item/managedEBookItemRequestBuilder';
import {ManagedEBooksRequestBuilderGetRequestConfiguration} from './managedEBooksRequestBuilderGetRequestConfiguration';
import {ManagedEBooksRequestBuilderPostRequestConfiguration} from './managedEBooksRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedEBooksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity.
     * @param managedEBookId The unique identifier of managedEBook
     * @returns a ManagedEBookItemRequestBuilder
     */
    public byManagedEBookId(managedEBookId: string) : ManagedEBookItemRequestBuilder {
        if(!managedEBookId) throw new Error("managedEBookId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedEBook%2Did"] = managedEBookId
        return new ManagedEBookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedEBooksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the iosVppEBook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBookCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebook-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedEBooksRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedEBookCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBookCollectionResponse>(requestInfo, createManagedEBookCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new iosVppEBook object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBook
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebook-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedEBook, requestConfiguration?: ManagedEBooksRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedEBook | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBook>(requestInfo, createManagedEBookFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the iosVppEBook objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedEBooksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new iosVppEBook object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedEBook, requestConfiguration?: ManagedEBooksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedEBook);
        return requestInfo;
    };
}
