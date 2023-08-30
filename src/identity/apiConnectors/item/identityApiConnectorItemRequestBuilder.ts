import {createIdentityApiConnectorFromDiscriminatorValue} from '../../../models/createIdentityApiConnectorFromDiscriminatorValue';
import {deserializeIntoIdentityApiConnector} from '../../../models/deserializeIntoIdentityApiConnector';
import type {IdentityApiConnector} from '../../../models/identityApiConnector';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeIdentityApiConnector} from '../../../models/serializeIdentityApiConnector';
import {IdentityApiConnectorItemRequestBuilderDeleteRequestConfiguration} from './identityApiConnectorItemRequestBuilderDeleteRequestConfiguration';
import {IdentityApiConnectorItemRequestBuilderGetRequestConfiguration} from './identityApiConnectorItemRequestBuilderGetRequestConfiguration';
import {IdentityApiConnectorItemRequestBuilderPatchRequestConfiguration} from './identityApiConnectorItemRequestBuilderPatchRequestConfiguration';
import {UploadClientCertificateRequestBuilder} from './uploadClientCertificate/uploadClientCertificateRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity.
 */
export class IdentityApiConnectorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the uploadClientCertificate method.
     */
    public get uploadClientCertificate(): UploadClientCertificateRequestBuilder {
        return new UploadClientCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IdentityApiConnectorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/apiConnectors/{identityApiConnector%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityApiConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityApiConnectorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an identityApiConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IdentityApiConnector, requestConfiguration?: IdentityApiConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityApiConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityApiConnectorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an identityApiConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityApiConnector, requestConfiguration?: IdentityApiConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityApiConnector);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a IdentityApiConnectorItemRequestBuilder
     */
    public withUrl(rawUrl: string) : IdentityApiConnectorItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentityApiConnectorItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
