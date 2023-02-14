import {ReportRoot} from '../models/';
import {createReportRootFromDiscriminatorValue} from '../models/createReportRootFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DailyPrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByPrinterItemRequestBuilder as I040d432bf097a5c3e088b5b286dc35b17b6fde7ba1189da8ab6b5cbe1c14edd4} from './dailyPrintUsageByPrinter/item/printUsageByPrinterItemRequestBuilder';
import {DailyPrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import {PrintUsageByUserItemRequestBuilder as I0a6ffb5ab17952fcc5b605654a921e4b7048a059232acf91ceb8af666ce0f236} from './dailyPrintUsageByUser/item/printUsageByUserItemRequestBuilder';
import {MicrosoftGraphDeviceConfigurationDeviceActivityRequestBuilder} from './microsoftGraphDeviceConfigurationDeviceActivity/microsoftGraphDeviceConfigurationDeviceActivityRequestBuilder';
import {MicrosoftGraphDeviceConfigurationUserActivityRequestBuilder} from './microsoftGraphDeviceConfigurationUserActivity/microsoftGraphDeviceConfigurationUserActivityRequestBuilder';
import {MicrosoftGraphGetEmailActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityCountsWithPeriod/microsoftGraphGetEmailActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityUserCountsWithPeriod/microsoftGraphGetEmailActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetEmailActivityUserDetailWithDate/microsoftGraphGetEmailActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetEmailActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetEmailActivityUserDetailWithPeriod/microsoftGraphGetEmailActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriod/microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailAppUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageUserCountsWithPeriod/microsoftGraphGetEmailAppUsageUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailAppUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetEmailAppUsageUserDetailWithDate/microsoftGraphGetEmailAppUsageUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetEmailAppUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageUserDetailWithPeriod/microsoftGraphGetEmailAppUsageUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriod/microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime/microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {MicrosoftGraphGetM365AppPlatformUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetM365AppPlatformUserCountsWithPeriod/microsoftGraphGetM365AppPlatformUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetM365AppUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetM365AppUserCountsWithPeriod/microsoftGraphGetM365AppUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetM365AppUserDetailWithDateRequestBuilder} from './microsoftGraphGetM365AppUserDetailWithDate/microsoftGraphGetM365AppUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetM365AppUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetM365AppUserDetailWithPeriod/microsoftGraphGetM365AppUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetMailboxUsageDetailWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageDetailWithPeriod/microsoftGraphGetMailboxUsageDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetMailboxUsageMailboxCountsWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageMailboxCountsWithPeriod/microsoftGraphGetMailboxUsageMailboxCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriod/microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetMailboxUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetMailboxUsageStorageWithPeriod/microsoftGraphGetMailboxUsageStorageWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365ActivationCountsRequestBuilder} from './microsoftGraphGetOffice365ActivationCounts/microsoftGraphGetOffice365ActivationCountsRequestBuilder';
import {MicrosoftGraphGetOffice365ActivationsUserCountsRequestBuilder} from './microsoftGraphGetOffice365ActivationsUserCounts/microsoftGraphGetOffice365ActivationsUserCountsRequestBuilder';
import {MicrosoftGraphGetOffice365ActivationsUserDetailRequestBuilder} from './microsoftGraphGetOffice365ActivationsUserDetail/microsoftGraphGetOffice365ActivationsUserDetailRequestBuilder';
import {MicrosoftGraphGetOffice365ActiveUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ActiveUserCountsWithPeriod/microsoftGraphGetOffice365ActiveUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365ActiveUserDetailWithDateRequestBuilder} from './microsoftGraphGetOffice365ActiveUserDetailWithDate/microsoftGraphGetOffice365ActiveUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetOffice365ActiveUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ActiveUserDetailWithPeriod/microsoftGraphGetOffice365ActiveUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityCountsWithPeriod/microsoftGraphGetOffice365GroupsActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityDetailWithDateRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityDetailWithDate/microsoftGraphGetOffice365GroupsActivityDetailWithDateRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityDetailWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityDetailWithPeriod/microsoftGraphGetOffice365GroupsActivityDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriod/microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriod/microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365GroupsActivityStorageWithPeriodRequestBuilder} from './microsoftGraphGetOffice365GroupsActivityStorageWithPeriod/microsoftGraphGetOffice365GroupsActivityStorageWithPeriodRequestBuilder';
import {MicrosoftGraphGetOffice365ServicesUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOffice365ServicesUserCountsWithPeriod/microsoftGraphGetOffice365ServicesUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityFileCountsWithPeriod/microsoftGraphGetOneDriveActivityFileCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityUserCountsWithPeriod/microsoftGraphGetOneDriveActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetOneDriveActivityUserDetailWithDate/microsoftGraphGetOneDriveActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetOneDriveActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveActivityUserDetailWithPeriod/microsoftGraphGetOneDriveActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveUsageAccountCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountCountsWithPeriod/microsoftGraphGetOneDriveUsageAccountCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveUsageAccountDetailWithDateRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountDetailWithDate/microsoftGraphGetOneDriveUsageAccountDetailWithDateRequestBuilder';
import {MicrosoftGraphGetOneDriveUsageAccountDetailWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageAccountDetailWithPeriod/microsoftGraphGetOneDriveUsageAccountDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveUsageFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageFileCountsWithPeriod/microsoftGraphGetOneDriveUsageFileCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetOneDriveUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetOneDriveUsageStorageWithPeriod/microsoftGraphGetOneDriveUsageStorageWithPeriodRequestBuilder';
import {MicrosoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime/microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {MicrosoftGraphGetSharePointActivityFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityFileCountsWithPeriod/microsoftGraphGetSharePointActivityFileCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointActivityPagesWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityPagesWithPeriod/microsoftGraphGetSharePointActivityPagesWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityUserCountsWithPeriod/microsoftGraphGetSharePointActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetSharePointActivityUserDetailWithDate/microsoftGraphGetSharePointActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetSharePointActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSharePointActivityUserDetailWithPeriod/microsoftGraphGetSharePointActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsageDetailWithDateRequestBuilder} from './microsoftGraphGetSharePointSiteUsageDetailWithDate/microsoftGraphGetSharePointSiteUsageDetailWithDateRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsageDetailWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageDetailWithPeriod/microsoftGraphGetSharePointSiteUsageDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsageFileCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageFileCountsWithPeriod/microsoftGraphGetSharePointSiteUsageFileCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsagePagesWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsagePagesWithPeriod/microsoftGraphGetSharePointSiteUsagePagesWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriod/microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSharePointSiteUsageStorageWithPeriodRequestBuilder} from './microsoftGraphGetSharePointSiteUsageStorageWithPeriod/microsoftGraphGetSharePointSiteUsageStorageWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityCountsWithPeriod/microsoftGraphGetSkypeForBusinessActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserDetailWithDate/microsoftGraphGetSkypeForBusinessActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriod/microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDate/microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriod/microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriod/microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod/microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriod/microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriod/microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriod/microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod/microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod/microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriod/microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriod/microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserDetailWithDate/microsoftGraphGetTeamsDeviceUsageUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriod/microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsUserActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityCountsWithPeriod/microsoftGraphGetTeamsUserActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsUserActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserCountsWithPeriod/microsoftGraphGetTeamsUserActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetTeamsUserActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserDetailWithDate/microsoftGraphGetTeamsUserActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetTeamsUserActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetTeamsUserActivityUserDetailWithPeriod/microsoftGraphGetTeamsUserActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime/microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {MicrosoftGraphGetYammerActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityCountsWithPeriod/microsoftGraphGetYammerActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerActivityUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityUserCountsWithPeriod/microsoftGraphGetYammerActivityUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerActivityUserDetailWithDateRequestBuilder} from './microsoftGraphGetYammerActivityUserDetailWithDate/microsoftGraphGetYammerActivityUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetYammerActivityUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerActivityUserDetailWithPeriod/microsoftGraphGetYammerActivityUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriod/microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerDeviceUsageUserCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserCountsWithPeriod/microsoftGraphGetYammerDeviceUsageUserCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerDeviceUsageUserDetailWithDateRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserDetailWithDate/microsoftGraphGetYammerDeviceUsageUserDetailWithDateRequestBuilder';
import {MicrosoftGraphGetYammerDeviceUsageUserDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerDeviceUsageUserDetailWithPeriod/microsoftGraphGetYammerDeviceUsageUserDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerGroupsActivityCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityCountsWithPeriod/microsoftGraphGetYammerGroupsActivityCountsWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerGroupsActivityDetailWithDateRequestBuilder} from './microsoftGraphGetYammerGroupsActivityDetailWithDate/microsoftGraphGetYammerGroupsActivityDetailWithDateRequestBuilder';
import {MicrosoftGraphGetYammerGroupsActivityDetailWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityDetailWithPeriod/microsoftGraphGetYammerGroupsActivityDetailWithPeriodRequestBuilder';
import {MicrosoftGraphGetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder} from './microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriod/microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder';
import {MicrosoftGraphManagedDeviceEnrollmentFailureDetailsRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentFailureDetails/microsoftGraphManagedDeviceEnrollmentFailureDetailsRequestBuilder';
import {MicrosoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken/microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder';
import {MicrosoftGraphManagedDeviceEnrollmentTopFailuresRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentTopFailures/microsoftGraphManagedDeviceEnrollmentTopFailuresRequestBuilder';
import {MicrosoftGraphManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder} from './microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriod/microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder';
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
    public get microsoftGraphDeviceConfigurationDeviceActivity(): MicrosoftGraphDeviceConfigurationDeviceActivityRequestBuilder {
        return new MicrosoftGraphDeviceConfigurationDeviceActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deviceConfigurationUserActivity method. */
    public get microsoftGraphDeviceConfigurationUserActivity(): MicrosoftGraphDeviceConfigurationUserActivityRequestBuilder {
        return new MicrosoftGraphDeviceConfigurationUserActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationCounts method. */
    public get microsoftGraphGetOffice365ActivationCounts(): MicrosoftGraphGetOffice365ActivationCountsRequestBuilder {
        return new MicrosoftGraphGetOffice365ActivationCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationsUserCounts method. */
    public get microsoftGraphGetOffice365ActivationsUserCounts(): MicrosoftGraphGetOffice365ActivationsUserCountsRequestBuilder {
        return new MicrosoftGraphGetOffice365ActivationsUserCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getOffice365ActivationsUserDetail method. */
    public get microsoftGraphGetOffice365ActivationsUserDetail(): MicrosoftGraphGetOffice365ActivationsUserDetailRequestBuilder {
        return new MicrosoftGraphGetOffice365ActivationsUserDetailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the managedDeviceEnrollmentFailureDetails method. */
    public get microsoftGraphManagedDeviceEnrollmentFailureDetails(): MicrosoftGraphManagedDeviceEnrollmentFailureDetailsRequestBuilder {
        return new MicrosoftGraphManagedDeviceEnrollmentFailureDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the managedDeviceEnrollmentTopFailures method. */
    public get microsoftGraphManagedDeviceEnrollmentTopFailures(): MicrosoftGraphManagedDeviceEnrollmentTopFailuresRequestBuilder {
        return new MicrosoftGraphManagedDeviceEnrollmentTopFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * @returns a microsoftGraphGetEmailActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetEmailActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetEmailActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetEmailActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageAppsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageAppsUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailAppUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailAppUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailAppUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetEmailAppUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetEmailAppUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetEmailAppUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getEmailAppUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailAppUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailAppUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailAppUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getEmailAppUsageVersionsUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetEmailAppUsageVersionsUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getGroupArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param groupId Usage: groupId='{groupId}'
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, groupId: string | undefined, startDateTime: Date | undefined) : MicrosoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!groupId) throw new Error("groupId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new MicrosoftGraphGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, groupId, startDateTime);
    };
    /**
     * Provides operations to call the getM365AppPlatformUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetM365AppPlatformUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppPlatformUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetM365AppPlatformUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetM365AppPlatformUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetM365AppUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetM365AppUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetM365AppUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetM365AppUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetM365AppUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetM365AppUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetM365AppUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getM365AppUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetM365AppUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetM365AppUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetM365AppUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetM365AppUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetMailboxUsageDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetMailboxUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetMailboxUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetMailboxUsageMailboxCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageMailboxCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetMailboxUsageMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetMailboxUsageMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageQuotaStatusMailboxCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getMailboxUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetMailboxUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetMailboxUsageStorageWithPeriod(period: string | undefined) : MicrosoftGraphGetMailboxUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetMailboxUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365ActiveUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365ActiveUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365ActiveUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetOffice365ActiveUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetOffice365ActiveUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetOffice365ActiveUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365ActiveUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365ActiveUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ActiveUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365ActiveUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365ActiveUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365GroupsActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365GroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetOffice365GroupsActivityDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetOffice365GroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365GroupsActivityDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365GroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityFileCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityGroupCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365GroupsActivityStorage method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365GroupsActivityStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365GroupsActivityStorageWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365GroupsActivityStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365GroupsActivityStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOffice365ServicesUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOffice365ServicesUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOffice365ServicesUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOffice365ServicesUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOffice365ServicesUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityFileCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetOneDriveActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetOneDriveActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetOneDriveActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveUsageAccountCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveUsageAccountCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveUsageAccountCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetOneDriveUsageAccountDetailWithDateRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetOneDriveUsageAccountDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetOneDriveUsageAccountDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getOneDriveUsageAccountDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveUsageAccountDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageAccountDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveUsageAccountDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveUsageAccountDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveUsageFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageFileCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getOneDriveUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetOneDriveUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetOneDriveUsageStorageWithPeriod(period: string | undefined) : MicrosoftGraphGetOneDriveUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetOneDriveUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getPrinterArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param printerId Usage: printerId='{printerId}'
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, printerId: string | undefined, startDateTime: Date | undefined) : MicrosoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!printerId) throw new Error("printerId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new MicrosoftGraphGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, printerId, startDateTime);
    };
    /**
     * Provides operations to call the getSharePointActivityFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointActivityFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityFileCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityPages method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointActivityPagesWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityPagesWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointActivityPagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointActivityPagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetSharePointActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetSharePointActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetSharePointActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetSharePointSiteUsageDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetSharePointSiteUsageDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsageDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointSiteUsageDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointSiteUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageFileCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointSiteUsageFileCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageFileCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointSiteUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsagePages method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointSiteUsagePagesWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsagePagesWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointSiteUsagePagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsagePagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageSiteCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageSiteCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSharePointSiteUsageStorage method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSharePointSiteUsageStorageWithPeriodRequestBuilder
     */
    public microsoftGraphGetSharePointSiteUsageStorageWithPeriod(period: string | undefined) : MicrosoftGraphGetSharePointSiteUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSharePointSiteUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetSkypeForBusinessActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getSkypeForBusinessDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessOrganizerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessParticipantActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityMinuteCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getSkypeForBusinessPeerToPeerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetTeamsDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetTeamsDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetTeamsDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsDeviceUsageUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsUserActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsUserActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsUserActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsUserActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsUserActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsUserActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetTeamsUserActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetTeamsUserActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetTeamsUserActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getTeamsUserActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetTeamsUserActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetTeamsUserActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetTeamsUserActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetTeamsUserActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getUserArchivedPrintJobs method.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @param userId Usage: userId='{userId}'
     * @returns a microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public microsoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime(endDateTime: Date | undefined, startDateTime: Date | undefined, userId: string | undefined) : MicrosoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        if(!userId) throw new Error("userId cannot be undefined");
        return new MicrosoftGraphGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, endDateTime, startDateTime, userId);
    };
    /**
     * Provides operations to call the getYammerActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerActivityUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetYammerActivityUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetYammerActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetYammerActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerActivityUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerActivityUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerActivityUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageDistributionUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetYammerDeviceUsageUserDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetYammerDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetYammerDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerDeviceUsageUserDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerDeviceUsageUserDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerGroupsActivityCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerGroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerGroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param date Usage: date={date}
     * @returns a microsoftGraphGetYammerGroupsActivityDetailWithDateRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityDetailWithDate(date: DateOnly | undefined) : MicrosoftGraphGetYammerGroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new MicrosoftGraphGetYammerGroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityDetail method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerGroupsActivityDetailWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityDetailWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerGroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerGroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the getYammerGroupsActivityGroupCounts method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public microsoftGraphGetYammerGroupsActivityGroupCountsWithPeriod(period: string | undefined) : MicrosoftGraphGetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphGetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Provides operations to call the managedDeviceEnrollmentFailureDetails method.
     * @param filter Usage: filter='{filter}'
     * @param skip Usage: skip={skip}
     * @param skipToken Usage: skipToken='{skipToken}'
     * @param top Usage: top={top}
     * @returns a microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder
     */
    public microsoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken(filter: string | undefined, skip: number | undefined, skipToken: string | undefined, top: number | undefined) : MicrosoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder {
        if(!filter) throw new Error("filter cannot be undefined");
        if(!skip) throw new Error("skip cannot be undefined");
        if(!skipToken) throw new Error("skipToken cannot be undefined");
        if(!top) throw new Error("top cannot be undefined");
        return new MicrosoftGraphManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder(this.pathParameters, this.requestAdapter, filter, skip, skipToken, top);
    };
    /**
     * Provides operations to call the managedDeviceEnrollmentTopFailures method.
     * @param period Usage: period='{period}'
     * @returns a microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder
     */
    public microsoftGraphManagedDeviceEnrollmentTopFailuresWithPeriod(period: string | undefined) : MicrosoftGraphManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new MicrosoftGraphManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
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
     * @param body The request body
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
     * @param body The request body
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
