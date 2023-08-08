import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from '../../../models/createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionPolicy} from '../../../models/deserializeIntoWindowsInformationProtectionPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionPolicy} from '../../../models/serializeWindowsInformationProtectionPolicy';
import type {WindowsInformationProtectionPolicy} from '../../../models/windowsInformationProtectionPolicy';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {ExemptAppLockerFilesRequestBuilder} from './exemptAppLockerFiles/exemptAppLockerFilesRequestBuilder';
import {ProtectedAppLockerFilesRequestBuilder} from './protectedAppLockerFiles/protectedAppLockerFilesRequestBuilder';
import {WindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration} from './windowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration';
import {WindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration} from './windowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export class WindowsInformationProtectionPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.windowsInformationProtection entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the exemptAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
     */
    public get exemptAppLockerFiles(): ExemptAppLockerFilesRequestBuilder {
        return new ExemptAppLockerFilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the protectedAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
     */
    public get protectedAppLockerFiles(): ProtectedAppLockerFilesRequestBuilder {
        return new ProtectedAppLockerFilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WindowsInformationProtectionPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a windowsInformationProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-windowsinformationprotectionpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the windowsInformationProtectionPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-windowsinformationprotectionpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionPolicy>(requestInfo, createWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a windowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-windowsinformationprotectionpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WindowsInformationProtectionPolicy, requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionPolicy>(requestInfo, createWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a windowsInformationProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the windowsInformationProtectionPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a windowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsInformationProtectionPolicy, requestConfiguration?: WindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionPolicy);
        return requestInfo;
    };
}
