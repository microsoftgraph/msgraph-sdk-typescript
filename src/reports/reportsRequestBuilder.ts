import { createReportRootFromDiscriminatorValue } from '../models/createReportRootFromDiscriminatorValue';
import { deserializeIntoReportRoot } from '../models/deserializeIntoReportRoot';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { type ReportRoot } from '../models/reportRoot';
import { serializeReportRoot } from '../models/serializeReportRoot';
import { AuthenticationMethodsRequestBuilder } from './authenticationMethods/authenticationMethodsRequestBuilder';
import { DailyPrintUsageByPrinterRequestBuilder } from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import { DailyPrintUsageByUserRequestBuilder } from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import { DeviceConfigurationDeviceActivityRequestBuilder } from './deviceConfigurationDeviceActivity/deviceConfigurationDeviceActivityRequestBuilder';
import { DeviceConfigurationUserActivityRequestBuilder } from './deviceConfigurationUserActivity/deviceConfigurationUserActivityRequestBuilder';
import { GetEmailActivityCountsWithPeriodRequestBuilder } from './getEmailActivityCountsWithPeriod/getEmailActivityCountsWithPeriodRequestBuilder';
import { GetEmailActivityUserCountsWithPeriodRequestBuilder } from './getEmailActivityUserCountsWithPeriod/getEmailActivityUserCountsWithPeriodRequestBuilder';
import { GetEmailActivityUserDetailWithDateRequestBuilder } from './getEmailActivityUserDetailWithDate/getEmailActivityUserDetailWithDateRequestBuilder';
import { GetEmailActivityUserDetailWithPeriodRequestBuilder } from './getEmailActivityUserDetailWithPeriod/getEmailActivityUserDetailWithPeriodRequestBuilder';
import { GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder } from './getEmailAppUsageAppsUserCountsWithPeriod/getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder';
import { GetEmailAppUsageUserCountsWithPeriodRequestBuilder } from './getEmailAppUsageUserCountsWithPeriod/getEmailAppUsageUserCountsWithPeriodRequestBuilder';
import { GetEmailAppUsageUserDetailWithDateRequestBuilder } from './getEmailAppUsageUserDetailWithDate/getEmailAppUsageUserDetailWithDateRequestBuilder';
import { GetEmailAppUsageUserDetailWithPeriodRequestBuilder } from './getEmailAppUsageUserDetailWithPeriod/getEmailAppUsageUserDetailWithPeriodRequestBuilder';
import { GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder } from './getEmailAppUsageVersionsUserCountsWithPeriod/getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder';
import { GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder } from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime/getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import { GetM365AppPlatformUserCountsWithPeriodRequestBuilder } from './getM365AppPlatformUserCountsWithPeriod/getM365AppPlatformUserCountsWithPeriodRequestBuilder';
import { GetM365AppUserCountsWithPeriodRequestBuilder } from './getM365AppUserCountsWithPeriod/getM365AppUserCountsWithPeriodRequestBuilder';
import { GetM365AppUserDetailWithDateRequestBuilder } from './getM365AppUserDetailWithDate/getM365AppUserDetailWithDateRequestBuilder';
import { GetM365AppUserDetailWithPeriodRequestBuilder } from './getM365AppUserDetailWithPeriod/getM365AppUserDetailWithPeriodRequestBuilder';
import { GetMailboxUsageDetailWithPeriodRequestBuilder } from './getMailboxUsageDetailWithPeriod/getMailboxUsageDetailWithPeriodRequestBuilder';
import { GetMailboxUsageMailboxCountsWithPeriodRequestBuilder } from './getMailboxUsageMailboxCountsWithPeriod/getMailboxUsageMailboxCountsWithPeriodRequestBuilder';
import { GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder } from './getMailboxUsageQuotaStatusMailboxCountsWithPeriod/getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder';
import { GetMailboxUsageStorageWithPeriodRequestBuilder } from './getMailboxUsageStorageWithPeriod/getMailboxUsageStorageWithPeriodRequestBuilder';
import { GetOffice365ActivationCountsRequestBuilder } from './getOffice365ActivationCounts/getOffice365ActivationCountsRequestBuilder';
import { GetOffice365ActivationsUserCountsRequestBuilder } from './getOffice365ActivationsUserCounts/getOffice365ActivationsUserCountsRequestBuilder';
import { GetOffice365ActivationsUserDetailRequestBuilder } from './getOffice365ActivationsUserDetail/getOffice365ActivationsUserDetailRequestBuilder';
import { GetOffice365ActiveUserCountsWithPeriodRequestBuilder } from './getOffice365ActiveUserCountsWithPeriod/getOffice365ActiveUserCountsWithPeriodRequestBuilder';
import { GetOffice365ActiveUserDetailWithDateRequestBuilder } from './getOffice365ActiveUserDetailWithDate/getOffice365ActiveUserDetailWithDateRequestBuilder';
import { GetOffice365ActiveUserDetailWithPeriodRequestBuilder } from './getOffice365ActiveUserDetailWithPeriod/getOffice365ActiveUserDetailWithPeriodRequestBuilder';
import { GetOffice365GroupsActivityCountsWithPeriodRequestBuilder } from './getOffice365GroupsActivityCountsWithPeriod/getOffice365GroupsActivityCountsWithPeriodRequestBuilder';
import { GetOffice365GroupsActivityDetailWithDateRequestBuilder } from './getOffice365GroupsActivityDetailWithDate/getOffice365GroupsActivityDetailWithDateRequestBuilder';
import { GetOffice365GroupsActivityDetailWithPeriodRequestBuilder } from './getOffice365GroupsActivityDetailWithPeriod/getOffice365GroupsActivityDetailWithPeriodRequestBuilder';
import { GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder } from './getOffice365GroupsActivityFileCountsWithPeriod/getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder';
import { GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder } from './getOffice365GroupsActivityGroupCountsWithPeriod/getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder';
import { GetOffice365GroupsActivityStorageWithPeriodRequestBuilder } from './getOffice365GroupsActivityStorageWithPeriod/getOffice365GroupsActivityStorageWithPeriodRequestBuilder';
import { GetOffice365ServicesUserCountsWithPeriodRequestBuilder } from './getOffice365ServicesUserCountsWithPeriod/getOffice365ServicesUserCountsWithPeriodRequestBuilder';
import { GetOneDriveActivityFileCountsWithPeriodRequestBuilder } from './getOneDriveActivityFileCountsWithPeriod/getOneDriveActivityFileCountsWithPeriodRequestBuilder';
import { GetOneDriveActivityUserCountsWithPeriodRequestBuilder } from './getOneDriveActivityUserCountsWithPeriod/getOneDriveActivityUserCountsWithPeriodRequestBuilder';
import { GetOneDriveActivityUserDetailWithDateRequestBuilder } from './getOneDriveActivityUserDetailWithDate/getOneDriveActivityUserDetailWithDateRequestBuilder';
import { GetOneDriveActivityUserDetailWithPeriodRequestBuilder } from './getOneDriveActivityUserDetailWithPeriod/getOneDriveActivityUserDetailWithPeriodRequestBuilder';
import { GetOneDriveUsageAccountCountsWithPeriodRequestBuilder } from './getOneDriveUsageAccountCountsWithPeriod/getOneDriveUsageAccountCountsWithPeriodRequestBuilder';
import { GetOneDriveUsageAccountDetailWithDateRequestBuilder } from './getOneDriveUsageAccountDetailWithDate/getOneDriveUsageAccountDetailWithDateRequestBuilder';
import { GetOneDriveUsageAccountDetailWithPeriodRequestBuilder } from './getOneDriveUsageAccountDetailWithPeriod/getOneDriveUsageAccountDetailWithPeriodRequestBuilder';
import { GetOneDriveUsageFileCountsWithPeriodRequestBuilder } from './getOneDriveUsageFileCountsWithPeriod/getOneDriveUsageFileCountsWithPeriodRequestBuilder';
import { GetOneDriveUsageStorageWithPeriodRequestBuilder } from './getOneDriveUsageStorageWithPeriod/getOneDriveUsageStorageWithPeriodRequestBuilder';
import { GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder } from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime/getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import { GetSharePointActivityFileCountsWithPeriodRequestBuilder } from './getSharePointActivityFileCountsWithPeriod/getSharePointActivityFileCountsWithPeriodRequestBuilder';
import { GetSharePointActivityPagesWithPeriodRequestBuilder } from './getSharePointActivityPagesWithPeriod/getSharePointActivityPagesWithPeriodRequestBuilder';
import { GetSharePointActivityUserCountsWithPeriodRequestBuilder } from './getSharePointActivityUserCountsWithPeriod/getSharePointActivityUserCountsWithPeriodRequestBuilder';
import { GetSharePointActivityUserDetailWithDateRequestBuilder } from './getSharePointActivityUserDetailWithDate/getSharePointActivityUserDetailWithDateRequestBuilder';
import { GetSharePointActivityUserDetailWithPeriodRequestBuilder } from './getSharePointActivityUserDetailWithPeriod/getSharePointActivityUserDetailWithPeriodRequestBuilder';
import { GetSharePointSiteUsageDetailWithDateRequestBuilder } from './getSharePointSiteUsageDetailWithDate/getSharePointSiteUsageDetailWithDateRequestBuilder';
import { GetSharePointSiteUsageDetailWithPeriodRequestBuilder } from './getSharePointSiteUsageDetailWithPeriod/getSharePointSiteUsageDetailWithPeriodRequestBuilder';
import { GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder } from './getSharePointSiteUsageFileCountsWithPeriod/getSharePointSiteUsageFileCountsWithPeriodRequestBuilder';
import { GetSharePointSiteUsagePagesWithPeriodRequestBuilder } from './getSharePointSiteUsagePagesWithPeriod/getSharePointSiteUsagePagesWithPeriodRequestBuilder';
import { GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder } from './getSharePointSiteUsageSiteCountsWithPeriod/getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder';
import { GetSharePointSiteUsageStorageWithPeriodRequestBuilder } from './getSharePointSiteUsageStorageWithPeriod/getSharePointSiteUsageStorageWithPeriodRequestBuilder';
import { GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder } from './getSkypeForBusinessActivityCountsWithPeriod/getSkypeForBusinessActivityCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessActivityUserCountsWithPeriod/getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder } from './getSkypeForBusinessActivityUserDetailWithDate/getSkypeForBusinessActivityUserDetailWithDateRequestBuilder';
import { GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder } from './getSkypeForBusinessActivityUserDetailWithPeriod/getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder';
import { GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod/getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessDeviceUsageUserCountsWithPeriod/getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder } from './getSkypeForBusinessDeviceUsageUserDetailWithDate/getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder';
import { GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder } from './getSkypeForBusinessDeviceUsageUserDetailWithPeriod/getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder';
import { GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder } from './getSkypeForBusinessOrganizerActivityCountsWithPeriod/getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder } from './getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod/getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessOrganizerActivityUserCountsWithPeriod/getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder } from './getSkypeForBusinessParticipantActivityCountsWithPeriod/getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder } from './getSkypeForBusinessParticipantActivityMinuteCountsWithPeriod/getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessParticipantActivityUserCountsWithPeriod/getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder } from './getSkypeForBusinessPeerToPeerActivityCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder } from './getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder';
import { GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder } from './getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder';
import { GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder } from './getTeamsDeviceUsageDistributionUserCountsWithPeriod/getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import { GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder } from './getTeamsDeviceUsageUserCountsWithPeriod/getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder';
import { GetTeamsDeviceUsageUserDetailWithDateRequestBuilder } from './getTeamsDeviceUsageUserDetailWithDate/getTeamsDeviceUsageUserDetailWithDateRequestBuilder';
import { GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder } from './getTeamsDeviceUsageUserDetailWithPeriod/getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder';
import { GetTeamsTeamActivityCountsWithPeriodRequestBuilder } from './getTeamsTeamActivityCountsWithPeriod/getTeamsTeamActivityCountsWithPeriodRequestBuilder';
import { GetTeamsTeamActivityDetailWithDateRequestBuilder } from './getTeamsTeamActivityDetailWithDate/getTeamsTeamActivityDetailWithDateRequestBuilder';
import { GetTeamsTeamActivityDetailWithPeriodRequestBuilder } from './getTeamsTeamActivityDetailWithPeriod/getTeamsTeamActivityDetailWithPeriodRequestBuilder';
import { GetTeamsTeamActivityDistributionCountsWithPeriodRequestBuilder } from './getTeamsTeamActivityDistributionCountsWithPeriod/getTeamsTeamActivityDistributionCountsWithPeriodRequestBuilder';
import { GetTeamsTeamCountsWithPeriodRequestBuilder } from './getTeamsTeamCountsWithPeriod/getTeamsTeamCountsWithPeriodRequestBuilder';
import { GetTeamsUserActivityCountsWithPeriodRequestBuilder } from './getTeamsUserActivityCountsWithPeriod/getTeamsUserActivityCountsWithPeriodRequestBuilder';
import { GetTeamsUserActivityUserCountsWithPeriodRequestBuilder } from './getTeamsUserActivityUserCountsWithPeriod/getTeamsUserActivityUserCountsWithPeriodRequestBuilder';
import { GetTeamsUserActivityUserDetailWithDateRequestBuilder } from './getTeamsUserActivityUserDetailWithDate/getTeamsUserActivityUserDetailWithDateRequestBuilder';
import { GetTeamsUserActivityUserDetailWithPeriodRequestBuilder } from './getTeamsUserActivityUserDetailWithPeriod/getTeamsUserActivityUserDetailWithPeriodRequestBuilder';
import { GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder } from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime/getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import { GetYammerActivityCountsWithPeriodRequestBuilder } from './getYammerActivityCountsWithPeriod/getYammerActivityCountsWithPeriodRequestBuilder';
import { GetYammerActivityUserCountsWithPeriodRequestBuilder } from './getYammerActivityUserCountsWithPeriod/getYammerActivityUserCountsWithPeriodRequestBuilder';
import { GetYammerActivityUserDetailWithDateRequestBuilder } from './getYammerActivityUserDetailWithDate/getYammerActivityUserDetailWithDateRequestBuilder';
import { GetYammerActivityUserDetailWithPeriodRequestBuilder } from './getYammerActivityUserDetailWithPeriod/getYammerActivityUserDetailWithPeriodRequestBuilder';
import { GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder } from './getYammerDeviceUsageDistributionUserCountsWithPeriod/getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import { GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder } from './getYammerDeviceUsageUserCountsWithPeriod/getYammerDeviceUsageUserCountsWithPeriodRequestBuilder';
import { GetYammerDeviceUsageUserDetailWithDateRequestBuilder } from './getYammerDeviceUsageUserDetailWithDate/getYammerDeviceUsageUserDetailWithDateRequestBuilder';
import { GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder } from './getYammerDeviceUsageUserDetailWithPeriod/getYammerDeviceUsageUserDetailWithPeriodRequestBuilder';
import { GetYammerGroupsActivityCountsWithPeriodRequestBuilder } from './getYammerGroupsActivityCountsWithPeriod/getYammerGroupsActivityCountsWithPeriodRequestBuilder';
import { GetYammerGroupsActivityDetailWithDateRequestBuilder } from './getYammerGroupsActivityDetailWithDate/getYammerGroupsActivityDetailWithDateRequestBuilder';
import { GetYammerGroupsActivityDetailWithPeriodRequestBuilder } from './getYammerGroupsActivityDetailWithPeriod/getYammerGroupsActivityDetailWithPeriodRequestBuilder';
import { GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder } from './getYammerGroupsActivityGroupCountsWithPeriod/getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder';
import { ManagedDeviceEnrollmentFailureDetailsRequestBuilder } from './managedDeviceEnrollmentFailureDetails/managedDeviceEnrollmentFailureDetailsRequestBuilder';
import { ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder } from './managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken/managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder';
import { ManagedDeviceEnrollmentTopFailuresRequestBuilder } from './managedDeviceEnrollmentTopFailures/managedDeviceEnrollmentTopFailuresRequestBuilder';
import { ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder } from './managedDeviceEnrollmentTopFailuresWithPeriod/managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder';
import { MonthlyPrintUsageByPrinterRequestBuilder } from './monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder';
import { MonthlyPrintUsageByUserRequestBuilder } from './monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder';
import { type ReportsRequestBuilderGetRequestConfiguration } from './reportsRequestBuilderGetRequestConfiguration';
import { type ReportsRequestBuilderPatchRequestConfiguration } from './reportsRequestBuilderPatchRequestConfiguration';
import { SecurityRequestBuilder } from './security/securityRequestBuilder';
import { BaseRequestBuilder, DateOnly, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reportRoot singleton.
 */
export class ReportsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the authenticationMethods property of the microsoft.graph.reportRoot entity.
     */
    public get authenticationMethods(): AuthenticationMethodsRequestBuilder {
        return new AuthenticationMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     */
    public get dailyPrintUsageByPrinter(): DailyPrintUsageByPrinterRequestBuilder {
        return new DailyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the dailyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
     */
    public get dailyPrintUsageByUser(): DailyPrintUsageByUserRequestBuilder {
        return new DailyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the deviceConfigurationDeviceActivity method.
     */
    public get deviceConfigurationDeviceActivity(): DeviceConfigurationDeviceActivityRequestBuilder {
        return new DeviceConfigurationDeviceActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the deviceConfigurationUserActivity method.
     */
    public get deviceConfigurationUserActivity(): DeviceConfigurationUserActivityRequestBuilder {
        return new DeviceConfigurationUserActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getOffice365ActivationCounts method.
     */
    public get getOffice365ActivationCounts(): GetOffice365ActivationCountsRequestBuilder {
        return new GetOffice365ActivationCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getOffice365ActivationsUserCounts method.
     */
    public get getOffice365ActivationsUserCounts(): GetOffice365ActivationsUserCountsRequestBuilder {
        return new GetOffice365ActivationsUserCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getOffice365ActivationsUserDetail method.
     */
    public get getOffice365ActivationsUserDetail(): GetOffice365ActivationsUserDetailRequestBuilder {
        return new GetOffice365ActivationsUserDetailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the managedDeviceEnrollmentFailureDetails method.
     */
    public get managedDeviceEnrollmentFailureDetails(): ManagedDeviceEnrollmentFailureDetailsRequestBuilder {
        return new ManagedDeviceEnrollmentFailureDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the managedDeviceEnrollmentTopFailures method.
     */
    public get managedDeviceEnrollmentTopFailures(): ManagedDeviceEnrollmentTopFailuresRequestBuilder {
        return new ManagedDeviceEnrollmentTopFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     */
    public get monthlyPrintUsageByPrinter(): MonthlyPrintUsageByPrinterRequestBuilder {
        return new MonthlyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity.
     */
    public get monthlyPrintUsageByUser(): MonthlyPrintUsageByUserRequestBuilder {
        return new MonthlyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the security property of the microsoft.graph.reportRoot entity.
     */
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports{?%24select,%24expand}");
    };
    /**
     * Read properties and relationships of the reportRoot object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ReportRoot
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-reportroot-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ReportsRequestBuilderGetRequestConfiguration | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ReportRoot>(requestInfo, createReportRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the getEmailActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityCountsWithPeriodRequestBuilder
     */
    public getEmailActivityCountsWithPeriod(period: string | undefined) : GetEmailActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityUserCountsWithPeriodRequestBuilder
     */
    public getEmailActivityUserCountsWithPeriod(period: string | undefined) : GetEmailActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getEmailActivityUserDetailWithDateRequestBuilder
     */
    public getEmailActivityUserDetailWithDate(date: DateOnly | undefined) : GetEmailActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getEmailActivityUserDetailWithPeriodRequestBuilder
     */
    public getEmailActivityUserDetailWithPeriod(period: string | undefined) : GetEmailActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageAppsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageAppsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getEmailAppUsageUserDetailWithDateRequestBuilder
     */
    public getEmailAppUsageUserDetailWithDate(date: DateOnly | undefined) : GetEmailAppUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailAppUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageUserDetailWithPeriodRequestBuilder
     */
    public getEmailAppUsageUserDetailWithPeriod(period: string | undefined) : GetEmailAppUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageVersionsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageVersionsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder {
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
    public getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, groupId: string | undefined, startDateTime: Date | undefined) : GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder {
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
    public getM365AppPlatformUserCountsWithPeriod(period: string | undefined) : GetM365AppPlatformUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppPlatformUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getM365AppUserCountsWithPeriodRequestBuilder
     */
    public getM365AppUserCountsWithPeriod(period: string | undefined) : GetM365AppUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param date Usage: date={date}
     * @returns a getM365AppUserDetailWithDateRequestBuilder
     */
    public getM365AppUserDetailWithDate(date: DateOnly | undefined) : GetM365AppUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetM365AppUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getM365AppUserDetailWithPeriodRequestBuilder
     */
    public getM365AppUserDetailWithPeriod(period: string | undefined) : GetM365AppUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetM365AppUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageDetailWithPeriodRequestBuilder
     */
    public getMailboxUsageDetailWithPeriod(period: string | undefined) : GetMailboxUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageMailboxCountsWithPeriodRequestBuilder
     */
    public getMailboxUsageMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageQuotaStatusMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder
     */
    public getMailboxUsageQuotaStatusMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getMailboxUsageStorageWithPeriodRequestBuilder
     */
    public getMailboxUsageStorageWithPeriod(period: string | undefined) : GetMailboxUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ActiveUserCountsWithPeriodRequestBuilder
     */
    public getOffice365ActiveUserCountsWithPeriod(period: string | undefined) : GetOffice365ActiveUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param date Usage: date={date}
     * @returns a getOffice365ActiveUserDetailWithDateRequestBuilder
     */
    public getOffice365ActiveUserDetailWithDate(date: DateOnly | undefined) : GetOffice365ActiveUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365ActiveUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ActiveUserDetailWithPeriodRequestBuilder
     */
    public getOffice365ActiveUserDetailWithPeriod(period: string | undefined) : GetOffice365ActiveUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a getOffice365GroupsActivityDetailWithDateRequestBuilder
     */
    public getOffice365GroupsActivityDetailWithDate(date: DateOnly | undefined) : GetOffice365GroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityDetailWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityDetailWithPeriod(period: string | undefined) : GetOffice365GroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityFileCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityStorage method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365GroupsActivityStorageWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityStorageWithPeriod(period: string | undefined) : GetOffice365GroupsActivityStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ServicesUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOffice365ServicesUserCountsWithPeriodRequestBuilder
     */
    public getOffice365ServicesUserCountsWithPeriod(period: string | undefined) : GetOffice365ServicesUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ServicesUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityFileCountsWithPeriodRequestBuilder
     */
    public getOneDriveActivityFileCountsWithPeriod(period: string | undefined) : GetOneDriveActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityUserCountsWithPeriodRequestBuilder
     */
    public getOneDriveActivityUserCountsWithPeriod(period: string | undefined) : GetOneDriveActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getOneDriveActivityUserDetailWithDateRequestBuilder
     */
    public getOneDriveActivityUserDetailWithDate(date: DateOnly | undefined) : GetOneDriveActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveActivityUserDetailWithPeriodRequestBuilder
     */
    public getOneDriveActivityUserDetailWithPeriod(period: string | undefined) : GetOneDriveActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageAccountCountsWithPeriodRequestBuilder
     */
    public getOneDriveUsageAccountCountsWithPeriod(period: string | undefined) : GetOneDriveUsageAccountCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param date Usage: date={date}
     * @returns a getOneDriveUsageAccountDetailWithDateRequestBuilder
     */
    public getOneDriveUsageAccountDetailWithDate(date: DateOnly | undefined) : GetOneDriveUsageAccountDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageAccountDetailWithPeriodRequestBuilder
     */
    public getOneDriveUsageAccountDetailWithPeriod(period: string | undefined) : GetOneDriveUsageAccountDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageFileCountsWithPeriodRequestBuilder
     */
    public getOneDriveUsageFileCountsWithPeriod(period: string | undefined) : GetOneDriveUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getOneDriveUsageStorageWithPeriodRequestBuilder
     */
    public getOneDriveUsageStorageWithPeriod(period: string | undefined) : GetOneDriveUsageStorageWithPeriodRequestBuilder {
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
    public getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, printerId: string | undefined, startDateTime: Date | undefined) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder {
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
    public getSharePointActivityFileCountsWithPeriod(period: string | undefined) : GetSharePointActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityPages method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityPagesWithPeriodRequestBuilder
     */
    public getSharePointActivityPagesWithPeriod(period: string | undefined) : GetSharePointActivityPagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityPagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityUserCountsWithPeriodRequestBuilder
     */
    public getSharePointActivityUserCountsWithPeriod(period: string | undefined) : GetSharePointActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSharePointActivityUserDetailWithDateRequestBuilder
     */
    public getSharePointActivityUserDetailWithDate(date: DateOnly | undefined) : GetSharePointActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointActivityUserDetailWithPeriodRequestBuilder
     */
    public getSharePointActivityUserDetailWithPeriod(period: string | undefined) : GetSharePointActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param date Usage: date={date}
     * @returns a getSharePointSiteUsageDetailWithDateRequestBuilder
     */
    public getSharePointSiteUsageDetailWithDate(date: DateOnly | undefined) : GetSharePointSiteUsageDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointSiteUsageDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageDetailWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageDetailWithPeriod(period: string | undefined) : GetSharePointSiteUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageFileCountsWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageFileCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsagePages method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsagePagesWithPeriodRequestBuilder
     */
    public getSharePointSiteUsagePagesWithPeriod(period: string | undefined) : GetSharePointSiteUsagePagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsagePagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageSiteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageSiteCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a getSharePointSiteUsageStorageWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageStorageWithPeriod(period: string | undefined) : GetSharePointSiteUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessActivityUserDetailWithDateRequestBuilder
     */
    public getSkypeForBusinessActivityUserDetailWithDate(date: DateOnly | undefined) : GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getTeamsDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getTeamsDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetTeamsDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsTeamActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsTeamActivityCountsWithPeriodRequestBuilder
     */
    public getTeamsTeamActivityCountsWithPeriod(period: string | undefined) : GetTeamsTeamActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsTeamActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsTeamActivityDetail method.
     * @param date Usage: date={date}
     * @returns a getTeamsTeamActivityDetailWithDateRequestBuilder
     */
    public getTeamsTeamActivityDetailWithDate(date: DateOnly | undefined) : GetTeamsTeamActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsTeamActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsTeamActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsTeamActivityDetailWithPeriodRequestBuilder
     */
    public getTeamsTeamActivityDetailWithPeriod(period: string | undefined) : GetTeamsTeamActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsTeamActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsTeamActivityDistributionCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsTeamActivityDistributionCountsWithPeriodRequestBuilder
     */
    public getTeamsTeamActivityDistributionCountsWithPeriod(period: string | undefined) : GetTeamsTeamActivityDistributionCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsTeamActivityDistributionCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsTeamCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsTeamCountsWithPeriodRequestBuilder
     */
    public getTeamsTeamCountsWithPeriod(period: string | undefined) : GetTeamsTeamCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsTeamCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityCountsWithPeriodRequestBuilder
     */
    public getTeamsUserActivityCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityUserCountsWithPeriodRequestBuilder
     */
    public getTeamsUserActivityUserCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getTeamsUserActivityUserDetailWithDateRequestBuilder
     */
    public getTeamsUserActivityUserDetailWithDate(date: DateOnly | undefined) : GetTeamsUserActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsUserActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getTeamsUserActivityUserDetailWithPeriodRequestBuilder
     */
    public getTeamsUserActivityUserDetailWithPeriod(period: string | undefined) : GetTeamsUserActivityUserDetailWithPeriodRequestBuilder {
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
    public getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined, userId: string | undefined) : GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder {
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
    public getYammerActivityCountsWithPeriod(period: string | undefined) : GetYammerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerActivityUserCountsWithPeriodRequestBuilder
     */
    public getYammerActivityUserCountsWithPeriod(period: string | undefined) : GetYammerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerActivityUserDetailWithDateRequestBuilder
     */
    public getYammerActivityUserDetailWithDate(date: DateOnly | undefined) : GetYammerActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerActivityUserDetailWithPeriodRequestBuilder
     */
    public getYammerActivityUserDetailWithPeriod(period: string | undefined) : GetYammerActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getYammerDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : GetYammerDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityCountsWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a getYammerGroupsActivityDetailWithDateRequestBuilder
     */
    public getYammerGroupsActivityDetailWithDate(date: DateOnly | undefined) : GetYammerGroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerGroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityDetailWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityDetailWithPeriod(period: string | undefined) : GetYammerGroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder {
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
    public managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken(filter: string | undefined, skip: number | undefined, skipToken: string | undefined, top: number | undefined) : ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder {
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
    public managedDeviceEnrollmentTopFailuresWithPeriod(period: string | undefined) : ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Update the properties of a reportRoot object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ReportRoot
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-reportroot-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ReportRoot, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ReportRoot>(requestInfo, createReportRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read properties and relationships of the reportRoot object.
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
     * Update the properties of a reportRoot object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ReportRoot, requestConfiguration?: ReportsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeReportRoot);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a reportsRequestBuilder
     */
    public withUrl(rawUrl: string) : ReportsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ReportsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
