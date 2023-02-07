import {OutlookUser} from '../../models/';
import {createOutlookUserFromDiscriminatorValue} from '../../models/createOutlookUserFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {OutlookCategoryItemRequestBuilder} from './masterCategories/item/outlookCategoryItemRequestBuilder';
import {MasterCategoriesRequestBuilder} from './masterCategories/masterCategoriesRequestBuilder';
import {MicrosoftGraphSupportedLanguagesRequestBuilder} from './microsoftGraphSupportedLanguages/microsoftGraphSupportedLanguagesRequestBuilder';
import {MicrosoftGraphSupportedTimeZonesRequestBuilder} from './microsoftGraphSupportedTimeZones/microsoftGraphSupportedTimeZonesRequestBuilder';
import {MicrosoftGraphSupportedTimeZonesWithTimeZoneStandardRequestBuilder} from './microsoftGraphSupportedTimeZonesWithTimeZoneStandard/microsoftGraphSupportedTimeZonesWithTimeZoneStandardRequestBuilder';
import {OutlookRequestBuilderGetRequestConfiguration} from './outlookRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the outlook property of the microsoft.graph.user entity.
 */
export class OutlookRequestBuilder {
    /** Provides operations to manage the masterCategories property of the microsoft.graph.outlookUser entity. */
    public get masterCategories(): MasterCategoriesRequestBuilder {
        return new MasterCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the supportedLanguages method. */
    public get microsoftGraphSupportedLanguages(): MicrosoftGraphSupportedLanguagesRequestBuilder {
        return new MicrosoftGraphSupportedLanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the supportedTimeZones method. */
    public get microsoftGraphSupportedTimeZones(): MicrosoftGraphSupportedTimeZonesRequestBuilder {
        return new MicrosoftGraphSupportedTimeZonesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
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
     * Get outlook from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookUser
     */
    public get(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookUser | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OutlookUser>(requestInfo, createOutlookUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the masterCategories property of the microsoft.graph.outlookUser entity.
     * @param id Unique identifier of the item
     * @returns a OutlookCategoryItemRequestBuilder
     */
    public masterCategoriesById(id: string) : OutlookCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookCategory%2Did"] = id
        return new OutlookCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to call the supportedTimeZones method.
     * @param TimeZoneStandard Usage: TimeZoneStandard='{TimeZoneStandard}'
     * @returns a microsoftGraphSupportedTimeZonesWithTimeZoneStandardRequestBuilder
     */
    public microsoftGraphSupportedTimeZonesWithTimeZoneStandard(timeZoneStandard: string | undefined) : MicrosoftGraphSupportedTimeZonesWithTimeZoneStandardRequestBuilder {
        if(!timeZoneStandard) throw new Error("timeZoneStandard cannot be undefined");
        return new MicrosoftGraphSupportedTimeZonesWithTimeZoneStandardRequestBuilder(this.pathParameters, this.requestAdapter, timeZoneStandard);
    };
    /**
     * Get outlook from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
