import {ManagedAppPolicy} from '../../../../../models/';
import {createManagedAppPolicyFromDiscriminatorValue} from '../../../../../models/createManagedAppPolicyFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ManagedAppPolicyItemRequestBuilderGetQueryParameters} from './managedAppPolicyItemRequestBuilderGetQueryParameters';
import {ManagedAppProtectionRequestBuilder} from './managedAppProtection/managedAppProtectionRequestBuilder';
import {TargetAppsRequestBuilder} from './targetApps/targetAppsRequestBuilder';
import {TargetedManagedAppProtectionRequestBuilder} from './targetedManagedAppProtection/targetedManagedAppProtectionRequestBuilder';
import {WindowsInformationProtectionRequestBuilder} from './windowsInformationProtection/windowsInformationProtectionRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity.  */
export class ManagedAppPolicyItemRequestBuilder {
    /** The managedAppProtection property  */
    public get managedAppProtection(): ManagedAppProtectionRequestBuilder {
        return new ManagedAppProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The targetApps property  */
    public get targetApps(): TargetAppsRequestBuilder {
        return new TargetAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The targetedManagedAppProtection property  */
    public get targetedManagedAppProtection(): TargetedManagedAppProtectionRequestBuilder {
        return new TargetedManagedAppProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /** The windowsInformationProtection property  */
    public get windowsInformationProtection(): WindowsInformationProtectionRequestBuilder {
        return new WindowsInformationProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedAppPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}/intendedPolicies/{managedAppPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property intendedPolicies for deviceAppManagement
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Zero or more policies admin intended for the app as of now.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: ManagedAppPolicyItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property intendedPolicies in deviceAppManagement
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppPolicy | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property intendedPolicies for deviceAppManagement
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Zero or more policies admin intended for the app as of now.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppPolicy
     */
    public get(queryParameters?: ManagedAppPolicyItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedAppPolicy>(requestInfo, createManagedAppPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property intendedPolicies in deviceAppManagement
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedAppPolicy | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
