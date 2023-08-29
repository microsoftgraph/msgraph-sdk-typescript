import {GroupSettingCollectionResponse} from '../models/';
import {createGroupSettingCollectionResponseFromDiscriminatorValue} from '../models/createGroupSettingCollectionResponseFromDiscriminatorValue';
import {createGroupSettingFromDiscriminatorValue} from '../models/createGroupSettingFromDiscriminatorValue';
import {deserializeIntoGroupSetting} from '../models/deserializeIntoGroupSetting';
import type {GroupSetting} from '../models/groupSetting';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeGroupSetting} from '../models/serializeGroupSetting';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GroupSettingsRequestBuilderGetRequestConfiguration} from './groupSettingsRequestBuilderGetRequestConfiguration';
import {GroupSettingsRequestBuilderPostRequestConfiguration} from './groupSettingsRequestBuilderPostRequestConfiguration';
import {GroupSettingItemRequestBuilder} from './item/groupSettingItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of groupSetting entities.
 */
export class GroupSettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of groupSetting entities.
     * @param groupSettingId The unique identifier of groupSetting
     * @returns a GroupSettingItemRequestBuilder
     */
    public byGroupSettingId(groupSettingId: string) : GroupSettingItemRequestBuilder {
        if(!groupSettingId) throw new Error("groupSettingId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting%2Did"] = groupSettingId
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupSettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupSettings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of tenant-level or group-specific group settings objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupSettingCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/group-list-settings?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: GroupSettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupSettingCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupSettingCollectionResponse>(requestInfo, createGroupSettingCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupSetting
     * @see {@link https://learn.microsoft.com/graph/api/group-post-settings?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GroupSetting, requestConfiguration?: GroupSettingsRequestBuilderPostRequestConfiguration | undefined) : Promise<GroupSetting | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupSetting>(requestInfo, createGroupSettingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of tenant-level or group-specific group settings objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GroupSettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GroupSetting, requestConfiguration?: GroupSettingsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGroupSetting);
        return requestInfo;
    };
}
