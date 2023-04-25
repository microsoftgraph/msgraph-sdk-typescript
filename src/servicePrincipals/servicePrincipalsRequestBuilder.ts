import {ServicePrincipal, ServicePrincipalCollectionResponse} from '../models/';
import {createServicePrincipalCollectionResponseFromDiscriminatorValue} from '../models/createServicePrincipalCollectionResponseFromDiscriminatorValue';
import {createServicePrincipalFromDiscriminatorValue} from '../models/createServicePrincipalFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {GetAvailableExtensionPropertiesRequestBuilder} from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import {GetByIdsRequestBuilder} from './getByIds/getByIdsRequestBuilder';
import {ServicePrincipalItemRequestBuilder} from './item/servicePrincipalItemRequestBuilder';
import {ServicePrincipalsRequestBuilderGetRequestConfiguration} from './servicePrincipalsRequestBuilderGetRequestConfiguration';
import {ServicePrincipalsRequestBuilderPostRequestConfiguration} from './servicePrincipalsRequestBuilderPostRequestConfiguration';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of servicePrincipal entities.
 */
export class ServicePrincipalsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getAvailableExtensionProperties method. */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getByIds method. */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the validateProperties method. */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     * @param servicePrincipalId Unique identifier of the item
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipalCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipalCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServicePrincipalCollectionResponse>(requestInfo, createServicePrincipalCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new servicePrincipal object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-post-serviceprincipals?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
    public toPostRequestInformation(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
