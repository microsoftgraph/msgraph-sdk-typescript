import {IdentityImpl} from './index';
import {ServicePrincipalIdentity} from './servicePrincipalIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePrincipalIdentityImpl extends IdentityImpl implements ServicePrincipalIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The application identifier of the service principal. */
    public appId?: string | undefined;
    /**
     * Instantiates a new ServicePrincipalIdentity and sets the default values.
     * @param servicePrincipalIdentityParameterValue 
     */
    public constructor(servicePrincipalIdentityParameterValue?: ServicePrincipalIdentity | undefined) {
        super(servicePrincipalIdentityParameterValue);
        this.additionalData = servicePrincipalIdentityParameterValue?.additionalData ? servicePrincipalIdentityParameterValue?.additionalData! : {};
        this.appId = servicePrincipalIdentityParameterValue?.appId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appId": n => { this.appId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
