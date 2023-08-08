import {DirectoryObject} from '../../../../models/';
import {createDirectoryObjectFromDiscriminatorValue} from '../../../../models/createDirectoryObjectFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {DirectoryObjectItemRequestBuilderGetRequestConfiguration} from './directoryObjectItemRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity.
 */
export class DirectoryObjectItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DirectoryObjectItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}/domainNameReferences/{directoryObject%2Did}{?%24select,%24expand}");
    };
    /**
     * The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
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
     * The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
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
