import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from '../../../../../models/createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionAppLockerFile} from '../../../../../models/deserializeIntoWindowsInformationProtectionAppLockerFile';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionAppLockerFile} from '../../../../../models/serializeWindowsInformationProtectionAppLockerFile';
import type {WindowsInformationProtectionAppLockerFile} from '../../../../../models/windowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFileItemRequestBuilderDeleteRequestConfiguration} from './windowsInformationProtectionAppLockerFileItemRequestBuilderDeleteRequestConfiguration';
import {WindowsInformationProtectionAppLockerFileItemRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionAppLockerFileItemRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionAppLockerFileItemRequestBuilderPatchRequestConfiguration} from './windowsInformationProtectionAppLockerFileItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exemptAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
 */
export class WindowsInformationProtectionAppLockerFileItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WindowsInformationProtectionAppLockerFileItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy%2Did}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property exemptAppLockerFiles for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Another way to input exempt apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLockerFile
     */
    public get(requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLockerFile>(requestInfo, createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property exemptAppLockerFiles in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLockerFile
     */
    public patch(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLockerFile>(requestInfo, createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property exemptAppLockerFiles for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Another way to input exempt apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property exemptAppLockerFiles in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: WindowsInformationProtectionAppLockerFileItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionAppLockerFile);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WindowsInformationProtectionAppLockerFileItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsInformationProtectionAppLockerFileItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsInformationProtectionAppLockerFileItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
