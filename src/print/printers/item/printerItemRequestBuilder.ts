import { createPrinterFromDiscriminatorValue } from '../../../models/createPrinterFromDiscriminatorValue';
import { deserializeIntoPrinter } from '../../../models/deserializeIntoPrinter';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type Printer } from '../../../models/printer';
import { serializePrinter } from '../../../models/serializePrinter';
import { ConnectorsRequestBuilder } from './connectors/connectorsRequestBuilder';
import { JobsRequestBuilder } from './jobs/jobsRequestBuilder';
import { type PrinterItemRequestBuilderDeleteRequestConfiguration } from './printerItemRequestBuilderDeleteRequestConfiguration';
import { type PrinterItemRequestBuilderGetRequestConfiguration } from './printerItemRequestBuilderGetRequestConfiguration';
import { type PrinterItemRequestBuilderPatchRequestConfiguration } from './printerItemRequestBuilderPatchRequestConfiguration';
import { RestoreFactoryDefaultsRequestBuilder } from './restoreFactoryDefaults/restoreFactoryDefaultsRequestBuilder';
import { SharesRequestBuilder } from './shares/sharesRequestBuilder';
import { TaskTriggersRequestBuilder } from './taskTriggers/taskTriggersRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the printers property of the microsoft.graph.print entity.
 */
export class PrinterItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.printer entity.
     */
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the jobs property of the microsoft.graph.printerBase entity.
     */
    public get jobs(): JobsRequestBuilder {
        return new JobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restoreFactoryDefaults method.
     */
    public get restoreFactoryDefaults(): RestoreFactoryDefaultsRequestBuilder {
        return new RestoreFactoryDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the shares property of the microsoft.graph.printer entity.
     */
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskTriggers property of the microsoft.graph.printer entity.
     */
    public get taskTriggers(): TaskTriggersRequestBuilder {
        return new TaskTriggersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrinterItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete (unregister) a printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/printer-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PrinterItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a printer object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Printer
     * @see {@link https://learn.microsoft.com/graph/api/printer-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrinterItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Printer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Printer>(requestInfo, createPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a printer object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Printer
     * @see {@link https://learn.microsoft.com/graph/api/printer-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Printer, requestConfiguration?: PrinterItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Printer | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Printer>(requestInfo, createPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete (unregister) a printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrinterItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a printer object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrinterItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a printer object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Printer, requestConfiguration?: PrinterItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrinter);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PrinterItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrinterItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrinterItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
