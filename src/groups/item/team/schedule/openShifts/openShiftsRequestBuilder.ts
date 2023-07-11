import {OpenShiftCollectionResponse} from '../../../../../models/';
import {createOpenShiftCollectionResponseFromDiscriminatorValue} from '../../../../../models/createOpenShiftCollectionResponseFromDiscriminatorValue';
import {createOpenShiftFromDiscriminatorValue} from '../../../../../models/createOpenShiftFromDiscriminatorValue';
import {deserializeIntoOpenShift} from '../../../../../models/deserializeIntoOpenShift';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {OpenShift} from '../../../../../models/openShift';
import {serializeOpenShift} from '../../../../../models/serializeOpenShift';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OpenShiftItemRequestBuilder} from './item/openShiftItemRequestBuilder';
import {OpenShiftsRequestBuilderGetRequestConfiguration} from './openShiftsRequestBuilderGetRequestConfiguration';
import {OpenShiftsRequestBuilderPostRequestConfiguration} from './openShiftsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the openShifts property of the microsoft.graph.schedule entity.
 */
export class OpenShiftsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the openShifts property of the microsoft.graph.schedule entity.
     * @param openShiftId Unique identifier of the item
     * @returns a OpenShiftItemRequestBuilder
     */
    public byOpenShiftId(openShiftId: string) : OpenShiftItemRequestBuilder {
        if(!openShiftId) throw new Error("openShiftId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShift%2Did"] = openShiftId
        return new OpenShiftItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OpenShiftsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/openShifts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List openShift objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShiftCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/openshift-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OpenShiftsRequestBuilderGetRequestConfiguration | undefined) : Promise<OpenShiftCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShiftCollectionResponse>(requestInfo, createOpenShiftCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an instance of an openShift object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShift
     * @see {@link https://docs.microsoft.com/graph/api/openshift-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OpenShift | undefined, requestConfiguration?: OpenShiftsRequestBuilderPostRequestConfiguration | undefined) : Promise<OpenShift | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShift>(requestInfo, createOpenShiftFromDiscriminatorValue, errorMapping);
    };
    /**
     * List openShift objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OpenShiftsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an instance of an openShift object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OpenShift | undefined, requestConfiguration?: OpenShiftsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOpenShift);
        return requestInfo;
    };
}
