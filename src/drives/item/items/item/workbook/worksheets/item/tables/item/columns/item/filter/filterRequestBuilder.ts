import { createWorkbookFilterFromDiscriminatorValue } from '../../../../../../../../../../../../models/createWorkbookFilterFromDiscriminatorValue';
import { deserializeIntoWorkbookFilter } from '../../../../../../../../../../../../models/deserializeIntoWorkbookFilter';
import { type ODataError } from '../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookFilter } from '../../../../../../../../../../../../models/serializeWorkbookFilter';
import { type WorkbookFilter } from '../../../../../../../../../../../../models/workbookFilter';
import { ApplyRequestBuilder } from './apply/applyRequestBuilder';
import { ApplyBottomItemsFilterRequestBuilder } from './applyBottomItemsFilter/applyBottomItemsFilterRequestBuilder';
import { ApplyBottomPercentFilterRequestBuilder } from './applyBottomPercentFilter/applyBottomPercentFilterRequestBuilder';
import { ApplyCellColorFilterRequestBuilder } from './applyCellColorFilter/applyCellColorFilterRequestBuilder';
import { ApplyCustomFilterRequestBuilder } from './applyCustomFilter/applyCustomFilterRequestBuilder';
import { ApplyDynamicFilterRequestBuilder } from './applyDynamicFilter/applyDynamicFilterRequestBuilder';
import { ApplyFontColorFilterRequestBuilder } from './applyFontColorFilter/applyFontColorFilterRequestBuilder';
import { ApplyIconFilterRequestBuilder } from './applyIconFilter/applyIconFilterRequestBuilder';
import { ApplyTopItemsFilterRequestBuilder } from './applyTopItemsFilter/applyTopItemsFilterRequestBuilder';
import { ApplyTopPercentFilterRequestBuilder } from './applyTopPercentFilter/applyTopPercentFilterRequestBuilder';
import { ApplyValuesFilterRequestBuilder } from './applyValuesFilter/applyValuesFilterRequestBuilder';
import { ClearRequestBuilder } from './clear/clearRequestBuilder';
import { type FilterRequestBuilderDeleteRequestConfiguration } from './filterRequestBuilderDeleteRequestConfiguration';
import { type FilterRequestBuilderGetRequestConfiguration } from './filterRequestBuilderGetRequestConfiguration';
import { type FilterRequestBuilderPatchRequestConfiguration } from './filterRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filter property of the microsoft.graph.workbookTableColumn entity.
 */
export class FilterRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the apply method.
     */
    public get apply(): ApplyRequestBuilder {
        return new ApplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyBottomItemsFilter method.
     */
    public get applyBottomItemsFilter(): ApplyBottomItemsFilterRequestBuilder {
        return new ApplyBottomItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyBottomPercentFilter method.
     */
    public get applyBottomPercentFilter(): ApplyBottomPercentFilterRequestBuilder {
        return new ApplyBottomPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyCellColorFilter method.
     */
    public get applyCellColorFilter(): ApplyCellColorFilterRequestBuilder {
        return new ApplyCellColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyCustomFilter method.
     */
    public get applyCustomFilter(): ApplyCustomFilterRequestBuilder {
        return new ApplyCustomFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyDynamicFilter method.
     */
    public get applyDynamicFilter(): ApplyDynamicFilterRequestBuilder {
        return new ApplyDynamicFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyFontColorFilter method.
     */
    public get applyFontColorFilter(): ApplyFontColorFilterRequestBuilder {
        return new ApplyFontColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyIconFilter method.
     */
    public get applyIconFilter(): ApplyIconFilterRequestBuilder {
        return new ApplyIconFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyTopItemsFilter method.
     */
    public get applyTopItemsFilter(): ApplyTopItemsFilterRequestBuilder {
        return new ApplyTopItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyTopPercentFilter method.
     */
    public get applyTopPercentFilter(): ApplyTopPercentFilterRequestBuilder {
        return new ApplyTopPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyValuesFilter method.
     */
    public get applyValuesFilter(): ApplyValuesFilterRequestBuilder {
        return new ApplyValuesFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the clear method.
     */
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FilterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter{?%24select,%24expand}");
    };
    /**
     * Delete navigation property filter for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: FilterRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the filter applied to the column. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFilter
     */
    public get(requestConfiguration?: FilterRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookFilter | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFilter>(requestInfo, createWorkbookFilterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property filter in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFilter
     */
    public patch(body: WorkbookFilter, requestConfiguration?: FilterRequestBuilderPatchRequestConfiguration | undefined) : Promise<WorkbookFilter | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFilter>(requestInfo, createWorkbookFilterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property filter for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: FilterRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the filter applied to the column. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FilterRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property filter in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WorkbookFilter, requestConfiguration?: FilterRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkbookFilter);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a filterRequestBuilder
     */
    public withUrl(rawUrl: string) : FilterRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FilterRequestBuilder(rawUrl, this.requestAdapter);
    };
}
