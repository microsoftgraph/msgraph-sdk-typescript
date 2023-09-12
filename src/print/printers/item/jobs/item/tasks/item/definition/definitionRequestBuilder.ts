import { type PrintTaskDefinition } from '../../../../../../../../models/';
import { createPrintTaskDefinitionFromDiscriminatorValue } from '../../../../../../../../models/createPrintTaskDefinitionFromDiscriminatorValue';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { type DefinitionRequestBuilderGetRequestConfiguration } from './definitionRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the definition property of the microsoft.graph.printTask entity.
 */
export class DefinitionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DefinitionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/tasks/{printTask%2Did}/definition{?%24select,%24expand}");
    };
    /**
     * The printTaskDefinition that was used to create this task. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintTaskDefinition
     */
    public get(requestConfiguration?: DefinitionRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintTaskDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintTaskDefinition>(requestInfo, createPrintTaskDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * The printTaskDefinition that was used to create this task. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefinitionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a definitionRequestBuilder
     */
    public withUrl(rawUrl: string) : DefinitionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DefinitionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
