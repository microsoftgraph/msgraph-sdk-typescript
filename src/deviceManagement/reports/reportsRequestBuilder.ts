import {createDeviceManagementReportsFromDiscriminatorValue} from '../../models/createDeviceManagementReportsFromDiscriminatorValue';
import {deserializeIntoDeviceManagementReports} from '../../models/deserializeIntoDeviceManagementReports';
import {DeviceManagementReports} from '../../models/deviceManagementReports';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceManagementReports} from '../../models/serializeDeviceManagementReports';
import {ExportJobsRequestBuilder} from './exportJobs/exportJobsRequestBuilder';
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
import {GetDevicesWithoutCompliancePolicyReportRequestBuilder} from './getDevicesWithoutCompliancePolicyReport/getDevicesWithoutCompliancePolicyReportRequestBuilder';
import {GetHistoricalReportRequestBuilder} from './getHistoricalReport/getHistoricalReportRequestBuilder';
import {GetNoncompliantDevicesAndSettingsReportRequestBuilder} from './getNoncompliantDevicesAndSettingsReport/getNoncompliantDevicesAndSettingsReportRequestBuilder';
import {GetPolicyNonComplianceMetadataRequestBuilder} from './getPolicyNonComplianceMetadata/getPolicyNonComplianceMetadataRequestBuilder';
import {GetPolicyNonComplianceReportRequestBuilder} from './getPolicyNonComplianceReport/getPolicyNonComplianceReportRequestBuilder';
import {GetPolicyNonComplianceSummaryReportRequestBuilder} from './getPolicyNonComplianceSummaryReport/getPolicyNonComplianceSummaryReportRequestBuilder';
import {GetReportFiltersRequestBuilder} from './getReportFilters/getReportFiltersRequestBuilder';
import {GetSettingNonComplianceReportRequestBuilder} from './getSettingNonComplianceReport/getSettingNonComplianceReportRequestBuilder';
import {ReportsRequestBuilderDeleteRequestConfiguration} from './reportsRequestBuilderDeleteRequestConfiguration';
import {ReportsRequestBuilderGetRequestConfiguration} from './reportsRequestBuilderGetRequestConfiguration';
import {ReportsRequestBuilderPatchRequestConfiguration} from './reportsRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reports property of the microsoft.graph.deviceManagement entity.
 */
export class ReportsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity.
     */
    public get exportJobs(): ExportJobsRequestBuilder {
        return new ExportJobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getCachedReport method.
     */
    public get getCachedReport(): GetCachedReportRequestBuilder {
        return new GetCachedReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getCompliancePolicyNonComplianceReport method.
     */
    public get getCompliancePolicyNonComplianceReport(): GetCompliancePolicyNonComplianceReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getCompliancePolicyNonComplianceSummaryReport method.
     */
    public get getCompliancePolicyNonComplianceSummaryReport(): GetCompliancePolicyNonComplianceSummaryReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getComplianceSettingNonComplianceReport method.
     */
    public get getComplianceSettingNonComplianceReport(): GetComplianceSettingNonComplianceReportRequestBuilder {
        return new GetComplianceSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getConfigurationPolicyNonComplianceReport method.
     */
    public get getConfigurationPolicyNonComplianceReport(): GetConfigurationPolicyNonComplianceReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getConfigurationPolicyNonComplianceSummaryReport method.
     */
    public get getConfigurationPolicyNonComplianceSummaryReport(): GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getConfigurationSettingNonComplianceReport method.
     */
    public get getConfigurationSettingNonComplianceReport(): GetConfigurationSettingNonComplianceReportRequestBuilder {
        return new GetConfigurationSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getDeviceManagementIntentPerSettingContributingProfiles method.
     */
    public get getDeviceManagementIntentPerSettingContributingProfiles(): GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder {
        return new GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getDeviceManagementIntentSettingsReport method.
     */
    public get getDeviceManagementIntentSettingsReport(): GetDeviceManagementIntentSettingsReportRequestBuilder {
        return new GetDeviceManagementIntentSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getDeviceNonComplianceReport method.
     */
    public get getDeviceNonComplianceReport(): GetDeviceNonComplianceReportRequestBuilder {
        return new GetDeviceNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getDevicesWithoutCompliancePolicyReport method.
     */
    public get getDevicesWithoutCompliancePolicyReport(): GetDevicesWithoutCompliancePolicyReportRequestBuilder {
        return new GetDevicesWithoutCompliancePolicyReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getHistoricalReport method.
     */
    public get getHistoricalReport(): GetHistoricalReportRequestBuilder {
        return new GetHistoricalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getNoncompliantDevicesAndSettingsReport method.
     */
    public get getNoncompliantDevicesAndSettingsReport(): GetNoncompliantDevicesAndSettingsReportRequestBuilder {
        return new GetNoncompliantDevicesAndSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getPolicyNonComplianceMetadata method.
     */
    public get getPolicyNonComplianceMetadata(): GetPolicyNonComplianceMetadataRequestBuilder {
        return new GetPolicyNonComplianceMetadataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getPolicyNonComplianceReport method.
     */
    public get getPolicyNonComplianceReport(): GetPolicyNonComplianceReportRequestBuilder {
        return new GetPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getPolicyNonComplianceSummaryReport method.
     */
    public get getPolicyNonComplianceSummaryReport(): GetPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getReportFilters method.
     */
    public get getReportFilters(): GetReportFiltersRequestBuilder {
        return new GetReportFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getSettingNonComplianceReport method.
     */
    public get getSettingNonComplianceReport(): GetSettingNonComplianceReportRequestBuilder {
        return new GetSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports{?%24select,%24expand}");
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
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read properties and relationships of the deviceManagementReports object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementReports
     * @see {@link https://docs.microsoft.com/graph/api/intune-reporting-devicemanagementreports-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementReports | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceManagementReports>(requestInfo, createDeviceManagementReportsFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of a deviceManagementReports object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementReports
     * @see {@link https://docs.microsoft.com/graph/api/intune-reporting-devicemanagementreports-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceManagementReports | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementReports | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
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
     * Read properties and relationships of the deviceManagementReports object.
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
     * Update the properties of a deviceManagementReports object.
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementReports);
        return requestInfo;
    };
}
