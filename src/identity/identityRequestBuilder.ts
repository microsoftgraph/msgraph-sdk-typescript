import {IdentityContainer} from '../models/';
import {createIdentityContainerFromDiscriminatorValue} from '../models/createIdentityContainerFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ApiConnectorsRequestBuilder} from './apiConnectors/apiConnectorsRequestBuilder';
import {B2xUserFlowsRequestBuilder} from './b2xUserFlows/b2xUserFlowsRequestBuilder';
import {ConditionalAccessRequestBuilder} from './conditionalAccess/conditionalAccessRequestBuilder';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityRequestBuilderGetRequestConfiguration} from './identityRequestBuilderGetRequestConfiguration';
import {IdentityRequestBuilderPatchRequestConfiguration} from './identityRequestBuilderPatchRequestConfiguration';
import {UserFlowAttributesRequestBuilder} from './userFlowAttributes/userFlowAttributesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityContainer singleton.
 */
export class IdentityRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity. */
    public get apiConnectors(): ApiConnectorsRequestBuilder {
        return new ApiConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity. */
    public get b2xUserFlows(): B2xUserFlowsRequestBuilder {
        return new B2xUserFlowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the conditionalAccess property of the microsoft.graph.identityContainer entity. */
    public get conditionalAccess(): ConditionalAccessRequestBuilder {
        return new ConditionalAccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity. */
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity. */
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    public get(requestConfiguration?: IdentityRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IdentityContainer>(requestInfo, createIdentityContainerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    public patch(body: IdentityContainer | undefined, requestConfiguration?: IdentityRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityContainer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IdentityContainer>(requestInfo, createIdentityContainerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPatchRequestInformation(body: IdentityContainer | undefined, requestConfiguration?: IdentityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
