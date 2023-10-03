import { type MobileContainedAppCollectionResponse } from '../../../../../models/';
import { createMobileContainedAppFromDiscriminatorValue, deserializeIntoMobileContainedApp, serializeMobileContainedApp, type MobileContainedApp } from '../../../../../models/mobileContainedApp';
import { createMobileContainedAppCollectionResponseFromDiscriminatorValue } from '../../../../../models/mobileContainedAppCollectionResponse';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { MobileContainedAppItemRequestBuilder } from './item/mobileContainedAppItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CommittedContainedAppsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface CommittedContainedAppsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: CommittedContainedAppsRequestBuilderGetQueryParameters;
}
export interface CommittedContainedAppsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the committedContainedApps property of the microsoft.graph.windowsUniversalAppX entity.
 */
export class CommittedContainedAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the committedContainedApps property of the microsoft.graph.windowsUniversalAppX entity.
     * @param mobileContainedAppId The unique identifier of mobileContainedApp
     * @returns a MobileContainedAppItemRequestBuilder
     */
    public byMobileContainedAppId(mobileContainedAppId: string) : MobileContainedAppItemRequestBuilder {
        if(!mobileContainedAppId) throw new Error("mobileContainedAppId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileContainedApp%2Did"] = mobileContainedAppId
        return new MobileContainedAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CommittedContainedAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.windowsUniversalAppX/committedContainedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of contained apps in the committed mobileAppContent of a windowsUniversalAppX app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileContainedAppCollectionResponse
     */
    public get(requestConfiguration?: CommittedContainedAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<MobileContainedAppCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileContainedAppCollectionResponse>(requestInfo, createMobileContainedAppCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to committedContainedApps for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileContainedApp
     */
    public post(body: MobileContainedApp, requestConfiguration?: CommittedContainedAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<MobileContainedApp | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MobileContainedApp>(requestInfo, createMobileContainedAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * The collection of contained apps in the committed mobileAppContent of a windowsUniversalAppX app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CommittedContainedAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to committedContainedApps for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MobileContainedApp, requestConfiguration?: CommittedContainedAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMobileContainedApp);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a committedContainedAppsRequestBuilder
     */
    public withUrl(rawUrl: string) : CommittedContainedAppsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CommittedContainedAppsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
