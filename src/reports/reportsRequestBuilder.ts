import {ReportRoot} from '../models/microsoft/graph/reportRoot';
import {DailyPrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByPrinterRequestBuilder as ia93f446642a7da6e6b121f647bb4d4ab1fb7a15331ca1ece54c9a2587ac3d44e} from './dailyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {DailyPrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import {PrintUsageByUserRequestBuilder as ie73b737b58b6f47a96a936ca4194e058c681a6ec2233078a94f1d766889780ae} from './dailyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {DeviceConfigurationDeviceActivityRequestBuilder} from './deviceConfigurationDeviceActivity/deviceConfigurationDeviceActivityRequestBuilder';
import {DeviceConfigurationUserActivityRequestBuilder} from './deviceConfigurationUserActivity/deviceConfigurationUserActivityRequestBuilder';
import {GetEmailActivityCountsWithPeriodRequestBuilder} from './getEmailActivityCountsWithPeriod/getEmailActivityCountsWithPeriodRequestBuilder';
import {GetEmailActivityUserCountsWithPeriodRequestBuilder} from './getEmailActivityUserCountsWithPeriod/getEmailActivityUserCountsWithPeriodRequestBuilder';
import {GetEmailActivityUserDetailWithDateRequestBuilder} from './getEmailActivityUserDetailWithDate/getEmailActivityUserDetailWithDateRequestBuilder';
import {GetEmailActivityUserDetailWithPeriodRequestBuilder} from './getEmailActivityUserDetailWithPeriod/getEmailActivityUserDetailWithPeriodRequestBuilder';
import {GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder} from './getEmailAppUsageAppsUserCountsWithPeriod/getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder';
import {GetEmailAppUsageUserCountsWithPeriodRequestBuilder} from './getEmailAppUsageUserCountsWithPeriod/getEmailAppUsageUserCountsWithPeriodRequestBuilder';
import {GetEmailAppUsageUserDetailWithDateRequestBuilder} from './getEmailAppUsageUserDetailWithDate/getEmailAppUsageUserDetailWithDateRequestBuilder';
import {GetEmailAppUsageUserDetailWithPeriodRequestBuilder} from './getEmailAppUsageUserDetailWithPeriod/getEmailAppUsageUserDetailWithPeriodRequestBuilder';
import {GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder} from './getEmailAppUsageVersionsUserCountsWithPeriod/getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime/getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetMailboxUsageDetailWithPeriodRequestBuilder} from './getMailboxUsageDetailWithPeriod/getMailboxUsageDetailWithPeriodRequestBuilder';
import {GetMailboxUsageMailboxCountsWithPeriodRequestBuilder} from './getMailboxUsageMailboxCountsWithPeriod/getMailboxUsageMailboxCountsWithPeriodRequestBuilder';
import {GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder} from './getMailboxUsageQuotaStatusMailboxCountsWithPeriod/getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder';
import {GetMailboxUsageStorageWithPeriodRequestBuilder} from './getMailboxUsageStorageWithPeriod/getMailboxUsageStorageWithPeriodRequestBuilder';
import {GetOffice365ActivationCountsRequestBuilder} from './getOffice365ActivationCounts/getOffice365ActivationCountsRequestBuilder';
import {GetOffice365ActivationsUserCountsRequestBuilder} from './getOffice365ActivationsUserCounts/getOffice365ActivationsUserCountsRequestBuilder';
import {GetOffice365ActivationsUserDetailRequestBuilder} from './getOffice365ActivationsUserDetail/getOffice365ActivationsUserDetailRequestBuilder';
import {GetOffice365ActiveUserCountsWithPeriodRequestBuilder} from './getOffice365ActiveUserCountsWithPeriod/getOffice365ActiveUserCountsWithPeriodRequestBuilder';
import {GetOffice365ActiveUserDetailWithDateRequestBuilder} from './getOffice365ActiveUserDetailWithDate/getOffice365ActiveUserDetailWithDateRequestBuilder';
import {GetOffice365ActiveUserDetailWithPeriodRequestBuilder} from './getOffice365ActiveUserDetailWithPeriod/getOffice365ActiveUserDetailWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityCountsWithPeriodRequestBuilder} from './getOffice365GroupsActivityCountsWithPeriod/getOffice365GroupsActivityCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityDetailWithDateRequestBuilder} from './getOffice365GroupsActivityDetailWithDate/getOffice365GroupsActivityDetailWithDateRequestBuilder';
import {GetOffice365GroupsActivityDetailWithPeriodRequestBuilder} from './getOffice365GroupsActivityDetailWithPeriod/getOffice365GroupsActivityDetailWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder} from './getOffice365GroupsActivityFileCountsWithPeriod/getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder} from './getOffice365GroupsActivityGroupCountsWithPeriod/getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder';
import {GetOffice365GroupsActivityStorageWithPeriodRequestBuilder} from './getOffice365GroupsActivityStorageWithPeriod/getOffice365GroupsActivityStorageWithPeriodRequestBuilder';
import {GetOffice365ServicesUserCountsWithPeriodRequestBuilder} from './getOffice365ServicesUserCountsWithPeriod/getOffice365ServicesUserCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityFileCountsWithPeriodRequestBuilder} from './getOneDriveActivityFileCountsWithPeriod/getOneDriveActivityFileCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityUserCountsWithPeriodRequestBuilder} from './getOneDriveActivityUserCountsWithPeriod/getOneDriveActivityUserCountsWithPeriodRequestBuilder';
import {GetOneDriveActivityUserDetailWithDateRequestBuilder} from './getOneDriveActivityUserDetailWithDate/getOneDriveActivityUserDetailWithDateRequestBuilder';
import {GetOneDriveActivityUserDetailWithPeriodRequestBuilder} from './getOneDriveActivityUserDetailWithPeriod/getOneDriveActivityUserDetailWithPeriodRequestBuilder';
import {GetOneDriveUsageAccountCountsWithPeriodRequestBuilder} from './getOneDriveUsageAccountCountsWithPeriod/getOneDriveUsageAccountCountsWithPeriodRequestBuilder';
import {GetOneDriveUsageAccountDetailWithDateRequestBuilder} from './getOneDriveUsageAccountDetailWithDate/getOneDriveUsageAccountDetailWithDateRequestBuilder';
import {GetOneDriveUsageAccountDetailWithPeriodRequestBuilder} from './getOneDriveUsageAccountDetailWithPeriod/getOneDriveUsageAccountDetailWithPeriodRequestBuilder';
import {GetOneDriveUsageFileCountsWithPeriodRequestBuilder} from './getOneDriveUsageFileCountsWithPeriod/getOneDriveUsageFileCountsWithPeriodRequestBuilder';
import {GetOneDriveUsageStorageWithPeriodRequestBuilder} from './getOneDriveUsageStorageWithPeriod/getOneDriveUsageStorageWithPeriodRequestBuilder';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime/getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetSharePointActivityFileCountsWithPeriodRequestBuilder} from './getSharePointActivityFileCountsWithPeriod/getSharePointActivityFileCountsWithPeriodRequestBuilder';
import {GetSharePointActivityPagesWithPeriodRequestBuilder} from './getSharePointActivityPagesWithPeriod/getSharePointActivityPagesWithPeriodRequestBuilder';
import {GetSharePointActivityUserCountsWithPeriodRequestBuilder} from './getSharePointActivityUserCountsWithPeriod/getSharePointActivityUserCountsWithPeriodRequestBuilder';
import {GetSharePointActivityUserDetailWithDateRequestBuilder} from './getSharePointActivityUserDetailWithDate/getSharePointActivityUserDetailWithDateRequestBuilder';
import {GetSharePointActivityUserDetailWithPeriodRequestBuilder} from './getSharePointActivityUserDetailWithPeriod/getSharePointActivityUserDetailWithPeriodRequestBuilder';
import {GetSharePointSiteUsageDetailWithDateRequestBuilder} from './getSharePointSiteUsageDetailWithDate/getSharePointSiteUsageDetailWithDateRequestBuilder';
import {GetSharePointSiteUsageDetailWithPeriodRequestBuilder} from './getSharePointSiteUsageDetailWithPeriod/getSharePointSiteUsageDetailWithPeriodRequestBuilder';
import {GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder} from './getSharePointSiteUsageFileCountsWithPeriod/getSharePointSiteUsageFileCountsWithPeriodRequestBuilder';
import {GetSharePointSiteUsagePagesWithPeriodRequestBuilder} from './getSharePointSiteUsagePagesWithPeriod/getSharePointSiteUsagePagesWithPeriodRequestBuilder';
import {GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder} from './getSharePointSiteUsageSiteCountsWithPeriod/getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder';
import {GetSharePointSiteUsageStorageWithPeriodRequestBuilder} from './getSharePointSiteUsageStorageWithPeriod/getSharePointSiteUsageStorageWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder} from './getSkypeForBusinessActivityCountsWithPeriod/getSkypeForBusinessActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessActivityUserCountsWithPeriod/getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder} from './getSkypeForBusinessActivityUserDetailWithDate/getSkypeForBusinessActivityUserDetailWithDateRequestBuilder';
import {GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder} from './getSkypeForBusinessActivityUserDetailWithPeriod/getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod/getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessDeviceUsageUserCountsWithPeriod/getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder} from './getSkypeForBusinessDeviceUsageUserDetailWithDate/getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder';
import {GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder} from './getSkypeForBusinessDeviceUsageUserDetailWithPeriod/getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder} from './getSkypeForBusinessOrganizerActivityCountsWithPeriod/getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder} from './getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod/getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessOrganizerActivityUserCountsWithPeriod/getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder} from './getSkypeForBusinessParticipantActivityCountsWithPeriod/getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder} from './getSkypeForBusinessParticipantActivityMinuteCountsWithPeriod/getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessParticipantActivityUserCountsWithPeriod/getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder} from './getSkypeForBusinessPeerToPeerActivityCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder} from './getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder';
import {GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder} from './getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod/getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './getTeamsDeviceUsageDistributionUserCountsWithPeriod/getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder} from './getTeamsDeviceUsageUserCountsWithPeriod/getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetTeamsDeviceUsageUserDetailWithDateRequestBuilder} from './getTeamsDeviceUsageUserDetailWithDate/getTeamsDeviceUsageUserDetailWithDateRequestBuilder';
import {GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder} from './getTeamsDeviceUsageUserDetailWithPeriod/getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetTeamsUserActivityCountsWithPeriodRequestBuilder} from './getTeamsUserActivityCountsWithPeriod/getTeamsUserActivityCountsWithPeriodRequestBuilder';
import {GetTeamsUserActivityUserCountsWithPeriodRequestBuilder} from './getTeamsUserActivityUserCountsWithPeriod/getTeamsUserActivityUserCountsWithPeriodRequestBuilder';
import {GetTeamsUserActivityUserDetailWithDateRequestBuilder} from './getTeamsUserActivityUserDetailWithDate/getTeamsUserActivityUserDetailWithDateRequestBuilder';
import {GetTeamsUserActivityUserDetailWithPeriodRequestBuilder} from './getTeamsUserActivityUserDetailWithPeriod/getTeamsUserActivityUserDetailWithPeriodRequestBuilder';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime/getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder';
import {GetYammerActivityCountsWithPeriodRequestBuilder} from './getYammerActivityCountsWithPeriod/getYammerActivityCountsWithPeriodRequestBuilder';
import {GetYammerActivityUserCountsWithPeriodRequestBuilder} from './getYammerActivityUserCountsWithPeriod/getYammerActivityUserCountsWithPeriodRequestBuilder';
import {GetYammerActivityUserDetailWithDateRequestBuilder} from './getYammerActivityUserDetailWithDate/getYammerActivityUserDetailWithDateRequestBuilder';
import {GetYammerActivityUserDetailWithPeriodRequestBuilder} from './getYammerActivityUserDetailWithPeriod/getYammerActivityUserDetailWithPeriodRequestBuilder';
import {GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder} from './getYammerDeviceUsageDistributionUserCountsWithPeriod/getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder';
import {GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder} from './getYammerDeviceUsageUserCountsWithPeriod/getYammerDeviceUsageUserCountsWithPeriodRequestBuilder';
import {GetYammerDeviceUsageUserDetailWithDateRequestBuilder} from './getYammerDeviceUsageUserDetailWithDate/getYammerDeviceUsageUserDetailWithDateRequestBuilder';
import {GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder} from './getYammerDeviceUsageUserDetailWithPeriod/getYammerDeviceUsageUserDetailWithPeriodRequestBuilder';
import {GetYammerGroupsActivityCountsWithPeriodRequestBuilder} from './getYammerGroupsActivityCountsWithPeriod/getYammerGroupsActivityCountsWithPeriodRequestBuilder';
import {GetYammerGroupsActivityDetailWithDateRequestBuilder} from './getYammerGroupsActivityDetailWithDate/getYammerGroupsActivityDetailWithDateRequestBuilder';
import {GetYammerGroupsActivityDetailWithPeriodRequestBuilder} from './getYammerGroupsActivityDetailWithPeriod/getYammerGroupsActivityDetailWithPeriodRequestBuilder';
import {GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder} from './getYammerGroupsActivityGroupCountsWithPeriod/getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder';
import {ManagedDeviceEnrollmentFailureDetailsRequestBuilder} from './managedDeviceEnrollmentFailureDetails/managedDeviceEnrollmentFailureDetailsRequestBuilder';
import {ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder} from './managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken/managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder';
import {ManagedDeviceEnrollmentTopFailuresRequestBuilder} from './managedDeviceEnrollmentTopFailures/managedDeviceEnrollmentTopFailuresRequestBuilder';
import {ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder} from './managedDeviceEnrollmentTopFailuresWithPeriod/managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder';
import {PrintUsageByPrinterRequestBuilder as iaafa86dccc49d3e41ea8e657dece09ce19e473845958e2db749fe06f3d666903} from './monthlyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {MonthlyPrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByUserRequestBuilder as i617bae82dfe555c7f28788c1f9054d51e9ebaa17a9de3da27d74277de5f2f2f1} from './monthlyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {MonthlyPrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /reports  */
export class ReportsRequestBuilder {
    public get dailyPrintUsageByPrinter(): DailyPrintUsageByPrinterRequestBuilder {
        return new DailyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dailyPrintUsageByUser(): DailyPrintUsageByUserRequestBuilder {
        return new DailyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get monthlyPrintUsageByPrinter(): MonthlyPrintUsageByPrinterRequestBuilder {
        return new MonthlyPrintUsageByPrinterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get monthlyPrintUsageByUser(): MonthlyPrintUsageByUserRequestBuilder {
        return new MonthlyPrintUsageByUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/reports{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ReportRoot | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.reports.dailyPrintUsageByPrinter.item collection
     * @param id Unique identifier of the item
     * @returns a printUsageByPrinterRequestBuilder
     */
    public dailyPrintUsageByPrinterById(id: string) : ia93f446642a7da6e6b121f647bb4d4ab1fb7a15331ca1ece54c9a2587ac3d44e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("printUsageByPrinter_id", id);
        return new ia93f446642a7da6e6b121f647bb4d4ab1fb7a15331ca1ece54c9a2587ac3d44e(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.reports.dailyPrintUsageByUser.item collection
     * @param id Unique identifier of the item
     * @returns a printUsageByUserRequestBuilder
     */
    public dailyPrintUsageByUserById(id: string) : ie73b737b58b6f47a96a936ca4194e058c681a6ec2233078a94f1d766889780ae {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("printUsageByUser_id", id);
        return new ie73b737b58b6f47a96a936ca4194e058c681a6ec2233078a94f1d766889780ae(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.deviceConfigurationDeviceActivity()
     * @returns a deviceConfigurationDeviceActivityRequestBuilder
     */
    public deviceConfigurationDeviceActivity() : DeviceConfigurationDeviceActivityRequestBuilder {
        return new DeviceConfigurationDeviceActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.deviceConfigurationUserActivity()
     * @returns a deviceConfigurationUserActivityRequestBuilder
     */
    public deviceConfigurationUserActivity() : DeviceConfigurationUserActivityRequestBuilder {
        return new DeviceConfigurationUserActivityRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ReportRoot>(requestInfo, ReportRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailActivityCountsWithPeriodRequestBuilder
     */
    public getEmailActivityCountsWithPeriod(period: string | undefined) : GetEmailActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailActivityUserCountsWithPeriodRequestBuilder
     */
    public getEmailActivityUserCountsWithPeriod(period: string | undefined) : GetEmailActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getEmailActivityUserDetailWithDateRequestBuilder
     */
    public getEmailActivityUserDetailWithDate(date: string | undefined) : GetEmailActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailActivityUserDetailWithPeriodRequestBuilder
     */
    public getEmailActivityUserDetailWithPeriod(period: string | undefined) : GetEmailActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageAppsUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageAppsUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageAppsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageAppsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getEmailAppUsageUserDetailWithDateRequestBuilder
     */
    public getEmailAppUsageUserDetailWithDate(date: string | undefined) : GetEmailAppUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailAppUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageUserDetailWithPeriodRequestBuilder
     */
    public getEmailAppUsageUserDetailWithPeriod(period: string | undefined) : GetEmailAppUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageVersionsUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder
     */
    public getEmailAppUsageVersionsUserCountsWithPeriod(period: string | undefined) : GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageVersionsUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getGroupArchivedPrintJobs(groupId='{groupId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param groupId Usage: groupId={groupId}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTime(groupId: string | undefined, startDateTime: Date | undefined, endDateTime: Date | undefined) : GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!groupId) throw new Error("groupId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, groupId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageDetailWithPeriodRequestBuilder
     */
    public getMailboxUsageDetailWithPeriod(period: string | undefined) : GetMailboxUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageMailboxCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageMailboxCountsWithPeriodRequestBuilder
     */
    public getMailboxUsageMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageQuotaStatusMailboxCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder
     */
    public getMailboxUsageQuotaStatusMailboxCountsWithPeriod(period: string | undefined) : GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageQuotaStatusMailboxCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageStorageWithPeriodRequestBuilder
     */
    public getMailboxUsageStorageWithPeriod(period: string | undefined) : GetMailboxUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationCounts()
     * @returns a getOffice365ActivationCountsRequestBuilder
     */
    public getOffice365ActivationCounts() : GetOffice365ActivationCountsRequestBuilder {
        return new GetOffice365ActivationCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationsUserCounts()
     * @returns a getOffice365ActivationsUserCountsRequestBuilder
     */
    public getOffice365ActivationsUserCounts() : GetOffice365ActivationsUserCountsRequestBuilder {
        return new GetOffice365ActivationsUserCountsRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationsUserDetail()
     * @returns a getOffice365ActivationsUserDetailRequestBuilder
     */
    public getOffice365ActivationsUserDetail() : GetOffice365ActivationsUserDetailRequestBuilder {
        return new GetOffice365ActivationsUserDetailRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActiveUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365ActiveUserCountsWithPeriodRequestBuilder
     */
    public getOffice365ActiveUserCountsWithPeriod(period: string | undefined) : GetOffice365ActiveUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActiveUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOffice365ActiveUserDetailWithDateRequestBuilder
     */
    public getOffice365ActiveUserDetailWithDate(date: string | undefined) : GetOffice365ActiveUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365ActiveUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActiveUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365ActiveUserDetailWithPeriodRequestBuilder
     */
    public getOffice365ActiveUserDetailWithPeriod(period: string | undefined) : GetOffice365ActiveUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOffice365GroupsActivityDetailWithDateRequestBuilder
     */
    public getOffice365GroupsActivityDetailWithDate(date: string | undefined) : GetOffice365GroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityDetailWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityDetailWithPeriod(period: string | undefined) : GetOffice365GroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityFileCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityFileCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityGroupCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityStorageWithPeriodRequestBuilder
     */
    public getOffice365GroupsActivityStorageWithPeriod(period: string | undefined) : GetOffice365GroupsActivityStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ServicesUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365ServicesUserCountsWithPeriodRequestBuilder
     */
    public getOffice365ServicesUserCountsWithPeriod(period: string | undefined) : GetOffice365ServicesUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ServicesUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveActivityFileCountsWithPeriodRequestBuilder
     */
    public getOneDriveActivityFileCountsWithPeriod(period: string | undefined) : GetOneDriveActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveActivityUserCountsWithPeriodRequestBuilder
     */
    public getOneDriveActivityUserCountsWithPeriod(period: string | undefined) : GetOneDriveActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOneDriveActivityUserDetailWithDateRequestBuilder
     */
    public getOneDriveActivityUserDetailWithDate(date: string | undefined) : GetOneDriveActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveActivityUserDetailWithPeriodRequestBuilder
     */
    public getOneDriveActivityUserDetailWithPeriod(period: string | undefined) : GetOneDriveActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageAccountCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageAccountCountsWithPeriodRequestBuilder
     */
    public getOneDriveUsageAccountCountsWithPeriod(period: string | undefined) : GetOneDriveUsageAccountCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageAccountDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOneDriveUsageAccountDetailWithDateRequestBuilder
     */
    public getOneDriveUsageAccountDetailWithDate(date: string | undefined) : GetOneDriveUsageAccountDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageAccountDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageAccountDetailWithPeriodRequestBuilder
     */
    public getOneDriveUsageAccountDetailWithPeriod(period: string | undefined) : GetOneDriveUsageAccountDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageFileCountsWithPeriodRequestBuilder
     */
    public getOneDriveUsageFileCountsWithPeriod(period: string | undefined) : GetOneDriveUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageStorageWithPeriodRequestBuilder
     */
    public getOneDriveUsageStorageWithPeriod(period: string | undefined) : GetOneDriveUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getPrinterArchivedPrintJobs(printerId='{printerId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param printerId Usage: printerId={printerId}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTime(printerId: string | undefined, startDateTime: Date | undefined, endDateTime: Date | undefined) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!printerId) throw new Error("printerId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, printerId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityFileCountsWithPeriodRequestBuilder
     */
    public getSharePointActivityFileCountsWithPeriod(period: string | undefined) : GetSharePointActivityFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityPages(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityPagesWithPeriodRequestBuilder
     */
    public getSharePointActivityPagesWithPeriod(period: string | undefined) : GetSharePointActivityPagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityPagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityUserCountsWithPeriodRequestBuilder
     */
    public getSharePointActivityUserCountsWithPeriod(period: string | undefined) : GetSharePointActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSharePointActivityUserDetailWithDateRequestBuilder
     */
    public getSharePointActivityUserDetailWithDate(date: string | undefined) : GetSharePointActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityUserDetailWithPeriodRequestBuilder
     */
    public getSharePointActivityUserDetailWithPeriod(period: string | undefined) : GetSharePointActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSharePointSiteUsageDetailWithDateRequestBuilder
     */
    public getSharePointSiteUsageDetailWithDate(date: string | undefined) : GetSharePointSiteUsageDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointSiteUsageDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageDetailWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageDetailWithPeriod(period: string | undefined) : GetSharePointSiteUsageDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageFileCountsWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageFileCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageFileCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsagePages(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsagePagesWithPeriodRequestBuilder
     */
    public getSharePointSiteUsagePagesWithPeriod(period: string | undefined) : GetSharePointSiteUsagePagesWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsagePagesWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageSiteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageSiteCountsWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageSiteCountsWithPeriod(period: string | undefined) : GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageSiteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageStorageWithPeriodRequestBuilder
     */
    public getSharePointSiteUsageStorageWithPeriod(period: string | undefined) : GetSharePointSiteUsageStorageWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageStorageWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessActivityUserDetailWithDateRequestBuilder
     */
    public getSkypeForBusinessActivityUserDetailWithDate(date: string | undefined) : GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder
     */
    public getSkypeForBusinessActivityUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserDetailWithDate(date: string | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityMinuteCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityUserCountsWithPeriod(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getTeamsDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getTeamsDeviceUsageUserDetailWithDate(date: string | undefined) : GetTeamsDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getTeamsDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsUserActivityCountsWithPeriodRequestBuilder
     */
    public getTeamsUserActivityCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsUserActivityUserCountsWithPeriodRequestBuilder
     */
    public getTeamsUserActivityUserCountsWithPeriod(period: string | undefined) : GetTeamsUserActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getTeamsUserActivityUserDetailWithDateRequestBuilder
     */
    public getTeamsUserActivityUserDetailWithDate(date: string | undefined) : GetTeamsUserActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsUserActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsUserActivityUserDetailWithPeriodRequestBuilder
     */
    public getTeamsUserActivityUserDetailWithPeriod(period: string | undefined) : GetTeamsUserActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getUserArchivedPrintJobs(userId='{userId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @param userId Usage: userId={userId}
     * @returns a getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTime(userId: string | undefined, startDateTime: Date | undefined, endDateTime: Date | undefined) : GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        if(!userId) throw new Error("userId cannot be undefined");
        return new GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, userId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerActivityCountsWithPeriodRequestBuilder
     */
    public getYammerActivityCountsWithPeriod(period: string | undefined) : GetYammerActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerActivityUserCountsWithPeriodRequestBuilder
     */
    public getYammerActivityUserCountsWithPeriod(period: string | undefined) : GetYammerActivityUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerActivityUserDetailWithDateRequestBuilder
     */
    public getYammerActivityUserDetailWithDate(date: string | undefined) : GetYammerActivityUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerActivityUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerActivityUserDetailWithPeriodRequestBuilder
     */
    public getYammerActivityUserDetailWithPeriod(period: string | undefined) : GetYammerActivityUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageDistributionUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageDistributionUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageUserCountsWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerDeviceUsageUserDetailWithDateRequestBuilder
     */
    public getYammerDeviceUsageUserDetailWithDate(date: string | undefined) : GetYammerDeviceUsageUserDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageUserDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerDeviceUsageUserDetailWithPeriodRequestBuilder
     */
    public getYammerDeviceUsageUserDetailWithPeriod(period: string | undefined) : GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerGroupsActivityCountsWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerGroupsActivityDetailWithDateRequestBuilder
     */
    public getYammerGroupsActivityDetailWithDate(date: string | undefined) : GetYammerGroupsActivityDetailWithDateRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerGroupsActivityDetailWithDateRequestBuilder(this.pathParameters, this.requestAdapter, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerGroupsActivityDetailWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityDetailWithPeriod(period: string | undefined) : GetYammerGroupsActivityDetailWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityDetailWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityGroupCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerGroupsActivityGroupCountsWithPeriodRequestBuilder
     */
    public getYammerGroupsActivityGroupCountsWithPeriod(period: string | undefined) : GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityGroupCountsWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentFailureDetails()
     * @returns a managedDeviceEnrollmentFailureDetailsRequestBuilder
     */
    public managedDeviceEnrollmentFailureDetails() : ManagedDeviceEnrollmentFailureDetailsRequestBuilder {
        return new ManagedDeviceEnrollmentFailureDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentFailureDetails(skip={skip},top={top},filter='{filter}',skipToken='{skipToken}')
     * @param filter Usage: filter={filter}
     * @param skip Usage: skip={skip}
     * @param skipToken Usage: skipToken={skipToken}
     * @param top Usage: top={top}
     * @returns a managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder
     */
    public managedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipToken(skip: number | undefined, top: number | undefined, filter: string | undefined, skipToken: string | undefined) : ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder {
        if(!filter) throw new Error("filter cannot be undefined");
        if(!skip) throw new Error("skip cannot be undefined");
        if(!skipToken) throw new Error("skipToken cannot be undefined");
        if(!top) throw new Error("top cannot be undefined");
        return new ManagedDeviceEnrollmentFailureDetailsWithSkipWithTopWithFilterWithSkipTokenRequestBuilder(this.pathParameters, this.requestAdapter, skip, top, filter, skipToken);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentTopFailures()
     * @returns a managedDeviceEnrollmentTopFailuresRequestBuilder
     */
    public managedDeviceEnrollmentTopFailures() : ManagedDeviceEnrollmentTopFailuresRequestBuilder {
        return new ManagedDeviceEnrollmentTopFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentTopFailures(period='{period}')
     * @param period Usage: period={period}
     * @returns a managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder
     */
    public managedDeviceEnrollmentTopFailuresWithPeriod(period: string | undefined) : ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder(this.pathParameters, this.requestAdapter, period);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.reports.monthlyPrintUsageByPrinter.item collection
     * @param id Unique identifier of the item
     * @returns a printUsageByPrinterRequestBuilder
     */
    public monthlyPrintUsageByPrinterById(id: string) : iaafa86dccc49d3e41ea8e657dece09ce19e473845958e2db749fe06f3d666903 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("printUsageByPrinter_id", id);
        return new iaafa86dccc49d3e41ea8e657dece09ce19e473845958e2db749fe06f3d666903(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.reports.monthlyPrintUsageByUser.item collection
     * @param id Unique identifier of the item
     * @returns a printUsageByUserRequestBuilder
     */
    public monthlyPrintUsageByUserById(id: string) : i617bae82dfe555c7f28788c1f9054d51e9ebaa17a9de3da27d74277de5f2f2f1 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("printUsageByUser_id", id);
        return new i617bae82dfe555c7f28788c1f9054d51e9ebaa17a9de3da27d74277de5f2f2f1(urlTplParams, this.requestAdapter);
    };
    /**
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ReportRoot | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
