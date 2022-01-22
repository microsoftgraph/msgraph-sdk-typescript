import {ManagedAppRegistration} from '../../../models/microsoft/graph/managedAppRegistration';
import {AppliedPoliciesRequestBuilder} from './appliedPolicies/appliedPoliciesRequestBuilder';
import {ManagedAppPolicyRequestBuilder as i82915e43984de662e38802999c292497c9f9e307cca15960694ee7896be71e3f} from './appliedPolicies/item/managedAppPolicyRequestBuilder';
import {IntendedPoliciesRequestBuilder} from './intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppPolicyRequestBuilder as i706281c3ae718079d2546d5c7545f67473c3cf94e7fc1c05c060a293800e9e80} from './intendedPolicies/item/managedAppPolicyRequestBuilder';
import {ManagedAppOperationRequestBuilder} from './operations/item/managedAppOperationRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}  */
export class ManagedAppRegistrationRequestBuilder {
    public get appliedPolicies(): AppliedPoliciesRequestBuilder {
        return new AppliedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get intendedPolicies(): IntendedPoliciesRequestBuilder {
        return new IntendedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.appliedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyRequestBuilder
     */
    public appliedPoliciesById(id: string) : i82915e43984de662e38802999c292497c9f9e307cca15960694ee7896be71e3f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedAppPolicy_id", id);
        return new i82915e43984de662e38802999c292497c9f9e307cca15960694ee7896be71e3f(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppRegistrationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The managed app registrations.
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
     * The managed app registrations.
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
     * The managed app registrations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppRegistration | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
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
     * The managed app registrations.
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
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ManagedAppRegistration>(requestInfo, ManagedAppRegistration, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.intendedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyRequestBuilder
     */
    public intendedPoliciesById(id: string) : i706281c3ae718079d2546d5c7545f67473c3cf94e7fc1c05c060a293800e9e80 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedAppPolicy_id", id);
        return new i706281c3ae718079d2546d5c7545f67473c3cf94e7fc1c05c060a293800e9e80(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppOperationRequestBuilder
     */
    public operationsById(id: string) : ManagedAppOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("managedAppOperation_id", id);
        return new ManagedAppOperationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The managed app registrations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedAppRegistration | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
