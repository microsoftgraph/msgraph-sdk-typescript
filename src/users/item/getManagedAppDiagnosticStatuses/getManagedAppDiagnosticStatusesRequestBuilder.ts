import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createGetManagedAppDiagnosticStatusesResponseFromDiscriminatorValue } from './createGetManagedAppDiagnosticStatusesResponseFromDiscriminatorValue';
import { type GetManagedAppDiagnosticStatusesRequestBuilderGetRequestConfiguration } from './getManagedAppDiagnosticStatusesRequestBuilderGetRequestConfiguration';
import { type GetManagedAppDiagnosticStatusesResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getManagedAppDiagnosticStatuses method.
 */
export class GetManagedAppDiagnosticStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetManagedAppDiagnosticStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/getManagedAppDiagnosticStatuses(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Gets diagnostics validation status for a given user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetManagedAppDiagnosticStatusesResponse
     */
    public get(requestConfiguration?: GetManagedAppDiagnosticStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<GetManagedAppDiagnosticStatusesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetManagedAppDiagnosticStatusesResponse>(requestInfo, createGetManagedAppDiagnosticStatusesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Gets diagnostics validation status for a given user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetManagedAppDiagnosticStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getManagedAppDiagnosticStatusesRequestBuilder
     */
    public withUrl(rawUrl: string) : GetManagedAppDiagnosticStatusesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetManagedAppDiagnosticStatusesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
