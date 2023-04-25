import {MobileAppCategoryCollectionResponse} from '../../../../models/';
import {createMobileAppCategoryCollectionResponseFromDiscriminatorValue} from '../../../../models/createMobileAppCategoryCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CategoriesRequestBuilderGetRequestConfiguration} from './categoriesRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MobileAppCategoryItemRequestBuilder} from './item/mobileAppCategoryItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
 */
export class CategoriesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
     * @param mobileAppCategoryId Unique identifier of the item
     * @returns a MobileAppCategoryItemRequestBuilder
     */
    public byMobileAppCategoryId(mobileAppCategoryId: string) : MobileAppCategoryItemRequestBuilder {
        if(!mobileAppCategoryId) throw new Error("mobileAppCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppCategory%2Did"] = mobileAppCategoryId
        return new MobileAppCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/categories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of categories for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileAppCategoryCollectionResponse
     */
    public get(requestConfiguration?: CategoriesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileAppCategoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MobileAppCategoryCollectionResponse>(requestInfo, createMobileAppCategoryCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of categories for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
