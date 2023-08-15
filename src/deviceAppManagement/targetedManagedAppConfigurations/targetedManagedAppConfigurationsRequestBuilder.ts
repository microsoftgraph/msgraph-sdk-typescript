import {TargetedManagedAppConfigurationCollectionResponse} from '../../models/';
import {createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue} from '../../models/createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue';
import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from '../../models/createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {deserializeIntoTargetedManagedAppConfiguration} from '../../models/deserializeIntoTargetedManagedAppConfiguration';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeTargetedManagedAppConfiguration} from '../../models/serializeTargetedManagedAppConfiguration';
import type {TargetedManagedAppConfiguration} from '../../models/targetedManagedAppConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TargetedManagedAppConfigurationItemRequestBuilder} from './item/targetedManagedAppConfigurationItemRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration} from './targetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration';
import {TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration} from './targetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
 */
export class TargetedManagedAppConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity.
     * @param targetedManagedAppConfigurationId The unique identifier of targetedManagedAppConfiguration
     * @returns a TargetedManagedAppConfigurationItemRequestBuilder
     */
    public byTargetedManagedAppConfigurationId(targetedManagedAppConfigurationId: string) : TargetedManagedAppConfigurationItemRequestBuilder {
        if(!targetedManagedAppConfigurationId) throw new Error("targetedManagedAppConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["targetedManagedAppConfiguration%2Did"] = targetedManagedAppConfigurationId
        return new TargetedManagedAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TargetedManagedAppConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the targetedManagedAppConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-targetedmanagedappconfiguration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<TargetedManagedAppConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppConfigurationCollectionResponse>(requestInfo, createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new targetedManagedAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-targetedmanagedappconfiguration-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TargetedManagedAppConfiguration, requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppConfiguration>(requestInfo, createTargetedManagedAppConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the targetedManagedAppConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new targetedManagedAppConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TargetedManagedAppConfiguration, requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTargetedManagedAppConfiguration);
        return requestInfo;
    };
}
