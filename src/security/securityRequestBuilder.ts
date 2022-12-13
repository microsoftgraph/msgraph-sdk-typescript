import {Security} from '../models/';
import {createSecurityFromDiscriminatorValue} from '../models/createSecurityFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {Alerts_v2RequestBuilder} from './alerts_v2/alerts_v2RequestBuilder';
import {AlertItemRequestBuilder as Iff91ca8d0e283ef3ff2700a5c7e213199d3bea0fdcb785e753f5343b999184ca} from './alerts_v2/item/alertItemRequestBuilder';
import {AlertsRequestBuilder} from './alerts/alertsRequestBuilder';
import {AlertItemRequestBuilder as If4e8f48ca93bee3f14909d52abf51c7edfe2ac75b7b71f1ee7e470575f234198} from './alerts/item/alertItemRequestBuilder';
import {AttackSimulationRequestBuilder} from './attackSimulation/attackSimulationRequestBuilder';
import {CasesRequestBuilder} from './cases/casesRequestBuilder';
import {IncidentsRequestBuilder} from './incidents/incidentsRequestBuilder';
import {IncidentItemRequestBuilder} from './incidents/item/incidentItemRequestBuilder';
import {RunHuntingQueryRequestBuilder} from './runHuntingQuery/runHuntingQueryRequestBuilder';
import {SecureScoreControlProfileItemRequestBuilder} from './secureScoreControlProfiles/item/secureScoreControlProfileItemRequestBuilder';
import {SecureScoreControlProfilesRequestBuilder} from './secureScoreControlProfiles/secureScoreControlProfilesRequestBuilder';
import {SecureScoreItemRequestBuilder} from './secureScores/item/secureScoreItemRequestBuilder';
import {SecureScoresRequestBuilder} from './secureScores/secureScoresRequestBuilder';
import {SecurityRequestBuilderGetRequestConfiguration} from './securityRequestBuilderGetRequestConfiguration';
import {SecurityRequestBuilderPatchRequestConfiguration} from './securityRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the security singleton.
 */
export class SecurityRequestBuilder {
    /** Provides operations to manage the alerts property of the microsoft.graph.security entity. */
    public get alerts(): AlertsRequestBuilder {
        return new AlertsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the alerts_v2 property of the microsoft.graph.security entity. */
    public get alerts_v2(): Alerts_v2RequestBuilder {
        return new Alerts_v2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the attackSimulation property of the microsoft.graph.security entity. */
    public get attackSimulation(): AttackSimulationRequestBuilder {
        return new AttackSimulationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the cases property of the microsoft.graph.security entity. */
    public get cases(): CasesRequestBuilder {
        return new CasesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incidents property of the microsoft.graph.security entity. */
    public get incidents(): IncidentsRequestBuilder {
        return new IncidentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to call the runHuntingQuery method. */
    public get runHuntingQuery(): RunHuntingQueryRequestBuilder {
        return new RunHuntingQueryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity. */
    public get secureScoreControlProfiles(): SecureScoreControlProfilesRequestBuilder {
        return new SecureScoreControlProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the secureScores property of the microsoft.graph.security entity. */
    public get secureScores(): SecureScoresRequestBuilder {
        return new SecureScoresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the alerts_v2 property of the microsoft.graph.security entity.
     * @param id Unique identifier of the item
     * @returns a AlertItemRequestBuilder
     */
    public alerts_v2ById(id: string) : Iff91ca8d0e283ef3ff2700a5c7e213199d3bea0fdcb785e753f5343b999184ca {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["alert%2Did"] = id
        return new Iff91ca8d0e283ef3ff2700a5c7e213199d3bea0fdcb785e753f5343b999184ca(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the alerts property of the microsoft.graph.security entity.
     * @param id Unique identifier of the item
     * @returns a AlertItemRequestBuilder
     */
    public alertsById(id: string) : If4e8f48ca93bee3f14909d52abf51c7edfe2ac75b7b71f1ee7e470575f234198 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["alert%2Did"] = id
        return new If4e8f48ca93bee3f14909d52abf51c7edfe2ac75b7b71f1ee7e470575f234198(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Security | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Get security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Security
     */
    public get(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Security | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Security>(requestInfo, createSecurityFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the incidents property of the microsoft.graph.security entity.
     * @param id Unique identifier of the item
     * @returns a IncidentItemRequestBuilder
     */
    public incidentsById(id: string) : IncidentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["incident%2Did"] = id
        return new IncidentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Security
     */
    public patch(body: Security | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Security | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Security>(requestInfo, createSecurityFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
     * @param id Unique identifier of the item
     * @returns a SecureScoreControlProfileItemRequestBuilder
     */
    public secureScoreControlProfilesById(id: string) : SecureScoreControlProfileItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["secureScoreControlProfile%2Did"] = id
        return new SecureScoreControlProfileItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the secureScores property of the microsoft.graph.security entity.
     * @param id Unique identifier of the item
     * @returns a SecureScoreItemRequestBuilder
     */
    public secureScoresById(id: string) : SecureScoreItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["secureScore%2Did"] = id
        return new SecureScoreItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
