import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AzureCommunicationServicesUserConversationMember extends ConversationMember implements Parsable {
    /** Azure Communication Services ID of the user. */
    private _azureCommunicationServicesId?: string | undefined;
    /**
     * Gets the azureCommunicationServicesId property value. Azure Communication Services ID of the user.
     * @returns a string
     */
    public get azureCommunicationServicesId() {
        return this._azureCommunicationServicesId;
    };
    /**
     * Sets the azureCommunicationServicesId property value. Azure Communication Services ID of the user.
     * @param value Value to set for the azureCommunicationServicesId property.
     */
    public set azureCommunicationServicesId(value: string | undefined) {
        this._azureCommunicationServicesId = value;
    };
    /**
     * Instantiates a new AzureCommunicationServicesUserConversationMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.azureCommunicationServicesUserConversationMember";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureCommunicationServicesId": n => { this.azureCommunicationServicesId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("azureCommunicationServicesId", this.azureCommunicationServicesId);
    };
}
