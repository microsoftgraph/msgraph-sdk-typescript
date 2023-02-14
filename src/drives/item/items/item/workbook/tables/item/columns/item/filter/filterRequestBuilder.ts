import {WorkbookFilter} from '../../../../../../../../../../models/';
import {createWorkbookFilterFromDiscriminatorValue} from '../../../../../../../../../../models/createWorkbookFilterFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {FilterRequestBuilderDeleteRequestConfiguration} from './filterRequestBuilderDeleteRequestConfiguration';
import {FilterRequestBuilderGetRequestConfiguration} from './filterRequestBuilderGetRequestConfiguration';
import {FilterRequestBuilderPatchRequestConfiguration} from './filterRequestBuilderPatchRequestConfiguration';
import {MicrosoftGraphApplyRequestBuilder} from './microsoftGraphApply/microsoftGraphApplyRequestBuilder';
import {MicrosoftGraphApplyBottomItemsFilterRequestBuilder} from './microsoftGraphApplyBottomItemsFilter/microsoftGraphApplyBottomItemsFilterRequestBuilder';
import {MicrosoftGraphApplyBottomPercentFilterRequestBuilder} from './microsoftGraphApplyBottomPercentFilter/microsoftGraphApplyBottomPercentFilterRequestBuilder';
import {MicrosoftGraphApplyCellColorFilterRequestBuilder} from './microsoftGraphApplyCellColorFilter/microsoftGraphApplyCellColorFilterRequestBuilder';
import {MicrosoftGraphApplyCustomFilterRequestBuilder} from './microsoftGraphApplyCustomFilter/microsoftGraphApplyCustomFilterRequestBuilder';
import {MicrosoftGraphApplyDynamicFilterRequestBuilder} from './microsoftGraphApplyDynamicFilter/microsoftGraphApplyDynamicFilterRequestBuilder';
import {MicrosoftGraphApplyFontColorFilterRequestBuilder} from './microsoftGraphApplyFontColorFilter/microsoftGraphApplyFontColorFilterRequestBuilder';
import {MicrosoftGraphApplyIconFilterRequestBuilder} from './microsoftGraphApplyIconFilter/microsoftGraphApplyIconFilterRequestBuilder';
import {MicrosoftGraphApplyTopItemsFilterRequestBuilder} from './microsoftGraphApplyTopItemsFilter/microsoftGraphApplyTopItemsFilterRequestBuilder';
import {MicrosoftGraphApplyTopPercentFilterRequestBuilder} from './microsoftGraphApplyTopPercentFilter/microsoftGraphApplyTopPercentFilterRequestBuilder';
import {MicrosoftGraphApplyValuesFilterRequestBuilder} from './microsoftGraphApplyValuesFilter/microsoftGraphApplyValuesFilterRequestBuilder';
import {MicrosoftGraphClearRequestBuilder} from './microsoftGraphClear/microsoftGraphClearRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filter property of the microsoft.graph.workbookTableColumn entity.
 */
export class FilterRequestBuilder {
    /** Provides operations to call the apply method. */
    public get microsoftGraphApply(): MicrosoftGraphApplyRequestBuilder {
        return new MicrosoftGraphApplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyBottomItemsFilter method. */
    public get microsoftGraphApplyBottomItemsFilter(): MicrosoftGraphApplyBottomItemsFilterRequestBuilder {
        return new MicrosoftGraphApplyBottomItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyBottomPercentFilter method. */
    public get microsoftGraphApplyBottomPercentFilter(): MicrosoftGraphApplyBottomPercentFilterRequestBuilder {
        return new MicrosoftGraphApplyBottomPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyCellColorFilter method. */
    public get microsoftGraphApplyCellColorFilter(): MicrosoftGraphApplyCellColorFilterRequestBuilder {
        return new MicrosoftGraphApplyCellColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyCustomFilter method. */
    public get microsoftGraphApplyCustomFilter(): MicrosoftGraphApplyCustomFilterRequestBuilder {
        return new MicrosoftGraphApplyCustomFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyDynamicFilter method. */
    public get microsoftGraphApplyDynamicFilter(): MicrosoftGraphApplyDynamicFilterRequestBuilder {
        return new MicrosoftGraphApplyDynamicFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyFontColorFilter method. */
    public get microsoftGraphApplyFontColorFilter(): MicrosoftGraphApplyFontColorFilterRequestBuilder {
        return new MicrosoftGraphApplyFontColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyIconFilter method. */
    public get microsoftGraphApplyIconFilter(): MicrosoftGraphApplyIconFilterRequestBuilder {
        return new MicrosoftGraphApplyIconFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyTopItemsFilter method. */
    public get microsoftGraphApplyTopItemsFilter(): MicrosoftGraphApplyTopItemsFilterRequestBuilder {
        return new MicrosoftGraphApplyTopItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyTopPercentFilter method. */
    public get microsoftGraphApplyTopPercentFilter(): MicrosoftGraphApplyTopPercentFilterRequestBuilder {
        return new MicrosoftGraphApplyTopPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyValuesFilter method. */
    public get microsoftGraphApplyValuesFilter(): MicrosoftGraphApplyValuesFilterRequestBuilder {
        return new MicrosoftGraphApplyValuesFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clear method. */
    public get microsoftGraphClear(): MicrosoftGraphClearRequestBuilder {
        return new MicrosoftGraphClearRequestBuilder(this.pathParameters, this.requestAdapter);
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
        this.urlTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter{?%24select,%24expand}";
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
