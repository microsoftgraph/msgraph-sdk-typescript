import {AllowedValueCollectionResponse} from '../../../../models/';
import type {AllowedValue} from '../../../../models/allowedValue';
import {createAllowedValueCollectionResponseFromDiscriminatorValue} from '../../../../models/createAllowedValueCollectionResponseFromDiscriminatorValue';
import {createAllowedValueFromDiscriminatorValue} from '../../../../models/createAllowedValueFromDiscriminatorValue';
import {deserializeIntoAllowedValue} from '../../../../models/deserializeIntoAllowedValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAllowedValue} from '../../../../models/serializeAllowedValue';
import {AllowedValuesRequestBuilderGetRequestConfiguration} from './allowedValuesRequestBuilderGetRequestConfiguration';
import {AllowedValuesRequestBuilderPostRequestConfiguration} from './allowedValuesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AllowedValueItemRequestBuilder} from './item/allowedValueItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
 */
export class AllowedValuesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
     * @param allowedValueId The unique identifier of allowedValue
     * @returns a AllowedValueItemRequestBuilder
     */
    public byAllowedValueId(allowedValueId: string) : AllowedValueItemRequestBuilder {
        if(!allowedValueId) throw new Error("allowedValueId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["allowedValue%2Did"] = allowedValueId
        return new AllowedValueItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AllowedValuesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition%2Did}/allowedValues{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the allowedValue objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AllowedValueCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/customsecurityattributedefinition-list-allowedvalues?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AllowedValuesRequestBuilderGetRequestConfiguration | undefined) : Promise<AllowedValueCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AllowedValueCollectionResponse>(requestInfo, createAllowedValueCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new allowedValue object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AllowedValue
     * @see {@link https://learn.microsoft.com/graph/api/customsecurityattributedefinition-post-allowedvalues?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AllowedValue, requestConfiguration?: AllowedValuesRequestBuilderPostRequestConfiguration | undefined) : Promise<AllowedValue | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AllowedValue>(requestInfo, createAllowedValueFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the allowedValue objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllowedValuesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new allowedValue object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AllowedValue, requestConfiguration?: AllowedValuesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAllowedValue);
        return requestInfo;
    };
}
