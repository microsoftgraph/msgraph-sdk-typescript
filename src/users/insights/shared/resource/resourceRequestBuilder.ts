import {$refRequestBuilder} from './$ref/$refRequestBuilder';
import {CalendarSharingMessageRequestBuilder} from './calendarSharingMessage/calendarSharingMessageRequestBuilder';
import {Entity} from './entity';
import {ManagedAppProtectionRequestBuilder} from './managedAppProtection/managedAppProtectionRequestBuilder';
import {MobileAppContentFileRequestBuilder} from './mobileAppContentFile/mobileAppContentFileRequestBuilder';
import {PrintDocumentRequestBuilder} from './printDocument/printDocumentRequestBuilder';
import {PrintJobRequestBuilder} from './printJob/printJobRequestBuilder';
import {ScheduleChangeRequestRequestBuilder} from './scheduleChangeRequest/scheduleChangeRequestRequestBuilder';
import {TargetedManagedAppProtectionRequestBuilder} from './targetedManagedAppProtection/targetedManagedAppProtectionRequestBuilder';
import {WindowsInformationProtectionRequestBuilder} from './windowsInformationProtection/windowsInformationProtectionRequestBuilder';
import {WorkbookRangeRequestBuilder} from './workbookRange/workbookRangeRequestBuilder';
import {WorkbookRangeFillRequestBuilder} from './workbookRangeFill/workbookRangeFillRequestBuilder';
import {WorkbookRangeFormatRequestBuilder} from './workbookRangeFormat/workbookRangeFormatRequestBuilder';
import {WorkbookRangeSortRequestBuilder} from './workbookRangeSort/workbookRangeSortRequestBuilder';
import {WorkbookRangeViewRequestBuilder} from './workbookRangeView/workbookRangeViewRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/resource  */
export class ResourceRequestBuilder {
    public get $ref(): $refRequestBuilder {
        return new $refRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get calendarSharingMessage(): CalendarSharingMessageRequestBuilder {
        return new CalendarSharingMessageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get managedAppProtection(): ManagedAppProtectionRequestBuilder {
        return new ManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get mobileAppContentFile(): MobileAppContentFileRequestBuilder {
        return new MobileAppContentFileRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get printDocument(): PrintDocumentRequestBuilder {
        return new PrintDocumentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get printJob(): PrintJobRequestBuilder {
        return new PrintJobRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get scheduleChangeRequest(): ScheduleChangeRequestRequestBuilder {
        return new ScheduleChangeRequestRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get targetedManagedAppProtection(): TargetedManagedAppProtectionRequestBuilder {
        return new TargetedManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsInformationProtection(): WindowsInformationProtectionRequestBuilder {
        return new WindowsInformationProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbookRange(): WorkbookRangeRequestBuilder {
        return new WorkbookRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbookRangeFill(): WorkbookRangeFillRequestBuilder {
        return new WorkbookRangeFillRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbookRangeFormat(): WorkbookRangeFormatRequestBuilder {
        return new WorkbookRangeFormatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbookRangeSort(): WorkbookRangeSortRequestBuilder {
        return new WorkbookRangeSortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get workbookRangeView(): WorkbookRangeViewRequestBuilder {
        return new WorkbookRangeViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Instantiates a new ResourceRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/resource";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
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
     * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Entity
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Entity | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Entity>(requestInfo, Entity, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
