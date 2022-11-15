import {Printer} from '../../../models/';
import {createPrinterFromDiscriminatorValue} from '../../../models/createPrinterFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ConnectorsRequestBuilder} from './connectors/connectorsRequestBuilder';
import {PrintConnectorItemRequestBuilder} from './connectors/item/printConnectorItemRequestBuilder';
import {PrinterItemRequestBuilderDeleteRequestConfiguration} from './printerItemRequestBuilderDeleteRequestConfiguration';
import {PrinterItemRequestBuilderGetRequestConfiguration} from './printerItemRequestBuilderGetRequestConfiguration';
import {PrinterItemRequestBuilderPatchRequestConfiguration} from './printerItemRequestBuilderPatchRequestConfiguration';
import {RestoreFactoryDefaultsRequestBuilder} from './restoreFactoryDefaults/restoreFactoryDefaultsRequestBuilder';
import {PrinterShareItemRequestBuilder} from './shares/item/printerShareItemRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {PrintTaskTriggerItemRequestBuilder} from './taskTriggers/item/printTaskTriggerItemRequestBuilder';
import {TaskTriggersRequestBuilder} from './taskTriggers/taskTriggersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the printers property of the microsoft.graph.print entity. */
export class PrinterItemRequestBuilder {
    /** Provides operations to manage the connectors property of the microsoft.graph.printer entity. */
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the restoreFactoryDefaults method. */
    public get restoreFactoryDefaults(): RestoreFactoryDefaultsRequestBuilder {
        return new RestoreFactoryDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the shares property of the microsoft.graph.printer entity. */
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the taskTriggers property of the microsoft.graph.printer entity. */
    public get taskTriggers(): TaskTriggersRequestBuilder {
        return new TaskTriggersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.printer entity.
     * @param id Unique identifier of the item
     * @returns a PrintConnectorItemRequestBuilder
     */
    public connectorsById(id: string) : PrintConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printConnector%2Did"] = id
        return new PrintConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PrinterItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/print/printers/{printer%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property printers for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: PrinterItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of printers registered in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PrinterItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property printers in print
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Printer | undefined, requestConfiguration?: PrinterItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property printers for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: PrinterItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The list of printers registered in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Printer
     */
    public get(requestConfiguration?: PrinterItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Printer | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Printer>(requestInfo, createPrinterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property printers in print
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Printer
     */
    public patch(body: Printer | undefined, requestConfiguration?: PrinterItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Printer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Printer>(requestInfo, createPrinterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the shares property of the microsoft.graph.printer entity.
     * @param id Unique identifier of the item
     * @returns a PrinterShareItemRequestBuilder
     */
    public sharesById(id: string) : PrinterShareItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printerShare%2Did"] = id
        return new PrinterShareItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the taskTriggers property of the microsoft.graph.printer entity.
     * @param id Unique identifier of the item
     * @returns a PrintTaskTriggerItemRequestBuilder
     */
    public taskTriggersById(id: string) : PrintTaskTriggerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskTrigger%2Did"] = id
        return new PrintTaskTriggerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
