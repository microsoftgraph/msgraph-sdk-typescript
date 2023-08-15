import {ApplicationTemplateCollectionResponse} from '../models/';
import {createApplicationTemplateCollectionResponseFromDiscriminatorValue} from '../models/createApplicationTemplateCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {ApplicationTemplatesRequestBuilderGetRequestConfiguration} from './applicationTemplatesRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ApplicationTemplateItemRequestBuilder} from './item/applicationTemplateItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of applicationTemplate entities.
 */
export class ApplicationTemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of applicationTemplate entities.
     * @param applicationTemplateId The unique identifier of applicationTemplate
     * @returns a ApplicationTemplateItemRequestBuilder
     */
    public byApplicationTemplateId(applicationTemplateId: string) : ApplicationTemplateItemRequestBuilder {
        if(!applicationTemplateId) throw new Error("applicationTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["applicationTemplate%2Did"] = applicationTemplateId
        return new ApplicationTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ApplicationTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applicationTemplates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of applicationTemplate objects from the Azure AD application gallery.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApplicationTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/applicationtemplate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApplicationTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<ApplicationTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApplicationTemplateCollectionResponse>(requestInfo, createApplicationTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of applicationTemplate objects from the Azure AD application gallery.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApplicationTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
