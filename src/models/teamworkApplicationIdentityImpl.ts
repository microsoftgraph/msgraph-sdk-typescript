import {IdentityImpl} from './index';
import {TeamworkApplicationIdentity} from './teamworkApplicationIdentity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkApplicationIdentityImpl extends IdentityImpl implements TeamworkApplicationIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, and outgoingWebhook. */
    public applicationIdentityType?: TeamworkApplicationIdentityType | undefined;
    /**
     * Instantiates a new TeamworkApplicationIdentity and sets the default values.
     * @param teamworkApplicationIdentityParameterValue 
     */
    public constructor(teamworkApplicationIdentityParameterValue?: TeamworkApplicationIdentity | undefined) {
        super(teamworkApplicationIdentityParameterValue);
        this.additionalData = teamworkApplicationIdentityParameterValue?.additionalData ? teamworkApplicationIdentityParameterValue?.additionalData! : {};
        this.applicationIdentityType = teamworkApplicationIdentityParameterValue?.applicationIdentityType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationIdentityType": n => { this.applicationIdentityType = n.getEnumValue<TeamworkApplicationIdentityType>(TeamworkApplicationIdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicationIdentityType){
            writer.writeEnumValue<TeamworkApplicationIdentityType>("applicationIdentityType", this.applicationIdentityType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
