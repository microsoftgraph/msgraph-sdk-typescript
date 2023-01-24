import {MobileApp} from '../../../models/';
import {createMobileAppFromDiscriminatorValue} from '../../../models/createMobileAppFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {MobileAppAssignmentItemRequestBuilder} from './assignments/item/mobileAppAssignmentItemRequestBuilder';
import {CategoriesRequestBuilder} from './categories/categoriesRequestBuilder';
import {MobileAppCategoryItemRequestBuilder} from './categories/item/mobileAppCategoryItemRequestBuilder';
import {ManagedMobileLobAppRequestBuilder} from './managedMobileLobApp/managedMobileLobAppRequestBuilder';
import {MobileAppItemRequestBuilderDeleteRequestConfiguration} from './mobileAppItemRequestBuilderDeleteRequestConfiguration';
import {MobileAppItemRequestBuilderGetRequestConfiguration} from './mobileAppItemRequestBuilderGetRequestConfiguration';
import {MobileAppItemRequestBuilderPatchRequestConfiguration} from './mobileAppItemRequestBuilderPatchRequestConfiguration';
import {MobileLobAppRequestBuilder} from './mobileLobApp/mobileLobAppRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
 */
export class MobileAppItemRequestBuilder {
    /** Provides operations to call the assign method. */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the categories property of the microsoft.graph.mobileApp entity. */
    public get categories(): CategoriesRequestBuilder {
        return new CategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to managedMobileLobApp. */
    public get managedMobileLobApp(): ManagedMobileLobAppRequestBuilder {
        return new ManagedMobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to mobileLobApp. */
    public get mobileLobApp(): MobileLobAppRequestBuilder {
        return new MobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     * @param id Unique identifier of the item
     * @returns a MobileAppAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : MobileAppAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppAssignment%2Did"] = id
        return new MobileAppAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
     * @param id Unique identifier of the item
     * @returns a MobileAppCategoryItemRequestBuilder
     */
    public categoriesById(id: string) : MobileAppCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppCategory%2Did"] = id
        return new MobileAppCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MobileAppItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property mobileApps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: MobileAppItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The mobile apps.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileApp
     */
    public get(requestConfiguration?: MobileAppItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MobileApp>(requestInfo, createMobileAppFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property mobileApps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileApp
     */
    public patch(body: MobileApp | undefined, requestConfiguration?: MobileAppItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileApp | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<MobileApp>(requestInfo, createMobileAppFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property mobileApps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: MobileAppItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The mobile apps.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MobileAppItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property mobileApps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: MobileApp | undefined, requestConfiguration?: MobileAppItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
