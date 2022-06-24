import {AppleManagedIdentityProvider} from './appleManagedIdentityProvider';
import {IdentityProviderBaseImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppleManagedIdentityProviderImpl extends IdentityProviderBaseImpl implements AppleManagedIdentityProvider {
    /** The certificate data which is a long string of text from the certificate, can be null. */
    public certificateData?: string | undefined;
    /** The Apple developer identifier. Required. */
    public developerId?: string | undefined;
    /** The Apple key identifier. Required. */
    public keyId?: string | undefined;
    /** The Apple service identifier. Required. */
    public serviceId?: string | undefined;
    /**
     * Instantiates a new AppleManagedIdentityProvider and sets the default values.
     * @param appleManagedIdentityProviderParameterValue 
     */
    public constructor(appleManagedIdentityProviderParameterValue?: AppleManagedIdentityProvider | undefined) {
        super(appleManagedIdentityProviderParameterValue);
        this.certificateData = appleManagedIdentityProviderParameterValue?.certificateData;
        this.developerId = appleManagedIdentityProviderParameterValue?.developerId;
        this.keyId = appleManagedIdentityProviderParameterValue?.keyId;
        this.serviceId = appleManagedIdentityProviderParameterValue?.serviceId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificateData": n => { this.certificateData = n.getStringValue(); },
            "developerId": n => { this.developerId = n.getStringValue(); },
            "keyId": n => { this.keyId = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.certificateData){
            writer.writeStringValue("certificateData", this.certificateData);
        }
        if(this.developerId){
            writer.writeStringValue("developerId", this.developerId);
        }
        if(this.keyId){
            writer.writeStringValue("keyId", this.keyId);
        }
        if(this.serviceId){
            writer.writeStringValue("serviceId", this.serviceId);
        }
    };
}
