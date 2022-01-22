import {B2xIdentityUserFlow} from '../../../models/microsoft/graph/b2xIdentityUserFlow';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {UserFlowLanguageConfigurationRequestBuilder} from './languages/item/userFlowLanguageConfigurationRequestBuilder';
import {LanguagesRequestBuilder} from './languages/languagesRequestBuilder';
import {IdentityUserFlowAttributeAssignmentRequestBuilder} from './userAttributeAssignments/item/identityUserFlowAttributeAssignmentRequestBuilder';
import {UserAttributeAssignmentsRequestBuilder} from './userAttributeAssignments/userAttributeAssignmentsRequestBuilder';
import {UserFlowIdentityProvidersRequestBuilder} from './userFlowIdentityProviders/userFlowIdentityProvidersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identity/b2xUserFlows/{b2xIdentityUserFlow-id}  */
export class B2xIdentityUserFlowRequestBuilder {
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get languages(): LanguagesRequestBuilder {
        return new LanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userAttributeAssignments(): UserAttributeAssignmentsRequestBuilder {
        return new UserAttributeAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get userFlowIdentityProviders(): UserFlowIdentityProvidersRequestBuilder {
        return new UserFlowIdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new B2xIdentityUserFlowRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: B2xIdentityUserFlow | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlow>(requestInfo, B2xIdentityUserFlow, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.languages.item collection
     * @param id Unique identifier of the item
     * @returns a userFlowLanguageConfigurationRequestBuilder
     */
    public languagesById(id: string) : UserFlowLanguageConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("userFlowLanguageConfiguration_id", id);
        return new UserFlowLanguageConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Represents entry point for B2X and self-service sign-up identity userflows.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: B2xIdentityUserFlow | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.userAttributeAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a identityUserFlowAttributeAssignmentRequestBuilder
     */
    public userAttributeAssignmentsById(id: string) : IdentityUserFlowAttributeAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("identityUserFlowAttributeAssignment_id", id);
        return new IdentityUserFlowAttributeAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
