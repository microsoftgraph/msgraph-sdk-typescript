import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from '../../../../../models/createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {deserializeIntoTermsAndConditionsAssignment} from '../../../../../models/deserializeIntoTermsAndConditionsAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeTermsAndConditionsAssignment} from '../../../../../models/serializeTermsAndConditionsAssignment';
import type {TermsAndConditionsAssignment} from '../../../../../models/termsAndConditionsAssignment';
import {TermsAndConditionsAssignmentItemRequestBuilderDeleteRequestConfiguration} from './termsAndConditionsAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {TermsAndConditionsAssignmentItemRequestBuilderGetRequestConfiguration} from './termsAndConditionsAssignmentItemRequestBuilderGetRequestConfiguration';
import {TermsAndConditionsAssignmentItemRequestBuilderPatchRequestConfiguration} from './termsAndConditionsAssignmentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.termsAndConditions entity.
 */
export class TermsAndConditionsAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TermsAndConditionsAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/termsAndConditions/{termsAndConditions%2Did}/assignments/{termsAndConditionsAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a termsAndConditionsAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the termsAndConditionsAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TermsAndConditionsAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditionsAssignment>(requestInfo, createTermsAndConditionsAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a termsAndConditionsAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TermsAndConditionsAssignment, requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TermsAndConditionsAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditionsAssignment>(requestInfo, createTermsAndConditionsAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a termsAndConditionsAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the termsAndConditionsAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a termsAndConditionsAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TermsAndConditionsAssignment, requestConfiguration?: TermsAndConditionsAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTermsAndConditionsAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TermsAndConditionsAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TermsAndConditionsAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermsAndConditionsAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
