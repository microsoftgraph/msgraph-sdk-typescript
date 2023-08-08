import type {Agreement} from '../../../../models/agreement';
import {createAgreementFromDiscriminatorValue} from '../../../../models/createAgreementFromDiscriminatorValue';
import {deserializeIntoAgreement} from '../../../../models/deserializeIntoAgreement';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAgreement} from '../../../../models/serializeAgreement';
import {AcceptancesRequestBuilder} from './acceptances/acceptancesRequestBuilder';
import {AgreementItemRequestBuilderDeleteRequestConfiguration} from './agreementItemRequestBuilderDeleteRequestConfiguration';
import {AgreementItemRequestBuilderGetRequestConfiguration} from './agreementItemRequestBuilderGetRequestConfiguration';
import {AgreementItemRequestBuilderPatchRequestConfiguration} from './agreementItemRequestBuilderPatchRequestConfiguration';
import {FileRequestBuilder} from './file/fileRequestBuilder';
import {FilesRequestBuilder} from './files/filesRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agreements property of the microsoft.graph.termsOfUseContainer entity.
 */
export class AgreementItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the acceptances property of the microsoft.graph.agreement entity.
     */
    public get acceptances(): AcceptancesRequestBuilder {
        return new AcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the file property of the microsoft.graph.agreement entity.
     */
    public get file(): FileRequestBuilder {
        return new FileRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the files property of the microsoft.graph.agreement entity.
     */
    public get files(): FilesRequestBuilder {
        return new FilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AgreementItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/termsOfUse/agreements/{agreement%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an agreement object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/agreement-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AgreementItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve all files related to an agreement. This includes the default file and all localized files.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Agreement
     * @see {@link https://learn.microsoft.com/graph/api/agreement-list-files?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AgreementItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Agreement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Agreement>(requestInfo, createAgreementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Agreement
     * @see {@link https://learn.microsoft.com/graph/api/agreement-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Agreement, requestConfiguration?: AgreementItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Agreement | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Agreement>(requestInfo, createAgreementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an agreement object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AgreementItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve all files related to an agreement. This includes the default file and all localized files.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AgreementItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Agreement, requestConfiguration?: AgreementItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAgreement);
        return requestInfo;
    };
}
