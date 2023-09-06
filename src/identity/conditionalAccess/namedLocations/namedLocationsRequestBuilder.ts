import { type NamedLocationCollectionResponse } from '../../../models/';
import { createNamedLocationCollectionResponseFromDiscriminatorValue } from '../../../models/createNamedLocationCollectionResponseFromDiscriminatorValue';
import { createNamedLocationFromDiscriminatorValue } from '../../../models/createNamedLocationFromDiscriminatorValue';
import { deserializeIntoNamedLocation } from '../../../models/deserializeIntoNamedLocation';
import { type NamedLocation } from '../../../models/namedLocation';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeNamedLocation } from '../../../models/serializeNamedLocation';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { NamedLocationItemRequestBuilder } from './item/namedLocationItemRequestBuilder';
import { type NamedLocationsRequestBuilderGetRequestConfiguration } from './namedLocationsRequestBuilderGetRequestConfiguration';
import { type NamedLocationsRequestBuilderPostRequestConfiguration } from './namedLocationsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the namedLocations property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class NamedLocationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the namedLocations property of the microsoft.graph.conditionalAccessRoot entity.
     * @param namedLocationId The unique identifier of namedLocation
     * @returns a NamedLocationItemRequestBuilder
     */
    public byNamedLocationId(namedLocationId: string) : NamedLocationItemRequestBuilder {
        if(!namedLocationId) throw new Error("namedLocationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["namedLocation%2Did"] = namedLocationId
        return new NamedLocationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NamedLocationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/namedLocations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of namedLocation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NamedLocationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-list-namedlocations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: NamedLocationsRequestBuilderGetRequestConfiguration | undefined) : Promise<NamedLocationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NamedLocationCollectionResponse>(requestInfo, createNamedLocationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new namedLocation object. Named locations can be either ipNamedLocation or countryNamedLocation objects.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of NamedLocation
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-post-namedlocations?view=graph-rest-1.0|Find more info here}
     */
    public post(body: NamedLocation, requestConfiguration?: NamedLocationsRequestBuilderPostRequestConfiguration | undefined) : Promise<NamedLocation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<NamedLocation>(requestInfo, createNamedLocationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of namedLocation objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NamedLocationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new namedLocation object. Named locations can be either ipNamedLocation or countryNamedLocation objects.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: NamedLocation, requestConfiguration?: NamedLocationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeNamedLocation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a namedLocationsRequestBuilder
     */
    public withUrl(rawUrl: string) : NamedLocationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new NamedLocationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
