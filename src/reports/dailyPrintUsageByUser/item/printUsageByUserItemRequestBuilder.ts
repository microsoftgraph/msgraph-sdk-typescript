import {createPrintUsageByUserFromDiscriminatorValue} from '../../../models/createPrintUsageByUserFromDiscriminatorValue';
import {deserializeIntoPrintUsageByUser} from '../../../models/deserializeIntoPrintUsageByUser';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {PrintUsageByUser} from '../../../models/printUsageByUser';
import {serializePrintUsageByUser} from '../../../models/serializePrintUsageByUser';
import {PrintUsageByUserItemRequestBuilderDeleteRequestConfiguration} from './printUsageByUserItemRequestBuilderDeleteRequestConfiguration';
import {PrintUsageByUserItemRequestBuilderGetRequestConfiguration} from './printUsageByUserItemRequestBuilderGetRequestConfiguration';
import {PrintUsageByUserItemRequestBuilderPatchRequestConfiguration} from './printUsageByUserItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dailyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
 */
export class PrintUsageByUserItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PrintUsageByUserItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/dailyPrintUsageByUser/{printUsageByUser%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property dailyPrintUsageByUser for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintUsageByUserItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a user's usage summary for a particular time period. For descriptions of each endpoint, see printUsageByUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByUser
     * @see {@link https://learn.microsoft.com/graph/api/printusagebyuser-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrintUsageByUserItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintUsageByUser | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByUser>(requestInfo, createPrintUsageByUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property dailyPrintUsageByUser in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByUser
     */
    public patch(body: PrintUsageByUser, requestConfiguration?: PrintUsageByUserItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintUsageByUser | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByUser>(requestInfo, createPrintUsageByUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property dailyPrintUsageByUser for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintUsageByUserItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a user's usage summary for a particular time period. For descriptions of each endpoint, see printUsageByUser.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintUsageByUserItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property dailyPrintUsageByUser in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintUsageByUser, requestConfiguration?: PrintUsageByUserItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintUsageByUser);
        return requestInfo;
    };
}
