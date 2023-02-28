import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AzureCommunicationServicesUserConversationMember extends ConversationMember implements Parsable {
    /** The azureCommunicationServicesId property */
    private _azureCommunicationServicesId?: string | undefined;
    /**
     * Gets the azureCommunicationServicesId property value. The azureCommunicationServicesId property
     * @returns a string
     */
    public get azureCommunicationServicesId() {
        return this._azureCommunicationServicesId;
    };
    /**
     * Sets the azureCommunicationServicesId property value. The azureCommunicationServicesId property
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
