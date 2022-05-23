import {ReportImpl} from '../../models/';
import {createReportFromDiscriminatorValue} from '../../models/createReportFromDiscriminatorValue';
import {GetOffice365GroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration} from './getOffice365GroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration';
import {DateOnly, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getOffice365GroupsActivityDetail method. */
export class GetOffice365GroupsActivityDetailWithDateRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetOffice365GroupsActivityDetailWithDateRequestBuilder and sets the default values.
     * @param date Usage: date={date}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, date?: DateOnly | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/reports/microsoft.graph.getOffice365GroupsActivityDetail(date={date})";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams[""] = date
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getOffice365GroupsActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetOffice365GroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Invoke function getOffice365GroupsActivityDetail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Report
     */
    public get(requestConfiguration?: GetOffice365GroupsActivityDetailWithDateRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReportImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ReportImpl>(requestInfo, createReportFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
