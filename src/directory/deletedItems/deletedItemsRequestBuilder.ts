import {DirectoryObject, DirectoryObjectCollectionResponse} from '../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from '../../models/createDirectoryObjectFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeletedItemsRequestBuilderGetRequestConfiguration} from './deletedItemsRequestBuilderGetRequestConfiguration';
import {DeletedItemsRequestBuilderPostRequestConfiguration} from './deletedItemsRequestBuilderPostRequestConfiguration';
import {MicrosoftGraphApplicationRequestBuilder} from './microsoftGraphApplication/microsoftGraphApplicationRequestBuilder';
import {MicrosoftGraphGetAvailableExtensionPropertiesRequestBuilder} from './microsoftGraphGetAvailableExtensionProperties/microsoftGraphGetAvailableExtensionPropertiesRequestBuilder';
import {MicrosoftGraphGetByIdsRequestBuilder} from './microsoftGraphGetByIds/microsoftGraphGetByIdsRequestBuilder';
import {MicrosoftGraphGroupRequestBuilder} from './microsoftGraphGroup/microsoftGraphGroupRequestBuilder';
import {MicrosoftGraphUserRequestBuilder} from './microsoftGraphUser/microsoftGraphUserRequestBuilder';
import {MicrosoftGraphValidatePropertiesRequestBuilder} from './microsoftGraphValidateProperties/microsoftGraphValidatePropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deletedItems property of the microsoft.graph.directory entity.
 */
export class DeletedItemsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to application. */
    public get microsoftGraphApplication(): MicrosoftGraphApplicationRequestBuilder {
        return new MicrosoftGraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getAvailableExtensionProperties method. */
    public get microsoftGraphGetAvailableExtensionProperties(): MicrosoftGraphGetAvailableExtensionPropertiesRequestBuilder {
        return new MicrosoftGraphGetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getByIds method. */
    public get microsoftGraphGetByIds(): MicrosoftGraphGetByIdsRequestBuilder {
        return new MicrosoftGraphGetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to group. */
    public get microsoftGraphGroup(): MicrosoftGraphGroupRequestBuilder {
        return new MicrosoftGraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get microsoftGraphUser(): MicrosoftGraphUserRequestBuilder {
        return new MicrosoftGraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the validateProperties method. */
    public get microsoftGraphValidateProperties(): MicrosoftGraphValidatePropertiesRequestBuilder {
        return new MicrosoftGraphValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new DeletedItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/directory/deletedItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Recently deleted items. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryObjectCollectionResponse
     */
    public get(requestConfiguration?: DeletedItemsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deletedItems for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryObject
     */
    public post(body: DirectoryObject | undefined, requestConfiguration?: DeletedItemsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryObject | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Recently deleted items. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeletedItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deletedItems for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DirectoryObject | undefined, requestConfiguration?: DeletedItemsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
