import type {ApplicationServicePrincipal} from '../../../models/applicationServicePrincipal';
import {createApplicationServicePrincipalFromDiscriminatorValue} from '../../../models/createApplicationServicePrincipalFromDiscriminatorValue';
import {deserializeIntoApplicationServicePrincipal} from '../../../models/deserializeIntoApplicationServicePrincipal';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeApplicationServicePrincipal} from '../../../models/serializeApplicationServicePrincipal';
import {deserializeIntoInstantiatePostRequestBody} from './deserializeIntoInstantiatePostRequestBody';
import type {InstantiatePostRequestBody} from './instantiatePostRequestBody';
import {InstantiateRequestBuilderPostRequestConfiguration} from './instantiateRequestBuilderPostRequestConfiguration';
import {serializeInstantiatePostRequestBody} from './serializeInstantiatePostRequestBody';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the instantiate method.
 */
export class InstantiateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InstantiateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applicationTemplates/{applicationTemplate%2Did}/instantiate");
    };
    /**
     * Add an instance of an application from the Azure AD application gallery into your directory. You can also use this API to instantiate non-gallery apps. Use the following ID for the applicationTemplate object: 8adf8e6e-67b2-4cf2-a259-e3dc5476c621.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApplicationServicePrincipal
     * @see {@link https://learn.microsoft.com/graph/api/applicationtemplate-instantiate?view=graph-rest-1.0|Find more info here}
     */
    public post(body: InstantiatePostRequestBody, requestConfiguration?: InstantiateRequestBuilderPostRequestConfiguration | undefined) : Promise<ApplicationServicePrincipal | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApplicationServicePrincipal>(requestInfo, createApplicationServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add an instance of an application from the Azure AD application gallery into your directory. You can also use this API to instantiate non-gallery apps. Use the following ID for the applicationTemplate object: 8adf8e6e-67b2-4cf2-a259-e3dc5476c621.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InstantiatePostRequestBody, requestConfiguration?: InstantiateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInstantiatePostRequestBody);
        return requestInfo;
    };
}
