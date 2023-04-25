import {Directory} from '../models/';
import {createDirectoryFromDiscriminatorValue} from '../models/createDirectoryFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AdministrativeUnitsRequestBuilder} from './administrativeUnits/administrativeUnitsRequestBuilder';
import {AttributeSetsRequestBuilder} from './attributeSets/attributeSetsRequestBuilder';
import {CustomSecurityAttributeDefinitionsRequestBuilder} from './customSecurityAttributeDefinitions/customSecurityAttributeDefinitionsRequestBuilder';
import {DeletedItemsRequestBuilder} from './deletedItems/deletedItemsRequestBuilder';
import {DirectoryRequestBuilderGetRequestConfiguration} from './directoryRequestBuilderGetRequestConfiguration';
import {DirectoryRequestBuilderPatchRequestConfiguration} from './directoryRequestBuilderPatchRequestConfiguration';
import {FederationConfigurationsRequestBuilder} from './federationConfigurations/federationConfigurationsRequestBuilder';
import {OnPremisesSynchronizationRequestBuilder} from './onPremisesSynchronization/onPremisesSynchronizationRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directory singleton.
 */
export class DirectoryRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity. */
    public get administrativeUnits(): AdministrativeUnitsRequestBuilder {
        return new AdministrativeUnitsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the attributeSets property of the microsoft.graph.directory entity. */
    public get attributeSets(): AttributeSetsRequestBuilder {
        return new AttributeSetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity. */
    public get customSecurityAttributeDefinitions(): CustomSecurityAttributeDefinitionsRequestBuilder {
        return new CustomSecurityAttributeDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deletedItems property of the microsoft.graph.directory entity. */
    public get deletedItems(): DeletedItemsRequestBuilder {
        return new DeletedItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federationConfigurations property of the microsoft.graph.directory entity. */
    public get federationConfigurations(): FederationConfigurationsRequestBuilder {
        return new FederationConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity. */
    public get onPremisesSynchronization(): OnPremisesSynchronizationRequestBuilder {
        return new OnPremisesSynchronizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory{?%24select,%24expand}");
    };
    /**
     * Get directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Directory
     */
    public get(requestConfiguration?: DirectoryRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Directory | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Directory>(requestInfo, createDirectoryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Directory
     */
    public patch(body: Directory | undefined, requestConfiguration?: DirectoryRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Directory | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Directory>(requestInfo, createDirectoryFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Directory | undefined, requestConfiguration?: DirectoryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
