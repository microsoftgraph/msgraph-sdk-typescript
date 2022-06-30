import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EndpointType} from './endpointType';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {ParticipantInfo} from './participantInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantInfoImpl implements ParticipantInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only. */
    private _countryCode?: string | undefined;
    /** The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only. */
    private _endpointType?: EndpointType | undefined;
    /** The identity property */
    private _identity?: IdentitySet | undefined;
    /** The language culture string. Read-only. */
    private _languageId?: string | undefined;
    /** The participant ID of the participant. Read-only. */
    private _participantId?: string | undefined;
    /** The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only. */
    private _region?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new participantInfo and sets the default values.
     * @param participantInfoParameterValue 
     */
    public constructor(participantInfoParameterValue?: ParticipantInfo | undefined) {
        this._additionalData = participantInfoParameterValue?.additionalData ? participantInfoParameterValue?.additionalData! : {};
        this._countryCode = participantInfoParameterValue?.countryCode;
        this._endpointType = participantInfoParameterValue?.endpointType;
        this._identity = participantInfoParameterValue?.identity;
        this._languageId = participantInfoParameterValue?.languageId;
        this._participantId = participantInfoParameterValue?.participantId;
        this._region = participantInfoParameterValue?.region;
    };
    /**
     * Gets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @returns a string
     */
    public get countryCode() {
        return this._countryCode;
    };
    /**
     * Sets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @param value Value to set for the countryCode property.
     */
    public set countryCode(value: string | undefined) {
        if(value) {
            this._countryCode = value;
        }
    };
    /**
     * Gets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @returns a endpointType
     */
    public get endpointType() {
        return this._endpointType;
    };
    /**
     * Sets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @param value Value to set for the endpointType property.
     */
    public set endpointType(value: EndpointType | undefined) {
        if(value) {
            this._endpointType = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countryCode": n => { this.countryCode = n.getStringValue(); },
            "endpointType": n => { this.endpointType = n.getEnumValue<EndpointType>(EndpointType); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "languageId": n => { this.languageId = n.getStringValue(); },
            "participantId": n => { this.participantId = n.getStringValue(); },
            "region": n => { this.region = n.getStringValue(); },
        };
    };
    /**
     * Gets the identity property value. The identity property
     * @returns a IdentitySetInterface
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. The identity property
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        if(value) {
            this._identity = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the languageId property value. The language culture string. Read-only.
     * @returns a string
     */
    public get languageId() {
        return this._languageId;
    };
    /**
     * Sets the languageId property value. The language culture string. Read-only.
     * @param value Value to set for the languageId property.
     */
    public set languageId(value: string | undefined) {
        if(value) {
            this._languageId = value;
        }
    };
    /**
     * Gets the participantId property value. The participant ID of the participant. Read-only.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. The participant ID of the participant. Read-only.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        if(value) {
            this._participantId = value;
        }
    };
    /**
     * Gets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only.
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only.
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        if(value) {
            this._region = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.countryCode){
            writer.writeStringValue("countryCode", this.countryCode);
        }
        if(this.endpointType){
            writer.writeEnumValue<EndpointType>("endpointType", this.endpointType);
        }
        if(this.identity){
            writer.writeObjectValue<IdentitySetImpl>("identity", (!this.identity || this.identity instanceof IdentitySetImpl? this.identity : new IdentitySetImpl(this.identity)));
        }
        if(this.languageId){
            writer.writeStringValue("languageId", this.languageId);
        }
        if(this.participantId){
            writer.writeStringValue("participantId", this.participantId);
        }
        if(this.region){
            writer.writeStringValue("region", this.region);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
