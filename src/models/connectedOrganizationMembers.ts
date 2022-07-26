import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectedOrganizationMembers extends SubjectSet implements Parsable {
    /** The ID of the connected organization in entitlement management. */
    private _connectedOrganizationId?: string | undefined;
    /** The name of the connected organization. Read only. */
    private _description?: string | undefined;
    /**
     * Gets the connectedOrganizationId property value. The ID of the connected organization in entitlement management.
     * @returns a string
     */
    public get connectedOrganizationId() {
        return this._connectedOrganizationId;
    };
    /**
     * Sets the connectedOrganizationId property value. The ID of the connected organization in entitlement management.
     * @param value Value to set for the connectedOrganizationId property.
     */
    public set connectedOrganizationId(value: string | undefined) {
        this._connectedOrganizationId = value;
    };
    /**
     * Instantiates a new ConnectedOrganizationMembers and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.connectedOrganizationMembers";
    };
    /**
     * Gets the description property value. The name of the connected organization. Read only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The name of the connected organization. Read only.
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
            "connectedOrganizationId": n => { this.connectedOrganizationId = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("connectedOrganizationId", this.connectedOrganizationId);
        writer.writeStringValue("description", this.description);
    };
}
