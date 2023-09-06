import { type Admin } from '../models/admin';
import { createAdminFromDiscriminatorValue } from '../models/createAdminFromDiscriminatorValue';
import { deserializeIntoAdmin } from '../models/deserializeIntoAdmin';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { serializeAdmin } from '../models/serializeAdmin';
import { type AdminRequestBuilderGetRequestConfiguration } from './adminRequestBuilderGetRequestConfiguration';
import { type AdminRequestBuilderPatchRequestConfiguration } from './adminRequestBuilderPatchRequestConfiguration';
import { EdgeRequestBuilder } from './edge/edgeRequestBuilder';
import { ServiceAnnouncementRequestBuilder } from './serviceAnnouncement/serviceAnnouncementRequestBuilder';
import { SharepointRequestBuilder } from './sharepoint/sharepointRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the admin singleton.
 */
export class AdminRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the edge property of the microsoft.graph.admin entity.
     */
    public get edge(): EdgeRequestBuilder {
        return new EdgeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the serviceAnnouncement property of the microsoft.graph.admin entity.
     */
    public get serviceAnnouncement(): ServiceAnnouncementRequestBuilder {
        return new ServiceAnnouncementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sharepoint property of the microsoft.graph.admin entity.
     */
    public get sharepoint(): SharepointRequestBuilder {
        return new SharepointRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AdminRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin{?%24select,%24expand}");
    };
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Admin
     */
    public get(requestConfiguration?: AdminRequestBuilderGetRequestConfiguration | undefined) : Promise<Admin | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Admin>(requestInfo, createAdminFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Admin
     */
    public patch(body: Admin, requestConfiguration?: AdminRequestBuilderPatchRequestConfiguration | undefined) : Promise<Admin | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Admin>(requestInfo, createAdminFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdminRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Admin, requestConfiguration?: AdminRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAdmin);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a adminRequestBuilder
     */
    public withUrl(rawUrl: string) : AdminRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AdminRequestBuilder(rawUrl, this.requestAdapter);
    };
}
