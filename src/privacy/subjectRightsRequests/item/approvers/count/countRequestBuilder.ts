import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type CountRequestBuilderGetRequestConfiguration } from './countRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to count the resources in the collection.
 */
export class CountRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CountRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy/subjectRightsRequests/{subjectRightsRequest%2Did}/approvers/$count{?%24search,%24filter}");
    };
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Integer
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public get(requestConfiguration?: CountRequestBuilderGetRequestConfiguration | undefined) : Promise<number | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendPrimitiveAsync<number>(requestInfo, "number", errorMapping);
    };
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public toGetRequestInformation(requestConfiguration?: CountRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["text/plain"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a CountRequestBuilder
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public withUrl(rawUrl: string) : CountRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CountRequestBuilder(rawUrl, this.requestAdapter);
    };
}
