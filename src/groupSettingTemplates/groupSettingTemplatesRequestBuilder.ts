import {GroupSettingTemplateCollectionResponse} from '../models/';
import {createGroupSettingTemplateCollectionResponseFromDiscriminatorValue} from '../models/createGroupSettingTemplateCollectionResponseFromDiscriminatorValue';
import {createGroupSettingTemplateFromDiscriminatorValue} from '../models/createGroupSettingTemplateFromDiscriminatorValue';
import {deserializeIntoGroupSettingTemplate} from '../models/deserializeIntoGroupSettingTemplate';
import type {GroupSettingTemplate} from '../models/groupSettingTemplate';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeGroupSettingTemplate} from '../models/serializeGroupSettingTemplate';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {GetAvailableExtensionPropertiesRequestBuilder} from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import {GetByIdsRequestBuilder} from './getByIds/getByIdsRequestBuilder';
import {GroupSettingTemplatesRequestBuilderGetRequestConfiguration} from './groupSettingTemplatesRequestBuilderGetRequestConfiguration';
import {GroupSettingTemplatesRequestBuilderPostRequestConfiguration} from './groupSettingTemplatesRequestBuilderPostRequestConfiguration';
import {GroupSettingTemplateItemRequestBuilder} from './item/groupSettingTemplateItemRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of groupSettingTemplate entities.
 */
export class GroupSettingTemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of groupSettingTemplate entities.
     * @param groupSettingTemplateId Unique identifier of the item
     * @returns a GroupSettingTemplateItemRequestBuilder
     */
    public byGroupSettingTemplateId(groupSettingTemplateId: string) : GroupSettingTemplateItemRequestBuilder {
        if(!groupSettingTemplateId) throw new Error("groupSettingTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSettingTemplate%2Did"] = groupSettingTemplateId
        return new GroupSettingTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupSettingTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groupSettingTemplates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Group setting templates represents a set of templates from which group settings may be created and used within a tenant. This operation retrieves the list of available groupSettingTemplates objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupSettingTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/groupsettingtemplate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: GroupSettingTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<GroupSettingTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupSettingTemplateCollectionResponse>(requestInfo, createGroupSettingTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to groupSettingTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GroupSettingTemplate
     */
    public post(body: GroupSettingTemplate, requestConfiguration?: GroupSettingTemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<GroupSettingTemplate | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GroupSettingTemplate>(requestInfo, createGroupSettingTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Group setting templates represents a set of templates from which group settings may be created and used within a tenant. This operation retrieves the list of available groupSettingTemplates objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GroupSettingTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to groupSettingTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GroupSettingTemplate, requestConfiguration?: GroupSettingTemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGroupSettingTemplate);
        return requestInfo;
    };
}
