import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from '../../../models/createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from '../../../models/deserializeIntoMdmWindowsInformationProtectionPolicy';
import type {MdmWindowsInformationProtectionPolicy} from '../../../models/mdmWindowsInformationProtectionPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeMdmWindowsInformationProtectionPolicy} from '../../../models/serializeMdmWindowsInformationProtectionPolicy';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {ExemptAppLockerFilesRequestBuilder} from './exemptAppLockerFiles/exemptAppLockerFilesRequestBuilder';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration} from './mdmWindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration} from './mdmWindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration} from './mdmWindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration';
import {ProtectedAppLockerFilesRequestBuilder} from './protectedAppLockerFiles/protectedAppLockerFilesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export class MdmWindowsInformationProtectionPolicyItemRequestBuilder extends BaseRequestBuilder {
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
     * Instantiates a new MdmWindowsInformationProtectionPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a mdmWindowsInformationProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-mdmwindowsinformationprotectionpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the mdmWindowsInformationProtectionPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-mdmwindowsinformationprotectionpolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<MdmWindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MdmWindowsInformationProtectionPolicy>(requestInfo, createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a mdmWindowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-mdmwindowsinformationprotectionpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: MdmWindowsInformationProtectionPolicy, requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<MdmWindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MdmWindowsInformationProtectionPolicy>(requestInfo, createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a mdmWindowsInformationProtectionPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the mdmWindowsInformationProtectionPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a mdmWindowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MdmWindowsInformationProtectionPolicy, requestConfiguration?: MdmWindowsInformationProtectionPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMdmWindowsInformationProtectionPolicy);
        return requestInfo;
    };
}
