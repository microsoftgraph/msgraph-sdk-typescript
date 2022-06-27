import {IdentityCustomUserFlowAttribute} from './identityCustomUserFlowAttribute';
import {IdentityUserFlowAttributeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityCustomUserFlowAttributeImpl extends IdentityUserFlowAttributeImpl implements IdentityCustomUserFlowAttribute {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new IdentityCustomUserFlowAttribute and sets the default values.
     * @param identityCustomUserFlowAttributeParameterValue 
     */
    public constructor(identityCustomUserFlowAttributeParameterValue?: IdentityCustomUserFlowAttribute | undefined) {
        super(identityCustomUserFlowAttributeParameterValue);
        this.additionalData = identityCustomUserFlowAttributeParameterValue?.additionalData ? identityCustomUserFlowAttributeParameterValue?.additionalData! : {};
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
        writer.writeAdditionalData(this.additionalData);
    };
}
