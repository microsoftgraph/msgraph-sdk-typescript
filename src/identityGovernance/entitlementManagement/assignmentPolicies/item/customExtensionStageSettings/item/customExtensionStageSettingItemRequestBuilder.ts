import {createCustomExtensionStageSettingFromDiscriminatorValue} from '../../../../../../models/createCustomExtensionStageSettingFromDiscriminatorValue';
import type {CustomExtensionStageSetting} from '../../../../../../models/customExtensionStageSetting';
import {deserializeIntoCustomExtensionStageSetting} from '../../../../../../models/deserializeIntoCustomExtensionStageSetting';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeCustomExtensionStageSetting} from '../../../../../../models/serializeCustomExtensionStageSetting';
import {CustomExtensionRequestBuilder} from './customExtension/customExtensionRequestBuilder';
import {CustomExtensionStageSettingItemRequestBuilderDeleteRequestConfiguration} from './customExtensionStageSettingItemRequestBuilderDeleteRequestConfiguration';
import {CustomExtensionStageSettingItemRequestBuilderGetRequestConfiguration} from './customExtensionStageSettingItemRequestBuilderGetRequestConfiguration';
import {CustomExtensionStageSettingItemRequestBuilderPatchRequestConfiguration} from './customExtensionStageSettingItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customExtensionStageSettings property of the microsoft.graph.accessPackageAssignmentPolicy entity.
 */
export class CustomExtensionStageSettingItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the customExtension property of the microsoft.graph.customExtensionStageSetting entity.
     */
    public get customExtension(): CustomExtensionRequestBuilder {
        return new CustomExtensionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CustomExtensionStageSettingItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}/customExtensionStageSettings/{customExtensionStageSetting%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property customExtensionStageSettings for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomExtensionStageSetting
     */
    public get(requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomExtensionStageSetting | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomExtensionStageSetting>(requestInfo, createCustomExtensionStageSettingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property customExtensionStageSettings in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomExtensionStageSetting
     */
    public patch(body: CustomExtensionStageSetting, requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CustomExtensionStageSetting | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomExtensionStageSetting>(requestInfo, createCustomExtensionStageSettingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property customExtensionStageSettings for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of stages when to execute one or more custom access package workflow extensions. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property customExtensionStageSettings in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CustomExtensionStageSetting, requestConfiguration?: CustomExtensionStageSettingItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCustomExtensionStageSetting);
        return requestInfo;
    };
}
