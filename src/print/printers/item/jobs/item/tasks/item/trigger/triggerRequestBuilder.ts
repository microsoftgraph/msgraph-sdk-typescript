import { type PrintTaskTrigger } from '../../../../../../../../models/';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../../models/oDataErrors/oDataError';
import { createPrintTaskTriggerFromDiscriminatorValue } from '../../../../../../../../models/printTaskTrigger';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TriggerRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TriggerRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TriggerRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the trigger property of the microsoft.graph.printTask entity.
 */
export class TriggerRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TriggerRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/tasks/{printTask%2Did}/trigger{?%24select,%24expand}");
    };
    /**
     * The printTaskTrigger that triggered this task's execution. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskTrigger
     */
    public get(requestConfiguration?: TriggerRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintTaskTrigger | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTaskTrigger>(requestInfo, createPrintTaskTriggerFromDiscriminatorValue, errorMapping);
    };
    /**
     * The printTaskTrigger that triggered this task's execution. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TriggerRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a triggerRequestBuilder
     */
    public withUrl(rawUrl: string) : TriggerRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TriggerRequestBuilder(rawUrl, this.requestAdapter);
    };
}
