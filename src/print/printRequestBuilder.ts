import {Print} from '../models/';
import {createPrintFromDiscriminatorValue} from '../models/createPrintFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ConnectorsRequestBuilder} from './connectors/connectorsRequestBuilder';
import {PrintConnectorItemRequestBuilder} from './connectors/item/printConnectorItemRequestBuilder';
import {PrintOperationItemRequestBuilder} from './operations/item/printOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PrinterItemRequestBuilder} from './printers/item/printerItemRequestBuilder';
import {PrintersRequestBuilder} from './printers/printersRequestBuilder';
import {PrintRequestBuilderGetRequestConfiguration} from './printRequestBuilderGetRequestConfiguration';
import {PrintRequestBuilderPatchRequestConfiguration} from './printRequestBuilderPatchRequestConfiguration';
import {PrintServiceItemRequestBuilder} from './services/item/printServiceItemRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {PrinterShareItemRequestBuilder} from './shares/item/printerShareItemRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {PrintTaskDefinitionItemRequestBuilder} from './taskDefinitions/item/printTaskDefinitionItemRequestBuilder';
import {TaskDefinitionsRequestBuilder} from './taskDefinitions/taskDefinitionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintRequestBuilder {
    /** Provides operations to manage the connectors property of the microsoft.graph.print entity. */
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.print entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to manage the printers property of the microsoft.graph.print entity. */
    public get printers(): PrintersRequestBuilder {
        return new PrintersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the services property of the microsoft.graph.print entity. */
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the shares property of the microsoft.graph.print entity. */
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity. */
    public get taskDefinitions(): TaskDefinitionsRequestBuilder {
        return new TaskDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.print entity.
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
     * Instantiates a new PrintRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/print{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PrintRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update print
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Print | undefined, requestConfiguration?: PrintRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Print
     */
    public get(requestConfiguration?: PrintRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Print | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Print>(requestInfo, createPrintFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.print entity.
     * @param id Unique identifier of the item
     * @returns a PrintOperationItemRequestBuilder
     */
    public operationsById(id: string) : PrintOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printOperation%2Did"] = id
        return new PrintOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update print
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Print
     */
    public patch(body: Print | undefined, requestConfiguration?: PrintRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Print | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Print>(requestInfo, createPrintFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the printers property of the microsoft.graph.print entity.
     * @param id Unique identifier of the item
     * @returns a PrinterItemRequestBuilder
     */
    public printersById(id: string) : PrinterItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printer%2Did"] = id
        return new PrinterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the services property of the microsoft.graph.print entity.
     * @param id Unique identifier of the item
     * @returns a PrintServiceItemRequestBuilder
     */
    public servicesById(id: string) : PrintServiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printService%2Did"] = id
        return new PrintServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the shares property of the microsoft.graph.print entity.
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
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
     * @param id Unique identifier of the item
     * @returns a PrintTaskDefinitionItemRequestBuilder
     */
    public taskDefinitionsById(id: string) : PrintTaskDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskDefinition%2Did"] = id
        return new PrintTaskDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
