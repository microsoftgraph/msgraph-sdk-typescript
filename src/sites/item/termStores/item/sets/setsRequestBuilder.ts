import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {SetCollectionResponse} from '../../../../../models/termStore/';
import {createSetCollectionResponseFromDiscriminatorValue} from '../../../../../models/termStore/createSetCollectionResponseFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from '../../../../../models/termStore/createSetFromDiscriminatorValue';
import {deserializeIntoSet} from '../../../../../models/termStore/deserializeIntoSet';
import {serializeSet} from '../../../../../models/termStore/serializeSet';
import {Set} from '../../../../../models/termStore/set';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SetItemRequestBuilder} from './item/setItemRequestBuilder';
import {SetsRequestBuilderGetRequestConfiguration} from './setsRequestBuilderGetRequestConfiguration';
import {SetsRequestBuilderPostRequestConfiguration} from './setsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sets property of the microsoft.graph.termStore.store entity.
 */
export class SetsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sets property of the microsoft.graph.termStore.store entity.
     * @param setId Unique identifier of the item
     * @returns a SetItemRequestBuilder
     */
    public bySetId(setId: string) : SetItemRequestBuilder {
        if(!setId) throw new Error("setId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["set%2Did"] = setId
        return new SetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/termStores/{store%2Did}/sets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a set object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SetCollectionResponse
     */
    public get(requestConfiguration?: SetsRequestBuilderGetRequestConfiguration | undefined) : Promise<SetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SetCollectionResponse>(requestInfo, createSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new set object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Set
     * @see {@link https://docs.microsoft.com/graph/api/termstore-set-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Set | undefined, requestConfiguration?: SetsRequestBuilderPostRequestConfiguration | undefined) : Promise<Set | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Set>(requestInfo, createSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a set object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new set object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Set | undefined, requestConfiguration?: SetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSet);
        return requestInfo;
    };
}
