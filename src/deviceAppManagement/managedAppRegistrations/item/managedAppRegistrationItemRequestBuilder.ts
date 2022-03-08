import {createManagedAppRegistrationFromDiscriminatorValue} from '../../../models/microsoft/graph/createManagedAppRegistrationFromDiscriminatorValue';
import {ManagedAppRegistration} from '../../../models/microsoft/graph/managedAppRegistration';
import {createODataErrorFromDiscriminatorValue} from '../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ODataError} from '../../../models/microsoft/graph/oDataErrors/oDataError';
import {AppliedPoliciesRequestBuilder} from './appliedPolicies/appliedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as ieef01d7cd1ae5da0e6e1cb9b8113e736fcd3932da838cc762302e1ba8fcd4bb1} from './appliedPolicies/item/managedAppPolicyItemRequestBuilder';
import {IntendedPoliciesRequestBuilder} from './intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as i13769201f001bbb083c5448a46179dd0baa213d70d9545ef25f30089f096b6fb} from './intendedPolicies/item/managedAppPolicyItemRequestBuilder';
import {ManagedAppOperationItemRequestBuilder} from './operations/item/managedAppOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.  */
export class ManagedAppRegistrationItemRequestBuilder {
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
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.appliedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyItemRequestBuilder
     */
    public appliedPoliciesById(id: string) : ieef01d7cd1ae5da0e6e1cb9b8113e736fcd3932da838cc762302e1ba8fcd4bb1 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy_id"] = id
        return new ieef01d7cd1ae5da0e6e1cb9b8113e736fcd3932da838cc762302e1ba8fcd4bb1(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppRegistrationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
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
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppRegistration | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "5XX": createODataErrorFromDiscriminatorValue,
            "4XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
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
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "5XX": createODataErrorFromDiscriminatorValue,
            "4XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedAppRegistration>(requestInfo, createManagedAppRegistrationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.intendedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyItemRequestBuilder
     */
    public intendedPoliciesById(id: string) : i13769201f001bbb083c5448a46179dd0baa213d70d9545ef25f30089f096b6fb {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy_id"] = id
        return new i13769201f001bbb083c5448a46179dd0baa213d70d9545ef25f30089f096b6fb(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceAppManagement.managedAppRegistrations.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppOperationItemRequestBuilder
     */
    public operationsById(id: string) : ManagedAppOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppOperation_id"] = id
        return new ManagedAppOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedAppRegistration | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "5XX": createODataErrorFromDiscriminatorValue,
            "4XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
