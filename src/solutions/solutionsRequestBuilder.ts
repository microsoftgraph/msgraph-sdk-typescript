import {createSolutionsRootFromDiscriminatorValue} from '../models/createSolutionsRootFromDiscriminatorValue';
import {deserializeIntoSolutionsRoot} from '../models/deserializeIntoSolutionsRoot';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeSolutionsRoot} from '../models/serializeSolutionsRoot';
import type {SolutionsRoot} from '../models/solutionsRoot';
import {BookingBusinessesRequestBuilder} from './bookingBusinesses/bookingBusinessesRequestBuilder';
import {BookingCurrenciesRequestBuilder} from './bookingCurrencies/bookingCurrenciesRequestBuilder';
import {SolutionsRequestBuilderGetRequestConfiguration} from './solutionsRequestBuilderGetRequestConfiguration';
import {SolutionsRequestBuilderPatchRequestConfiguration} from './solutionsRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the solutionsRoot singleton.
 */
export class SolutionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the bookingBusinesses property of the microsoft.graph.solutionsRoot entity.
     */
    public get bookingBusinesses(): BookingBusinessesRequestBuilder {
        return new BookingBusinessesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the bookingCurrencies property of the microsoft.graph.solutionsRoot entity.
     */
    public get bookingCurrencies(): BookingCurrenciesRequestBuilder {
        return new BookingCurrenciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SolutionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/solutions{?%24select,%24expand}");
    };
    /**
     * Get solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SolutionsRoot
     */
    public get(requestConfiguration?: SolutionsRequestBuilderGetRequestConfiguration | undefined) : Promise<SolutionsRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SolutionsRoot>(requestInfo, createSolutionsRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SolutionsRoot
     */
    public patch(body: SolutionsRoot, requestConfiguration?: SolutionsRequestBuilderPatchRequestConfiguration | undefined) : Promise<SolutionsRoot | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SolutionsRoot>(requestInfo, createSolutionsRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SolutionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SolutionsRoot, requestConfiguration?: SolutionsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSolutionsRoot);
        return requestInfo;
    };
}
