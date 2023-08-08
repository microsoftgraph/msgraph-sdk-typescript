import {ImportedWindowsAutopilotDeviceIdentityCollectionResponse} from '../../models/';
import {createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue} from '../../models/createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../models/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from '../../models/deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import type {ImportedWindowsAutopilotDeviceIdentity} from '../../models/importedWindowsAutopilotDeviceIdentity';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration} from './importedWindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration} from './importedWindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration';
import {ImportRequestBuilder} from './importEscaped/importRequestBuilder';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder} from './item/importedWindowsAutopilotDeviceIdentityItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
 */
export class ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the import method.
     */
    public get importEscaped(): ImportRequestBuilder {
        return new ImportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
     * @param importedWindowsAutopilotDeviceIdentityId Unique identifier of the item
     * @returns a ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public byImportedWindowsAutopilotDeviceIdentityId(importedWindowsAutopilotDeviceIdentityId: string) : ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!importedWindowsAutopilotDeviceIdentityId) throw new Error("importedWindowsAutopilotDeviceIdentityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["importedWindowsAutopilotDeviceIdentity%2Did"] = importedWindowsAutopilotDeviceIdentityId
        return new ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/importedWindowsAutopilotDeviceIdentities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the importedWindowsAutopilotDeviceIdentity objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImportedWindowsAutopilotDeviceIdentityCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-importedwindowsautopilotdeviceidentity-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<ImportedWindowsAutopilotDeviceIdentityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImportedWindowsAutopilotDeviceIdentityCollectionResponse>(requestInfo, createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new importedWindowsAutopilotDeviceIdentity object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImportedWindowsAutopilotDeviceIdentity
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-importedwindowsautopilotdeviceidentity-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ImportedWindowsAutopilotDeviceIdentity, requestConfiguration?: ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<ImportedWindowsAutopilotDeviceIdentity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ImportedWindowsAutopilotDeviceIdentity>(requestInfo, createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the importedWindowsAutopilotDeviceIdentity objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new importedWindowsAutopilotDeviceIdentity object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ImportedWindowsAutopilotDeviceIdentity, requestConfiguration?: ImportedWindowsAutopilotDeviceIdentitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeImportedWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
}
