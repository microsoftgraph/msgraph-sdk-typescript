import {createManagedEBookFromDiscriminatorValue} from '../../../models/createManagedEBookFromDiscriminatorValue';
import {deserializeIntoManagedEBook} from '../../../models/deserializeIntoManagedEBook';
import type {ManagedEBook} from '../../../models/managedEBook';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeManagedEBook} from '../../../models/serializeManagedEBook';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {DeviceStatesRequestBuilder} from './deviceStates/deviceStatesRequestBuilder';
import {InstallSummaryRequestBuilder} from './installSummary/installSummaryRequestBuilder';
import {ManagedEBookItemRequestBuilderDeleteRequestConfiguration} from './managedEBookItemRequestBuilderDeleteRequestConfiguration';
import {ManagedEBookItemRequestBuilderGetRequestConfiguration} from './managedEBookItemRequestBuilderGetRequestConfiguration';
import {ManagedEBookItemRequestBuilderPatchRequestConfiguration} from './managedEBookItemRequestBuilderPatchRequestConfiguration';
import {UserStateSummaryRequestBuilder} from './userStateSummary/userStateSummaryRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedEBookItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the assign method.
     */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.managedEBook entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStates property of the microsoft.graph.managedEBook entity.
     */
    public get deviceStates(): DeviceStatesRequestBuilder {
        return new DeviceStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the installSummary property of the microsoft.graph.managedEBook entity.
     */
    public get installSummary(): InstallSummaryRequestBuilder {
        return new InstallSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStateSummary property of the microsoft.graph.managedEBook entity.
     */
    public get userStateSummary(): UserStateSummaryRequestBuilder {
        return new UserStateSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedEBookItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a iosVppEBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebook-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ManagedEBookItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the managedEBook object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBook
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-managedebook-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedEBookItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedEBook | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBook>(requestInfo, createManagedEBookFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a iosVppEBook object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBook
     * @see {@link https://learn.microsoft.com/graph/api/intune-books-iosvppebook-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ManagedEBook | undefined, requestConfiguration?: ManagedEBookItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ManagedEBook | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedEBook>(requestInfo, createManagedEBookFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a iosVppEBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedEBookItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the managedEBook object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedEBookItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a iosVppEBook object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedEBook | undefined, requestConfiguration?: ManagedEBookItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedEBook);
        return requestInfo;
    };
}
