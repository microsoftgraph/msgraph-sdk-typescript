import {Identity} from './index';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkApplicationIdentity extends Identity implements Parsable {
    /** Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, and outgoingWebhook. */
    private _applicationIdentityType?: TeamworkApplicationIdentityType | undefined;
    /**
     * Gets the applicationIdentityType property value. Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, and outgoingWebhook.
     * @returns a teamworkApplicationIdentityType
     */
    public get applicationIdentityType() {
        return this._applicationIdentityType;
    };
    /**
     * Sets the applicationIdentityType property value. Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, and outgoingWebhook.
     * @param value Value to set for the applicationIdentityType property.
     */
    public set applicationIdentityType(value: TeamworkApplicationIdentityType | undefined) {
        this._applicationIdentityType = value;
    };
    /**
     * Instantiates a new TeamworkApplicationIdentity and sets the default values.
     */
    public constructor() {
        super();
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
        writer.writeEnumValue<TeamworkApplicationIdentityType>("applicationIdentityType", this.applicationIdentityType);
    };
}
