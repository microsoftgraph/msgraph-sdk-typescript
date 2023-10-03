import { type WindowsInformationProtectionAppLockerFileCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue, deserializeIntoWindowsInformationProtectionAppLockerFile, serializeWindowsInformationProtectionAppLockerFile, type WindowsInformationProtectionAppLockerFile } from '../../../../models/windowsInformationProtectionAppLockerFile';
import { createWindowsInformationProtectionAppLockerFileCollectionResponseFromDiscriminatorValue } from '../../../../models/windowsInformationProtectionAppLockerFileCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WindowsInformationProtectionAppLockerFileItemRequestBuilder } from './item/windowsInformationProtectionAppLockerFileItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ExemptAppLockerFilesRequestBuilderGetQueryParameters {
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
export interface ExemptAppLockerFilesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExemptAppLockerFilesRequestBuilderGetQueryParameters;
}
export interface ExemptAppLockerFilesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the exemptAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
 */
export class ExemptAppLockerFilesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the exemptAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
     * @param windowsInformationProtectionAppLockerFileId The unique identifier of windowsInformationProtectionAppLockerFile
     * @returns a WindowsInformationProtectionAppLockerFileItemRequestBuilder
     */
    public byWindowsInformationProtectionAppLockerFileId(windowsInformationProtectionAppLockerFileId: string) : WindowsInformationProtectionAppLockerFileItemRequestBuilder {
        if(!windowsInformationProtectionAppLockerFileId) throw new Error("windowsInformationProtectionAppLockerFileId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionAppLockerFile%2Did"] = windowsInformationProtectionAppLockerFileId
        return new WindowsInformationProtectionAppLockerFileItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExemptAppLockerFilesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy%2Did}/exemptAppLockerFiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Another way to input exempt apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLockerFileCollectionResponse
     */
    public get(requestConfiguration?: ExemptAppLockerFilesRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLockerFileCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLockerFileCollectionResponse>(requestInfo, createWindowsInformationProtectionAppLockerFileCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to exemptAppLockerFiles for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLockerFile
     */
    public post(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: ExemptAppLockerFilesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLockerFile>(requestInfo, createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Another way to input exempt apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExemptAppLockerFilesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to exemptAppLockerFiles for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: ExemptAppLockerFilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionAppLockerFile);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a exemptAppLockerFilesRequestBuilder
     */
    public withUrl(rawUrl: string) : ExemptAppLockerFilesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ExemptAppLockerFilesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
