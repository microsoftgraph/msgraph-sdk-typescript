import {CustomExtensionStageSettingCollectionResponse} from '../../../../../models/';
import {createCustomExtensionStageSettingCollectionResponseFromDiscriminatorValue} from '../../../../../models/createCustomExtensionStageSettingCollectionResponseFromDiscriminatorValue';
import {createCustomExtensionStageSettingFromDiscriminatorValue} from '../../../../../models/createCustomExtensionStageSettingFromDiscriminatorValue';
import {CustomExtensionStageSetting} from '../../../../../models/customExtensionStageSetting';
import {deserializeIntoCustomExtensionStageSetting} from '../../../../../models/deserializeIntoCustomExtensionStageSetting';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeCustomExtensionStageSetting} from '../../../../../models/serializeCustomExtensionStageSetting';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomExtensionStageSettingsRequestBuilderGetRequestConfiguration} from './customExtensionStageSettingsRequestBuilderGetRequestConfiguration';
import {CustomExtensionStageSettingsRequestBuilderPostRequestConfiguration} from './customExtensionStageSettingsRequestBuilderPostRequestConfiguration';
import {CustomExtensionStageSettingItemRequestBuilder} from './item/customExtensionStageSettingItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customExtensionStageSettings property of the microsoft.graph.accessPackageAssignmentPolicy entity.
 */
export class CustomExtensionStageSettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customExtensionStageSettings property of the microsoft.graph.accessPackageAssignmentPolicy entity.
     * @param customExtensionStageSettingId Unique identifier of the item
     * @returns a CustomExtensionStageSettingItemRequestBuilder
     */
    public byCustomExtensionStageSettingId(customExtensionStageSettingId: string) : CustomExtensionStageSettingItemRequestBuilder {
        if(!customExtensionStageSettingId) throw new Error("customExtensionStageSettingId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["customExtensionStageSetting%2Did"] = customExtensionStageSettingId
        return new CustomExtensionStageSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomExtensionStageSettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}/customExtensionStageSettings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get customExtensionStageSettings from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomExtensionStageSettingCollectionResponse
     */
    public get(requestConfiguration?: CustomExtensionStageSettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomExtensionStageSettingCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomExtensionStageSettingCollectionResponse>(requestInfo, createCustomExtensionStageSettingCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to customExtensionStageSettings for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomExtensionStageSetting
     */
    public post(body: CustomExtensionStageSetting | undefined, requestConfiguration?: CustomExtensionStageSettingsRequestBuilderPostRequestConfiguration | undefined) : Promise<CustomExtensionStageSetting | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomExtensionStageSetting>(requestInfo, createCustomExtensionStageSettingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get customExtensionStageSettings from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomExtensionStageSettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to customExtensionStageSettings for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomExtensionStageSetting | undefined, requestConfiguration?: CustomExtensionStageSettingsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCustomExtensionStageSetting);
        return requestInfo;
    };
}
