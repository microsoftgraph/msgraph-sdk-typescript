import {ServicePrincipalCollectionResponse} from '../models/';
import {createServicePrincipalCollectionResponseFromDiscriminatorValue} from '../models/createServicePrincipalCollectionResponseFromDiscriminatorValue';
import {createServicePrincipalFromDiscriminatorValue} from '../models/createServicePrincipalFromDiscriminatorValue';
import {deserializeIntoServicePrincipal} from '../models/deserializeIntoServicePrincipal';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeServicePrincipal} from '../models/serializeServicePrincipal';
import type {ServicePrincipal} from '../models/servicePrincipal';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {GetAvailableExtensionPropertiesRequestBuilder} from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import {GetByIdsRequestBuilder} from './getByIds/getByIdsRequestBuilder';
import {ServicePrincipalItemRequestBuilder} from './item/servicePrincipalItemRequestBuilder';
import {ServicePrincipalsRequestBuilderGetRequestConfiguration} from './servicePrincipalsRequestBuilderGetRequestConfiguration';
import {ServicePrincipalsRequestBuilderPostRequestConfiguration} from './servicePrincipalsRequestBuilderPostRequestConfiguration';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of servicePrincipal entities.
 */
export class ServicePrincipalsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     * @param servicePrincipalId The unique identifier of servicePrincipal
     * @returns a ServicePrincipalItemRequestBuilder
     */
    public byServicePrincipalId(servicePrincipalId: string) : ServicePrincipalItemRequestBuilder {
        if(!servicePrincipalId) throw new Error("servicePrincipalId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["servicePrincipal%2Did"] = servicePrincipalId
        return new ServicePrincipalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ServicePrincipalsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of servicePrincipal objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalsRequestBuilderGetRequestConfiguration | undefined) : Promise<ServicePrincipalCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipalCollectionResponse>(requestInfo, createServicePrincipalCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new servicePrincipal object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipal
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-post-serviceprincipals?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ServicePrincipal, requestConfiguration?: ServicePrincipalsRequestBuilderPostRequestConfiguration | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of servicePrincipal objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicePrincipalsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new servicePrincipal object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ServicePrincipal, requestConfiguration?: ServicePrincipalsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServicePrincipal);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a servicePrincipalsRequestBuilder
     */
    public withUrl(rawUrl: string) : ServicePrincipalsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServicePrincipalsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
