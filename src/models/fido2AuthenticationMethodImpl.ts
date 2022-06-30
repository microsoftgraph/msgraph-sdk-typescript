import {AttestationLevel} from './attestationLevel';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {AuthenticationMethodImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethodImpl extends AuthenticationMethodImpl implements Fido2AuthenticationMethod {
    /** Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator. */
    private _aaGuid?: string | undefined;
    /** The attestation certificate(s) attached to this security key. */
    private _attestationCertificates?: string[] | undefined;
    /** The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue. */
    private _attestationLevel?: AttestationLevel | undefined;
    /** The timestamp when this key was registered to the user. */
    private _createdDateTime?: Date | undefined;
    /** The display name of the key as given by the user. */
    private _displayName?: string | undefined;
    /** The manufacturer-assigned model of the FIDO2 security key. */
    private _model?: string | undefined;
    /**
     * Gets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @returns a string
     */
    public get aaGuid() {
        return this._aaGuid;
    };
    /**
     * Sets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @param value Value to set for the aaGuid property.
     */
    public set aaGuid(value: string | undefined) {
        if(value) {
            this._aaGuid = value;
        }
    };
    /**
     * Gets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
     * @returns a string
     */
    public get attestationCertificates() {
        return this._attestationCertificates;
    };
    /**
     * Sets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
     * @param value Value to set for the attestationCertificates property.
     */
    public set attestationCertificates(value: string[] | undefined) {
        if(value) {
            this._attestationCertificates = value;
        }
    };
    /**
     * Gets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue.
     * @returns a attestationLevel
     */
    public get attestationLevel() {
        return this._attestationLevel;
    };
    /**
     * Sets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue.
     * @param value Value to set for the attestationLevel property.
     */
    public set attestationLevel(value: AttestationLevel | undefined) {
        if(value) {
            this._attestationLevel = value;
        }
    };
    /**
     * Instantiates a new Fido2AuthenticationMethod and sets the default values.
     * @param fido2AuthenticationMethodParameterValue 
     */
    public constructor(fido2AuthenticationMethodParameterValue?: Fido2AuthenticationMethod | undefined) {
        super(fido2AuthenticationMethodParameterValue);
        this._aaGuid = fido2AuthenticationMethodParameterValue?.aaGuid;
        this._attestationCertificates = fido2AuthenticationMethodParameterValue?.attestationCertificates;
        this._attestationLevel = fido2AuthenticationMethodParameterValue?.attestationLevel;
        this._createdDateTime = fido2AuthenticationMethodParameterValue?.createdDateTime;
        this._displayName = fido2AuthenticationMethodParameterValue?.displayName;
        this._model = fido2AuthenticationMethodParameterValue?.model;
    };
    /**
     * Gets the createdDateTime property value. The timestamp when this key was registered to the user.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The timestamp when this key was registered to the user.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the displayName property value. The display name of the key as given by the user.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the key as given by the user.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the model property value. The manufacturer-assigned model of the FIDO2 security key.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The manufacturer-assigned model of the FIDO2 security key.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        if(value) {
            this._model = value;
        }
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
