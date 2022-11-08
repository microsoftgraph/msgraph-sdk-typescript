import {createAuditActorFromDiscriminatorValue} from './createAuditActorFromDiscriminatorValue';
import {createAuditResourceFromDiscriminatorValue} from './createAuditResourceFromDiscriminatorValue';
import {AuditActor, AuditResource, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditEvent extends Entity implements Parsable {
    /** Friendly name of the activity. */
    private _activity?: string | undefined;
    /** The date time in UTC when the activity was performed. */
    private _activityDateTime?: Date | undefined;
    /** The HTTP operation type of the activity. */
    private _activityOperationType?: string | undefined;
    /** The result of the activity. */
    private _activityResult?: string | undefined;
    /** The type of activity that was being performed. */
    private _activityType?: string | undefined;
    /** AAD user and application that are associated with the audit event. */
    private _actor?: AuditActor | undefined;
    /** Audit category. */
    private _category?: string | undefined;
    /** Component name. */
    private _componentName?: string | undefined;
    /** The client request Id that is used to correlate activity within the system. */
    private _correlationId?: string | undefined;
    /** Event display name. */
    private _displayName?: string | undefined;
    /** Resources being modified. */
    private _resources?: AuditResource[] | undefined;
    /**
     * Gets the activity property value. Friendly name of the activity.
     * @returns a string
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. Friendly name of the activity.
     * @param value Value to set for the activity property.
     */
    public set activity(value: string | undefined) {
        this._activity = value;
    };
    /**
     * Gets the activityDateTime property value. The date time in UTC when the activity was performed.
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Sets the activityDateTime property value. The date time in UTC when the activity was performed.
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Gets the activityOperationType property value. The HTTP operation type of the activity.
     * @returns a string
     */
    public get activityOperationType() {
        return this._activityOperationType;
    };
    /**
     * Sets the activityOperationType property value. The HTTP operation type of the activity.
     * @param value Value to set for the activityOperationType property.
     */
    public set activityOperationType(value: string | undefined) {
        this._activityOperationType = value;
    };
    /**
     * Gets the activityResult property value. The result of the activity.
     * @returns a string
     */
    public get activityResult() {
        return this._activityResult;
    };
    /**
     * Sets the activityResult property value. The result of the activity.
     * @param value Value to set for the activityResult property.
     */
    public set activityResult(value: string | undefined) {
        this._activityResult = value;
    };
    /**
     * Gets the activityType property value. The type of activity that was being performed.
     * @returns a string
     */
    public get activityType() {
        return this._activityType;
    };
    /**
     * Sets the activityType property value. The type of activity that was being performed.
     * @param value Value to set for the activityType property.
     */
    public set activityType(value: string | undefined) {
        this._activityType = value;
    };
    /**
     * Gets the actor property value. AAD user and application that are associated with the audit event.
     * @returns a auditActor
     */
    public get actor() {
        return this._actor;
    };
    /**
     * Sets the actor property value. AAD user and application that are associated with the audit event.
     * @param value Value to set for the actor property.
     */
    public set actor(value: AuditActor | undefined) {
        this._actor = value;
    };
    /**
     * Gets the category property value. Audit category.
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. Audit category.
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the componentName property value. Component name.
     * @returns a string
     */
    public get componentName() {
        return this._componentName;
    };
    /**
     * Sets the componentName property value. Component name.
     * @param value Value to set for the componentName property.
     */
    public set componentName(value: string | undefined) {
        this._componentName = value;
    };
    /**
     * Instantiates a new AuditEvent and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.auditEvent";
    };
    /**
     * Gets the correlationId property value. The client request Id that is used to correlate activity within the system.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. The client request Id that is used to correlate activity within the system.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the displayName property value. Event display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Event display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getStringValue(); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "activityOperationType": n => { this.activityOperationType = n.getStringValue(); },
            "activityResult": n => { this.activityResult = n.getStringValue(); },
            "activityType": n => { this.activityType = n.getStringValue(); },
            "actor": n => { this.actor = n.getObjectValue<AuditActor>(createAuditActorFromDiscriminatorValue); },
            "category": n => { this.category = n.getStringValue(); },
            "componentName": n => { this.componentName = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<AuditResource>(createAuditResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the resources property value. Resources being modified.
     * @returns a auditResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Resources being modified.
     * @param value Value to set for the resources property.
     */
    public set resources(value: AuditResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activity", this.activity);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("activityOperationType", this.activityOperationType);
        writer.writeStringValue("activityResult", this.activityResult);
        writer.writeStringValue("activityType", this.activityType);
        writer.writeObjectValue<AuditActor>("actor", this.actor);
        writer.writeStringValue("category", this.category);
        writer.writeStringValue("componentName", this.componentName);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AuditResource>("resources", this.resources);
    };
}
