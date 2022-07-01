import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {EntityImpl, ServiceHealthIssueImpl} from './index';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceHealthImpl extends EntityImpl implements ServiceHealth {
    /** A collection of issues that happened on the service, with detailed information for each issue. */
    private _issues?: ServiceHealthIssue[] | undefined;
    /** The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant. */
    private _service?: string | undefined;
    /** Show the overall service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    private _status?: ServiceHealthStatus | undefined;
    /**
     * Instantiates a new serviceHealth and sets the default values.
     * @param serviceHealthParameterValue 
     */
    public constructor(serviceHealthParameterValue?: ServiceHealth | undefined) {
        super(serviceHealthParameterValue);
        this._issues = serviceHealthParameterValue?.issues;
        this._service = serviceHealthParameterValue?.service;
        this._status = serviceHealthParameterValue?.status;
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
     * Gets the issues property value. A collection of issues that happened on the service, with detailed information for each issue.
     * @returns a ServiceHealthIssueInterface
     */
    public get issues() {
        return this._issues;
    };
    /**
     * Sets the issues property value. A collection of issues that happened on the service, with detailed information for each issue.
     * @param value Value to set for the issues property.
     */
    public set issues(value: ServiceHealthIssue[] | undefined) {
        if(value) {
            const issuesArrValue: ServiceHealthIssueImpl[] = [];
            this.issues?.forEach(element => {
                issuesArrValue.push((element instanceof ServiceHealthIssueImpl? element as ServiceHealthIssueImpl:new ServiceHealthIssueImpl(element)));
            });
            this._issues = issuesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.issues && this.issues.length != 0){        const issuesArrValue: ServiceHealthIssueImpl[] = [];
        this.issues?.forEach(element => {
            issuesArrValue.push((element instanceof ServiceHealthIssueImpl? element as ServiceHealthIssueImpl:new ServiceHealthIssueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServiceHealthIssueImpl>("issues", issuesArrValue);
        }
        if(this.service){
            writer.writeStringValue("service", this.service);
        }
        if(this.status){
            writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
        }
    };
    /**
     * Gets the service property value. The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        if(value) {
            this._service = value;
        }
    };
    /**
     * Gets the status property value. Show the overall service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @returns a serviceHealthStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Show the overall service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @param value Value to set for the status property.
     */
    public set status(value: ServiceHealthStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
