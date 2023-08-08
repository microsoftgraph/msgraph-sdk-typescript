import {DirectoryDefinitionCollectionResponse} from '../../../../../../../models/';
import {createDirectoryDefinitionCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/createDirectoryDefinitionCollectionResponseFromDiscriminatorValue';
import {createDirectoryDefinitionFromDiscriminatorValue} from '../../../../../../../models/createDirectoryDefinitionFromDiscriminatorValue';
import {deserializeIntoDirectoryDefinition} from '../../../../../../../models/deserializeIntoDirectoryDefinition';
import type {DirectoryDefinition} from '../../../../../../../models/directoryDefinition';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeDirectoryDefinition} from '../../../../../../../models/serializeDirectoryDefinition';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DirectoriesRequestBuilderGetRequestConfiguration} from './directoriesRequestBuilderGetRequestConfiguration';
import {DirectoriesRequestBuilderPostRequestConfiguration} from './directoriesRequestBuilderPostRequestConfiguration';
import {DirectoryDefinitionItemRequestBuilder} from './item/directoryDefinitionItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directories property of the microsoft.graph.synchronizationSchema entity.
 */
export class DirectoriesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the directories property of the microsoft.graph.synchronizationSchema entity.
     * @param directoryDefinitionId Unique identifier of the item
     * @returns a DirectoryDefinitionItemRequestBuilder
     */
    public byDirectoryDefinitionId(directoryDefinitionId: string) : DirectoryDefinitionItemRequestBuilder {
        if(!directoryDefinitionId) throw new Error("directoryDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryDefinition%2Did"] = directoryDefinitionId
        return new DirectoryDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DirectoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/templates/{synchronizationTemplate%2Did}/schema/directories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Contains the collection of directories and all of their objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryDefinitionCollectionResponse
     */
    public get(requestConfiguration?: DirectoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryDefinitionCollectionResponse>(requestInfo, createDirectoryDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to directories for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryDefinition
     */
    public post(body: DirectoryDefinition, requestConfiguration?: DirectoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<DirectoryDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryDefinition>(requestInfo, createDirectoryDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Contains the collection of directories and all of their objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to directories for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DirectoryDefinition, requestConfiguration?: DirectoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDirectoryDefinition);
        return requestInfo;
    };
}
