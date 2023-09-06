import { createIdentityContainerFromDiscriminatorValue } from '../models/createIdentityContainerFromDiscriminatorValue';
import { deserializeIntoIdentityContainer } from '../models/deserializeIntoIdentityContainer';
import { type IdentityContainer } from '../models/identityContainer';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { serializeIdentityContainer } from '../models/serializeIdentityContainer';
import { ApiConnectorsRequestBuilder } from './apiConnectors/apiConnectorsRequestBuilder';
import { B2xUserFlowsRequestBuilder } from './b2xUserFlows/b2xUserFlowsRequestBuilder';
import { ConditionalAccessRequestBuilder } from './conditionalAccess/conditionalAccessRequestBuilder';
import { IdentityProvidersRequestBuilder } from './identityProviders/identityProvidersRequestBuilder';
import { type IdentityRequestBuilderGetRequestConfiguration } from './identityRequestBuilderGetRequestConfiguration';
import { type IdentityRequestBuilderPatchRequestConfiguration } from './identityRequestBuilderPatchRequestConfiguration';
import { UserFlowAttributesRequestBuilder } from './userFlowAttributes/userFlowAttributesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityContainer singleton.
 */
export class IdentityRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity.
     */
    public get apiConnectors(): ApiConnectorsRequestBuilder {
        return new ApiConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
     */
    public get b2xUserFlows(): B2xUserFlowsRequestBuilder {
        return new B2xUserFlowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the conditionalAccess property of the microsoft.graph.identityContainer entity.
     */
    public get conditionalAccess(): ConditionalAccessRequestBuilder {
        return new ConditionalAccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity.
     */
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
     */
    public get userFlowAttributes(): UserFlowAttributesRequestBuilder {
        return new UserFlowAttributesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IdentityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity{?%24select,%24expand}");
    };
    /**
     * Get identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityContainer
     */
    public get(requestConfiguration?: IdentityRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityContainer>(requestInfo, createIdentityContainerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityContainer
     */
    public patch(body: IdentityContainer, requestConfiguration?: IdentityRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityContainer>(requestInfo, createIdentityContainerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityContainer, requestConfiguration?: IdentityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityContainer);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a identityRequestBuilder
     */
    public withUrl(rawUrl: string) : IdentityRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentityRequestBuilder(rawUrl, this.requestAdapter);
    };
}
