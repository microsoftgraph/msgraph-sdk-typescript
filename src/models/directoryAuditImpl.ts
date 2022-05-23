import {AuditActivityInitiator} from './auditActivityInitiator';
import {createAuditActivityInitiatorFromDiscriminatorValue} from './createAuditActivityInitiatorFromDiscriminatorValue';
import {createKeyValueFromDiscriminatorValue} from './createKeyValueFromDiscriminatorValue';
import {createTargetResourceFromDiscriminatorValue} from './createTargetResourceFromDiscriminatorValue';
import {DirectoryAudit} from './directoryAudit';
import {AuditActivityInitiatorImpl, EntityImpl, KeyValueImpl, TargetResourceImpl} from './index';
import {KeyValue} from './keyValue';
import {OperationResult} from './operationResult';
import {TargetResource} from './targetResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class DirectoryAuditImpl extends EntityImpl implements DirectoryAudit, Parsable {
    /** Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public activityDateTime?: Date | undefined;
    /** Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list. */
    public activityDisplayName?: string | undefined;
    /** Indicates additional details on the activity. */
    public additionalDetails?: KeyValue[] | undefined;
    /** Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..) */
    public category?: string | undefined;
    /** Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services. */
    public correlationId?: string | undefined;
    /** The initiatedBy property */
    public initiatedBy?: AuditActivityInitiator | undefined;
    /** Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management. */
    public loggedByService?: string | undefined;
    /** Indicates the type of operation that was performed. The possible values include but are not limited to the following: Add, Assign, Update, Unassign, and Delete. */
    public operationType?: string | undefined;
    /** Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue. */
    public result?: OperationResult | undefined;
    /** Indicates the reason for failure if the result is failure or timeout. */
    public resultReason?: string | undefined;
    /** Information about the resource that changed due to the activity. */
    public targetResources?: TargetResource[] | undefined;
    /**
     * Instantiates a new directoryAudit and sets the default values.
     * @param directoryAuditParameterValue 
     */
    public constructor(directoryAuditParameterValue?: DirectoryAudit | undefined) {
        super();
        this.activityDateTime = directoryAuditParameterValue?.activityDateTime ;
        this.activityDisplayName = directoryAuditParameterValue?.activityDisplayName ;
        this.additionalDetails = directoryAuditParameterValue?.additionalDetails ;
        this.category = directoryAuditParameterValue?.category ;
        this.correlationId = directoryAuditParameterValue?.correlationId ;
        this.initiatedBy = directoryAuditParameterValue?.initiatedBy ;
        this.loggedByService = directoryAuditParameterValue?.loggedByService ;
        this.operationType = directoryAuditParameterValue?.operationType ;
        this.result = directoryAuditParameterValue?.result ;
        this.resultReason = directoryAuditParameterValue?.resultReason ;
        this.targetResources = directoryAuditParameterValue?.targetResources ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "activityDisplayName": n => { this.activityDisplayName = n.getStringValue(); },
            "additionalDetails": n => { this.additionalDetails = n.getCollectionOfObjectValues<KeyValueImpl>(createKeyValueFromDiscriminatorValue); },
            "category": n => { this.category = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "initiatedBy": n => { this.initiatedBy = n.getObjectValue<AuditActivityInitiatorImpl>(createAuditActivityInitiatorFromDiscriminatorValue); },
            "loggedByService": n => { this.loggedByService = n.getStringValue(); },
            "operationType": n => { this.operationType = n.getStringValue(); },
            "result": n => { this.result = n.getEnumValue<OperationResult>(OperationResult); },
            "resultReason": n => { this.resultReason = n.getStringValue(); },
            "targetResources": n => { this.targetResources = n.getCollectionOfObjectValues<TargetResourceImpl>(createTargetResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activityDateTime){
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        }
        if(this.activityDisplayName){
        writer.writeStringValue("activityDisplayName", this.activityDisplayName);
        }
        if(this.additionalDetails && this.additionalDetails.length != 0){        const additionalDetailsArrValue: KeyValueImpl[] = []; this.additionalDetails?.forEach(element => {additionalDetailsArrValue.push(new KeyValueImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValueImpl>("additionalDetails", additionalDetailsArrValue);
        }
        if(this.category){
        writer.writeStringValue("category", this.category);
        }
        if(this.correlationId){
        writer.writeStringValue("correlationId", this.correlationId);
        }
        if(this.initiatedBy){
        writer.writeObjectValue<AuditActivityInitiatorImpl>("initiatedBy", new AuditActivityInitiatorImpl(this.initiatedBy));
        }
        if(this.loggedByService){
        writer.writeStringValue("loggedByService", this.loggedByService);
        }
        if(this.operationType){
        writer.writeStringValue("operationType", this.operationType);
        }
        if(this.result){
        writer.writeEnumValue<OperationResult>("result", this.result);
        }
        if(this.resultReason){
        writer.writeStringValue("resultReason", this.resultReason);
        }
        if(this.targetResources && this.targetResources.length != 0){        const targetResourcesArrValue: TargetResourceImpl[] = []; this.targetResources?.forEach(element => {targetResourcesArrValue.push(new TargetResourceImpl(element));});
        writer.writeCollectionOfObjectValues<TargetResourceImpl>("targetResources", targetResourcesArrValue);
        }
    };
}
