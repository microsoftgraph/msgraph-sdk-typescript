import type {AdministrativeUnit} from '../../../../models/administrativeUnit';
import {createAdministrativeUnitFromDiscriminatorValue} from '../../../../models/createAdministrativeUnitFromDiscriminatorValue';
import {deserializeIntoAdministrativeUnit} from '../../../../models/deserializeIntoAdministrativeUnit';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAdministrativeUnit} from '../../../../models/serializeAdministrativeUnit';
import {AdministrativeUnitRequestBuilderGetRequestConfiguration} from './administrativeUnitRequestBuilderGetRequestConfiguration';
import {AdministrativeUnitRequestBuilderPatchRequestConfiguration} from './administrativeUnitRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the administrativeUnit property of the microsoft.graph.educationSchool entity.
 */
export class AdministrativeUnitRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AdministrativeUnitRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/schools/{educationSchool%2Did}/administrativeUnit{?%24select,%24expand}");
    };
    /**
     * Get a list of administrativeUnits associated with an educationSchool object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnit
     * @see {@link https://learn.microsoft.com/graph/api/educationschool-list-administrativeunit?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AdministrativeUnitRequestBuilderGetRequestConfiguration | undefined) : Promise<AdministrativeUnit | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AdministrativeUnit>(requestInfo, createAdministrativeUnitFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property administrativeUnit in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnit
     */
    public patch(body: AdministrativeUnit | undefined, requestConfiguration?: AdministrativeUnitRequestBuilderPatchRequestConfiguration | undefined) : Promise<AdministrativeUnit | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AdministrativeUnit>(requestInfo, createAdministrativeUnitFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of administrativeUnits associated with an educationSchool object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdministrativeUnitRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property administrativeUnit in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AdministrativeUnit | undefined, requestConfiguration?: AdministrativeUnitRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAdministrativeUnit);
        return requestInfo;
    };
}
