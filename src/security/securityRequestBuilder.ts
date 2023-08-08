import {createSecurityFromDiscriminatorValue} from '../models/createSecurityFromDiscriminatorValue';
import {deserializeIntoSecurity} from '../models/deserializeIntoSecurity';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import type {Security} from '../models/security';
import {serializeSecurity} from '../models/serializeSecurity';
import {Alerts_v2RequestBuilder} from './alerts_v2/alerts_v2RequestBuilder';
import {AlertsRequestBuilder} from './alerts/alertsRequestBuilder';
import {AttackSimulationRequestBuilder} from './attackSimulation/attackSimulationRequestBuilder';
import {CasesRequestBuilder} from './cases/casesRequestBuilder';
import {IncidentsRequestBuilder} from './incidents/incidentsRequestBuilder';
import {MicrosoftGraphSecurityRunHuntingQueryRequestBuilder} from './microsoftGraphSecurityRunHuntingQuery/microsoftGraphSecurityRunHuntingQueryRequestBuilder';
import {SecureScoreControlProfilesRequestBuilder} from './secureScoreControlProfiles/secureScoreControlProfilesRequestBuilder';
import {SecureScoresRequestBuilder} from './secureScores/secureScoresRequestBuilder';
import {SecurityRequestBuilderGetRequestConfiguration} from './securityRequestBuilderGetRequestConfiguration';
import {SecurityRequestBuilderPatchRequestConfiguration} from './securityRequestBuilderPatchRequestConfiguration';
import {ThreatIntelligenceRequestBuilder} from './threatIntelligence/threatIntelligenceRequestBuilder';
import {TriggersRequestBuilder} from './triggers/triggersRequestBuilder';
import {TriggerTypesRequestBuilder} from './triggerTypes/triggerTypesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the security singleton.
 */
export class SecurityRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the alerts property of the microsoft.graph.security entity.
     */
    public get alerts(): AlertsRequestBuilder {
        return new AlertsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the alerts_v2 property of the microsoft.graph.security entity.
     */
    public get alerts_v2(): Alerts_v2RequestBuilder {
        return new Alerts_v2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attackSimulation property of the microsoft.graph.security entity.
     */
    public get attackSimulation(): AttackSimulationRequestBuilder {
        return new AttackSimulationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the cases property of the microsoft.graph.security entity.
     */
    public get cases(): CasesRequestBuilder {
        return new CasesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the incidents property of the microsoft.graph.security entity.
     */
    public get incidents(): IncidentsRequestBuilder {
        return new IncidentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the runHuntingQuery method.
     */
    public get microsoftGraphSecurityRunHuntingQuery(): MicrosoftGraphSecurityRunHuntingQueryRequestBuilder {
        return new MicrosoftGraphSecurityRunHuntingQueryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
     */
    public get secureScoreControlProfiles(): SecureScoreControlProfilesRequestBuilder {
        return new SecureScoreControlProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the secureScores property of the microsoft.graph.security entity.
     */
    public get secureScores(): SecureScoresRequestBuilder {
        return new SecureScoresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the threatIntelligence property of the microsoft.graph.security entity.
     */
    public get threatIntelligence(): ThreatIntelligenceRequestBuilder {
        return new ThreatIntelligenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the triggers property of the microsoft.graph.security entity.
     */
    public get triggers(): TriggersRequestBuilder {
        return new TriggersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the triggerTypes property of the microsoft.graph.security entity.
     */
    public get triggerTypes(): TriggerTypesRequestBuilder {
        return new TriggerTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security{?%24select,%24expand}");
    };
    /**
     * Get security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Security
     */
    public get(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined) : Promise<Security | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Security>(requestInfo, createSecurityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Security
     */
    public patch(body: Security, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined) : Promise<Security | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Security>(requestInfo, createSecurityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    public toPatchRequestInformation(body: Security, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSecurity);
        return requestInfo;
    };
}
