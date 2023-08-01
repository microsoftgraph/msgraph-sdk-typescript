import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {createEdiscoveryCustodianFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryCustodianFromDiscriminatorValue';
import {deserializeIntoEdiscoveryCustodian} from '../../../../../../models/security/deserializeIntoEdiscoveryCustodian';
import type {EdiscoveryCustodian} from '../../../../../../models/security/ediscoveryCustodian';
import {serializeEdiscoveryCustodian} from '../../../../../../models/security/serializeEdiscoveryCustodian';
import {EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderPatchRequestConfiguration';
import {LastIndexOperationRequestBuilder} from './lastIndexOperation/lastIndexOperationRequestBuilder';
import {MicrosoftGraphSecurityActivateRequestBuilder} from './microsoftGraphSecurityActivate/microsoftGraphSecurityActivateRequestBuilder';
import {MicrosoftGraphSecurityApplyHoldRequestBuilder} from './microsoftGraphSecurityApplyHold/microsoftGraphSecurityApplyHoldRequestBuilder';
import {MicrosoftGraphSecurityReleaseRequestBuilder} from './microsoftGraphSecurityRelease/microsoftGraphSecurityReleaseRequestBuilder';
import {MicrosoftGraphSecurityRemoveHoldRequestBuilder} from './microsoftGraphSecurityRemoveHold/microsoftGraphSecurityRemoveHoldRequestBuilder';
import {MicrosoftGraphSecurityUpdateIndexRequestBuilder} from './microsoftGraphSecurityUpdateIndex/microsoftGraphSecurityUpdateIndexRequestBuilder';
import {SiteSourcesRequestBuilder} from './siteSources/siteSourcesRequestBuilder';
import {UnifiedGroupSourcesRequestBuilder} from './unifiedGroupSources/unifiedGroupSourcesRequestBuilder';
import {UserSourcesRequestBuilder} from './userSources/userSourcesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryCustodianItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the lastIndexOperation property of the microsoft.graph.security.ediscoveryCustodian entity.
     */
    public get lastIndexOperation(): LastIndexOperationRequestBuilder {
        return new LastIndexOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the activate method.
     */
    public get microsoftGraphSecurityActivate(): MicrosoftGraphSecurityActivateRequestBuilder {
        return new MicrosoftGraphSecurityActivateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the applyHold method.
     */
    public get microsoftGraphSecurityApplyHold(): MicrosoftGraphSecurityApplyHoldRequestBuilder {
        return new MicrosoftGraphSecurityApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the release method.
     */
    public get microsoftGraphSecurityRelease(): MicrosoftGraphSecurityReleaseRequestBuilder {
        return new MicrosoftGraphSecurityReleaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the removeHold method.
     */
    public get microsoftGraphSecurityRemoveHold(): MicrosoftGraphSecurityRemoveHoldRequestBuilder {
        return new MicrosoftGraphSecurityRemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the updateIndex method.
     */
    public get microsoftGraphSecurityUpdateIndex(): MicrosoftGraphSecurityUpdateIndexRequestBuilder {
        return new MicrosoftGraphSecurityUpdateIndexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     */
    public get siteSources(): SiteSourcesRequestBuilder {
        return new SiteSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the unifiedGroupSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     */
    public get unifiedGroupSources(): UnifiedGroupSourcesRequestBuilder {
        return new UnifiedGroupSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     */
    public get userSources(): UserSourcesRequestBuilder {
        return new UserSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryCustodianItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property custodians for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an ediscoveryCustodian object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCustodian
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCustodian | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property custodians in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCustodian
     */
    public patch(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryCustodian | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property custodians for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an ediscoveryCustodian object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property custodians in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryCustodian);
        return requestInfo;
    };
}
