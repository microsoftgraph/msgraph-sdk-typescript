import { type PrintUsageByUserCollectionResponse } from '../../models/';
import { createPrintUsageByUserCollectionResponseFromDiscriminatorValue } from '../../models/createPrintUsageByUserCollectionResponseFromDiscriminatorValue';
import { createPrintUsageByUserFromDiscriminatorValue } from '../../models/createPrintUsageByUserFromDiscriminatorValue';
import { deserializeIntoPrintUsageByUser } from '../../models/deserializeIntoPrintUsageByUser';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type PrintUsageByUser } from '../../models/printUsageByUser';
import { serializePrintUsageByUser } from '../../models/serializePrintUsageByUser';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PrintUsageByUserItemRequestBuilder } from './item/printUsageByUserItemRequestBuilder';
import { type MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration } from './monthlyPrintUsageByUserRequestBuilderGetRequestConfiguration';
import { type MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration } from './monthlyPrintUsageByUserRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
 */
export class MonthlyPrintUsageByUserRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
     * @param printUsageByUserId The unique identifier of printUsageByUser
     * @returns a PrintUsageByUserItemRequestBuilder
     */
    public byPrintUsageByUserId(printUsageByUserId: string) : PrintUsageByUserItemRequestBuilder {
        if(!printUsageByUserId) throw new Error("printUsageByUserId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByUser%2Did"] = printUsageByUserId
        return new PrintUsageByUserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MonthlyPrintUsageByUserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/monthlyPrintUsageByUser{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByUserCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-list-monthlyprintusagebyuser?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintUsageByUserCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByUserCollectionResponse>(requestInfo, createPrintUsageByUserCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to monthlyPrintUsageByUser for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByUser
     */
    public post(body: PrintUsageByUser, requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintUsageByUser | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByUser>(requestInfo, createPrintUsageByUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to monthlyPrintUsageByUser for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintUsageByUser, requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintUsageByUser);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a monthlyPrintUsageByUserRequestBuilder
     */
    public withUrl(rawUrl: string) : MonthlyPrintUsageByUserRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MonthlyPrintUsageByUserRequestBuilder(rawUrl, this.requestAdapter);
    };
}
