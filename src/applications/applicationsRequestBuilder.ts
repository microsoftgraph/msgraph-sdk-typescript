import {ApplicationCollectionResponse} from '../models/';
import type {Application} from '../models/application';
import {createApplicationCollectionResponseFromDiscriminatorValue} from '../models/createApplicationCollectionResponseFromDiscriminatorValue';
import {createApplicationFromDiscriminatorValue} from '../models/createApplicationFromDiscriminatorValue';
import {deserializeIntoApplication} from '../models/deserializeIntoApplication';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeApplication} from '../models/serializeApplication';
import {ApplicationsRequestBuilderGetRequestConfiguration} from './applicationsRequestBuilderGetRequestConfiguration';
import {ApplicationsRequestBuilderPostRequestConfiguration} from './applicationsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {GetAvailableExtensionPropertiesRequestBuilder} from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import {GetByIdsRequestBuilder} from './getByIds/getByIdsRequestBuilder';
import {ApplicationItemRequestBuilder} from './item/applicationItemRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of application entities.
 */
export class ApplicationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of application entities.
     * @param applicationId The unique identifier of application
     * @returns a ApplicationItemRequestBuilder
     */
    public byApplicationId(applicationId: string) : ApplicationItemRequestBuilder {
        if(!applicationId) throw new Error("applicationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["application%2Did"] = applicationId
        return new ApplicationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ApplicationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of applications in this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApplicationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/application-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApplicationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ApplicationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApplicationCollectionResponse>(requestInfo, createApplicationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new application object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Application
     * @see {@link https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Application, requestConfiguration?: ApplicationsRequestBuilderPostRequestConfiguration | undefined) : Promise<Application | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Application>(requestInfo, createApplicationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of applications in this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApplicationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new application object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Application, requestConfiguration?: ApplicationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeApplication);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a applicationsRequestBuilder
     */
    public withUrl(rawUrl: string) : ApplicationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ApplicationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
