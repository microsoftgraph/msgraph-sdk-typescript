import {IdentityCustomUserFlowAttribute} from './identityCustomUserFlowAttribute';
import {IdentityUserFlowAttributeImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityCustomUserFlowAttributeImpl extends IdentityUserFlowAttributeImpl implements IdentityCustomUserFlowAttribute {
    /**
     * Instantiates a new IdentityCustomUserFlowAttribute and sets the default values.
     * @param identityCustomUserFlowAttributeParameterValue 
     */
    public constructor(identityCustomUserFlowAttributeParameterValue?: IdentityCustomUserFlowAttribute | undefined) {
        super(identityCustomUserFlowAttributeParameterValue);
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
