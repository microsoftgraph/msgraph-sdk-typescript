import {OutlookUser} from '../../models/microsoft/graph/outlookUser';
import {OutlookCategoryRequestBuilder} from './masterCategories/item/outlookCategoryRequestBuilder';
import {MasterCategoriesRequestBuilder} from './masterCategories/masterCategoriesRequestBuilder';
import {SupportedLanguagesRequestBuilder} from './supportedLanguages/supportedLanguagesRequestBuilder';
import {SupportedTimeZonesRequestBuilder} from './supportedTimeZones/supportedTimeZonesRequestBuilder';
import {SupportedTimeZonesWithTimeZoneStandardRequestBuilder} from './supportedTimeZonesWithTimeZoneStandard/supportedTimeZonesWithTimeZoneStandardRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/outlook  */
export class OutlookRequestBuilder {
    public get masterCategories(): MasterCategoriesRequestBuilder {
        return new MasterCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OutlookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/outlook{?select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OutlookUser | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookUser
     */
    public get(q?: {
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookUser | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<OutlookUser>(requestInfo, OutlookUser, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.me.outlook.masterCategories.item collection
     * @param id Unique identifier of the item
     * @returns a outlookCategoryRequestBuilder
     */
    public masterCategoriesById(id: string) : OutlookCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("outlookCategory_id", id);
        return new OutlookCategoryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: OutlookUser | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /me/outlook/microsoft.graph.supportedLanguages()
     * @returns a supportedLanguagesRequestBuilder
     */
    public supportedLanguages() : SupportedLanguagesRequestBuilder {
        return new SupportedLanguagesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/outlook/microsoft.graph.supportedTimeZones()
     * @returns a supportedTimeZonesRequestBuilder
     */
    public supportedTimeZones() : SupportedTimeZonesRequestBuilder {
        return new SupportedTimeZonesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard={TimeZoneStandard})
     * @param TimeZoneStandard Usage: TimeZoneStandard={TimeZoneStandard}
     * @returns a supportedTimeZonesWithTimeZoneStandardRequestBuilder
     */
    public supportedTimeZonesWithTimeZoneStandard(timeZoneStandard: string | undefined) : SupportedTimeZonesWithTimeZoneStandardRequestBuilder {
        if(!timeZoneStandard) throw new Error("timeZoneStandard cannot be undefined");
        return new SupportedTimeZonesWithTimeZoneStandardRequestBuilder(this.pathParameters, this.requestAdapter, timeZoneStandard);
    };
}
