import {AuditEventCollectionResponse} from '../../models/';
import type {AuditEvent} from '../../models/auditEvent';
import {createAuditEventCollectionResponseFromDiscriminatorValue} from '../../models/createAuditEventCollectionResponseFromDiscriminatorValue';
import {createAuditEventFromDiscriminatorValue} from '../../models/createAuditEventFromDiscriminatorValue';
import {deserializeIntoAuditEvent} from '../../models/deserializeIntoAuditEvent';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAuditEvent} from '../../models/serializeAuditEvent';
import {AuditEventsRequestBuilderGetRequestConfiguration} from './auditEventsRequestBuilderGetRequestConfiguration';
import {AuditEventsRequestBuilderPostRequestConfiguration} from './auditEventsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetAuditActivityTypesWithCategoryRequestBuilder} from './getAuditActivityTypesWithCategory/getAuditActivityTypesWithCategoryRequestBuilder';
import {GetAuditCategoriesRequestBuilder} from './getAuditCategories/getAuditCategoriesRequestBuilder';
import {AuditEventItemRequestBuilder} from './item/auditEventItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
 */
export class AuditEventsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAuditCategories method.
     */
    public get getAuditCategories(): GetAuditCategoriesRequestBuilder {
        return new GetAuditCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
     * @param auditEventId The unique identifier of auditEvent
     * @returns a AuditEventItemRequestBuilder
     */
    public byAuditEventId(auditEventId: string) : AuditEventItemRequestBuilder {
        if(!auditEventId) throw new Error("auditEventId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["auditEvent%2Did"] = auditEventId
        return new AuditEventItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AuditEventsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/auditEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the auditEvent objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditEventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-auditing-auditevent-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuditEventsRequestBuilderGetRequestConfiguration | undefined) : Promise<AuditEventCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuditEventCollectionResponse>(requestInfo, createAuditEventCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provides operations to call the getAuditActivityTypes method.
     * @param category Usage: category='{category}'
     * @returns a getAuditActivityTypesWithCategoryRequestBuilder
     */
    public getAuditActivityTypesWithCategory(category: string | undefined) : GetAuditActivityTypesWithCategoryRequestBuilder {
        if(!category) throw new Error("category cannot be undefined");
        return new GetAuditActivityTypesWithCategoryRequestBuilder(this.pathParameters, this.requestAdapter, category);
    };
    /**
     * Create a new auditEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditEvent
     * @see {@link https://learn.microsoft.com/graph/api/intune-auditing-auditevent-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AuditEvent, requestConfiguration?: AuditEventsRequestBuilderPostRequestConfiguration | undefined) : Promise<AuditEvent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuditEvent>(requestInfo, createAuditEventFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the auditEvent objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuditEventsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new auditEvent object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuditEvent, requestConfiguration?: AuditEventsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuditEvent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a auditEventsRequestBuilder
     */
    public withUrl(rawUrl: string) : AuditEventsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuditEventsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
