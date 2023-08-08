import {LicenseDetailsCollectionResponse} from '../../models/';
import {createLicenseDetailsCollectionResponseFromDiscriminatorValue} from '../../models/createLicenseDetailsCollectionResponseFromDiscriminatorValue';
import {createLicenseDetailsFromDiscriminatorValue} from '../../models/createLicenseDetailsFromDiscriminatorValue';
import {deserializeIntoLicenseDetails} from '../../models/deserializeIntoLicenseDetails';
import type {LicenseDetails} from '../../models/licenseDetails';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeLicenseDetails} from '../../models/serializeLicenseDetails';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {LicenseDetailsItemRequestBuilder} from './item/licenseDetailsItemRequestBuilder';
import {LicenseDetailsRequestBuilderGetRequestConfiguration} from './licenseDetailsRequestBuilderGetRequestConfiguration';
import {LicenseDetailsRequestBuilderPostRequestConfiguration} from './licenseDetailsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the licenseDetails property of the microsoft.graph.user entity.
 */
export class LicenseDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the licenseDetails property of the microsoft.graph.user entity.
     * @param licenseDetailsId Unique identifier of the item
     * @returns a LicenseDetailsItemRequestBuilder
     */
    public byLicenseDetailsId(licenseDetailsId: string) : LicenseDetailsItemRequestBuilder {
        if(!licenseDetailsId) throw new Error("licenseDetailsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["licenseDetails%2Did"] = licenseDetailsId
        return new LicenseDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LicenseDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/licenseDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LicenseDetailsCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-licensedetails?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LicenseDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<LicenseDetailsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LicenseDetailsCollectionResponse>(requestInfo, createLicenseDetailsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to licenseDetails for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LicenseDetails
     */
    public post(body: LicenseDetails, requestConfiguration?: LicenseDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<LicenseDetails | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LicenseDetails>(requestInfo, createLicenseDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LicenseDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to licenseDetails for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LicenseDetails, requestConfiguration?: LicenseDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLicenseDetails);
        return requestInfo;
    };
}
