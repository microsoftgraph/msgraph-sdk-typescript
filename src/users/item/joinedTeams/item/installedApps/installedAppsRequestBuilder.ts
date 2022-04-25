import {TeamsAppInstallation, TeamsAppInstallationCollectionResponse} from '../../../../../models/';
import {createTeamsAppInstallationCollectionResponseFromDiscriminatorValue} from '../../../../../models/createTeamsAppInstallationCollectionResponseFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from '../../../../../models/createTeamsAppInstallationFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InstalledAppsRequestBuilderGetQueryParameters} from './installedAppsRequestBuilderGetQueryParameters';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the installedApps property of the microsoft.graph.team entity.  */
export class InstalledAppsRequestBuilder {
    /** The count property  */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new InstalledAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/installedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The apps installed in this team.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: InstalledAppsRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Create new navigation property to installedApps for users
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: TeamsAppInstallation | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * The apps installed in this team.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamsAppInstallationCollectionResponse
     */
    public get(queryParameters?: InstalledAppsRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamsAppInstallationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TeamsAppInstallationCollectionResponse>(requestInfo, createTeamsAppInstallationCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Create new navigation property to installedApps for users
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamsAppInstallation
     */
    public post(body: TeamsAppInstallation | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamsAppInstallation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TeamsAppInstallation>(requestInfo, createTeamsAppInstallationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
