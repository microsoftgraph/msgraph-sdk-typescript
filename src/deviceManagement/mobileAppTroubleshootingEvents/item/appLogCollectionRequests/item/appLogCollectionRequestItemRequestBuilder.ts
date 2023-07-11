import {AppLogCollectionRequest} from '../../../../../models/appLogCollectionRequest';
import {createAppLogCollectionRequestFromDiscriminatorValue} from '../../../../../models/createAppLogCollectionRequestFromDiscriminatorValue';
import {deserializeIntoAppLogCollectionRequest} from '../../../../../models/deserializeIntoAppLogCollectionRequest';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAppLogCollectionRequest} from '../../../../../models/serializeAppLogCollectionRequest';
import {AppLogCollectionRequestItemRequestBuilderDeleteRequestConfiguration} from './appLogCollectionRequestItemRequestBuilderDeleteRequestConfiguration';
import {AppLogCollectionRequestItemRequestBuilderGetRequestConfiguration} from './appLogCollectionRequestItemRequestBuilderGetRequestConfiguration';
import {AppLogCollectionRequestItemRequestBuilderPatchRequestConfiguration} from './appLogCollectionRequestItemRequestBuilderPatchRequestConfiguration';
import {CreateDownloadUrlRequestBuilder} from './createDownloadUrl/createDownloadUrlRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appLogCollectionRequests property of the microsoft.graph.mobileAppTroubleshootingEvent entity.
 */
export class AppLogCollectionRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the createDownloadUrl method.
     */
    public get createDownloadUrl(): CreateDownloadUrlRequestBuilder {
        return new CreateDownloadUrlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AppLogCollectionRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent%2Did}/appLogCollectionRequests/{appLogCollectionRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property appLogCollectionRequests for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AppLogCollectionRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Indicates collection of App Log Upload Request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppLogCollectionRequest
     */
    public get(requestConfiguration?: AppLogCollectionRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AppLogCollectionRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppLogCollectionRequest>(requestInfo, createAppLogCollectionRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property appLogCollectionRequests in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppLogCollectionRequest
     */
    public patch(body: AppLogCollectionRequest | undefined, requestConfiguration?: AppLogCollectionRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AppLogCollectionRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppLogCollectionRequest>(requestInfo, createAppLogCollectionRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property appLogCollectionRequests for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AppLogCollectionRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Indicates collection of App Log Upload Request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppLogCollectionRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property appLogCollectionRequests in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AppLogCollectionRequest | undefined, requestConfiguration?: AppLogCollectionRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAppLogCollectionRequest);
        return requestInfo;
    };
}
