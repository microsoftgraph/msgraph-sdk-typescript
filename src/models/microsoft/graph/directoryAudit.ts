import {AuditActivityInitiator} from './auditActivityInitiator';
import {Entity} from './entity';
import {KeyValue} from './keyValue';
import {OperationResult} from './operationResult';
import {TargetResource} from './targetResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryAudit extends Entity implements Parsable {
    /** Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _activityDateTime?: Date | undefined;
    /** Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list.  */
    private _activityDisplayName?: string | undefined;
    /** Indicates additional details on the activity.  */
    private _additionalDetails?: KeyValue[] | undefined;
    /** Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..)  */
    private _category?: string | undefined;
    /** Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.  */
    private _correlationId?: string | undefined;
    private _initiatedBy?: AuditActivityInitiator | undefined;
    /** Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.  */
    private _loggedByService?: string | undefined;
    private _operationType?: string | undefined;
    /** Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.  */
    private _result?: OperationResult | undefined;
    /** Indicates the reason for failure if the result is failure or timeout.  */
    private _resultReason?: string | undefined;
    /** Information about the resource that changed due to the activity.  */
    private _targetResources?: TargetResource[] | undefined;
    /**
     * Instantiates a new directoryAudit and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activityDateTime property value. Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Gets the activityDisplayName property value. Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list.
     * @returns a string
     */
    public get activityDisplayName() {
        return this._activityDisplayName;
    };
    /**
     * Gets the additionalDetails property value. Indicates additional details on the activity.
     * @returns a keyValue
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Gets the category property value. Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..)
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Gets the correlationId property value. Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Gets the initiatedBy property value. 
     * @returns a auditActivityInitiator
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Gets the loggedByService property value. Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
     * @returns a string
     */
    public get loggedByService() {
        return this._loggedByService;
    };
    /**
     * Gets the operationType property value. 
     * @returns a string
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Gets the result property value. Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
     * @returns a operationResult
     */
    public get result() {
        return this._result;
    };
    /**
     * Gets the resultReason property value. Indicates the reason for failure if the result is failure or timeout.
     * @returns a string
     */
    public get resultReason() {
        return this._resultReason;
    };
    /**
     * Gets the targetResources property value. Information about the resource that changed due to the activity.
     * @returns a targetResource
     */
    public get targetResources() {
        return this._targetResources;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activityDateTime", (o, n) => { (o as unknown as DirectoryAudit).activityDateTime = n.getDateValue(); }],
            ["activityDisplayName", (o, n) => { (o as unknown as DirectoryAudit).activityDisplayName = n.getStringValue(); }],
            ["additionalDetails", (o, n) => { (o as unknown as DirectoryAudit).additionalDetails = n.getCollectionOfObjectValues<KeyValue>(KeyValue); }],
            ["category", (o, n) => { (o as unknown as DirectoryAudit).category = n.getStringValue(); }],
            ["correlationId", (o, n) => { (o as unknown as DirectoryAudit).correlationId = n.getStringValue(); }],
            ["initiatedBy", (o, n) => { (o as unknown as DirectoryAudit).initiatedBy = n.getObjectValue<AuditActivityInitiator>(AuditActivityInitiator); }],
            ["loggedByService", (o, n) => { (o as unknown as DirectoryAudit).loggedByService = n.getStringValue(); }],
            ["operationType", (o, n) => { (o as unknown as DirectoryAudit).operationType = n.getStringValue(); }],
            ["result", (o, n) => { (o as unknown as DirectoryAudit).result = n.getEnumValue<OperationResult>(OperationResult); }],
            ["resultReason", (o, n) => { (o as unknown as DirectoryAudit).resultReason = n.getStringValue(); }],
            ["targetResources", (o, n) => { (o as unknown as DirectoryAudit).targetResources = n.getCollectionOfObjectValues<TargetResource>(TargetResource); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("activityDisplayName", this.activityDisplayName);
        writer.writeCollectionOfObjectValues<KeyValue>("additionalDetails", this.additionalDetails);
        writer.writeStringValue("category", this.category);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeObjectValue<AuditActivityInitiator>("initiatedBy", this.initiatedBy);
        writer.writeStringValue("loggedByService", this.loggedByService);
        writer.writeStringValue("operationType", this.operationType);
        writer.writeEnumValue<OperationResult>("result", this.result);
        writer.writeStringValue("resultReason", this.resultReason);
        writer.writeCollectionOfObjectValues<TargetResource>("targetResources", this.targetResources);
    };
    /**
     * Sets the activityDateTime property value. Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Sets the activityDisplayName property value. Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities logged, refer to Azure Ad activity list.
     * @param value Value to set for the activityDisplayName property.
     */
    public set activityDisplayName(value: string | undefined) {
        this._activityDisplayName = value;
    };
    /**
     * Sets the additionalDetails property value. Indicates additional details on the activity.
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: KeyValue[] | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Sets the category property value. Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management etc..)
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Sets the correlationId property value. Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Sets the initiatedBy property value. 
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: AuditActivityInitiator | undefined) {
        this._initiatedBy = value;
    };
    /**
     * Sets the loggedByService property value. Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
     * @param value Value to set for the loggedByService property.
     */
    public set loggedByService(value: string | undefined) {
        this._loggedByService = value;
    };
    /**
     * Sets the operationType property value. 
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: string | undefined) {
        this._operationType = value;
    };
    /**
     * Sets the result property value. Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
     * @param value Value to set for the result property.
     */
    public set result(value: OperationResult | undefined) {
        this._result = value;
    };
    /**
     * Sets the resultReason property value. Indicates the reason for failure if the result is failure or timeout.
     * @param value Value to set for the resultReason property.
     */
    public set resultReason(value: string | undefined) {
        this._resultReason = value;
    };
    /**
     * Sets the targetResources property value. Information about the resource that changed due to the activity.
     * @param value Value to set for the targetResources property.
     */
    public set targetResources(value: TargetResource[] | undefined) {
        this._targetResources = value;
    };
}
