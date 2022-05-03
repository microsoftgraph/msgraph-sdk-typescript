import {DeviceManagementReports} from '../../models/';
import {createDeviceManagementReportsFromDiscriminatorValue} from '../../models/createDeviceManagementReportsFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ExportJobsRequestBuilder} from './exportJobs/exportJobsRequestBuilder';
import {DeviceManagementExportJobItemRequestBuilder} from './exportJobs/item/deviceManagementExportJobItemRequestBuilder';
import {GetCachedReportRequestBuilder} from './getCachedReport/getCachedReportRequestBuilder';
import {GetCompliancePolicyNonComplianceReportRequestBuilder} from './getCompliancePolicyNonComplianceReport/getCompliancePolicyNonComplianceReportRequestBuilder';
import {GetCompliancePolicyNonComplianceSummaryReportRequestBuilder} from './getCompliancePolicyNonComplianceSummaryReport/getCompliancePolicyNonComplianceSummaryReportRequestBuilder';
import {GetComplianceSettingNonComplianceReportRequestBuilder} from './getComplianceSettingNonComplianceReport/getComplianceSettingNonComplianceReportRequestBuilder';
import {GetConfigurationPolicyNonComplianceReportRequestBuilder} from './getConfigurationPolicyNonComplianceReport/getConfigurationPolicyNonComplianceReportRequestBuilder';
import {GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder} from './getConfigurationPolicyNonComplianceSummaryReport/getConfigurationPolicyNonComplianceSummaryReportRequestBuilder';
import {GetConfigurationSettingNonComplianceReportRequestBuilder} from './getConfigurationSettingNonComplianceReport/getConfigurationSettingNonComplianceReportRequestBuilder';
import {GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder} from './getDeviceManagementIntentPerSettingContributingProfiles/getDeviceManagementIntentPerSettingContributingProfilesRequestBuilder';
import {GetDeviceManagementIntentSettingsReportRequestBuilder} from './getDeviceManagementIntentSettingsReport/getDeviceManagementIntentSettingsReportRequestBuilder';
import {GetDeviceNonComplianceReportRequestBuilder} from './getDeviceNonComplianceReport/getDeviceNonComplianceReportRequestBuilder';
import {GetHistoricalReportRequestBuilder} from './getHistoricalReport/getHistoricalReportRequestBuilder';
import {GetPolicyNonComplianceMetadataRequestBuilder} from './getPolicyNonComplianceMetadata/getPolicyNonComplianceMetadataRequestBuilder';
import {GetPolicyNonComplianceReportRequestBuilder} from './getPolicyNonComplianceReport/getPolicyNonComplianceReportRequestBuilder';
import {GetPolicyNonComplianceSummaryReportRequestBuilder} from './getPolicyNonComplianceSummaryReport/getPolicyNonComplianceSummaryReportRequestBuilder';
import {GetReportFiltersRequestBuilder} from './getReportFilters/getReportFiltersRequestBuilder';
import {GetSettingNonComplianceReportRequestBuilder} from './getSettingNonComplianceReport/getSettingNonComplianceReportRequestBuilder';
import {ReportsRequestBuilderDeleteRequestConfiguration} from './reportsRequestBuilderDeleteRequestConfiguration';
import {ReportsRequestBuilderGetRequestConfiguration} from './reportsRequestBuilderGetRequestConfiguration';
import {ReportsRequestBuilderPatchRequestConfiguration} from './reportsRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the reports property of the microsoft.graph.deviceManagement entity.  */
export class ReportsRequestBuilder {
    /** The exportJobs property  */
    public get exportJobs(): ExportJobsRequestBuilder {
        return new ExportJobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getCachedReport property  */
    public get getCachedReport(): GetCachedReportRequestBuilder {
        return new GetCachedReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getCompliancePolicyNonComplianceReport property  */
    public get getCompliancePolicyNonComplianceReport(): GetCompliancePolicyNonComplianceReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getCompliancePolicyNonComplianceSummaryReport property  */
    public get getCompliancePolicyNonComplianceSummaryReport(): GetCompliancePolicyNonComplianceSummaryReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getComplianceSettingNonComplianceReport property  */
    public get getComplianceSettingNonComplianceReport(): GetComplianceSettingNonComplianceReportRequestBuilder {
        return new GetComplianceSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getConfigurationPolicyNonComplianceReport property  */
    public get getConfigurationPolicyNonComplianceReport(): GetConfigurationPolicyNonComplianceReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getConfigurationPolicyNonComplianceSummaryReport property  */
    public get getConfigurationPolicyNonComplianceSummaryReport(): GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getConfigurationSettingNonComplianceReport property  */
    public get getConfigurationSettingNonComplianceReport(): GetConfigurationSettingNonComplianceReportRequestBuilder {
        return new GetConfigurationSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getDeviceManagementIntentPerSettingContributingProfiles property  */
    public get getDeviceManagementIntentPerSettingContributingProfiles(): GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder {
        return new GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getDeviceManagementIntentSettingsReport property  */
    public get getDeviceManagementIntentSettingsReport(): GetDeviceManagementIntentSettingsReportRequestBuilder {
        return new GetDeviceManagementIntentSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getDeviceNonComplianceReport property  */
    public get getDeviceNonComplianceReport(): GetDeviceNonComplianceReportRequestBuilder {
        return new GetDeviceNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getHistoricalReport property  */
    public get getHistoricalReport(): GetHistoricalReportRequestBuilder {
        return new GetHistoricalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getPolicyNonComplianceMetadata property  */
    public get getPolicyNonComplianceMetadata(): GetPolicyNonComplianceMetadataRequestBuilder {
        return new GetPolicyNonComplianceMetadataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getPolicyNonComplianceReport property  */
    public get getPolicyNonComplianceReport(): GetPolicyNonComplianceReportRequestBuilder {
        return new GetPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getPolicyNonComplianceSummaryReport property  */
    public get getPolicyNonComplianceSummaryReport(): GetPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getReportFilters property  */
    public get getReportFilters(): GetReportFiltersRequestBuilder {
        return new GetReportFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getSettingNonComplianceReport property  */
    public get getSettingNonComplianceReport(): GetSettingNonComplianceReportRequestBuilder {
        return new GetSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/reports{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property reports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ReportsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Reports singleton
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property reports in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceManagementReports | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property reports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ReportsRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.reports.exportJobs.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementExportJobItemRequestBuilder
     */
    public exportJobsById(id: string) : DeviceManagementExportJobItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExportJob%2Did"] = id
        return new DeviceManagementExportJobItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Reports singleton
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementReports
     */
    public get(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementReports | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagementReports>(requestInfo, createDeviceManagementReportsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property reports in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceManagementReports | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
