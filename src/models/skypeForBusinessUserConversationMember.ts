import {ConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SkypeForBusinessUserConversationMember extends ConversationMember implements Parsable {
    /** The tenantId property */
    private _tenantId?: string | undefined;
    /** The userId property */
    private _userId?: string | undefined;
    /**
     * Instantiates a new SkypeForBusinessUserConversationMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.skypeForBusinessUserConversationMember";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the tenantId property value. The tenantId property
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The tenantId property
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the userId property value. The userId property
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The userId property
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
