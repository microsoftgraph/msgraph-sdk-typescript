import { type DirectoryRoleTemplateCollectionResponse } from '../models/';
import { createDirectoryRoleTemplateCollectionResponseFromDiscriminatorValue } from '../models/createDirectoryRoleTemplateCollectionResponseFromDiscriminatorValue';
import { createDirectoryRoleTemplateFromDiscriminatorValue } from '../models/createDirectoryRoleTemplateFromDiscriminatorValue';
import { deserializeIntoDirectoryRoleTemplate } from '../models/deserializeIntoDirectoryRoleTemplate';
import { type DirectoryRoleTemplate } from '../models/directoryRoleTemplate';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { serializeDirectoryRoleTemplate } from '../models/serializeDirectoryRoleTemplate';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { type DirectoryRoleTemplatesRequestBuilderGetRequestConfiguration } from './directoryRoleTemplatesRequestBuilderGetRequestConfiguration';
import { type DirectoryRoleTemplatesRequestBuilderPostRequestConfiguration } from './directoryRoleTemplatesRequestBuilderPostRequestConfiguration';
import { GetAvailableExtensionPropertiesRequestBuilder } from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import { GetByIdsRequestBuilder } from './getByIds/getByIdsRequestBuilder';
import { DirectoryRoleTemplateItemRequestBuilder } from './item/directoryRoleTemplateItemRequestBuilder';
import { ValidatePropertiesRequestBuilder } from './validateProperties/validatePropertiesRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directoryRoleTemplate entities.
 */
export class DirectoryRoleTemplatesRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the collection of directoryRoleTemplate entities.
     * @param directoryRoleTemplateId The unique identifier of directoryRoleTemplate
     * @returns a DirectoryRoleTemplateItemRequestBuilder
     */
    public byDirectoryRoleTemplateId(directoryRoleTemplateId: string) : DirectoryRoleTemplateItemRequestBuilder {
        if(!directoryRoleTemplateId) throw new Error("directoryRoleTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRoleTemplate%2Did"] = directoryRoleTemplateId
        return new DirectoryRoleTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DirectoryRoleTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryRoleTemplates{?%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of directoryRoleTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryRoleTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryroletemplate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DirectoryRoleTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryRoleTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryRoleTemplateCollectionResponse>(requestInfo, createDirectoryRoleTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to directoryRoleTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryRoleTemplate
     */
    public post(body: DirectoryRoleTemplate, requestConfiguration?: DirectoryRoleTemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<DirectoryRoleTemplate | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryRoleTemplate>(requestInfo, createDirectoryRoleTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of directoryRoleTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoryRoleTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to directoryRoleTemplates
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DirectoryRoleTemplate, requestConfiguration?: DirectoryRoleTemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDirectoryRoleTemplate);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a directoryRoleTemplatesRequestBuilder
     */
    public withUrl(rawUrl: string) : DirectoryRoleTemplatesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DirectoryRoleTemplatesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
