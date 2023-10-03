import { type ManagedDeviceMobileAppConfigurationCollectionResponse } from '../../models/';
import { createManagedDeviceMobileAppConfigurationFromDiscriminatorValue, deserializeIntoManagedDeviceMobileAppConfiguration, serializeManagedDeviceMobileAppConfiguration, type ManagedDeviceMobileAppConfiguration } from '../../models/managedDeviceMobileAppConfiguration';
import { createManagedDeviceMobileAppConfigurationCollectionResponseFromDiscriminatorValue } from '../../models/managedDeviceMobileAppConfigurationCollectionResponse';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ManagedDeviceMobileAppConfigurationItemRequestBuilder } from './item/managedDeviceMobileAppConfigurationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MobileAppConfigurationsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface MobileAppConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileAppConfigurationsRequestBuilderGetQueryParameters;
}
export interface MobileAppConfigurationsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
 */
export class MobileAppConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mobileAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     * @param managedDeviceMobileAppConfigurationId The unique identifier of managedDeviceMobileAppConfiguration
     * @returns a ManagedDeviceMobileAppConfigurationItemRequestBuilder
     */
    public byManagedDeviceMobileAppConfigurationId(managedDeviceMobileAppConfigurationId: string) : ManagedDeviceMobileAppConfigurationItemRequestBuilder {
        if(!managedDeviceMobileAppConfigurationId) throw new Error("managedDeviceMobileAppConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfiguration%2Did"] = managedDeviceMobileAppConfigurationId
        return new ManagedDeviceMobileAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MobileAppConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the iosMobileAppConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-iosmobileappconfiguration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MobileAppConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationCollectionResponse>(requestInfo, createManagedDeviceMobileAppConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new iosMobileAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-iosmobileappconfiguration-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedDeviceMobileAppConfiguration, requestConfiguration?: MobileAppConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfiguration>(requestInfo, createManagedDeviceMobileAppConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the iosMobileAppConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new iosMobileAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedDeviceMobileAppConfiguration, requestConfiguration?: MobileAppConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a mobileAppConfigurationsRequestBuilder
     */
    public withUrl(rawUrl: string) : MobileAppConfigurationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MobileAppConfigurationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
