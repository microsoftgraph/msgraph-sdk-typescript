import {MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyCollectionResponse} from '../../../../../models/';
import {createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue} from '../../../../../models/createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from '../../../../../models/createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './item/multiValueLegacyExtendedPropertyItemRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration} from './multiValueExtendedPropertiesRequestBuilderGetRequestConfiguration';
import {MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration} from './multiValueExtendedPropertiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.message entity.
 */
export class MultiValueExtendedPropertiesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.message entity.
     * @param multiValueLegacyExtendedPropertyId Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public byMultiValueLegacyExtendedPropertyId(multiValueLegacyExtendedPropertyId: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!multiValueLegacyExtendedPropertyId) throw new Error("multiValueLegacyExtendedPropertyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty%2Did"] = multiValueLegacyExtendedPropertyId
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MultiValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/messages/{message%2Did}/multiValueExtendedProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedPropertyCollectionResponse
     */
    public get(requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedPropertyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MultiValueLegacyExtendedPropertyCollectionResponse>(requestInfo, createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    public post(body: MultiValueLegacyExtendedProperty | undefined, requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MultiValueLegacyExtendedProperty>(requestInfo, createMultiValueLegacyExtendedPropertyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MultiValueLegacyExtendedProperty | undefined, requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
