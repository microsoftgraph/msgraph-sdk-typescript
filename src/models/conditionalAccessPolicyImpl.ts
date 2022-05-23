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
export class ConditionalAccessPolicyImpl extends EntityImpl implements ConditionalAccessPolicy, Parsable {
    /** The conditions property */
    public conditions?: ConditionalAccessConditionSet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    public createdDateTime?: Date | undefined;
    /** Not used. */
    public description?: string | undefined;
    /** Specifies a display name for the conditionalAccessPolicy object. */
    public displayName?: string | undefined;
    /** Specifies the grant controls that must be fulfilled to pass the policy. */
    public grantControls?: ConditionalAccessGrantControls | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    public modifiedDateTime?: Date | undefined;
    /** Specifies the session controls that are enforced after sign-in. */
    public sessionControls?: ConditionalAccessSessionControls | undefined;
    /** Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required. */
    public state?: ConditionalAccessPolicyState | undefined;
    /**
     * Instantiates a new conditionalAccessPolicy and sets the default values.
     * @param conditionalAccessPolicyParameterValue 
     */
    public constructor(conditionalAccessPolicyParameterValue?: ConditionalAccessPolicy | undefined) {
        super();
        this.conditions = conditionalAccessPolicyParameterValue?.conditions ;
        this.createdDateTime = conditionalAccessPolicyParameterValue?.createdDateTime ;
        this.description = conditionalAccessPolicyParameterValue?.description ;
        this.displayName = conditionalAccessPolicyParameterValue?.displayName ;
        this.grantControls = conditionalAccessPolicyParameterValue?.grantControls ;
        this.modifiedDateTime = conditionalAccessPolicyParameterValue?.modifiedDateTime ;
        this.sessionControls = conditionalAccessPolicyParameterValue?.sessionControls ;
        this.state = conditionalAccessPolicyParameterValue?.state ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.conditions){
        writer.writeObjectValue<ConditionalAccessConditionSetImpl>("conditions", new ConditionalAccessConditionSetImpl(this.conditions));
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
        writer.writeObjectValue<ConditionalAccessGrantControlsImpl>("grantControls", new ConditionalAccessGrantControlsImpl(this.grantControls));
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.sessionControls){
        writer.writeObjectValue<ConditionalAccessSessionControlsImpl>("sessionControls", new ConditionalAccessSessionControlsImpl(this.sessionControls));
        }
        if(this.state){
        writer.writeEnumValue<ConditionalAccessPolicyState>("state", this.state);
        }
    };
}
