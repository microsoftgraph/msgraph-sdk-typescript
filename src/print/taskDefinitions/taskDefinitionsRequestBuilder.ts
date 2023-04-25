import {PrintTaskDefinition, PrintTaskDefinitionCollectionResponse} from '../../models/';
import {createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue} from '../../models/createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue';
import {createPrintTaskDefinitionFromDiscriminatorValue} from '../../models/createPrintTaskDefinitionFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintTaskDefinitionItemRequestBuilder} from './item/printTaskDefinitionItemRequestBuilder';
import {TaskDefinitionsRequestBuilderGetRequestConfiguration} from './taskDefinitionsRequestBuilderGetRequestConfiguration';
import {TaskDefinitionsRequestBuilderPostRequestConfiguration} from './taskDefinitionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
 */
export class TaskDefinitionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the taskDefinitions property of the microsoft.graph.print entity.
     * @param printTaskDefinitionId Unique identifier of the item
     * @returns a PrintTaskDefinitionItemRequestBuilder
     */
    public byPrintTaskDefinitionId(printTaskDefinitionId: string) : PrintTaskDefinitionItemRequestBuilder {
        if(!printTaskDefinitionId) throw new Error("printTaskDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printTaskDefinition%2Did"] = printTaskDefinitionId
        return new PrintTaskDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TaskDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/taskDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintTaskDefinitionCollectionResponse
     */
    public get(requestConfiguration?: TaskDefinitionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintTaskDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PrintTaskDefinitionCollectionResponse>(requestInfo, createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to taskDefinitions for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintTaskDefinition
     */
    public post(body: PrintTaskDefinition | undefined, requestConfiguration?: TaskDefinitionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintTaskDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PrintTaskDefinition>(requestInfo, createPrintTaskDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to taskDefinitions for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintTaskDefinition | undefined, requestConfiguration?: TaskDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
