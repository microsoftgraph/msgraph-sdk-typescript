import type {AdministrativeUnit} from '../../../models/administrativeUnit';
import {createAdministrativeUnitFromDiscriminatorValue} from '../../../models/createAdministrativeUnitFromDiscriminatorValue';
import {deserializeIntoAdministrativeUnit} from '../../../models/deserializeIntoAdministrativeUnit';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAdministrativeUnit} from '../../../models/serializeAdministrativeUnit';
import {AdministrativeUnitItemRequestBuilderDeleteRequestConfiguration} from './administrativeUnitItemRequestBuilderDeleteRequestConfiguration';
import {AdministrativeUnitItemRequestBuilderGetRequestConfiguration} from './administrativeUnitItemRequestBuilderGetRequestConfiguration';
import {AdministrativeUnitItemRequestBuilderPatchRequestConfiguration} from './administrativeUnitItemRequestBuilderPatchRequestConfiguration';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {ScopedRoleMembersRequestBuilder} from './scopedRoleMembers/scopedRoleMembersRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
 */
export class AdministrativeUnitItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.administrativeUnit entity.
     */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.administrativeUnit entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopedRoleMembers property of the microsoft.graph.administrativeUnit entity.
     */
    public get scopedRoleMembers(): ScopedRoleMembersRequestBuilder {
        return new ScopedRoleMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AdministrativeUnitItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/administrativeUnits/{administrativeUnit%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an administrativeUnit.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/administrativeunit-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AdministrativeUnitItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an administrativeUnit object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnit
     * @see {@link https://learn.microsoft.com/graph/api/administrativeunit-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AdministrativeUnitItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AdministrativeUnit | undefined> {
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
     * Update the properties of an administrativeUnit object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnit
     * @see {@link https://learn.microsoft.com/graph/api/administrativeunit-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AdministrativeUnit, requestConfiguration?: AdministrativeUnitItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AdministrativeUnit | undefined> {
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
     * Delete an administrativeUnit.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AdministrativeUnitItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an administrativeUnit object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdministrativeUnitItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an administrativeUnit object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AdministrativeUnit, requestConfiguration?: AdministrativeUnitItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAdministrativeUnit);
        return requestInfo;
    };
}
