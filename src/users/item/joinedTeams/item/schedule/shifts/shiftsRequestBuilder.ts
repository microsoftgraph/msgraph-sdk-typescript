import {ShiftCollectionResponse} from '../../../../../../models/';
import {createShiftCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createShiftCollectionResponseFromDiscriminatorValue';
import {createShiftFromDiscriminatorValue} from '../../../../../../models/createShiftFromDiscriminatorValue';
import {deserializeIntoShift} from '../../../../../../models/deserializeIntoShift';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeShift} from '../../../../../../models/serializeShift';
import {Shift} from '../../../../../../models/shift';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ShiftItemRequestBuilder} from './item/shiftItemRequestBuilder';
import {ShiftsRequestBuilderGetRequestConfiguration} from './shiftsRequestBuilderGetRequestConfiguration';
import {ShiftsRequestBuilderPostRequestConfiguration} from './shiftsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the shifts property of the microsoft.graph.schedule entity.
 */
export class ShiftsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the shifts property of the microsoft.graph.schedule entity.
     * @param shiftId Unique identifier of the item
     * @returns a ShiftItemRequestBuilder
     */
    public byShiftId(shiftId: string) : ShiftItemRequestBuilder {
        if(!shiftId) throw new Error("shiftId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["shift%2Did"] = shiftId
        return new ShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ShiftsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/schedule/shifts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the list of shift instances in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ShiftCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/schedule-list-shifts?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ShiftsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ShiftCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ShiftCollectionResponse>(requestInfo, createShiftCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Shift
     * @see {@link https://docs.microsoft.com/graph/api/schedule-post-shifts?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Shift | undefined, requestConfiguration?: ShiftsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Shift | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<Shift>(requestInfo, createShiftFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the list of shift instances in a schedule.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ShiftsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Shift | undefined, requestConfiguration?: ShiftsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeShift);
        return requestInfo;
    };
}
