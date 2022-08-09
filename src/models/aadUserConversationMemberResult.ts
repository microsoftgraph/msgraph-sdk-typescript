import {ActionResultPart} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserConversationMemberResult extends ActionResultPart implements Parsable {
    /** The user object ID of the Azure AD user that was being added as part of the bulk operation. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new AadUserConversationMemberResult and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.aadUserConversationMemberResult";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. The user object ID of the Azure AD user that was being added as part of the bulk operation.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user object ID of the Azure AD user that was being added as part of the bulk operation.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
