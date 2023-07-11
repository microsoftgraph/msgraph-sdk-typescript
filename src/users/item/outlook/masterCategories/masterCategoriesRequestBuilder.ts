import {OutlookCategoryCollectionResponse} from '../../../../models/';
import {createOutlookCategoryCollectionResponseFromDiscriminatorValue} from '../../../../models/createOutlookCategoryCollectionResponseFromDiscriminatorValue';
import {createOutlookCategoryFromDiscriminatorValue} from '../../../../models/createOutlookCategoryFromDiscriminatorValue';
import {deserializeIntoOutlookCategory} from '../../../../models/deserializeIntoOutlookCategory';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {OutlookCategory} from '../../../../models/outlookCategory';
import {serializeOutlookCategory} from '../../../../models/serializeOutlookCategory';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OutlookCategoryItemRequestBuilder} from './item/outlookCategoryItemRequestBuilder';
import {MasterCategoriesRequestBuilderGetRequestConfiguration} from './masterCategoriesRequestBuilderGetRequestConfiguration';
import {MasterCategoriesRequestBuilderPostRequestConfiguration} from './masterCategoriesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the masterCategories property of the microsoft.graph.outlookUser entity.
 */
export class MasterCategoriesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the masterCategories property of the microsoft.graph.outlookUser entity.
     * @param outlookCategoryId Unique identifier of the item
     * @returns a OutlookCategoryItemRequestBuilder
     */
    public byOutlookCategoryId(outlookCategoryId: string) : OutlookCategoryItemRequestBuilder {
        if(!outlookCategoryId) throw new Error("outlookCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookCategory%2Did"] = outlookCategoryId
        return new OutlookCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MasterCategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/outlook/masterCategories{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get all the categories that have been defined for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OutlookCategoryCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/outlookuser-list-mastercategories?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MasterCategoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<OutlookCategoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OutlookCategoryCollectionResponse>(requestInfo, createOutlookCategoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an outlookCategory object in the user's master list of categories.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OutlookCategory
     * @see {@link https://docs.microsoft.com/graph/api/outlookuser-post-mastercategories?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OutlookCategory | undefined, requestConfiguration?: MasterCategoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<OutlookCategory | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OutlookCategory>(requestInfo, createOutlookCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get all the categories that have been defined for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MasterCategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an outlookCategory object in the user's master list of categories.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OutlookCategory | undefined, requestConfiguration?: MasterCategoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOutlookCategory);
        return requestInfo;
    };
}
