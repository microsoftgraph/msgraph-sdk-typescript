import {OutlookUser} from '../../models/';
import {createOutlookUserFromDiscriminatorValue} from '../../models/createOutlookUserFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {OutlookCategoryItemRequestBuilder} from './masterCategories/item/outlookCategoryItemRequestBuilder';
import {MasterCategoriesRequestBuilder} from './masterCategories/masterCategoriesRequestBuilder';
import {OutlookRequestBuilderDeleteRequestConfiguration} from './outlookRequestBuilderDeleteRequestConfiguration';
import {OutlookRequestBuilderGetRequestConfiguration} from './outlookRequestBuilderGetRequestConfiguration';
import {OutlookRequestBuilderPatchRequestConfiguration} from './outlookRequestBuilderPatchRequestConfiguration';
import {SupportedLanguagesRequestBuilder} from './supportedLanguages/supportedLanguagesRequestBuilder';
import {SupportedTimeZonesRequestBuilder} from './supportedTimeZones/supportedTimeZonesRequestBuilder';
import {SupportedTimeZonesWithTimeZoneStandardRequestBuilder} from './supportedTimeZonesWithTimeZoneStandard/supportedTimeZonesWithTimeZoneStandardRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the outlook property of the microsoft.graph.user entity. */
export class OutlookRequestBuilder {
    /** The masterCategories property */
    public get masterCategories(): MasterCategoriesRequestBuilder {
        return new MasterCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OutlookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/outlook{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property outlook for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: OutlookRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property outlook in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OutlookUser | undefined, requestConfiguration?: OutlookRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property outlook for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: OutlookRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookUser
     */
    public get(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookUser | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OutlookUser>(requestInfo, createOutlookUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.outlook.masterCategories.item collection
     * @param id Unique identifier of the item
     * @returns a outlookCategoryItemRequestBuilder
     */
    public masterCategoriesById(id: string) : OutlookCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookCategory%2Did"] = id
        return new OutlookCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property outlook in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: OutlookUser | undefined, requestConfiguration?: OutlookRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the supportedLanguages method.
     * @returns a supportedLanguagesRequestBuilder
     */
    public supportedLanguages() : SupportedLanguagesRequestBuilder {
        return new SupportedLanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the supportedTimeZones method.
     * @returns a supportedTimeZonesRequestBuilder
     */
    public supportedTimeZones() : SupportedTimeZonesRequestBuilder {
        return new SupportedTimeZonesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the supportedTimeZones method.
     * @param TimeZoneStandard Usage: TimeZoneStandard='{TimeZoneStandard}'
     * @returns a supportedTimeZonesWithTimeZoneStandardRequestBuilder
     */
    public supportedTimeZonesWithTimeZoneStandard(timeZoneStandard: string | undefined) : SupportedTimeZonesWithTimeZoneStandardRequestBuilder {
        if(!timeZoneStandard) throw new Error("timeZoneStandard cannot be undefined");
        return new SupportedTimeZonesWithTimeZoneStandardRequestBuilder(this.pathParameters, this.requestAdapter, timeZoneStandard);
    };
}
