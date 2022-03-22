import {Print} from '../models/microsoft/graph/';
import {createPrintFromDiscriminatorValue} from '../models/microsoft/graph/createPrintFromDiscriminatorValue';
import {ODataError} from '../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ConnectorsRequestBuilder} from './connectors/connectorsRequestBuilder';
import {PrintConnectorItemRequestBuilder} from './connectors/item/printConnectorItemRequestBuilder';
import {PrintOperationItemRequestBuilder} from './operations/item/printOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PrinterItemRequestBuilder} from './printers/item/printerItemRequestBuilder';
import {PrintersRequestBuilder} from './printers/printersRequestBuilder';
import {PrintServiceItemRequestBuilder} from './services/item/printServiceItemRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {PrinterShareItemRequestBuilder} from './shares/item/printerShareItemRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {PrintTaskDefinitionItemRequestBuilder} from './taskDefinitions/item/printTaskDefinitionItemRequestBuilder';
import {TaskDefinitionsRequestBuilder} from './taskDefinitions/taskDefinitionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton.  */
export class PrintRequestBuilder {
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get printers(): PrintersRequestBuilder {
        return new PrintersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get taskDefinitions(): TaskDefinitionsRequestBuilder {
        return new TaskDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.connectors.item collection
     * @param id Unique identifier of the item
     * @returns a printConnectorItemRequestBuilder
     */
    public connectorsById(id: string) : PrintConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printConnector_id"] = id
        return new PrintConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PrintRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/print{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get print
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update print
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Print | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get print
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Print
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Print | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Print>(requestInfo, createPrintFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.operations.item collection
     * @param id Unique identifier of the item
     * @returns a printOperationItemRequestBuilder
     */
    public operationsById(id: string) : PrintOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printOperation_id"] = id
        return new PrintOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update print
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Print | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.printers.item collection
     * @param id Unique identifier of the item
     * @returns a printerItemRequestBuilder
     */
    public printersById(id: string) : PrinterItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printer_id"] = id
        return new PrinterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.services.item collection
     * @param id Unique identifier of the item
     * @returns a printServiceItemRequestBuilder
     */
    public servicesById(id: string) : PrintServiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printService_id"] = id
        return new PrintServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.shares.item collection
     * @param id Unique identifier of the item
     * @returns a printerShareItemRequestBuilder
     */
    public sharesById(id: string) : PrinterShareItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printerShare_id"] = id
        return new PrinterShareItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.print.taskDefinitions.item collection
     * @param id Unique identifier of the item
     * @returns a printTaskDefinitionItemRequestBuilder
     */
    public taskDefinitionsById(id: string) : PrintTaskDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskDefinition_id"] = id
        return new PrintTaskDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
