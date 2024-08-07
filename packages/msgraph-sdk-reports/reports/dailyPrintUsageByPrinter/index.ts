/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue, createPrintUsageByPrinterFromDiscriminatorValue, serializePrintUsageByPrinter, type PrintUsageByPrinter, type PrintUsageByPrinterCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { PrintUsageByPrinterItemRequestBuilderRequestsMetadata, type PrintUsageByPrinterItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
 */
export interface DailyPrintUsageByPrinterRequestBuilder extends BaseRequestBuilder<DailyPrintUsageByPrinterRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     * @param printUsageByPrinterId The unique identifier of printUsageByPrinter
     * @returns {PrintUsageByPrinterItemRequestBuilder}
     */
     byPrintUsageByPrinterId(printUsageByPrinterId: string) : PrintUsageByPrinterItemRequestBuilder;
    /**
     * Retrieve a list of daily print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PrintUsageByPrinterCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-list-dailyprintusagebyprinter?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DailyPrintUsageByPrinterRequestBuilderGetQueryParameters> | undefined) : Promise<PrintUsageByPrinterCollectionResponse | undefined>;
    /**
     * Create new navigation property to dailyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PrintUsageByPrinter>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PrintUsageByPrinter, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrintUsageByPrinter | undefined>;
    /**
     * Retrieve a list of daily print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DailyPrintUsageByPrinterRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to dailyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PrintUsageByPrinter, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of daily print usage summaries, grouped by printer.
 */
export interface DailyPrintUsageByPrinterRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const DailyPrintUsageByPrinterRequestBuilderUriTemplate = "{+baseurl}/reports/dailyPrintUsageByPrinter{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DailyPrintUsageByPrinterRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DailyPrintUsageByPrinterRequestBuilderNavigationMetadata: Record<Exclude<keyof DailyPrintUsageByPrinterRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPrintUsageByPrinterId: {
        requestsMetadata: PrintUsageByPrinterItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["printUsageByPrinter%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DailyPrintUsageByPrinterRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DailyPrintUsageByPrinterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DailyPrintUsageByPrinterRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DailyPrintUsageByPrinterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPrintUsageByPrinterFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrintUsageByPrinter,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
