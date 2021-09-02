import {BucketsRequestBuilder} from './buckets/bucketsRequestBuilder';
import {PlannerBucketRequestBuilder} from './buckets/item/plannerBucketRequestBuilder';
import {Planner} from './planner';
import {PlannerPlanRequestBuilder} from './plans/item/plannerPlanRequestBuilder';
import {PlansRequestBuilder} from './plans/plansRequestBuilder';
import {PlannerTaskRequestBuilder} from './tasks/item/plannerTaskRequestBuilder';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /planner  */
export class PlannerRequestBuilder {
    public get buckets(): BucketsRequestBuilder {
        return new BucketsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get plans(): PlansRequestBuilder {
        return new PlansRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.planner.buckets collection
     * @param id Unique identifier of the item
     * @returns a plannerBucketRequestBuilder
     */
    public bucketsById(id: String) : PlannerBucketRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PlannerBucketRequestBuilder(this.currentPath + this.pathSegment + "/buckets/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new PlannerRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/planner";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get planner
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
     * Update planner
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Planner | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * Get planner
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Planner
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Planner | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<Planner>(requestInfo, Planner, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update planner
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Planner | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.planner.plans collection
     * @param id Unique identifier of the item
     * @returns a plannerPlanRequestBuilder
     */
    public plansById(id: String) : PlannerPlanRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PlannerPlanRequestBuilder(this.currentPath + this.pathSegment + "/plans/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.planner.tasks collection
     * @param id Unique identifier of the item
     * @returns a plannerTaskRequestBuilder
     */
    public tasksById(id: String) : PlannerTaskRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PlannerTaskRequestBuilder(this.currentPath + this.pathSegment + "/tasks/" + id, this.httpCore, false);
    };
}
