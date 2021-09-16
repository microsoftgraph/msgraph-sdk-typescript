import {ConnectorsRequestBuilder} from './connectors/connectorsRequestBuilder';
import {PrintConnectorRequestBuilder} from './connectors/item/item/printConnectorRequestBuilder';
import {PrintOperationRequestBuilder} from './operations/item/item/printOperationRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {Print} from './print';
import {PrinterRequestBuilder} from './printers/item/item/printerRequestBuilder';
import {PrintersRequestBuilder} from './printers/printersRequestBuilder';
import {PrintServiceRequestBuilder} from './services/item/item/printServiceRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {PrinterShareRequestBuilder} from './shares/item/item/printerShareRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {PrintTaskDefinitionRequestBuilder} from './taskDefinitions/item/item/printTaskDefinitionRequestBuilder';
import {TaskDefinitionsRequestBuilder} from './taskDefinitions/taskDefinitionsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /print  */
export class PrintRequestBuilder {
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get printers(): PrintersRequestBuilder {
        return new PrintersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get taskDefinitions(): TaskDefinitionsRequestBuilder {
        return new TaskDefinitionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.connectors.item collection
     * @param id Unique identifier of the item
     * @returns a printConnectorRequestBuilder
     */
    public connectorsById(id: String) : PrintConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintConnectorRequestBuilder(this.currentPath + this.pathSegment + "/connectors/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new PrintRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/print";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get print
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update print
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Print | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Get print
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Print
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Print | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Print>(requestInfo, Print, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.operations.item collection
     * @param id Unique identifier of the item
     * @returns a printOperationRequestBuilder
     */
    public operationsById(id: String) : PrintOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    /**
     * Update print
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Print | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.printers.item collection
     * @param id Unique identifier of the item
     * @returns a printerRequestBuilder
     */
    public printersById(id: String) : PrinterRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrinterRequestBuilder(this.currentPath + this.pathSegment + "/printers/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.services.item collection
     * @param id Unique identifier of the item
     * @returns a printServiceRequestBuilder
     */
    public servicesById(id: String) : PrintServiceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintServiceRequestBuilder(this.currentPath + this.pathSegment + "/services/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.shares.item collection
     * @param id Unique identifier of the item
     * @returns a printerShareRequestBuilder
     */
    public sharesById(id: String) : PrinterShareRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrinterShareRequestBuilder(this.currentPath + this.pathSegment + "/shares/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.print.taskDefinitions.item collection
     * @param id Unique identifier of the item
     * @returns a printTaskDefinitionRequestBuilder
     */
    public taskDefinitionsById(id: String) : PrintTaskDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintTaskDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/taskDefinitions/" + id, this.httpCore, false);
    };
}
