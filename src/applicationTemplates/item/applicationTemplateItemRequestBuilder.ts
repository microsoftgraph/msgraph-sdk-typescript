import { type ApplicationTemplate } from '../../models/';
import { createApplicationTemplateFromDiscriminatorValue } from '../../models/createApplicationTemplateFromDiscriminatorValue';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type ApplicationTemplateItemRequestBuilderGetRequestConfiguration } from './applicationTemplateItemRequestBuilderGetRequestConfiguration';
import { InstantiateRequestBuilder } from './instantiate/instantiateRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of applicationTemplate entities.
 */
export class ApplicationTemplateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the instantiate method.
     */
    public get instantiate(): InstantiateRequestBuilder {
        return new InstantiateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ApplicationTemplateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applicationTemplates/{applicationTemplate%2Did}{?%24select,%24expand}");
    };
    /**
     * Retrieve the properties of an applicationTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApplicationTemplate
     * @see {@link https://learn.microsoft.com/graph/api/applicationtemplate-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApplicationTemplateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ApplicationTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApplicationTemplate>(requestInfo, createApplicationTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties of an applicationTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApplicationTemplateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a ApplicationTemplateItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ApplicationTemplateItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ApplicationTemplateItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
