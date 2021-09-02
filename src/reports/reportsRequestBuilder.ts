import {DailyPrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByPrinterRequestBuilder} from './dailyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {DailyPrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder';
import {PrintUsageByUserRequestBuilder} from './dailyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {PrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder';
import {MonthlyPrintUsageByPrinterRequestBuilder} from './monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder';
import {PrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/item/printUsageByUserRequestBuilder';
import {MonthlyPrintUsageByUserRequestBuilder} from './monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder';
import {ReportRoot} from './reportRoot';
import {Reports} from './reports';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /reports  */
export class ReportsRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get dailyPrintUsageByPrinter(): DailyPrintUsageByPrinterRequestBuilder {
        return new DailyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get dailyPrintUsageByUser(): DailyPrintUsageByUserRequestBuilder {
        return new DailyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get monthlyPrintUsageByPrinter(): MonthlyPrintUsageByPrinterRequestBuilder {
        return new MonthlyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get monthlyPrintUsageByUser(): MonthlyPrintUsageByUserRequestBuilder {
        return new MonthlyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/reports";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Reports | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.reports.dailyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a printUsageByPrinterRequestBuilder
     */
    public dailyPrintUsageByPrinterById(id: String) : PrintUsageByPrinterRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.reports.dailyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a printUsageByUserRequestBuilder
     */
    public dailyPrintUsageByUserById(id: String) : PrintUsageByUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByUser/" + id, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.deviceConfigurationDeviceActivity()
     * @returns a deviceConfigurationDeviceActivityRequestBuilder
     */
    public deviceConfigurationDeviceActivity() : DeviceConfigurationDeviceActivityRequestBuilder {
        return new DeviceConfigurationDeviceActivityRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.deviceConfigurationUserActivity()
     * @returns a deviceConfigurationUserActivityRequestBuilder
     */
    public deviceConfigurationUserActivity() : DeviceConfigurationUserActivityRequestBuilder {
        return new DeviceConfigurationUserActivityRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<ReportRoot>(requestInfo, ReportRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailActivityCountsRequestBuilder
     */
    public getEmailActivityCounts(period: string | undefined) : GetEmailActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailActivityUserCountsRequestBuilder
     */
    public getEmailActivityUserCounts(period: string | undefined) : GetEmailActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getEmailActivityUserDetailRequestBuilder
     */
    public getEmailActivityUserDetail(date: string | undefined) : GetEmailActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageAppsUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageAppsUserCountsRequestBuilder
     */
    public getEmailAppUsageAppsUserCounts(period: string | undefined) : GetEmailAppUsageAppsUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageAppsUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageUserCountsRequestBuilder
     */
    public getEmailAppUsageUserCounts(period: string | undefined) : GetEmailAppUsageUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getEmailAppUsageUserDetailRequestBuilder
     */
    public getEmailAppUsageUserDetail(date: string | undefined) : GetEmailAppUsageUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetEmailAppUsageUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getEmailAppUsageVersionsUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getEmailAppUsageVersionsUserCountsRequestBuilder
     */
    public getEmailAppUsageVersionsUserCounts(period: string | undefined) : GetEmailAppUsageVersionsUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetEmailAppUsageVersionsUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getGroupArchivedPrintJobs(groupId='{groupId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param groupId Usage: groupId={groupId}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getGroupArchivedPrintJobsRequestBuilder
     */
    public getGroupArchivedPrintJobs(groupId: string | undefined, startDateTime: DateTimeOffset | undefined, endDateTime: DateTimeOffset | undefined) : GetGroupArchivedPrintJobsRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!groupId) throw new Error("groupId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetGroupArchivedPrintJobsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, groupId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageDetail(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageDetailRequestBuilder
     */
    public getMailboxUsageDetail(period: string | undefined) : GetMailboxUsageDetailRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageMailboxCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageMailboxCountsRequestBuilder
     */
    public getMailboxUsageMailboxCounts(period: string | undefined) : GetMailboxUsageMailboxCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageMailboxCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageQuotaStatusMailboxCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageQuotaStatusMailboxCountsRequestBuilder
     */
    public getMailboxUsageQuotaStatusMailboxCounts(period: string | undefined) : GetMailboxUsageQuotaStatusMailboxCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageQuotaStatusMailboxCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getMailboxUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getMailboxUsageStorageRequestBuilder
     */
    public getMailboxUsageStorage(period: string | undefined) : GetMailboxUsageStorageRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetMailboxUsageStorageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationCounts()
     * @returns a getOffice365ActivationCountsRequestBuilder
     */
    public getOffice365ActivationCounts() : GetOffice365ActivationCountsRequestBuilder {
        return new GetOffice365ActivationCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationsUserCounts()
     * @returns a getOffice365ActivationsUserCountsRequestBuilder
     */
    public getOffice365ActivationsUserCounts() : GetOffice365ActivationsUserCountsRequestBuilder {
        return new GetOffice365ActivationsUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActivationsUserDetail()
     * @returns a getOffice365ActivationsUserDetailRequestBuilder
     */
    public getOffice365ActivationsUserDetail() : GetOffice365ActivationsUserDetailRequestBuilder {
        return new GetOffice365ActivationsUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActiveUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365ActiveUserCountsRequestBuilder
     */
    public getOffice365ActiveUserCounts(period: string | undefined) : GetOffice365ActiveUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ActiveUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ActiveUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOffice365ActiveUserDetailRequestBuilder
     */
    public getOffice365ActiveUserDetail(date: string | undefined) : GetOffice365ActiveUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365ActiveUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityCountsRequestBuilder
     */
    public getOffice365GroupsActivityCounts(period: string | undefined) : GetOffice365GroupsActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOffice365GroupsActivityDetailRequestBuilder
     */
    public getOffice365GroupsActivityDetail(date: string | undefined) : GetOffice365GroupsActivityDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOffice365GroupsActivityDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityFileCountsRequestBuilder
     */
    public getOffice365GroupsActivityFileCounts(period: string | undefined) : GetOffice365GroupsActivityFileCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityFileCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityGroupCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityGroupCountsRequestBuilder
     */
    public getOffice365GroupsActivityGroupCounts(period: string | undefined) : GetOffice365GroupsActivityGroupCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityGroupCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365GroupsActivityStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365GroupsActivityStorageRequestBuilder
     */
    public getOffice365GroupsActivityStorage(period: string | undefined) : GetOffice365GroupsActivityStorageRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365GroupsActivityStorageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOffice365ServicesUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOffice365ServicesUserCountsRequestBuilder
     */
    public getOffice365ServicesUserCounts(period: string | undefined) : GetOffice365ServicesUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOffice365ServicesUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveActivityFileCountsRequestBuilder
     */
    public getOneDriveActivityFileCounts(period: string | undefined) : GetOneDriveActivityFileCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityFileCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveActivityUserCountsRequestBuilder
     */
    public getOneDriveActivityUserCounts(period: string | undefined) : GetOneDriveActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOneDriveActivityUserDetailRequestBuilder
     */
    public getOneDriveActivityUserDetail(date: string | undefined) : GetOneDriveActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageAccountCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageAccountCountsRequestBuilder
     */
    public getOneDriveUsageAccountCounts(period: string | undefined) : GetOneDriveUsageAccountCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageAccountCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageAccountDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getOneDriveUsageAccountDetailRequestBuilder
     */
    public getOneDriveUsageAccountDetail(date: string | undefined) : GetOneDriveUsageAccountDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetOneDriveUsageAccountDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageFileCountsRequestBuilder
     */
    public getOneDriveUsageFileCounts(period: string | undefined) : GetOneDriveUsageFileCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageFileCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getOneDriveUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getOneDriveUsageStorageRequestBuilder
     */
    public getOneDriveUsageStorage(period: string | undefined) : GetOneDriveUsageStorageRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetOneDriveUsageStorageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getPrinterArchivedPrintJobs(printerId='{printerId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param printerId Usage: printerId={printerId}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @returns a getPrinterArchivedPrintJobsRequestBuilder
     */
    public getPrinterArchivedPrintJobs(printerId: string | undefined, startDateTime: DateTimeOffset | undefined, endDateTime: DateTimeOffset | undefined) : GetPrinterArchivedPrintJobsRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!printerId) throw new Error("printerId cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new GetPrinterArchivedPrintJobsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, printerId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityFileCountsRequestBuilder
     */
    public getSharePointActivityFileCounts(period: string | undefined) : GetSharePointActivityFileCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityFileCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityPages(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityPagesRequestBuilder
     */
    public getSharePointActivityPages(period: string | undefined) : GetSharePointActivityPagesRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityPagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointActivityUserCountsRequestBuilder
     */
    public getSharePointActivityUserCounts(period: string | undefined) : GetSharePointActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSharePointActivityUserDetailRequestBuilder
     */
    public getSharePointActivityUserDetail(date: string | undefined) : GetSharePointActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSharePointSiteUsageDetailRequestBuilder
     */
    public getSharePointSiteUsageDetail(date: string | undefined) : GetSharePointSiteUsageDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSharePointSiteUsageDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageFileCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageFileCountsRequestBuilder
     */
    public getSharePointSiteUsageFileCounts(period: string | undefined) : GetSharePointSiteUsageFileCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageFileCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsagePages(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsagePagesRequestBuilder
     */
    public getSharePointSiteUsagePages(period: string | undefined) : GetSharePointSiteUsagePagesRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsagePagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageSiteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageSiteCountsRequestBuilder
     */
    public getSharePointSiteUsageSiteCounts(period: string | undefined) : GetSharePointSiteUsageSiteCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageSiteCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSharePointSiteUsageStorage(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSharePointSiteUsageStorageRequestBuilder
     */
    public getSharePointSiteUsageStorage(period: string | undefined) : GetSharePointSiteUsageStorageRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSharePointSiteUsageStorageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessActivityCountsRequestBuilder
     */
    public getSkypeForBusinessActivityCounts(period: string | undefined) : GetSkypeForBusinessActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessActivityUserCountsRequestBuilder
     */
    public getSkypeForBusinessActivityUserCounts(period: string | undefined) : GetSkypeForBusinessActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessActivityUserDetailRequestBuilder
     */
    public getSkypeForBusinessActivityUserDetail(date: string | undefined) : GetSkypeForBusinessActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessDeviceUsageDistributionUserCountsRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageDistributionUserCounts(period: string | undefined) : GetSkypeForBusinessDeviceUsageDistributionUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageDistributionUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessDeviceUsageUserCountsRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserCounts(period: string | undefined) : GetSkypeForBusinessDeviceUsageUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getSkypeForBusinessDeviceUsageUserDetailRequestBuilder
     */
    public getSkypeForBusinessDeviceUsageUserDetail(date: string | undefined) : GetSkypeForBusinessDeviceUsageUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityCountsRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityCounts(period: string | undefined) : GetSkypeForBusinessOrganizerActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityMinuteCountsRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityMinuteCounts(period: string | undefined) : GetSkypeForBusinessOrganizerActivityMinuteCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityMinuteCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessOrganizerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessOrganizerActivityUserCountsRequestBuilder
     */
    public getSkypeForBusinessOrganizerActivityUserCounts(period: string | undefined) : GetSkypeForBusinessOrganizerActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessOrganizerActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityCountsRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityCounts(period: string | undefined) : GetSkypeForBusinessParticipantActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityMinuteCountsRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityMinuteCounts(period: string | undefined) : GetSkypeForBusinessParticipantActivityMinuteCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityMinuteCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessParticipantActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessParticipantActivityUserCountsRequestBuilder
     */
    public getSkypeForBusinessParticipantActivityUserCounts(period: string | undefined) : GetSkypeForBusinessParticipantActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessParticipantActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityCountsRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityCounts(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityMinuteCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityMinuteCountsRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityMinuteCounts(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityMinuteCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityMinuteCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getSkypeForBusinessPeerToPeerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getSkypeForBusinessPeerToPeerActivityUserCountsRequestBuilder
     */
    public getSkypeForBusinessPeerToPeerActivityUserCounts(period: string | undefined) : GetSkypeForBusinessPeerToPeerActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetSkypeForBusinessPeerToPeerActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsDeviceUsageDistributionUserCountsRequestBuilder
     */
    public getTeamsDeviceUsageDistributionUserCounts(period: string | undefined) : GetTeamsDeviceUsageDistributionUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageDistributionUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsDeviceUsageUserCountsRequestBuilder
     */
    public getTeamsDeviceUsageUserCounts(period: string | undefined) : GetTeamsDeviceUsageUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsDeviceUsageUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getTeamsDeviceUsageUserDetailRequestBuilder
     */
    public getTeamsDeviceUsageUserDetail(date: string | undefined) : GetTeamsDeviceUsageUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsDeviceUsageUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsUserActivityCountsRequestBuilder
     */
    public getTeamsUserActivityCounts(period: string | undefined) : GetTeamsUserActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getTeamsUserActivityUserCountsRequestBuilder
     */
    public getTeamsUserActivityUserCounts(period: string | undefined) : GetTeamsUserActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetTeamsUserActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getTeamsUserActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getTeamsUserActivityUserDetailRequestBuilder
     */
    public getTeamsUserActivityUserDetail(date: string | undefined) : GetTeamsUserActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetTeamsUserActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getUserArchivedPrintJobs(userId='{userId}',startDateTime={startDateTime},endDateTime={endDateTime})
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param startDateTime Usage: startDateTime={startDateTime}
     * @param userId Usage: userId={userId}
     * @returns a getUserArchivedPrintJobsRequestBuilder
     */
    public getUserArchivedPrintJobs(userId: string | undefined, startDateTime: DateTimeOffset | undefined, endDateTime: DateTimeOffset | undefined) : GetUserArchivedPrintJobsRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        if(!userId) throw new Error("userId cannot be undefined");
        return new GetUserArchivedPrintJobsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, userId, startDateTime, endDateTime);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerActivityCountsRequestBuilder
     */
    public getYammerActivityCounts(period: string | undefined) : GetYammerActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerActivityUserCountsRequestBuilder
     */
    public getYammerActivityUserCounts(period: string | undefined) : GetYammerActivityUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerActivityUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerActivityUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerActivityUserDetailRequestBuilder
     */
    public getYammerActivityUserDetail(date: string | undefined) : GetYammerActivityUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerActivityUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageDistributionUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerDeviceUsageDistributionUserCountsRequestBuilder
     */
    public getYammerDeviceUsageDistributionUserCounts(period: string | undefined) : GetYammerDeviceUsageDistributionUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageDistributionUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageUserCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerDeviceUsageUserCountsRequestBuilder
     */
    public getYammerDeviceUsageUserCounts(period: string | undefined) : GetYammerDeviceUsageUserCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerDeviceUsageUserCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerDeviceUsageUserDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerDeviceUsageUserDetailRequestBuilder
     */
    public getYammerDeviceUsageUserDetail(date: string | undefined) : GetYammerDeviceUsageUserDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerDeviceUsageUserDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerGroupsActivityCountsRequestBuilder
     */
    public getYammerGroupsActivityCounts(period: string | undefined) : GetYammerGroupsActivityCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityDetail(date={date})
     * @param date Usage: date={date}
     * @returns a getYammerGroupsActivityDetailRequestBuilder
     */
    public getYammerGroupsActivityDetail(date: string | undefined) : GetYammerGroupsActivityDetailRequestBuilder {
        if(!date) throw new Error("date cannot be undefined");
        return new GetYammerGroupsActivityDetailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, date);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.getYammerGroupsActivityGroupCounts(period='{period}')
     * @param period Usage: period={period}
     * @returns a getYammerGroupsActivityGroupCountsRequestBuilder
     */
    public getYammerGroupsActivityGroupCounts(period: string | undefined) : GetYammerGroupsActivityGroupCountsRequestBuilder {
        if(!period) throw new Error("period cannot be undefined");
        return new GetYammerGroupsActivityGroupCountsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, period);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentFailureDetails()
     * @returns a managedDeviceEnrollmentFailureDetailsRequestBuilder
     */
    public managedDeviceEnrollmentFailureDetails() : ManagedDeviceEnrollmentFailureDetailsRequestBuilder {
        return new ManagedDeviceEnrollmentFailureDetailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /reports/microsoft.graph.managedDeviceEnrollmentTopFailures()
     * @returns a managedDeviceEnrollmentTopFailuresRequestBuilder
     */
    public managedDeviceEnrollmentTopFailures() : ManagedDeviceEnrollmentTopFailuresRequestBuilder {
        return new ManagedDeviceEnrollmentTopFailuresRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.reports.monthlyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a printUsageByPrinterRequestBuilder
     */
    public monthlyPrintUsageByPrinterById(id: String) : PrintUsageByPrinterRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.reports.monthlyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a printUsageByUserRequestBuilder
     */
    public monthlyPrintUsageByUserById(id: String) : PrintUsageByUserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByUser/" + id, this.httpCore, false);
    };
    /**
     * Update reports
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Reports | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
