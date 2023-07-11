import {WorkbookSessionInfo} from '../../../../../../models/';
import {createWorkbookSessionInfoFromDiscriminatorValue} from '../../../../../../models/createWorkbookSessionInfoFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {SessionInfoResourceWithKeyRequestBuilderGetRequestConfiguration} from './sessionInfoResourceWithKeyRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the sessionInfoResource method.
 */
export class SessionInfoResourceWithKeyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SessionInfoResourceWithKeyRequestBuilder and sets the default values.
     * @param key Usage: key='{key}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, key?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/sessionInfoResource(key='{key}')");
        this.pathParameters["key"] = key
    };
    /**
     * Invoke function sessionInfoResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookSessionInfo
     */
    public get(requestConfiguration?: SessionInfoResourceWithKeyRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookSessionInfo | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookSessionInfo>(requestInfo, createWorkbookSessionInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function sessionInfoResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SessionInfoResourceWithKeyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
