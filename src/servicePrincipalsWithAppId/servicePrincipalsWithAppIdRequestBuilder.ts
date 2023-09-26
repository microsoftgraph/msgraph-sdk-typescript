import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { createServicePrincipalFromDiscriminatorValue, deserializeIntoServicePrincipal, serializeServicePrincipal, type ServicePrincipal } from '../models/servicePrincipal';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServicePrincipalsWithAppIdRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface ServicePrincipalsWithAppIdRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface ServicePrincipalsWithAppIdRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServicePrincipalsWithAppIdRequestBuilderGetQueryParameters;
}
export interface ServicePrincipalsWithAppIdRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the collection of servicePrincipal entities.
 */
export class ServicePrincipalsWithAppIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ServicePrincipalsWithAppIdRequestBuilder and sets the default values.
     * @param appId Alternate key of servicePrincipal
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, appId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals(appId='{appId}'){?%24select,%24expand}");
        this.pathParameters["appId"] = appId
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipal
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderGetRequestConfiguration | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in servicePrincipals by appId
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipal
     */
    public patch(body: ServicePrincipal, requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in servicePrincipals by appId
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServicePrincipal, requestConfiguration?: ServicePrincipalsWithAppIdRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServicePrincipal);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a servicePrincipalsWithAppIdRequestBuilder
     */
    public withUrl(rawUrl: string) : ServicePrincipalsWithAppIdRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServicePrincipalsWithAppIdRequestBuilder(rawUrl, this.requestAdapter);
    };
}
