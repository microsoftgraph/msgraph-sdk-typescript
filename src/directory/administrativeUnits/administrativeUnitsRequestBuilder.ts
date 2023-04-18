import {AdministrativeUnit, AdministrativeUnitCollectionResponse} from '../../models/';
import {createAdministrativeUnitCollectionResponseFromDiscriminatorValue} from '../../models/createAdministrativeUnitCollectionResponseFromDiscriminatorValue';
import {createAdministrativeUnitFromDiscriminatorValue} from '../../models/createAdministrativeUnitFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AdministrativeUnitsRequestBuilderGetRequestConfiguration} from './administrativeUnitsRequestBuilderGetRequestConfiguration';
import {AdministrativeUnitsRequestBuilderPostRequestConfiguration} from './administrativeUnitsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {AdministrativeUnitItemRequestBuilder} from './item/administrativeUnitItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
 */
export class AdministrativeUnitsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
     * @param administrativeUnitId Unique identifier of the item
     * @returns a AdministrativeUnitItemRequestBuilder
     */
    public byAdministrativeUnitId(administrativeUnitId: string) : AdministrativeUnitItemRequestBuilder {
        if(!administrativeUnitId) throw new Error("administrativeUnitId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["administrativeUnit%2Did"] = administrativeUnitId
        return new AdministrativeUnitItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AdministrativeUnitsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/administrativeUnits{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of administrativeUnit objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AdministrativeUnitCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/directory-list-administrativeunits?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AdministrativeUnitsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AdministrativeUnitCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AdministrativeUnitCollectionResponse>(requestInfo, createAdministrativeUnitCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Use this API to create a new administrativeUnit.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AdministrativeUnit
     * @see {@link https://docs.microsoft.com/graph/api/directory-post-administrativeunits?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AdministrativeUnit | undefined, requestConfiguration?: AdministrativeUnitsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AdministrativeUnit | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AdministrativeUnit>(requestInfo, createAdministrativeUnitFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of administrativeUnit objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdministrativeUnitsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to create a new administrativeUnit.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AdministrativeUnit | undefined, requestConfiguration?: AdministrativeUnitsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
