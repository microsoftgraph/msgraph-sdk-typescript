import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import {deserializeIntoManagedEBookAssignment} from '../../../../../models/deserializeIntoManagedEBookAssignment';
import type {ManagedEBookAssignment} from '../../../../../models/managedEBookAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeManagedEBookAssignment} from '../../../../../models/serializeManagedEBookAssignment';
import {ManagedEBookAssignmentItemRequestBuilderDeleteRequestConfiguration} from './managedEBookAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {ManagedEBookAssignmentItemRequestBuilderGetRequestConfiguration} from './managedEBookAssignmentItemRequestBuilderGetRequestConfiguration';
import {ManagedEBookAssignmentItemRequestBuilderPatchRequestConfiguration} from './managedEBookAssignmentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.managedEBook entity.
 */
export class ManagedEBookAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedEBookAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/assignments/{managedEBookAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a iosVppEBookAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebookassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read properties and relationships of the iosVppEBookAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBookAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebookassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedEBookAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBookAssignment>(requestInfo, createManagedEBookAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a managedEBookAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBookAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-managedebookassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedEBookAssignment, requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedEBookAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBookAssignment>(requestInfo, createManagedEBookAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a iosVppEBookAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read properties and relationships of the iosVppEBookAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a managedEBookAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedEBookAssignment, requestConfiguration?: ManagedEBookAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedEBookAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ManagedEBookAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedEBookAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedEBookAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
