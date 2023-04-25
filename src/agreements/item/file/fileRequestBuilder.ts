import {AgreementFile} from '../../../models/';
import {createAgreementFileFromDiscriminatorValue} from '../../../models/createAgreementFileFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {FileRequestBuilderDeleteRequestConfiguration} from './fileRequestBuilderDeleteRequestConfiguration';
import {FileRequestBuilderGetRequestConfiguration} from './fileRequestBuilderGetRequestConfiguration';
import {FileRequestBuilderPatchRequestConfiguration} from './fileRequestBuilderPatchRequestConfiguration';
import {LocalizationsRequestBuilder} from './localizations/localizationsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the file property of the microsoft.graph.agreement entity.
 */
export class FileRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the localizations property of the microsoft.graph.agreementFile entity. */
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FileRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/agreements/{agreement%2Did}/file{?%24select,%24expand}");
    };
    /**
     * Delete navigation property file for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: FileRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Default PDF linked to this agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AgreementFile
     */
    public get(requestConfiguration?: FileRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AgreementFile | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AgreementFile>(requestInfo, createAgreementFileFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property file in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AgreementFile
     */
    public patch(body: AgreementFile | undefined, requestConfiguration?: FileRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AgreementFile | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AgreementFile>(requestInfo, createAgreementFileFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property file for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: FileRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Default PDF linked to this agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FileRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property file in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AgreementFile | undefined, requestConfiguration?: FileRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
