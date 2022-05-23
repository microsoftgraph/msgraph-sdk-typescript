import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {EntityImpl, ServiceHealthIssueImpl} from './index';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceHealthImpl extends EntityImpl implements Parsable, ServiceHealth {
    /** A collection of issues that happened on the service, with detailed information for each issue. */
    public issues?: ServiceHealthIssue[] | undefined;
    /** The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant. */
    public service?: string | undefined;
    /** Show the overall service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    public status?: ServiceHealthStatus | undefined;
    /**
     * Instantiates a new serviceHealth and sets the default values.
     * @param serviceHealthParameterValue 
     */
    public constructor(serviceHealthParameterValue?: ServiceHealth | undefined) {
        super();
        this.issues = serviceHealthParameterValue?.issues ;
        this.service = serviceHealthParameterValue?.service ;
        this.status = serviceHealthParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "issues": n => { this.issues = n.getCollectionOfObjectValues<ServiceHealthIssueImpl>(createServiceHealthIssueFromDiscriminatorValue); },
            "service": n => { this.service = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.issues && this.issues.length != 0){        const issuesArrValue: ServiceHealthIssueImpl[] = []; this.issues?.forEach(element => {issuesArrValue.push(new ServiceHealthIssueImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthIssueImpl>("issues", issuesArrValue);
        }
        if(this.service){
        writer.writeStringValue("service", this.service);
        }
        if(this.status){
        writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
        }
    };
}
