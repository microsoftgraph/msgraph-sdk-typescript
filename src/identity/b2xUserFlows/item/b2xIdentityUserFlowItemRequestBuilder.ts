import {B2xIdentityUserFlow} from '../../../models/';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from '../../../models/createB2xIdentityUserFlowFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {B2xIdentityUserFlowItemRequestBuilderDeleteRequestConfiguration} from './b2xIdentityUserFlowItemRequestBuilderDeleteRequestConfiguration';
import {B2xIdentityUserFlowItemRequestBuilderGetRequestConfiguration} from './b2xIdentityUserFlowItemRequestBuilderGetRequestConfiguration';
import {B2xIdentityUserFlowItemRequestBuilderPatchRequestConfiguration} from './b2xIdentityUserFlowItemRequestBuilderPatchRequestConfiguration';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderItemRequestBuilder} from './identityProviders/item/identityProviderItemRequestBuilder';
import {UserFlowLanguageConfigurationItemRequestBuilder} from './languages/item/userFlowLanguageConfigurationItemRequestBuilder';
import {LanguagesRequestBuilder} from './languages/languagesRequestBuilder';
import {IdentityUserFlowAttributeAssignmentItemRequestBuilder} from './userAttributeAssignments/item/identityUserFlowAttributeAssignmentItemRequestBuilder';
import {UserAttributeAssignmentsRequestBuilder} from './userAttributeAssignments/userAttributeAssignmentsRequestBuilder';
import {IdentityProviderBaseItemRequestBuilder} from './userFlowIdentityProviders/item/identityProviderBaseItemRequestBuilder';
import {UserFlowIdentityProvidersRequestBuilder} from './userFlowIdentityProviders/userFlowIdentityProvidersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity.
 */
export class B2xIdentityUserFlowItemRequestBuilder {
    /** Provides operations to manage the identityProviders property of the microsoft.graph.b2xIdentityUserFlow entity. */
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity. */
    public get languages(): LanguagesRequestBuilder {
        return new LanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity. */
    public get userAttributeAssignments(): UserAttributeAssignmentsRequestBuilder {
        return new UserAttributeAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the userFlowIdentityProviders property of the microsoft.graph.b2xIdentityUserFlow entity. */
    public get userFlowIdentityProviders(): UserFlowIdentityProvidersRequestBuilder {
        return new UserFlowIdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new B2xIdentityUserFlowItemRequestBuilder and sets the default values.
     * @param b2xIdentityUserFlowId key: id of b2xIdentityUserFlow
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, b2xIdentityUserFlowId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["b2xIdentityUserFlow%2Did"] = b2xIdentityUserFlowId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property b2xUserFlows for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents entry point for B2X/self-service sign-up identity userflows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     */
    public get(requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlow>(requestInfo, createB2xIdentityUserFlowFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the identityProviders property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param id Unique identifier of the item
     * @returns a IdentityProviderItemRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProvider%2Did"] = id
        return new IdentityProviderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param id Unique identifier of the item
     * @returns a UserFlowLanguageConfigurationItemRequestBuilder
     */
    public languagesById(id: string) : UserFlowLanguageConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguageConfiguration%2Did"] = id
        return new UserFlowLanguageConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property b2xUserFlows in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     */
    public patch(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlow>(requestInfo, createB2xIdentityUserFlowFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property b2xUserFlows for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents entry point for B2X/self-service sign-up identity userflows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property b2xUserFlows in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xIdentityUserFlowItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param id Unique identifier of the item
     * @returns a IdentityUserFlowAttributeAssignmentItemRequestBuilder
     */
    public userAttributeAssignmentsById(id: string) : IdentityUserFlowAttributeAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityUserFlowAttributeAssignment%2Did"] = id
        return new IdentityUserFlowAttributeAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.userFlowIdentityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a IdentityProviderBaseItemRequestBuilder
     */
    public userFlowIdentityProvidersById(id: string) : IdentityProviderBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProviderBase%2Did"] = id
        return new IdentityProviderBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
