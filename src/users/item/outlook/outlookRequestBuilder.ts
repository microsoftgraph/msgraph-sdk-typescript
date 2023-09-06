import { type OutlookUser } from '../../../models/';
import { createOutlookUserFromDiscriminatorValue } from '../../../models/createOutlookUserFromDiscriminatorValue';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { MasterCategoriesRequestBuilder } from './masterCategories/masterCategoriesRequestBuilder';
import { type OutlookRequestBuilderGetRequestConfiguration } from './outlookRequestBuilderGetRequestConfiguration';
import { SupportedLanguagesRequestBuilder } from './supportedLanguages/supportedLanguagesRequestBuilder';
import { SupportedTimeZonesRequestBuilder } from './supportedTimeZones/supportedTimeZonesRequestBuilder';
import { SupportedTimeZonesWithTimeZoneStandardRequestBuilder } from './supportedTimeZonesWithTimeZoneStandard/supportedTimeZonesWithTimeZoneStandardRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the outlook property of the microsoft.graph.user entity.
 */
export class OutlookRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the masterCategories property of the microsoft.graph.outlookUser entity.
     */
    public get masterCategories(): MasterCategoriesRequestBuilder {
        return new MasterCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the supportedLanguages method.
     */
    public get supportedLanguages(): SupportedLanguagesRequestBuilder {
        return new SupportedLanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the supportedTimeZones method.
     */
    public get supportedTimeZones(): SupportedTimeZonesRequestBuilder {
        return new SupportedTimeZonesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OutlookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/outlook{?%24select}");
    };
    /**
     * Get outlook from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OutlookUser
     */
    public get(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined) : Promise<OutlookUser | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OutlookUser>(requestInfo, createOutlookUserFromDiscriminatorValue, errorMapping);
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
    /**
     * Get outlook from users
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a outlookRequestBuilder
     */
    public withUrl(rawUrl: string) : OutlookRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OutlookRequestBuilder(rawUrl, this.requestAdapter);
    };
}
