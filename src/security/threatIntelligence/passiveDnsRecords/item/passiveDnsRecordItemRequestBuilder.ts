import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createPassiveDnsRecordFromDiscriminatorValue} from '../../../../models/security/createPassiveDnsRecordFromDiscriminatorValue';
import {deserializeIntoPassiveDnsRecord} from '../../../../models/security/deserializeIntoPassiveDnsRecord';
import type {PassiveDnsRecord} from '../../../../models/security/passiveDnsRecord';
import {serializePassiveDnsRecord} from '../../../../models/security/serializePassiveDnsRecord';
import {ArtifactRequestBuilder} from './artifact/artifactRequestBuilder';
import {ParentHostRequestBuilder} from './parentHost/parentHostRequestBuilder';
import {PassiveDnsRecordItemRequestBuilderDeleteRequestConfiguration} from './passiveDnsRecordItemRequestBuilderDeleteRequestConfiguration';
import {PassiveDnsRecordItemRequestBuilderGetRequestConfiguration} from './passiveDnsRecordItemRequestBuilderGetRequestConfiguration';
import {PassiveDnsRecordItemRequestBuilderPatchRequestConfiguration} from './passiveDnsRecordItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the passiveDnsRecords property of the microsoft.graph.security.threatIntelligence entity.
 */
export class PassiveDnsRecordItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the artifact property of the microsoft.graph.security.passiveDnsRecord entity.
     */
    public get artifact(): ArtifactRequestBuilder {
        return new ArtifactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentHost property of the microsoft.graph.security.passiveDnsRecord entity.
     */
    public get parentHost(): ParentHostRequestBuilder {
        return new ParentHostRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PassiveDnsRecordItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property passiveDnsRecords for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PassiveDnsRecordItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a passiveDnsRecord object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PassiveDnsRecord
     * @see {@link https://learn.microsoft.com/graph/api/security-passivednsrecord-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PassiveDnsRecordItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PassiveDnsRecord | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PassiveDnsRecord>(requestInfo, createPassiveDnsRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property passiveDnsRecords in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PassiveDnsRecord
     */
    public patch(body: PassiveDnsRecord, requestConfiguration?: PassiveDnsRecordItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PassiveDnsRecord | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PassiveDnsRecord>(requestInfo, createPassiveDnsRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property passiveDnsRecords for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PassiveDnsRecordItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a passiveDnsRecord object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PassiveDnsRecordItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property passiveDnsRecords in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PassiveDnsRecord, requestConfiguration?: PassiveDnsRecordItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePassiveDnsRecord);
        return requestInfo;
    };
}
