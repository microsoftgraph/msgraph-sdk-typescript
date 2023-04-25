import {AllowedValue, AllowedValueCollectionResponse} from '../../../../models/';
import {createAllowedValueCollectionResponseFromDiscriminatorValue} from '../../../../models/createAllowedValueCollectionResponseFromDiscriminatorValue';
import {createAllowedValueFromDiscriminatorValue} from '../../../../models/createAllowedValueFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllowedValuesRequestBuilderGetRequestConfiguration} from './allowedValuesRequestBuilderGetRequestConfiguration';
import {AllowedValuesRequestBuilderPostRequestConfiguration} from './allowedValuesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AllowedValueItemRequestBuilder} from './item/allowedValueItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
 */
export class AllowedValuesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
     * @param allowedValueId Unique identifier of the item
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
     * Get allowedValues from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AllowedValueCollectionResponse
     */
    public get(requestConfiguration?: AllowedValuesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AllowedValueCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AllowedValueCollectionResponse>(requestInfo, createAllowedValueCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to allowedValues for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AllowedValue
     */
    public post(body: AllowedValue | undefined, requestConfiguration?: AllowedValuesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AllowedValue | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AllowedValue>(requestInfo, createAllowedValueFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get allowedValues from directory
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
     * Create new navigation property to allowedValues for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AllowedValue | undefined, requestConfiguration?: AllowedValuesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
