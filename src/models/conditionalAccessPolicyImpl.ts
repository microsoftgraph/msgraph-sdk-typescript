import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {createConditionalAccessConditionSetFromDiscriminatorValue} from './createConditionalAccessConditionSetFromDiscriminatorValue';
import {createConditionalAccessGrantControlsFromDiscriminatorValue} from './createConditionalAccessGrantControlsFromDiscriminatorValue';
import {createConditionalAccessSessionControlsFromDiscriminatorValue} from './createConditionalAccessSessionControlsFromDiscriminatorValue';
import {ConditionalAccessConditionSetImpl, ConditionalAccessGrantControlsImpl, ConditionalAccessSessionControlsImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class ConditionalAccessPolicyImpl extends EntityImpl implements ConditionalAccessPolicy {
    /** The conditions property */
    private _conditions?: ConditionalAccessConditionSet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    private _createdDateTime?: Date | undefined;
    /** Not used. */
    private _description?: string | undefined;
    /** Specifies a display name for the conditionalAccessPolicy object. */
    private _displayName?: string | undefined;
    /** Specifies the grant controls that must be fulfilled to pass the policy. */
    private _grantControls?: ConditionalAccessGrantControls | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    private _modifiedDateTime?: Date | undefined;
    /** Specifies the session controls that are enforced after sign-in. */
    private _sessionControls?: ConditionalAccessSessionControls | undefined;
    /** Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required. */
    private _state?: ConditionalAccessPolicyState | undefined;
    /**
     * Gets the conditions property value. The conditions property
     * @returns a ConditionalAccessConditionSetInterface
     */
    public get conditions() {
        return this._conditions;
    };
    /**
     * Sets the conditions property value. The conditions property
     * @param value Value to set for the conditions property.
     */
    public set conditions(value: ConditionalAccessConditionSet | undefined) {
        if(value) {
            this._conditions = value instanceof ConditionalAccessConditionSetImpl? value as ConditionalAccessConditionSetImpl: new ConditionalAccessConditionSetImpl(value);
        }
    };
    /**
     * Instantiates a new conditionalAccessPolicy and sets the default values.
     * @param conditionalAccessPolicyParameterValue 
     */
    public constructor(conditionalAccessPolicyParameterValue?: ConditionalAccessPolicy | undefined) {
        super(conditionalAccessPolicyParameterValue);
        this._conditions = conditionalAccessPolicyParameterValue?.conditions;
        this._createdDateTime = conditionalAccessPolicyParameterValue?.createdDateTime;
        this._description = conditionalAccessPolicyParameterValue?.description;
        this._displayName = conditionalAccessPolicyParameterValue?.displayName;
        this._grantControls = conditionalAccessPolicyParameterValue?.grantControls;
        this._modifiedDateTime = conditionalAccessPolicyParameterValue?.modifiedDateTime;
        this._sessionControls = conditionalAccessPolicyParameterValue?.sessionControls;
        this._state = conditionalAccessPolicyParameterValue?.state;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Not used.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Not used.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conditions": n => { this.conditions = n.getObjectValue<ConditionalAccessConditionSetImpl>(createConditionalAccessConditionSetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "grantControls": n => { this.grantControls = n.getObjectValue<ConditionalAccessGrantControlsImpl>(createConditionalAccessGrantControlsFromDiscriminatorValue); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "sessionControls": n => { this.sessionControls = n.getObjectValue<ConditionalAccessSessionControlsImpl>(createConditionalAccessSessionControlsFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ConditionalAccessPolicyState>(ConditionalAccessPolicyState); },
        };
    };
    /**
     * Gets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
     * @returns a ConditionalAccessGrantControlsInterface
     */
    public get grantControls() {
        return this._grantControls;
    };
    /**
     * Sets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
     * @param value Value to set for the grantControls property.
     */
    public set grantControls(value: ConditionalAccessGrantControls | undefined) {
        if(value) {
            this._grantControls = value instanceof ConditionalAccessGrantControlsImpl? value as ConditionalAccessGrantControlsImpl: new ConditionalAccessGrantControlsImpl(value);
        }
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        if(value) {
            this._modifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.conditions){
            writer.writeObjectValue<ConditionalAccessConditionSetImpl>("conditions", (this.conditions instanceof ConditionalAccessConditionSetImpl? this.conditions as ConditionalAccessConditionSetImpl: new ConditionalAccessConditionSetImpl(this.conditions)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.grantControls){
            writer.writeObjectValue<ConditionalAccessGrantControlsImpl>("grantControls", (this.grantControls instanceof ConditionalAccessGrantControlsImpl? this.grantControls as ConditionalAccessGrantControlsImpl: new ConditionalAccessGrantControlsImpl(this.grantControls)));
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.sessionControls){
            writer.writeObjectValue<ConditionalAccessSessionControlsImpl>("sessionControls", (this.sessionControls instanceof ConditionalAccessSessionControlsImpl? this.sessionControls as ConditionalAccessSessionControlsImpl: new ConditionalAccessSessionControlsImpl(this.sessionControls)));
        }
        if(this.state){
            writer.writeEnumValue<ConditionalAccessPolicyState>("state", this.state);
        }
    };
    /**
     * Gets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
     * @returns a ConditionalAccessSessionControlsInterface
     */
    public get sessionControls() {
        return this._sessionControls;
    };
    /**
     * Sets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
     * @param value Value to set for the sessionControls property.
     */
    public set sessionControls(value: ConditionalAccessSessionControls | undefined) {
        if(value) {
            this._sessionControls = value instanceof ConditionalAccessSessionControlsImpl? value as ConditionalAccessSessionControlsImpl: new ConditionalAccessSessionControlsImpl(value);
        }
    };
    /**
     * Gets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
     * @returns a conditionalAccessPolicyState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
     * @param value Value to set for the state property.
     */
    public set state(value: ConditionalAccessPolicyState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
