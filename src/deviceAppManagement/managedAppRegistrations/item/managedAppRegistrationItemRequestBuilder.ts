import {ManagedAppRegistrationImpl} from '../../../models/';
import {createManagedAppRegistrationFromDiscriminatorValue} from '../../../models/createManagedAppRegistrationFromDiscriminatorValue';
import {ManagedAppRegistration} from '../../../models/managedAppRegistration';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AppliedPoliciesRequestBuilder} from './appliedPolicies/appliedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as i02f4e9a033ab52989a97e60c23262a4bff968b0aad605259456d4a05ecce9f55} from './appliedPolicies/item/managedAppPolicyItemRequestBuilder';
import {IntendedPoliciesRequestBuilder} from './intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as i614787a4168892e90c82618ecb2314ca7d5dbc776ae31c7a89ec90496677f6e6} from './intendedPolicies/item/managedAppPolicyItemRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration} from './managedAppRegistrationItemRequestBuilderDeleteRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration} from './managedAppRegistrationItemRequestBuilderGetRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration} from './managedAppRegistrationItemRequestBuilderPatchRequestConfiguration';
import {ManagedAppOperationItemRequestBuilder} from './operations/item/managedAppOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity. */
export class ManagedAppRegistrationItemRequestBuilder {
    /** The appliedPolicies property */
    public get appliedPolicies(): AppliedPoliciesRequestBuilder {
        return new AppliedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The intendedPolicies property */
    public get intendedPolicies(): IntendedPoliciesRequestBuilder {
        return new IntendedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The operations property */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.item.appliedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyItemRequestBuilder
     */
    public appliedPoliciesById(id: string) : i02f4e9a033ab52989a97e60c23262a4bff968b0aad605259456d4a05ecce9f55 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = id
        return new i02f4e9a033ab52989a97e60c23262a4bff968b0aad605259456d4a05ecce9f55(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppRegistrationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The managed app registrations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppRegistration | undefined, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new ManagedAppRegistrationImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The managed app registrations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    public get(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistrationImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedAppRegistrationImpl>(requestInfo, createManagedAppRegistrationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.item.intendedPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyItemRequestBuilder
     */
    public intendedPoliciesById(id: string) : i614787a4168892e90c82618ecb2314ca7d5dbc776ae31c7a89ec90496677f6e6 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = id
        return new i614787a4168892e90c82618ecb2314ca7d5dbc776ae31c7a89ec90496677f6e6(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppOperationItemRequestBuilder
     */
    public operationsById(id: string) : ManagedAppOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppOperation%2Did"] = id
        return new ManagedAppOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedAppRegistration | undefined, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
