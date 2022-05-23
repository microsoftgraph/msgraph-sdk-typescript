import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EndpointType} from './endpointType';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {ParticipantInfo} from './participantInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantInfoImpl implements AdditionalDataHolder, Parsable, ParticipantInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only. */
    public countryCode?: string | undefined;
    /** The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only. */
    public endpointType?: EndpointType | undefined;
    /** The identity property */
    public identity?: IdentitySet | undefined;
    /** The language culture string. Read-only. */
    public languageId?: string | undefined;
    /** The participant ID of the participant. Read-only. */
    public participantId?: string | undefined;
    /** The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only. */
    public region?: string | undefined;
    /**
     * Instantiates a new participantInfo and sets the default values.
     * @param participantInfoParameterValue 
     */
    public constructor(participantInfoParameterValue?: ParticipantInfo | undefined) {
        this.additionalData = participantInfoParameterValue?.additionalData ? participantInfoParameterValue?.additionalData! : {}
        this.countryCode = participantInfoParameterValue?.countryCode ;
        this.endpointType = participantInfoParameterValue?.endpointType ;
        this.identity = participantInfoParameterValue?.identity ;
        this.languageId = participantInfoParameterValue?.languageId ;
        this.participantId = participantInfoParameterValue?.participantId ;
        this.region = participantInfoParameterValue?.region ;
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
        writer.writeObjectValue<IdentitySetImpl>("identity", new IdentitySetImpl(this.identity));
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
