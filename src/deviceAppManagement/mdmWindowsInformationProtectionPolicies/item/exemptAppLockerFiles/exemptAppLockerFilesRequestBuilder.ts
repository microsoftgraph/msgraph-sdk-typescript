import {WindowsInformationProtectionAppLockerFileCollectionResponse} from '../../../../models/';
import {createWindowsInformationProtectionAppLockerFileCollectionResponseFromDiscriminatorValue} from '../../../../models/createWindowsInformationProtectionAppLockerFileCollectionResponseFromDiscriminatorValue';
import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from '../../../../models/createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionAppLockerFile} from '../../../../models/deserializeIntoWindowsInformationProtectionAppLockerFile';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionAppLockerFile} from '../../../../models/serializeWindowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFile} from '../../../../models/windowsInformationProtectionAppLockerFile';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExemptAppLockerFilesRequestBuilderGetRequestConfiguration} from './exemptAppLockerFilesRequestBuilderGetRequestConfiguration';
import {ExemptAppLockerFilesRequestBuilderPostRequestConfiguration} from './exemptAppLockerFilesRequestBuilderPostRequestConfiguration';
import {WindowsInformationProtectionAppLockerFileItemRequestBuilder} from './item/windowsInformationProtectionAppLockerFileItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param windowsInformationProtectionAppLockerFileId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy%2Did}/exemptAppLockerFiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
    public post(body: WindowsInformationProtectionAppLockerFile | undefined, requestConfiguration?: ExemptAppLockerFilesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: WindowsInformationProtectionAppLockerFile | undefined, requestConfiguration?: ExemptAppLockerFilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsInformationProtectionAppLockerFile);
        return requestInfo;
    };
}
