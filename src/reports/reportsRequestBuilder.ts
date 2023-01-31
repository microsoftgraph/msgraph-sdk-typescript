import {ReportRoot} from '../models/';
import {createReportRootFromDiscriminatorValue} from '../models/createReportRootFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DailyPrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByPrinterItemRequestBuilder as I040d432bf097a5c3e088b5b286dc35b17b6fde7ba1189da8ab6b5cbe1c14edd4} from './dailyPrintUsageByPrinter/item/printUsageByPrinterItemRequestBuilder';
import {DailyPrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import {PrintUsageByUserItemRequestBuilder as I0a6ffb5ab17952fcc5b605654a921e4b7048a059232acf91ceb8af666ce0f236} from './dailyPrintUsageByUser/item/printUsageByUserItemRequestBuilder';
import {DeviceConfigurationDeviceActivityRequestBuilder} from './microsoftGraphDeviceConfigurationDeviceActivity/deviceConfigurationDeviceActivityRequestBuilder';
import {DeviceConfigurationUserActivityRequestBuilder} from './microsoftGraphDeviceConfigurationUserActivity/deviceConfigurationUserActivityRequestBuilder';
import {GetEmailActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityCountsWithPeriod/getEmailActivityCountsWithPeriodRequestBuilder';
import {GetEmailActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityUserCountsWithPeriod/getEmailActivityUserCountsWithPeriodRequestBuilder';
import {GetEmailActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetEmailActivityUserDetailWithDate/getEmailActivityUserDetailWithDateRequestBuilder';
import {GetEmailActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityUserDetailWithPeriod/getEmailActivityUserDetailWithPeriodRequestBuilder';
import {GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriod/getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder';
import {GetEmailAppUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageUserCountsWithPeriod/getEmailAppUsageUserCountsWithPeriodRequestBuilder';
import {GetEmailAppUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetEmailAppUsageUserDetailWithDate/getEmailAppUsageUserDetailWithDateRequestBuilder';
import {GetEmailAppUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageUserDetailWithPeriod/getEmailAppUsageUserDetailWithPeriodRequestBuilder';
import {GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriod/getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime/getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetM365AppPlatformUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetM365AppPlatformUserCountsWithPeriod/getM365AppPlatformUserCountsWithPeriodRequestBuilder';
import {GetM365AppUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetM365AppUserCountsWithPeriod/getM365AppUserCountsWithPeriodRequestBuilder';
import {GetM365AppUserDetailWithDateRequestBuilder} from './microsoftGraphGetM365AppUserDetailWithDate/getM365AppUserDetailWithDateRequestBuilder';
import {GetM365AppUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetM365AppUserDetailWithPeriod/getM365AppUserDetailWithPeriodRequestBuilder';
import {GetMailboxUsageDetailWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageDetailWithPeriod/getMailboxUsageDetailWithPeriodRequestBuilder';
import {GetMailboxUsageMailboxCountsWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageMailboxCountsWithPeriod/getMailboxUsageMailboxCountsWithPeriodRequestBuilder';
import {GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriod/getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder';
import {GetMailboxUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageStorageWithPeriod/getMailboxUsageStorageWithPeriodRequestBuilder';
import {GetOffice365ActivationCountsRequestBuilder} from './microsoftGraphGetOffice365ActivationCounts/getOffice365ActivationCountsRequestBuilder';
import {GetOffice365ActivationsUserCountsRequestBuilder} from './microsoftGraphGetOffice365ActivationsUserCounts/getOffice365ActivationsUserCountsRequestBuilder';
import {GetOffice365ActivationsUserDetailRequestBuilder} from './microsoftGraphGetOffice365ActivationsUserDetail/getOffice365ActivationsUserDetailRequestBuilder';
import {GetOffice365ActiveUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ActiveUserCountsWithPeriod/getOffice365ActiveUserCountsWithPeriodRequestBuilder';
import {GetOffice365ActiveUserDetailWithDateRequestBuilder} from './microsoftGraphGetOffice365ActiveUserDetailWithDate/getOffice365ActiveUserDetailWithDateRequestBuilder';
import {GetOffice365ActiveUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ActiveUserDetailWithPeriod/getOffice365ActiveUserDetailWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityCountsWithPeriod/getOffice365GroupsActivityCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityDetailWithDateRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityDetailWithDate/getOffice365GroupsActivityDetailWithDateRequestBuilder';
import {GetOffice365GroupsActivityDetailWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityDetailWithPeriod/getOffice365GroupsActivityDetailWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriod/getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriod/getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityStorageWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityStorageWithPeriod/getOffice365GroupsActivityStorageWithPeriodRequestBuilder';
import {GetOffice365ServicesUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ServicesUserCountsWithPeriod/getOffice365ServicesUserCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityFileCountsWithPeriod/getOneDriveActivityFileCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityUserCountsWithPeriod/getOneDriveActivityUserCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetOneDriveActivityUserDetailWithDate/getOneDriveActivityUserDetailWithDateRequestBuilder';
import {GetOneDriveActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityUserDetailWithPeriod/getOneDriveActivityUserDetailWithPeriodRequestBuilder';
import {GetOneDriveUsageAccountCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountCountsWithPeriod/getOneDriveUsageAccountCountsWithPeriodRequestBuilder';
import {GetOneDriveUsageAccountDetailWithDateRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountDetailWithDate/getOneDriveUsageAccountDetailWithDateRequestBuilder';
import {GetOneDriveUsageAccountDetailWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountDetailWithPeriod/getOneDriveUsageAccountDetailWithPeriodRequestBuilder';
import {GetOneDriveUsageFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageFileCountsWithPeriod/getOneDriveUsageFileCountsWithPeriodRequestBuilder';
import {GetOneDriveUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageStorageWithPeriod/getOneDriveUsageStorageWithPeriodRequestBuilder';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime/getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetSharePointActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityFileCountsWithPeriod/getSharePointActivityFileCountsWithPeriodRequestBuilder';
import {GetSharePointActivityPagesWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityPagesWithPeriod/getSharePointActivityPagesWithPeriodRequestBuilder';
import {GetSharePointActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityUserCountsWithPeriod/getSharePointActivityUserCountsWithPeriodRequestBuilder';
import {GetSharePointActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetSharePointActivityUserDetailWithDate/getSharePointActivityUserDetailWithDateRequestBuilder';
import {GetSharePointActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityUserDetailWithPeriod/getSharePointActivityUserDetailWithPeriodRequestBuilder';
import {GetSharePointSiteUsageDetailWithDateRequestBuilder} from './microsoftGraphGetSharePointSiteUsageDetailWithDate/getSharePointSiteUsageDetailWithDateRequestBuilder';
import {GetSharePointSiteUsageDetailWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageDetailWithPeriod/getSharePointSiteUsageDetailWithPeriodRequestBuilder';
import {GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageFileCountsWithPeriod/getSharePointSiteUsageFileCountsWithPeriodRequestBuilder';
import {GetSharePointSiteUsagePagesWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsagePagesWithPeriod/getSharePointSiteUsagePagesWithPeriodRequestBuilder';
import {GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriod/getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder';
import {GetSharePointSiteUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageStorageWithPeriod/getSharePointSiteUsageStorageWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityCountsWithPeriod/getSkypeForBusinessActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriod/getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserDetailWithDate/getSkypeForBusinessActivityUserDetailWithDateRequestBuilder';
import {GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriod/getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod/getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriod/getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDate/getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriod/getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriod/getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod/getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriod/getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriod/getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriod/getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriod/getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriod/getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriod/getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserDetailWithDate/getTeamsDeviceUsageUserDetailWithDateRequestBuilder';
import {GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriod/getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetTeamsUserActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityCountsWithPeriod/getTeamsUserActivityCountsWithPeriodRequestBuilder';
import {GetTeamsUserActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserCountsWithPeriod/getTeamsUserActivityUserCountsWithPeriodRequestBuilder';
import {GetTeamsUserActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserDetailWithDate/getTeamsUserActivityUserDetailWithDateRequestBuilder';
import {GetTeamsUserActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserDetailWithPeriod/getTeamsUserActivityUserDetailWithPeriodRequestBuilder';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime/getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetYammerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityCountsWithPeriod/getYammerActivityCountsWithPeriodRequestBuilder';
import {GetYammerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityUserCountsWithPeriod/getYammerActivityUserCountsWithPeriodRequestBuilder';
import {GetYammerActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetYammerActivityUserDetailWithDate/getYammerActivityUserDetailWithDateRequestBuilder';
import {GetYammerActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityUserDetailWithPeriod/getYammerActivityUserDetailWithPeriodRequestBuilder';
import {GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriod/getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserCountsWithPeriod/getYammerDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetYammerDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserDetailWithDate/getYammerDeviceUsageUserDetailWithDateRequestBuilder';
import {GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserDetailWithPeriod/getYammerDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetYammerGroupsActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityCountsWithPeriod/getYammerGroupsActivityCountsWithPeriodRequestBuilder';
import {GetYammerGroupsActivityDetailWithDateRequestBuilder} from './microsoftGraphGetYammerGroupsActivityDetailWithDate/getYammerGroupsActivityDetailWithDateRequestBuilder';
import {GetYammerGroupsActivityDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityDetailWithPeriod/getYammerGroupsActivityDetailWithPeriodRequestBuilder';
import {GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriod/getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder';
import {ManagedDeviceEnrollmentFailureDetailsRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentFailureDetails/managedDeviceEnrollmentFailureDetailsRequestBuilder';
import {ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken/managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder';
import {ManagedDeviceEnrollmentTopFailuresRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentTopFailures/managedDeviceEnrollmentTopFailuresRequestBuilder';
import {ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriod/managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder';
import {PrintUsageByPrinterItemRequestBuilder as I464ef823ccbb3cda573d85f5b690bdfbadd75533d381eee43a717ec4bcf9e9da} from './monthlyPrintUsageByPrinter/item/printUsageByPrinterItemRequestBuilder';
import {MonthlyPrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByUserItemRequestBuilder as Ib890b4082f7b0793dcec266773608fab2228163761130f66570881247e35699c} from './monthlyPrintUsageByUser/item/printUsageByUserItemRequestBuilder';
import {MonthlyPrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder';
import {ReportsRequestBuilderGetRequestConfiguration} from './reportsRequestBuilderGetRequestConfiguration';
import {ReportsRequestBuilderPatchRequestConfiguration} from './reportsRequestBuilderPatchRequestConfiguration';
import {SecurityRequestBuilder} from './security/securityRequestBuilder';
import {DateOnly, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reportRoot singleton.
 */
export class ReportsRequestBuilder {
    /** Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity. */
    public get dailyPrintUsageByPrinter(): DailyPrintUsageByPrinterRequestBuilder {
        return new DailyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the dailyPrintUsageByUser property of the microsoft.graph.reportRoot entity. */
    public get dailyPrintUsageByUser(): DailyPrintUsageByUserRequestBuilder {
        return new DailyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deviceConfigurationDeviceActivity method. */
    public get microsoftGraphDeviceConfigurationDeviceActivity(): DeviceConfigurationDeviceActivityRequestBuilder {
        return new DeviceConfigurationDeviceActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deviceConfigurationUserActivity method. */
    public get microsoftGraphDeviceConfigurationUserActivity(): DeviceConfigurationUserActivityRequestBuilder {
        return new DeviceConfigurationUserActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationCounts method. */
    public get microsoftGraphGetOffice365ActivationCounts(): GetOffice365ActivationCountsRequestBuilder {
        return new GetOffice365ActivationCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationsUserCounts method. */
    public get microsoftGraphGetOffice365ActivationsUserCounts(): GetOffice365ActivationsUserCountsRequestBuilder {
        return new GetOffice365ActivationsUserCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationsUserDetail method. */
    public get microsoftGraphGetOffice365ActivationsUserDetail(): GetOffice365ActivationsUserDetailRequestBuilder {
        return new GetOffice365ActivationsUserDetailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the managedDeviceEnrollmentFailureDetails method. */
    public get microsoftGraphManagedDeviceEnrollmentFailureDetails(): ManagedDeviceEnrollmentFailureDetailsRequestBuilder {
        return new ManagedDeviceEnrollmentFailureDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the managedDeviceEnrollmentTopFailures method. */
    public get microsoftGraphManagedDeviceEnrollmentTopFailures(): ManagedDeviceEnrollmentTopFailuresRequestBuilder {
        return new ManagedDeviceEnrollmentTopFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity. */
    public get monthlyPrintUsageByPrinter(): MonthlyPrintUsageByPrinterRequestBuilder {
        return new MonthlyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity. */
    public get monthlyPrintUsageByUser(): MonthlyPrintUsageByUserRequestBuilder {
        return new MonthlyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the security property of the microsoft.graph.reportRoot entity. */
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
        this.urlTemplate = "{+baseurl}/reports{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterItemRequestBuilder
     */
    public dailyPrintUsageByPrinterById(id: string) : I040d432bf097a5c3e088b5b286dc35b17b6fde7ba1189da8ab6b5cbe1c14edd4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByPrinter%2Did"] = id
        return new I040d432bf097a5c3e088b5b286dc35b17b6fde7ba1189da8ab6b5cbe1c14edd4(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the dailyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserItemRequestBuilder
     */
    public dailyPrintUsageByUserById(id: string) : I0a6ffb5ab17952fcc5b605654a921e4b7048a059232acf91ceb8af666ce0f236 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByUser%2Did"] = id
        return new I0a6ffb5ab17952fcc5b605654a921e4b7048a059232acf91ceb8af666ce0f236(urlTplParams, this.requestAdapter);
    };
    /**
     * Get reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    public get(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ReportRoot>(requestInfo, createReportRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getEmailActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityCountsWithPeriod(period: string | undefined) : GetEmailActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserCountsWithPeriod(period: string | undefined) : GetEmailActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getEmailActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserDetailWithDate(date: DateOnly | undefined) : GetEmailActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserDetailWithPeriod(period: string | undefined) : GetEmailActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageAppsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getEmailAppUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserDetailWithDate(date: DateOnly | undefined) : GetEmailAppUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailAppUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserDetailWithPeriod(period: string | undefined) : GetEmailAppUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageVersionsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getGroupArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param groupId Usage: groupId='{groupId}'
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, groupId: string | undefined, startDateTime: Date | undefined) : GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!groupId) throw new Error("groupId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, groupId, startDateTime);
    };
    /**
     * Provides operations to call the getM365AppPlatformUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getM365AppPlatformUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppPlatformUserCountsWithPeriod(period: string | undefined) : GetM365AppPlatformUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppPlatformUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getM365AppUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppUserCountsWithPeriod(period: string | undefined) : GetM365AppUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param date Usage: date={date}
     * @returns a getM365AppUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetM365AppUserDetailWithDate(date: DateOnly | undefined) : GetM365AppUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetM365AppUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getM365AppUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppUserDetailWithPeriod(period: string | undefined) : GetM365AppUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageDetailWithPeriod(period: string | undefined) : GetMailboxUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageMailboxCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageQuotaStatusMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageStorageWithPeriod(period: string | undefined) : GetMailboxUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ActiveUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserCountsWithPeriod(period: string | undefined) : GetOffice365ActiveUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param date Usage: date={date}
     * @returns a getOffice365ActiveUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserDetailWithDate(date: DateOnly | undefined) : GetOffice365ActiveUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365ActiveUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ActiveUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserDetailWithPeriod(period: string | undefined) : GetOffice365ActiveUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a getOffice365GroupsActivityDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityDetailWithDate(date: DateOnly | undefined) : GetOffice365GroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityDetailWithPeriod(period: string | undefined) : GetOffice365GroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityStorage method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityStorageWithPeriod(period: string | undefined) : GetOffice365GroupsActivityStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ServicesUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ServicesUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ServicesUserCountsWithPeriod(period: string | undefined) : GetOffice365ServicesUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ServicesUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityFileCountsWithPeriod(period: string | undefined) : GetOneDriveActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserCountsWithPeriod(period: string | undefined) : GetOneDriveActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getOneDriveActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserDetailWithDate(date: DateOnly | undefined) : GetOneDriveActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserDetailWithPeriod(period: string | undefined) : GetOneDriveActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageAccountCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountCountsWithPeriod(period: string | undefined) : GetOneDriveUsageAccountCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param date Usage: date={date}
     * @returns a getOneDriveUsageAccountDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountDetailWithDate(date: DateOnly | undefined) : GetOneDriveUsageAccountDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageAccountDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountDetailWithPeriod(period: string | undefined) : GetOneDriveUsageAccountDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageFileCountsWithPeriod(period: string | undefined) : GetOneDriveUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageStorageWithPeriod(period: string | undefined) : GetOneDriveUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getPrinterArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param printerId Usage: printerId='{printerId}'
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, printerId: string | undefined, startDateTime: Date | undefined) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!printerId) throw new Error("printerId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, printerId, startDateTime);
    };
    /**
     * Provides operations to call the getSharePointActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityFileCountsWithPeriod(period: string | undefined) : GetSharePointActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityPages method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityPagesWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityPagesWithPeriod(period: string | undefined) : GetSharePointActivityPagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityPagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserCountsWithPeriod(period: string | undefined) : GetSharePointActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSharePointActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserDetailWithDate(date: DateOnly | undefined) : GetSharePointActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserDetailWithPeriod(period: string | undefined) : GetSharePointActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param date Usage: date={date}
     * @returns a getSharePointSiteUsageDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageDetailWithDate(date: DateOnly | undefined) : GetSharePointSiteUsageDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointSiteUsageDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageDetailWithPeriod(period: string | undefined) : GetSharePointSiteUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageFileCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsagePages method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsagePagesWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsagePagesWithPeriod(period: string | undefined) : GetSharePointSiteUsagePagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsagePagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageSiteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageStorageWithPeriod(period: string | undefined) : GetSharePointSiteUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserDetailWithDate(date: DateOnly | undefined) : GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getTeamsDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetTeamsDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getTeamsUserActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserDetailWithDate(date: DateOnly | undefined) : GetTeamsUserActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsUserActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserDetailWithPeriod(period: string | undefined) : GetTeamsUserActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getUserArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @param userId Usage: userId='{userId}'
     * @returns a getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined, userId: string | undefined) : GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        if(!userId) throw new Error("userId cannot be undefined");
        return new GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, startDateTime, userId);
    };
    /**
     * Provides operations to call the getYammerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityCountsWithPeriod(period: string | undefined) : GetYammerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserCountsWithPeriod(period: string | undefined) : GetYammerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserDetailWithDate(date: DateOnly | undefined) : GetYammerActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserDetailWithPeriod(period: string | undefined) : GetYammerActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetYammerDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerGroupsActivityDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityDetailWithDate(date: DateOnly | undefined) : GetYammerGroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerGroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityDetailWithPeriod(period: string | undefined) : GetYammerGroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the managedDeviceEnrollmentFailureDetails method.
     * @param filter Usage: filter='{filter}'
     * @param skip Usage: skip={skip}
     * @param skipToken Usage: skipToken='{skipToken}'
     * @param top Usage: top={top}
     * @returns a managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder
     */
    public microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken(filter: string | undefined, skip: number | undefined, skipToken: string | undefined, top: number | undefined) : ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder {
        if(!filter) throw new Error("filter cannot be undefined");
        if(!skip) throw new Error("skip cannot be undefined");
        if(!skipToken) throw new Error("skipToken cannot be undefined");
        if(!top) throw new Error("top cannot be undefined");
        return new ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder(this.pathParameters, this.requestAdapter, filter, skip, skipToken, top);
    };
    /**
     * Provides operations to call the managedDeviceEnrollmentTopFailures method.
     * @param period Usage: period='{period}'
     * @returns a managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder
     */
    public microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriod(period: string | undefined) : ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterItemRequestBuilder
     */
    public monthlyPrintUsageByPrinterById(id: string) : I464ef823ccbb3cda573d85f5b690bdfbadd75533d381eee43a717ec4bcf9e9da {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByPrinter%2Did"] = id
        return new I464ef823ccbb3cda573d85f5b690bdfbadd75533d381eee43a717ec4bcf9e9da(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserItemRequestBuilder
     */
    public monthlyPrintUsageByUserById(id: string) : Ib890b4082f7b0793dcec266773608fab2228163761130f66570881247e35699c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByUser%2Did"] = id
        return new Ib890b4082f7b0793dcec266773608fab2228163761130f66570881247e35699c(urlTplParams, this.requestAdapter);
    };
    /**
     * Update reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    public patch(body: ReportRoot | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ReportRoot>(requestInfo, createReportRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get reports
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
     * Update reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ReportRoot | undefined, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
