import {AccessReviewInstance} from '../../../accessReviewInstance';
import {DecisionsRequestBuilder} from '../decisions/decisionsRequestBuilder';
import {AccessReviewInstanceDecisionItemRequestBuilder} from '../decisions/item/accessReviewInstanceDecisionItemRequestBuilder';
import {Microsoft.graph.acceptRecommendationsRequestBuilder} from '../microsoft/graph/acceptRecommendations/microsoft.graph.acceptRecommendationsRequestBuilder';
import {Microsoft.graph.applyDecisionsRequestBuilder} from '../microsoft/graph/applyDecisions/microsoft.graph.applyDecisionsRequestBuilder';
import {Microsoft.graph.batchRecordDecisionsRequestBuilder} from '../microsoft/graph/batchRecordDecisions/microsoft.graph.batchRecordDecisionsRequestBuilder';
import {Microsoft.graph.resetDecisionsRequestBuilder} from '../microsoft/graph/resetDecisions/microsoft.graph.resetDecisionsRequestBuilder';
import {Microsoft.graph.sendReminderRequestBuilder} from '../microsoft/graph/sendReminder/microsoft.graph.sendReminderRequestBuilder';
import {Microsoft.graph.stopRequestBuilder} from '../microsoft/graph/stop/microsoft.graph.stopRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}  */
export class AccessReviewInstanceRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get decisions(): DecisionsRequestBuilder {
        return new DecisionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.acceptRecommendations(): Microsoft.graph.acceptRecommendationsRequestBuilder {
        return new Microsoft.graph.acceptRecommendationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.applyDecisions(): Microsoft.graph.applyDecisionsRequestBuilder {
        return new Microsoft.graph.applyDecisionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.batchRecordDecisions(): Microsoft.graph.batchRecordDecisionsRequestBuilder {
        return new Microsoft.graph.batchRecordDecisionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.resetDecisions(): Microsoft.graph.resetDecisionsRequestBuilder {
        return new Microsoft.graph.resetDecisionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.sendReminder(): Microsoft.graph.sendReminderRequestBuilder {
        return new Microsoft.graph.sendReminderRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.stop(): Microsoft.graph.stopRequestBuilder {
        return new Microsoft.graph.stopRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new AccessReviewInstanceRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
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
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: AccessReviewInstance | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.accessReviews.definitions.instances.decisions collection
     * @param id Unique identifier of the item
     * @returns a AccessReviewInstanceDecisionItemRequestBuilder
     */
    public decisionsById(id: String) : AccessReviewInstanceDecisionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AccessReviewInstanceDecisionItemRequestBuilder(this.currentPath + this.pathSegment + "/decisions/" + id, this.httpCore, false);
    };
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessReviewInstance
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessReviewInstance | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<AccessReviewInstance>(requestInfo, AccessReviewInstance, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AccessReviewInstance | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
