import { type AssignmentOrder } from '../../../../../models/';
import { createAssignmentOrderFromDiscriminatorValue } from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type GetOrderRequestBuilderGetRequestConfiguration } from './getOrderRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getOrder method.
 */
export class GetOrderRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetOrderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userAttributeAssignments/getOrder()");
    };
    /**
     * Invoke function getOrder
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AssignmentOrder
     */
    public get(requestConfiguration?: GetOrderRequestBuilderGetRequestConfiguration | undefined) : Promise<AssignmentOrder | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AssignmentOrder>(requestInfo, createAssignmentOrderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getOrder
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetOrderRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getOrderRequestBuilder
     */
    public withUrl(rawUrl: string) : GetOrderRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetOrderRequestBuilder(rawUrl, this.requestAdapter);
    };
}
