import {WorkbookFilter} from '../../../../../../../../../../../../models/';
import {createWorkbookFilterFromDiscriminatorValue} from '../../../../../../../../../../../../models/createWorkbookFilterFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {FilterRequestBuilderDeleteRequestConfiguration} from './filterRequestBuilderDeleteRequestConfiguration';
import {FilterRequestBuilderGetRequestConfiguration} from './filterRequestBuilderGetRequestConfiguration';
import {FilterRequestBuilderPatchRequestConfiguration} from './filterRequestBuilderPatchRequestConfiguration';
import {ApplyRequestBuilder} from './microsoftGraphApply/applyRequestBuilder';
import {ApplyBottomItemsFilterRequestBuilder} from './microsoftGraphApplyBottomItemsFilter/applyBottomItemsFilterRequestBuilder';
import {ApplyBottomPercentFilterRequestBuilder} from './microsoftGraphApplyBottomPercentFilter/applyBottomPercentFilterRequestBuilder';
import {ApplyCellColorFilterRequestBuilder} from './microsoftGraphApplyCellColorFilter/applyCellColorFilterRequestBuilder';
import {ApplyCustomFilterRequestBuilder} from './microsoftGraphApplyCustomFilter/applyCustomFilterRequestBuilder';
import {ApplyDynamicFilterRequestBuilder} from './microsoftGraphApplyDynamicFilter/applyDynamicFilterRequestBuilder';
import {ApplyFontColorFilterRequestBuilder} from './microsoftGraphApplyFontColorFilter/applyFontColorFilterRequestBuilder';
import {ApplyIconFilterRequestBuilder} from './microsoftGraphApplyIconFilter/applyIconFilterRequestBuilder';
import {ApplyTopItemsFilterRequestBuilder} from './microsoftGraphApplyTopItemsFilter/applyTopItemsFilterRequestBuilder';
import {ApplyTopPercentFilterRequestBuilder} from './microsoftGraphApplyTopPercentFilter/applyTopPercentFilterRequestBuilder';
import {ApplyValuesFilterRequestBuilder} from './microsoftGraphApplyValuesFilter/applyValuesFilterRequestBuilder';
import {ClearRequestBuilder} from './microsoftGraphClear/clearRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filter property of the microsoft.graph.workbookTableColumn entity.
 */
export class FilterRequestBuilder {
    /** Provides operations to call the apply method. */
    public get microsoftGraphApply(): ApplyRequestBuilder {
        return new ApplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyBottomItemsFilter method. */
    public get microsoftGraphApplyBottomItemsFilter(): ApplyBottomItemsFilterRequestBuilder {
        return new ApplyBottomItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyBottomPercentFilter method. */
    public get microsoftGraphApplyBottomPercentFilter(): ApplyBottomPercentFilterRequestBuilder {
        return new ApplyBottomPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyCellColorFilter method. */
    public get microsoftGraphApplyCellColorFilter(): ApplyCellColorFilterRequestBuilder {
        return new ApplyCellColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyCustomFilter method. */
    public get microsoftGraphApplyCustomFilter(): ApplyCustomFilterRequestBuilder {
        return new ApplyCustomFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyDynamicFilter method. */
    public get microsoftGraphApplyDynamicFilter(): ApplyDynamicFilterRequestBuilder {
        return new ApplyDynamicFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyFontColorFilter method. */
    public get microsoftGraphApplyFontColorFilter(): ApplyFontColorFilterRequestBuilder {
        return new ApplyFontColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyIconFilter method. */
    public get microsoftGraphApplyIconFilter(): ApplyIconFilterRequestBuilder {
        return new ApplyIconFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyTopItemsFilter method. */
    public get microsoftGraphApplyTopItemsFilter(): ApplyTopItemsFilterRequestBuilder {
        return new ApplyTopItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyTopPercentFilter method. */
    public get microsoftGraphApplyTopPercentFilter(): ApplyTopPercentFilterRequestBuilder {
        return new ApplyTopPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyValuesFilter method. */
    public get microsoftGraphApplyValuesFilter(): ApplyValuesFilterRequestBuilder {
        return new ApplyValuesFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clear method. */
    public get microsoftGraphClear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new FilterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property filter for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: FilterRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the filter applied to the column. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFilter
     */
    public get(requestConfiguration?: FilterRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFilter | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookFilter>(requestInfo, createWorkbookFilterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property filter in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFilter
     */
    public patch(body: WorkbookFilter | undefined, requestConfiguration?: FilterRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFilter | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WorkbookFilter>(requestInfo, createWorkbookFilterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPatchRequestInformation(body: WorkbookFilter | undefined, requestConfiguration?: FilterRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
