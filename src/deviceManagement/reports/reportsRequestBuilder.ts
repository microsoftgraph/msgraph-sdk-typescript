import {DeviceManagementReports} from '../../models/';
import {createDeviceManagementReportsFromDiscriminatorValue} from '../../models/createDeviceManagementReportsFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ExportJobsRequestBuilder} from './exportJobs/exportJobsRequestBuilder';
import {DeviceManagementExportJobItemRequestBuilder} from './exportJobs/item/deviceManagementExportJobItemRequestBuilder';
import {GetCachedReportRequestBuilder} from './microsoftGraphGetCachedReport/getCachedReportRequestBuilder';
import {GetCompliancePolicyNonComplianceReportRequestBuilder} from './microsoftGraphGetCompliancePolicyNonComplianceReport/getCompliancePolicyNonComplianceReportRequestBuilder';
import {GetCompliancePolicyNonComplianceSummaryReportRequestBuilder} from './microsoftGraphGetCompliancePolicyNonComplianceSummaryReport/getCompliancePolicyNonComplianceSummaryReportRequestBuilder';
import {GetComplianceSettingNonComplianceReportRequestBuilder} from './microsoftGraphGetComplianceSettingNonComplianceReport/getComplianceSettingNonComplianceReportRequestBuilder';
import {GetConfigurationPolicyNonComplianceReportRequestBuilder} from './microsoftGraphGetConfigurationPolicyNonComplianceReport/getConfigurationPolicyNonComplianceReportRequestBuilder';
import {GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder} from './microsoftGraphGetConfigurationPolicyNonComplianceSummaryReport/getConfigurationPolicyNonComplianceSummaryReportRequestBuilder';
import {GetConfigurationSettingNonComplianceReportRequestBuilder} from './microsoftGraphGetConfigurationSettingNonComplianceReport/getConfigurationSettingNonComplianceReportRequestBuilder';
import {GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder} from './microsoftGraphGetDeviceManagementIntentPerSettingContributingProfiles/getDeviceManagementIntentPerSettingContributingProfilesRequestBuilder';
import {GetDeviceManagementIntentSettingsReportRequestBuilder} from './microsoftGraphGetDeviceManagementIntentSettingsReport/getDeviceManagementIntentSettingsReportRequestBuilder';
import {GetDeviceNonComplianceReportRequestBuilder} from './microsoftGraphGetDeviceNonComplianceReport/getDeviceNonComplianceReportRequestBuilder';
import {GetDevicesWithoutCompliancePolicyReportRequestBuilder} from './microsoftGraphGetDevicesWithoutCompliancePolicyReport/getDevicesWithoutCompliancePolicyReportRequestBuilder';
import {GetHistoricalReportRequestBuilder} from './microsoftGraphGetHistoricalReport/getHistoricalReportRequestBuilder';
import {GetNoncompliantDevicesAndSettingsReportRequestBuilder} from './microsoftGraphGetNoncompliantDevicesAndSettingsReport/getNoncompliantDevicesAndSettingsReportRequestBuilder';
import {GetPolicyNonComplianceMetadataRequestBuilder} from './microsoftGraphGetPolicyNonComplianceMetadata/getPolicyNonComplianceMetadataRequestBuilder';
import {GetPolicyNonComplianceReportRequestBuilder} from './microsoftGraphGetPolicyNonComplianceReport/getPolicyNonComplianceReportRequestBuilder';
import {GetPolicyNonComplianceSummaryReportRequestBuilder} from './microsoftGraphGetPolicyNonComplianceSummaryReport/getPolicyNonComplianceSummaryReportRequestBuilder';
import {GetReportFiltersRequestBuilder} from './microsoftGraphGetReportFilters/getReportFiltersRequestBuilder';
import {GetSettingNonComplianceReportRequestBuilder} from './microsoftGraphGetSettingNonComplianceReport/getSettingNonComplianceReportRequestBuilder';
import {ReportsRequestBuilderDeleteRequestConfiguration} from './reportsRequestBuilderDeleteRequestConfiguration';
import {ReportsRequestBuilderGetRequestConfiguration} from './reportsRequestBuilderGetRequestConfiguration';
import {ReportsRequestBuilderPatchRequestConfiguration} from './reportsRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reports property of the microsoft.graph.deviceManagement entity.
 */
export class ReportsRequestBuilder {
    /** Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity. */
    public get exportJobs(): ExportJobsRequestBuilder {
        return new ExportJobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getCachedReport method. */
    public get microsoftGraphGetCachedReport(): GetCachedReportRequestBuilder {
        return new GetCachedReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getCompliancePolicyNonComplianceReport method. */
    public get microsoftGraphGetCompliancePolicyNonComplianceReport(): GetCompliancePolicyNonComplianceReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getCompliancePolicyNonComplianceSummaryReport method. */
    public get microsoftGraphGetCompliancePolicyNonComplianceSummaryReport(): GetCompliancePolicyNonComplianceSummaryReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getComplianceSettingNonComplianceReport method. */
    public get microsoftGraphGetComplianceSettingNonComplianceReport(): GetComplianceSettingNonComplianceReportRequestBuilder {
        return new GetComplianceSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getConfigurationPolicyNonComplianceReport method. */
    public get microsoftGraphGetConfigurationPolicyNonComplianceReport(): GetConfigurationPolicyNonComplianceReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getConfigurationPolicyNonComplianceSummaryReport method. */
    public get microsoftGraphGetConfigurationPolicyNonComplianceSummaryReport(): GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getConfigurationSettingNonComplianceReport method. */
    public get microsoftGraphGetConfigurationSettingNonComplianceReport(): GetConfigurationSettingNonComplianceReportRequestBuilder {
        return new GetConfigurationSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getDeviceManagementIntentPerSettingContributingProfiles method. */
    public get microsoftGraphGetDeviceManagementIntentPerSettingContributingProfiles(): GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder {
        return new GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getDeviceManagementIntentSettingsReport method. */
    public get microsoftGraphGetDeviceManagementIntentSettingsReport(): GetDeviceManagementIntentSettingsReportRequestBuilder {
        return new GetDeviceManagementIntentSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getDeviceNonComplianceReport method. */
    public get microsoftGraphGetDeviceNonComplianceReport(): GetDeviceNonComplianceReportRequestBuilder {
        return new GetDeviceNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getDevicesWithoutCompliancePolicyReport method. */
    public get microsoftGraphGetDevicesWithoutCompliancePolicyReport(): GetDevicesWithoutCompliancePolicyReportRequestBuilder {
        return new GetDevicesWithoutCompliancePolicyReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getHistoricalReport method. */
    public get microsoftGraphGetHistoricalReport(): GetHistoricalReportRequestBuilder {
        return new GetHistoricalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getNoncompliantDevicesAndSettingsReport method. */
    public get microsoftGraphGetNoncompliantDevicesAndSettingsReport(): GetNoncompliantDevicesAndSettingsReportRequestBuilder {
        return new GetNoncompliantDevicesAndSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getPolicyNonComplianceMetadata method. */
    public get microsoftGraphGetPolicyNonComplianceMetadata(): GetPolicyNonComplianceMetadataRequestBuilder {
        return new GetPolicyNonComplianceMetadataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getPolicyNonComplianceReport method. */
    public get microsoftGraphGetPolicyNonComplianceReport(): GetPolicyNonComplianceReportRequestBuilder {
        return new GetPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getPolicyNonComplianceSummaryReport method. */
    public get microsoftGraphGetPolicyNonComplianceSummaryReport(): GetPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getReportFilters method. */
    public get microsoftGraphGetReportFilters(): GetReportFiltersRequestBuilder {
        return new GetReportFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getSettingNonComplianceReport method. */
    public get microsoftGraphGetSettingNonComplianceReport(): GetSettingNonComplianceReportRequestBuilder {
        return new GetSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ReportsRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity.
     * @param id Unique identifier of the item
     * @returns a DeviceManagementExportJobItemRequestBuilder
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
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagementReports>(requestInfo, createDeviceManagementReportsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property reports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementReports
     */
    public patch(body: DeviceManagementReports | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementReports | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceManagementReports>(requestInfo, createDeviceManagementReportsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property reports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ReportsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property reports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagementReports | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
