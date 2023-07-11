import {createPrintFromDiscriminatorValue} from '../models/createPrintFromDiscriminatorValue';
import {deserializeIntoPrint} from '../models/deserializeIntoPrint';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {Print} from '../models/print';
import {serializePrint} from '../models/serializePrint';
import {ConnectorsRequestBuilder} from './connectors/connectorsRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PrintersRequestBuilder} from './printers/printersRequestBuilder';
import {PrintRequestBuilderGetRequestConfiguration} from './printRequestBuilderGetRequestConfiguration';
import {PrintRequestBuilderPatchRequestConfiguration} from './printRequestBuilderPatchRequestConfiguration';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {SharesRequestBuilder} from './shares/sharesRequestBuilder';
import {TaskDefinitionsRequestBuilder} from './taskDefinitions/taskDefinitionsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the print singleton.
 */
export class PrintRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.print entity.
     */
    public get connectors(): ConnectorsRequestBuilder {
        return new ConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.print entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the printers property of the microsoft.graph.print entity.
     */
    public get printers(): PrintersRequestBuilder {
        return new PrintersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the services property of the microsoft.graph.print entity.
     */
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the shares property of the microsoft.graph.print entity.
     */
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
     */
    public get taskDefinitions(): TaskDefinitionsRequestBuilder {
        return new TaskDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrintRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print{?%24select,%24expand}");
    };
    /**
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Print
     */
    public get(requestConfiguration?: PrintRequestBuilderGetRequestConfiguration | undefined) : Promise<Print | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Print>(requestInfo, createPrintFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Print
     */
    public patch(body: Print | undefined, requestConfiguration?: PrintRequestBuilderPatchRequestConfiguration | undefined) : Promise<Print | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Print>(requestInfo, createPrintFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Print | undefined, requestConfiguration?: PrintRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrint);
        return requestInfo;
    };
}
