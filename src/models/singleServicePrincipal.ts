import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SingleServicePrincipal extends SubjectSet implements Parsable {
    /** Description of this service principal. */
    private _description?: string | undefined;
    /** ID of the servicePrincipal. */
    private _servicePrincipalId?: string | undefined;
    /**
     * Instantiates a new SingleServicePrincipal and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.singleServicePrincipal";
    };
    /**
     * Gets the description property value. Description of this service principal.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of this service principal.
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
            "servicePrincipalId": n => { this.servicePrincipalId = n.getStringValue(); },
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
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
    };
    /**
     * Gets the servicePrincipalId property value. ID of the servicePrincipal.
     * @returns a string
     */
    public get servicePrincipalId() {
        return this._servicePrincipalId;
    };
    /**
     * Sets the servicePrincipalId property value. ID of the servicePrincipal.
     * @param value Value to set for the servicePrincipalId property.
     */
    public set servicePrincipalId(value: string | undefined) {
        this._servicePrincipalId = value;
    };
}
