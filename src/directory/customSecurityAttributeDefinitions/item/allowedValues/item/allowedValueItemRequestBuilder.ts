import type {AllowedValue} from '../../../../../models/allowedValue';
import {createAllowedValueFromDiscriminatorValue} from '../../../../../models/createAllowedValueFromDiscriminatorValue';
import {deserializeIntoAllowedValue} from '../../../../../models/deserializeIntoAllowedValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAllowedValue} from '../../../../../models/serializeAllowedValue';
import {AllowedValueItemRequestBuilderDeleteRequestConfiguration} from './allowedValueItemRequestBuilderDeleteRequestConfiguration';
import {AllowedValueItemRequestBuilderGetRequestConfiguration} from './allowedValueItemRequestBuilderGetRequestConfiguration';
import {AllowedValueItemRequestBuilderPatchRequestConfiguration} from './allowedValueItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
 */
export class AllowedValueItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AllowedValueItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition%2Did}/allowedValues/{allowedValue%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property allowedValues for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AllowedValueItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an allowedValue object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AllowedValue
     * @see {@link https://learn.microsoft.com/graph/api/allowedvalue-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AllowedValueItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AllowedValue | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AllowedValue>(requestInfo, createAllowedValueFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an allowedValue object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AllowedValue
     * @see {@link https://learn.microsoft.com/graph/api/allowedvalue-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AllowedValue, requestConfiguration?: AllowedValueItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AllowedValue | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AllowedValue>(requestInfo, createAllowedValueFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property allowedValues for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AllowedValueItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an allowedValue object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllowedValueItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an allowedValue object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AllowedValue, requestConfiguration?: AllowedValueItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAllowedValue);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AllowedValueItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AllowedValueItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AllowedValueItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
