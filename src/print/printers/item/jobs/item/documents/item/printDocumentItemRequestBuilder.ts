import {createPrintDocumentFromDiscriminatorValue} from '../../../../../../../models/createPrintDocumentFromDiscriminatorValue';
import {deserializeIntoPrintDocument} from '../../../../../../../models/deserializeIntoPrintDocument';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import type {PrintDocument} from '../../../../../../../models/printDocument';
import {serializePrintDocument} from '../../../../../../../models/serializePrintDocument';
import {CreateUploadSessionRequestBuilder} from './createUploadSession/createUploadSessionRequestBuilder';
import {PrintDocumentItemRequestBuilderDeleteRequestConfiguration} from './printDocumentItemRequestBuilderDeleteRequestConfiguration';
import {PrintDocumentItemRequestBuilderGetRequestConfiguration} from './printDocumentItemRequestBuilderGetRequestConfiguration';
import {PrintDocumentItemRequestBuilderPatchRequestConfiguration} from './printDocumentItemRequestBuilderPatchRequestConfiguration';
import {ContentRequestBuilder} from './value/contentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
 */
export class PrintDocumentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the print entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the createUploadSession method.
     */
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrintDocumentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/documents/{printDocument%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property documents for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintDocumentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
    public get(requestConfiguration?: PrintDocumentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintDocument | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintDocument>(requestInfo, createPrintDocumentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property documents in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
    public patch(body: PrintDocument, requestConfiguration?: PrintDocumentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintDocument | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintDocument>(requestInfo, createPrintDocumentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property documents for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintDocumentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintDocumentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property documents in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintDocument, requestConfiguration?: PrintDocumentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintDocument);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PrintDocumentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrintDocumentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrintDocumentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
