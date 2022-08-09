import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SingleUser extends SubjectSet implements Parsable {
    /** The name of the user in Azure AD. Read only. */
    private _description?: string | undefined;
    /** The ID of the user in Azure AD. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new SingleUser and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.singleUser";
    };
    /**
     * Gets the description property value. The name of the user in Azure AD. Read only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The name of the user in Azure AD. Read only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
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
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. The ID of the user in Azure AD.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The ID of the user in Azure AD.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
