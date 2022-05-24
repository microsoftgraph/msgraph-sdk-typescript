import {StsPolicyImpl} from './index';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TokenLifetimePolicyImpl extends StsPolicyImpl implements Parsable, TokenLifetimePolicy {
    /**
     * Instantiates a new tokenLifetimePolicy and sets the default values.
     * @param tokenLifetimePolicyParameterValue 
     */
    public constructor(tokenLifetimePolicyParameterValue?: TokenLifetimePolicy | undefined) {
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
