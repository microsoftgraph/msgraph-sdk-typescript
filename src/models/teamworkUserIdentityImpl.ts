import {IdentityImpl} from './index';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamworkUserIdentityImpl extends IdentityImpl implements TeamworkUserIdentity {
    /** Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and emailUser. */
    private _userIdentityType?: TeamworkUserIdentityType | undefined;
    /**
     * Instantiates a new teamworkUserIdentity and sets the default values.
     * @param teamworkUserIdentityParameterValue 
     */
    public constructor(teamworkUserIdentityParameterValue?: TeamworkUserIdentity | undefined) {
        super(teamworkUserIdentityParameterValue);
        this._userIdentityType = teamworkUserIdentityParameterValue?.userIdentityType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userIdentityType": n => { this.userIdentityType = n.getEnumValue<TeamworkUserIdentityType>(TeamworkUserIdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userIdentityType){
            writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", this.userIdentityType);
        }
    };
    /**
     * Gets the userIdentityType property value. Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and emailUser.
     * @returns a teamworkUserIdentityType
     */
    public get userIdentityType() {
        return this._userIdentityType;
    };
    /**
     * Sets the userIdentityType property value. Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and emailUser.
     * @param value Value to set for the userIdentityType property.
     */
    public set userIdentityType(value: TeamworkUserIdentityType | undefined) {
        if(value) {
            this._userIdentityType = value;
        }
    };
}
