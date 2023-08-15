import type {AppCatalogs} from '../models/appCatalogs';
import {createAppCatalogsFromDiscriminatorValue} from '../models/createAppCatalogsFromDiscriminatorValue';
import {deserializeIntoAppCatalogs} from '../models/deserializeIntoAppCatalogs';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeAppCatalogs} from '../models/serializeAppCatalogs';
import {AppCatalogsRequestBuilderGetRequestConfiguration} from './appCatalogsRequestBuilderGetRequestConfiguration';
import {AppCatalogsRequestBuilderPatchRequestConfiguration} from './appCatalogsRequestBuilderPatchRequestConfiguration';
import {TeamsAppsRequestBuilder} from './teamsApps/teamsAppsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCatalogs singleton.
 */
export class AppCatalogsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the teamsApps property of the microsoft.graph.appCatalogs entity.
     */
    public get teamsApps(): TeamsAppsRequestBuilder {
        return new TeamsAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AppCatalogsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/appCatalogs{?%24select,%24expand}");
    };
    /**
     * Get appCatalogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppCatalogs
     */
    public get(requestConfiguration?: AppCatalogsRequestBuilderGetRequestConfiguration | undefined) : Promise<AppCatalogs | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppCatalogs>(requestInfo, createAppCatalogsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update appCatalogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppCatalogs
     */
    public patch(body: AppCatalogs, requestConfiguration?: AppCatalogsRequestBuilderPatchRequestConfiguration | undefined) : Promise<AppCatalogs | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppCatalogs>(requestInfo, createAppCatalogsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get appCatalogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppCatalogsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update appCatalogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AppCatalogs, requestConfiguration?: AppCatalogsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppCatalogs);
        return requestInfo;
    };
}
