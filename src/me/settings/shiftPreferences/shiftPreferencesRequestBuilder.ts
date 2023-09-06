import { createShiftPreferencesFromDiscriminatorValue } from '../../../models/createShiftPreferencesFromDiscriminatorValue';
import { deserializeIntoShiftPreferences } from '../../../models/deserializeIntoShiftPreferences';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeShiftPreferences } from '../../../models/serializeShiftPreferences';
import { type ShiftPreferences } from '../../../models/shiftPreferences';
import { type ShiftPreferencesRequestBuilderDeleteRequestConfiguration } from './shiftPreferencesRequestBuilderDeleteRequestConfiguration';
import { type ShiftPreferencesRequestBuilderGetRequestConfiguration } from './shiftPreferencesRequestBuilderGetRequestConfiguration';
import { type ShiftPreferencesRequestBuilderPatchRequestConfiguration } from './shiftPreferencesRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the shiftPreferences property of the microsoft.graph.userSettings entity.
 */
export class ShiftPreferencesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ShiftPreferencesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/settings/shiftPreferences{?%24select,%24expand}");
    };
    /**
     * Delete navigation property shiftPreferences for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ShiftPreferencesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a shiftPreferences object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ShiftPreferences
     * @see {@link https://learn.microsoft.com/graph/api/shiftpreferences-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ShiftPreferencesRequestBuilderGetRequestConfiguration | undefined) : Promise<ShiftPreferences | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ShiftPreferences>(requestInfo, createShiftPreferencesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties and relationships of a shiftPreferences object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ShiftPreferences
     * @see {@link https://learn.microsoft.com/graph/api/shiftpreferences-put?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ShiftPreferences, requestConfiguration?: ShiftPreferencesRequestBuilderPatchRequestConfiguration | undefined) : Promise<ShiftPreferences | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ShiftPreferences>(requestInfo, createShiftPreferencesFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property shiftPreferences for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ShiftPreferencesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a shiftPreferences object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ShiftPreferencesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties and relationships of a shiftPreferences object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ShiftPreferences, requestConfiguration?: ShiftPreferencesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeShiftPreferences);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a shiftPreferencesRequestBuilder
     */
    public withUrl(rawUrl: string) : ShiftPreferencesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ShiftPreferencesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
