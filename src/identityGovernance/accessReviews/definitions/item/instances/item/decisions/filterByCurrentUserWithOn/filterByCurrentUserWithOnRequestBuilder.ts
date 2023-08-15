import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {createFilterByCurrentUserWithOnResponseFromDiscriminatorValue} from './createFilterByCurrentUserWithOnResponseFromDiscriminatorValue';
import {FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration} from './filterByCurrentUserWithOnRequestBuilderGetRequestConfiguration';
import {FilterByCurrentUserWithOnResponse} from './index';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the filterByCurrentUser method.
 */
export class FilterByCurrentUserWithOnRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FilterByCurrentUserWithOnRequestBuilder and sets the default values.
     * @param on Usage: on='{on}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, on?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/decisions/filterByCurrentUser(on='{on}'){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
        this.pathParameters["on"] = on
    };
    /**
     * Invoke function filterByCurrentUser
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilterByCurrentUserWithOnResponse
     */
    public get(requestConfiguration?: FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration | undefined) : Promise<FilterByCurrentUserWithOnResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FilterByCurrentUserWithOnResponse>(requestInfo, createFilterByCurrentUserWithOnResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function filterByCurrentUser
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FilterByCurrentUserWithOnRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
