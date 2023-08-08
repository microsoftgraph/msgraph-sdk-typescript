import {DirectoryObject} from '../../../../models/';
import {createDirectoryObjectFromDiscriminatorValue} from '../../../../models/createDirectoryObjectFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {DirectoryObjectItemRequestBuilderGetRequestConfiguration} from './directoryObjectItemRequestBuilderGetRequestConfiguration';
import {GraphApplicationRequestBuilder} from './graphApplication/graphApplicationRequestBuilder';
import {GraphAppRoleAssignmentRequestBuilder} from './graphAppRoleAssignment/graphAppRoleAssignmentRequestBuilder';
import {GraphEndpointRequestBuilder} from './graphEndpoint/graphEndpointRequestBuilder';
import {GraphGroupRequestBuilder} from './graphGroup/graphGroupRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity.
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Casts the previous resource to application.
     */
    public get graphApplication(): GraphApplicationRequestBuilder {
        return new GraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to appRoleAssignment.
     */
    public get graphAppRoleAssignment(): GraphAppRoleAssignmentRequestBuilder {
        return new GraphAppRoleAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to endpoint.
     */
    public get graphEndpoint(): GraphEndpointRequestBuilder {
        return new GraphEndpointRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to group.
     */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to servicePrincipal.
     */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/ownedObjects/{directoryObject%2Did}{?%24select,%24expand}");
    };
    /**
     * Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     */
    public get(requestConfiguration?: DirectoryObjectItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, errorMapping);
    };
    /**
     * Directory objects that are owned by this service principal. Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoryObjectItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
