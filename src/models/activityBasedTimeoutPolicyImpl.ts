import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {StsPolicyImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class ActivityBasedTimeoutPolicyImpl extends StsPolicyImpl implements ActivityBasedTimeoutPolicy, Parsable {
    /**
     * Instantiates a new activityBasedTimeoutPolicy and sets the default values.
     * @param activityBasedTimeoutPolicyParameterValue 
     */
    public constructor(activityBasedTimeoutPolicyParameterValue?: ActivityBasedTimeoutPolicy | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
