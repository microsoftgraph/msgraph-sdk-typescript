import {IdentityUserFlow} from './identityUserFlow';
import {EntityImpl} from './index';
import {UserFlowType} from './userFlowType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlowImpl extends EntityImpl implements IdentityUserFlow {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The userFlowType property */
    public userFlowType?: UserFlowType | undefined;
    /** The userFlowTypeVersion property */
    public userFlowTypeVersion?: number | undefined;
    /**
     * Instantiates a new IdentityUserFlow and sets the default values.
     * @param identityUserFlowParameterValue 
     */
    public constructor(identityUserFlowParameterValue?: IdentityUserFlow | undefined) {
        super(identityUserFlowParameterValue);
        this.additionalData = identityUserFlowParameterValue?.additionalData ? identityUserFlowParameterValue?.additionalData! : {};
        this.userFlowType = identityUserFlowParameterValue?.userFlowType;
        this.userFlowTypeVersion = identityUserFlowParameterValue?.userFlowTypeVersion;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userFlowType": n => { this.userFlowType = n.getEnumValue<UserFlowType>(UserFlowType); },
            "userFlowTypeVersion": n => { this.userFlowTypeVersion = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userFlowType){
            writer.writeEnumValue<UserFlowType>("userFlowType", this.userFlowType);
        }
        if(this.userFlowTypeVersion){
            writer.writeNumberValue("userFlowTypeVersion", this.userFlowTypeVersion);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
