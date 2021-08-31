import {$refRequestBuilder} from './$ref/$refRequestBuilder';
import {Entity} from './entity';
import {Microsoft.graph.calendarSharingMessageRequestBuilder} from './microsoft/graph/calendarSharingMessage/microsoft.graph.calendarSharingMessageRequestBuilder';
import {Microsoft.graph.managedAppProtectionRequestBuilder} from './microsoft/graph/managedAppProtection/microsoft.graph.managedAppProtectionRequestBuilder';
import {Microsoft.graph.mobileAppContentFileRequestBuilder} from './microsoft/graph/mobileAppContentFile/microsoft.graph.mobileAppContentFileRequestBuilder';
import {Microsoft.graph.printDocumentRequestBuilder} from './microsoft/graph/printDocument/microsoft.graph.printDocumentRequestBuilder';
import {Microsoft.graph.printJobRequestBuilder} from './microsoft/graph/printJob/microsoft.graph.printJobRequestBuilder';
import {Microsoft.graph.scheduleChangeRequestRequestBuilder} from './microsoft/graph/scheduleChangeRequest/microsoft.graph.scheduleChangeRequestRequestBuilder';
import {Microsoft.graph.targetedManagedAppProtectionRequestBuilder} from './microsoft/graph/targetedManagedAppProtection/microsoft.graph.targetedManagedAppProtectionRequestBuilder';
import {Microsoft.graph.windowsInformationProtectionRequestBuilder} from './microsoft/graph/windowsInformationProtection/microsoft.graph.windowsInformationProtectionRequestBuilder';
import {Microsoft.graph.workbookRangeRequestBuilder} from './microsoft/graph/workbookRange/microsoft.graph.workbookRangeRequestBuilder';
import {Microsoft.graph.workbookRangeFillRequestBuilder} from './microsoft/graph/workbookRangeFill/microsoft.graph.workbookRangeFillRequestBuilder';
import {Microsoft.graph.workbookRangeFormatRequestBuilder} from './microsoft/graph/workbookRangeFormat/microsoft.graph.workbookRangeFormatRequestBuilder';
import {Microsoft.graph.workbookRangeSortRequestBuilder} from './microsoft/graph/workbookRangeSort/microsoft.graph.workbookRangeSortRequestBuilder';
import {Microsoft.graph.workbookRangeViewRequestBuilder} from './microsoft/graph/workbookRangeView/microsoft.graph.workbookRangeViewRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/resource  */
export class ResourceRequestBuilder {
    public get $ref(): $refRequestBuilder {
        return new $refRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.calendarSharingMessage(): Microsoft.graph.calendarSharingMessageRequestBuilder {
        return new Microsoft.graph.calendarSharingMessageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.managedAppProtection(): Microsoft.graph.managedAppProtectionRequestBuilder {
        return new Microsoft.graph.managedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.mobileAppContentFile(): Microsoft.graph.mobileAppContentFileRequestBuilder {
        return new Microsoft.graph.mobileAppContentFileRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.printDocument(): Microsoft.graph.printDocumentRequestBuilder {
        return new Microsoft.graph.printDocumentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.printJob(): Microsoft.graph.printJobRequestBuilder {
        return new Microsoft.graph.printJobRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.scheduleChangeRequest(): Microsoft.graph.scheduleChangeRequestRequestBuilder {
        return new Microsoft.graph.scheduleChangeRequestRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.targetedManagedAppProtection(): Microsoft.graph.targetedManagedAppProtectionRequestBuilder {
        return new Microsoft.graph.targetedManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.windowsInformationProtection(): Microsoft.graph.windowsInformationProtectionRequestBuilder {
        return new Microsoft.graph.windowsInformationProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.workbookRange(): Microsoft.graph.workbookRangeRequestBuilder {
        return new Microsoft.graph.workbookRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.workbookRangeFill(): Microsoft.graph.workbookRangeFillRequestBuilder {
        return new Microsoft.graph.workbookRangeFillRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.workbookRangeFormat(): Microsoft.graph.workbookRangeFormatRequestBuilder {
        return new Microsoft.graph.workbookRangeFormatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.workbookRangeSort(): Microsoft.graph.workbookRangeSortRequestBuilder {
        return new Microsoft.graph.workbookRangeSortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.workbookRangeView(): Microsoft.graph.workbookRangeViewRequestBuilder {
        return new Microsoft.graph.workbookRangeViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
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
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
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
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<Entity>(requestInfo, Entity, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
