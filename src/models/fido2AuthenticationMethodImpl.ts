import {AttestationLevel} from './attestationLevel';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {AuthenticationMethodImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class Fido2AuthenticationMethodImpl extends AuthenticationMethodImpl implements Fido2AuthenticationMethod, Parsable {
    /** Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator. */
    public aaGuid?: string | undefined;
    /** The attestation certificate(s) attached to this security key. */
    public attestationCertificates?: string[] | undefined;
    /** The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue. */
    public attestationLevel?: AttestationLevel | undefined;
    /** The timestamp when this key was registered to the user. */
    public createdDateTime?: Date | undefined;
    /** The display name of the key as given by the user. */
    public displayName?: string | undefined;
    /** The manufacturer-assigned model of the FIDO2 security key. */
    public model?: string | undefined;
    /**
     * Instantiates a new fido2AuthenticationMethod and sets the default values.
     * @param fido2AuthenticationMethodParameterValue 
     */
    public constructor(fido2AuthenticationMethodParameterValue?: Fido2AuthenticationMethod | undefined) {
        super();
        this.aaGuid = fido2AuthenticationMethodParameterValue?.aaGuid ;
        this.attestationCertificates = fido2AuthenticationMethodParameterValue?.attestationCertificates ;
        this.attestationLevel = fido2AuthenticationMethodParameterValue?.attestationLevel ;
        this.createdDateTime = fido2AuthenticationMethodParameterValue?.createdDateTime ;
        this.displayName = fido2AuthenticationMethodParameterValue?.displayName ;
        this.model = fido2AuthenticationMethodParameterValue?.model ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "aaGuid": n => { this.aaGuid = n.getStringValue(); },
            "attestationCertificates": n => { this.attestationCertificates = n.getCollectionOfPrimitiveValues<string>(); },
            "attestationLevel": n => { this.attestationLevel = n.getEnumValue<AttestationLevel>(AttestationLevel); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.aaGuid){
        writer.writeStringValue("aaGuid", this.aaGuid);
        }
        if(this.attestationCertificates){
        writer.writeCollectionOfPrimitiveValues<string>("attestationCertificates", this.attestationCertificates);
        }
        if(this.attestationLevel){
        writer.writeEnumValue<AttestationLevel>("attestationLevel", this.attestationLevel);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
    };
}
