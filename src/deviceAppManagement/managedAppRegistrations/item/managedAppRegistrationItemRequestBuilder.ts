import {createManagedAppRegistrationFromDiscriminatorValue} from '../../../models/createManagedAppRegistrationFromDiscriminatorValue';
import {deserializeIntoManagedAppRegistration} from '../../../models/deserializeIntoManagedAppRegistration';
import type {ManagedAppRegistration} from '../../../models/managedAppRegistration';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeManagedAppRegistration} from '../../../models/serializeManagedAppRegistration';
import {AppliedPoliciesRequestBuilder} from './appliedPolicies/appliedPoliciesRequestBuilder';
import {IntendedPoliciesRequestBuilder} from './intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration} from './managedAppRegistrationItemRequestBuilderDeleteRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration} from './managedAppRegistrationItemRequestBuilderGetRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration} from './managedAppRegistrationItemRequestBuilderPatchRequestConfiguration';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedAppRegistrationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appliedPolicies property of the microsoft.graph.managedAppRegistration entity.
     */
    public get appliedPolicies(): AppliedPoliciesRequestBuilder {
        return new AppliedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity.
     */
    public get intendedPolicies(): IntendedPoliciesRequestBuilder {
        return new IntendedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.managedAppRegistration entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedAppRegistrationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the iosManagedAppRegistration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppRegistration
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappregistration-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppRegistration>(requestInfo, createManagedAppRegistrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppRegistration
     */
    public patch(body: ManagedAppRegistration, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppRegistration>(requestInfo, createManagedAppRegistrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the iosManagedAppRegistration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedAppRegistration, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppRegistration);
        return requestInfo;
    };
}
