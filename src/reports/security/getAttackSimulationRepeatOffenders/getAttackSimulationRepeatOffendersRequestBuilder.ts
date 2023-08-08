import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createGetAttackSimulationRepeatOffendersResponseFromDiscriminatorValue} from './createGetAttackSimulationRepeatOffendersResponseFromDiscriminatorValue';
import {GetAttackSimulationRepeatOffendersRequestBuilderGetRequestConfiguration} from './getAttackSimulationRepeatOffendersRequestBuilderGetRequestConfiguration';
import {GetAttackSimulationRepeatOffendersResponse} from './index';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getAttackSimulationRepeatOffenders method.
 */
export class GetAttackSimulationRepeatOffendersRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetAttackSimulationRepeatOffendersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/security/getAttackSimulationRepeatOffenders(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Invoke function getAttackSimulationRepeatOffenders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAttackSimulationRepeatOffendersResponse
     */
    public get(requestConfiguration?: GetAttackSimulationRepeatOffendersRequestBuilderGetRequestConfiguration | undefined) : Promise<GetAttackSimulationRepeatOffendersResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetAttackSimulationRepeatOffendersResponse>(requestInfo, createGetAttackSimulationRepeatOffendersResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getAttackSimulationRepeatOffenders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetAttackSimulationRepeatOffendersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
