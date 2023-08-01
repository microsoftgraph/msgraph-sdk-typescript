import {createWorkbookWorksheetProtectionFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookWorksheetProtectionFromDiscriminatorValue';
import {deserializeIntoWorkbookWorksheetProtection} from '../../../../../../../../models/deserializeIntoWorkbookWorksheetProtection';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookWorksheetProtection} from '../../../../../../../../models/serializeWorkbookWorksheetProtection';
import type {WorkbookWorksheetProtection} from '../../../../../../../../models/workbookWorksheetProtection';
import {ProtectRequestBuilder} from './protect/protectRequestBuilder';
import {ProtectionRequestBuilderDeleteRequestConfiguration} from './protectionRequestBuilderDeleteRequestConfiguration';
import {ProtectionRequestBuilderGetRequestConfiguration} from './protectionRequestBuilderGetRequestConfiguration';
import {ProtectionRequestBuilderPatchRequestConfiguration} from './protectionRequestBuilderPatchRequestConfiguration';
import {UnprotectRequestBuilder} from './unprotect/unprotectRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the protection property of the microsoft.graph.workbookWorksheet entity.
 */
export class ProtectionRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the protect method.
     */
    public get protect(): ProtectRequestBuilder {
        return new ProtectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unprotect method.
     */
    public get unprotect(): UnprotectRequestBuilder {
        return new UnprotectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ProtectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/protection{?%24select,%24expand}");
    };
    /**
     * Delete navigation property protection for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ProtectionRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of worksheetprotection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheetProtection
     * @see {@link https://learn.microsoft.com/graph/api/worksheetprotection-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ProtectionRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookWorksheetProtection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheetProtection>(requestInfo, createWorkbookWorksheetProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property protection in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookWorksheetProtection
     */
    public patch(body: WorkbookWorksheetProtection | undefined, requestConfiguration?: ProtectionRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookWorksheetProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookWorksheetProtection>(requestInfo, createWorkbookWorksheetProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property protection for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ProtectionRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of worksheetprotection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProtectionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property protection in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookWorksheetProtection | undefined, requestConfiguration?: ProtectionRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookWorksheetProtection);
        return requestInfo;
    };
}
