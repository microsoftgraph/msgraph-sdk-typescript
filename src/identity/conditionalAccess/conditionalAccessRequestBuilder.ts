import {ConditionalAccessRoot} from '../../models/';
import {createConditionalAccessRootFromDiscriminatorValue} from '../../models/createConditionalAccessRootFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationContextClassReferencesRequestBuilder} from './authenticationContextClassReferences/authenticationContextClassReferencesRequestBuilder';
import {AuthenticationContextClassReferenceItemRequestBuilder} from './authenticationContextClassReferences/item/authenticationContextClassReferenceItemRequestBuilder';
import {ConditionalAccessRequestBuilderDeleteRequestConfiguration} from './conditionalAccessRequestBuilderDeleteRequestConfiguration';
import {ConditionalAccessRequestBuilderGetRequestConfiguration} from './conditionalAccessRequestBuilderGetRequestConfiguration';
import {ConditionalAccessRequestBuilderPatchRequestConfiguration} from './conditionalAccessRequestBuilderPatchRequestConfiguration';
import {NamedLocationItemRequestBuilder} from './namedLocations/item/namedLocationItemRequestBuilder';
import {NamedLocationsRequestBuilder} from './namedLocations/namedLocationsRequestBuilder';
import {ConditionalAccessPolicyItemRequestBuilder} from './policies/item/conditionalAccessPolicyItemRequestBuilder';
import {PoliciesRequestBuilder} from './policies/policiesRequestBuilder';
import {ConditionalAccessTemplateItemRequestBuilder} from './templates/item/conditionalAccessTemplateItemRequestBuilder';
import {TemplatesRequestBuilder} from './templates/templatesRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the conditionalAccess property of the microsoft.graph.identityContainer entity.
 */
export class ConditionalAccessRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity. */
    public get authenticationContextClassReferences(): AuthenticationContextClassReferencesRequestBuilder {
        return new AuthenticationContextClassReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the namedLocations property of the microsoft.graph.conditionalAccessRoot entity. */
    public get namedLocations(): NamedLocationsRequestBuilder {
        return new NamedLocationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the policies property of the microsoft.graph.conditionalAccessRoot entity. */
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the templates property of the microsoft.graph.conditionalAccessRoot entity. */
    public get templates(): TemplatesRequestBuilder {
        return new TemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity.
     * @param id Unique identifier of the item
     * @returns a AuthenticationContextClassReferenceItemRequestBuilder
     */
    public authenticationContextClassReferencesById(id: string) : AuthenticationContextClassReferenceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationContextClassReference%2Did"] = id
        return new AuthenticationContextClassReferenceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ConditionalAccessRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess{?%24select,%24expand}");
    };
    /**
     * Delete navigation property conditionalAccess for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ConditionalAccessRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * the entry point for the Conditional Access (CA) object model.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConditionalAccessRoot
     */
    public get(requestConfiguration?: ConditionalAccessRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConditionalAccessRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ConditionalAccessRoot>(requestInfo, createConditionalAccessRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the namedLocations property of the microsoft.graph.conditionalAccessRoot entity.
     * @param id Unique identifier of the item
     * @returns a NamedLocationItemRequestBuilder
     */
    public namedLocationsById(id: string) : NamedLocationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["namedLocation%2Did"] = id
        return new NamedLocationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property conditionalAccess in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConditionalAccessRoot
     */
    public patch(body: ConditionalAccessRoot | undefined, requestConfiguration?: ConditionalAccessRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConditionalAccessRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ConditionalAccessRoot>(requestInfo, createConditionalAccessRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the policies property of the microsoft.graph.conditionalAccessRoot entity.
     * @param id Unique identifier of the item
     * @returns a ConditionalAccessPolicyItemRequestBuilder
     */
    public policiesById(id: string) : ConditionalAccessPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessPolicy%2Did"] = id
        return new ConditionalAccessPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the templates property of the microsoft.graph.conditionalAccessRoot entity.
     * @param id Unique identifier of the item
     * @returns a ConditionalAccessTemplateItemRequestBuilder
     */
    public templatesById(id: string) : ConditionalAccessTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessTemplate%2Did"] = id
        return new ConditionalAccessTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property conditionalAccess for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ConditionalAccessRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * the entry point for the Conditional Access (CA) object model.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConditionalAccessRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property conditionalAccess in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ConditionalAccessRoot | undefined, requestConfiguration?: ConditionalAccessRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
