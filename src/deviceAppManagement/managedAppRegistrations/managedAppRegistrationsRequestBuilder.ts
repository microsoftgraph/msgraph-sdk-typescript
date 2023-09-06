import { type ManagedAppRegistrationCollectionResponse } from '../../models/';
import { createManagedAppRegistrationCollectionResponseFromDiscriminatorValue } from '../../models/createManagedAppRegistrationCollectionResponseFromDiscriminatorValue';
import { createManagedAppRegistrationFromDiscriminatorValue } from '../../models/createManagedAppRegistrationFromDiscriminatorValue';
import { deserializeIntoManagedAppRegistration } from '../../models/deserializeIntoManagedAppRegistration';
import { type ManagedAppRegistration } from '../../models/managedAppRegistration';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeManagedAppRegistration } from '../../models/serializeManagedAppRegistration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GetUserIdsWithFlaggedAppRegistrationRequestBuilder } from './getUserIdsWithFlaggedAppRegistration/getUserIdsWithFlaggedAppRegistrationRequestBuilder';
import { ManagedAppRegistrationItemRequestBuilder } from './item/managedAppRegistrationItemRequestBuilder';
import { type ManagedAppRegistrationsRequestBuilderGetRequestConfiguration } from './managedAppRegistrationsRequestBuilderGetRequestConfiguration';
import { type ManagedAppRegistrationsRequestBuilderPostRequestConfiguration } from './managedAppRegistrationsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedAppRegistrationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getUserIdsWithFlaggedAppRegistration method.
     */
    public get getUserIdsWithFlaggedAppRegistration(): GetUserIdsWithFlaggedAppRegistrationRequestBuilder {
        return new GetUserIdsWithFlaggedAppRegistrationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
     * @param managedAppRegistrationId The unique identifier of managedAppRegistration
     * @returns a ManagedAppRegistrationItemRequestBuilder
     */
    public byManagedAppRegistrationId(managedAppRegistrationId: string) : ManagedAppRegistrationItemRequestBuilder {
        if(!managedAppRegistrationId) throw new Error("managedAppRegistrationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration%2Did"] = managedAppRegistrationId
        return new ManagedAppRegistrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppRegistrationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedAppRegistrations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the managedAppRegistration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppRegistrationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedappregistration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ManagedAppRegistrationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedAppRegistrationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppRegistrationCollectionResponse>(requestInfo, createManagedAppRegistrationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new androidManagedAppRegistration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppRegistration
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-androidmanagedappregistration-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedAppRegistration, requestConfiguration?: ManagedAppRegistrationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedAppRegistration>(requestInfo, createManagedAppRegistrationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedAppRegistration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedAppRegistrationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new androidManagedAppRegistration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedAppRegistration, requestConfiguration?: ManagedAppRegistrationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedAppRegistration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a managedAppRegistrationsRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedAppRegistrationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedAppRegistrationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
