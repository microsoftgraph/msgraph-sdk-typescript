import {UserActivity} from '../../../../../../models/';
import {createUserActivityFromDiscriminatorValue} from '../../../../../../models/createUserActivityFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {ActivityRequestBuilderGetRequestConfiguration} from './activityRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activity property of the microsoft.graph.activityHistoryItem entity.
 */
export class ActivityRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ActivityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/activities/{userActivity%2Did}/historyItems/{activityHistoryItem%2Did}/activity{?%24select,%24expand}");
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the associated activity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserActivity
     */
    public get(requestConfiguration?: ActivityRequestBuilderGetRequestConfiguration | undefined) : Promise<UserActivity | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserActivity>(requestInfo, createUserActivityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the associated activity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a activityRequestBuilder
     */
    public withUrl(rawUrl: string) : ActivityRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ActivityRequestBuilder(rawUrl, this.requestAdapter);
    };
}
