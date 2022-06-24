import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {StsPolicyImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class HomeRealmDiscoveryPolicyImpl extends StsPolicyImpl implements HomeRealmDiscoveryPolicy {
    /**
     * Instantiates a new homeRealmDiscoveryPolicy and sets the default values.
     * @param homeRealmDiscoveryPolicyParameterValue 
     */
    public constructor(homeRealmDiscoveryPolicyParameterValue?: HomeRealmDiscoveryPolicy | undefined) {
        super(homeRealmDiscoveryPolicyParameterValue);
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
