import {createWorkbookChartAxisFromDiscriminatorValue} from '../../../../../../../../../../../models/createWorkbookChartAxisFromDiscriminatorValue';
import {deserializeIntoWorkbookChartAxis} from '../../../../../../../../../../../models/deserializeIntoWorkbookChartAxis';
import {ODataError} from '../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookChartAxis} from '../../../../../../../../../../../models/serializeWorkbookChartAxis';
import {WorkbookChartAxis} from '../../../../../../../../../../../models/workbookChartAxis';
import {CategoryAxisRequestBuilderDeleteRequestConfiguration} from './categoryAxisRequestBuilderDeleteRequestConfiguration';
import {CategoryAxisRequestBuilderGetRequestConfiguration} from './categoryAxisRequestBuilderGetRequestConfiguration';
import {CategoryAxisRequestBuilderPatchRequestConfiguration} from './categoryAxisRequestBuilderPatchRequestConfiguration';
import {FormatRequestBuilder} from './format/formatRequestBuilder';
import {MajorGridlinesRequestBuilder} from './majorGridlines/majorGridlinesRequestBuilder';
import {MinorGridlinesRequestBuilder} from './minorGridlines/minorGridlinesRequestBuilder';
import {TitleRequestBuilder} from './title/titleRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the categoryAxis property of the microsoft.graph.workbookChartAxes entity.
 */
export class CategoryAxisRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartAxis entity.
     */
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the majorGridlines property of the microsoft.graph.workbookChartAxis entity.
     */
    public get majorGridlines(): MajorGridlinesRequestBuilder {
        return new MajorGridlinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the minorGridlines property of the microsoft.graph.workbookChartAxis entity.
     */
    public get minorGridlines(): MinorGridlinesRequestBuilder {
        return new MinorGridlinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the title property of the microsoft.graph.workbookChartAxis entity.
     */
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CategoryAxisRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/categoryAxis{?%24select,%24expand}");
    };
    /**
     * Delete navigation property categoryAxis for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CategoryAxisRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Represents the category axis in a chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxis
     */
    public get(requestConfiguration?: CategoryAxisRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChartAxis | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxis>(requestInfo, createWorkbookChartAxisFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property categoryAxis in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChartAxis
     */
    public patch(body: WorkbookChartAxis | undefined, requestConfiguration?: CategoryAxisRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookChartAxis | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChartAxis>(requestInfo, createWorkbookChartAxisFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property categoryAxis for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CategoryAxisRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents the category axis in a chart. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CategoryAxisRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property categoryAxis in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookChartAxis | undefined, requestConfiguration?: CategoryAxisRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkbookChartAxis);
        return requestInfo;
    };
}
