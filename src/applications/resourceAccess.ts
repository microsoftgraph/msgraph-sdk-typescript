import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ResourceAccess implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.  */
    private _id?: string | undefined;
    /** Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or Role.  */
    private _type?: string | undefined;
    /**
     * Instantiates a new resourceAccess and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the id property value. The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the type property value. Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or Role.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["id", (o, n) => { (o as unknown as ResourceAccess).id = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as ResourceAccess).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the id property value. The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the type property value. Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or Role.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
