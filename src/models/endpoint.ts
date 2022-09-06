import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class Endpoint extends DirectoryObject implements Parsable {
    /** The capability property */
    private _capability?: string | undefined;
    /** The providerId property */
    private _providerId?: string | undefined;
    /** The providerName property */
    private _providerName?: string | undefined;
    /** The providerResourceId property */
    private _providerResourceId?: string | undefined;
    /** The uri property */
    private _uri?: string | undefined;
    /**
     * Gets the capability property value. The capability property
     * @returns a string
     */
    public get capability() {
        return this._capability;
    };
    /**
     * Sets the capability property value. The capability property
     * @param value Value to set for the capability property.
     */
    public set capability(value: string | undefined) {
        this._capability = value;
    };
    /**
     * Instantiates a new endpoint and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.endpoint";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "capability": n => { this.capability = n.getStringValue(); },
            "providerId": n => { this.providerId = n.getStringValue(); },
            "providerName": n => { this.providerName = n.getStringValue(); },
            "providerResourceId": n => { this.providerResourceId = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
        };
    };
    /**
     * Gets the providerId property value. The providerId property
     * @returns a string
     */
    public get providerId() {
        return this._providerId;
    };
    /**
     * Sets the providerId property value. The providerId property
     * @param value Value to set for the providerId property.
     */
    public set providerId(value: string | undefined) {
        this._providerId = value;
    };
    /**
     * Gets the providerName property value. The providerName property
     * @returns a string
     */
    public get providerName() {
        return this._providerName;
    };
    /**
     * Sets the providerName property value. The providerName property
     * @param value Value to set for the providerName property.
     */
    public set providerName(value: string | undefined) {
        this._providerName = value;
    };
    /**
     * Gets the providerResourceId property value. The providerResourceId property
     * @returns a string
     */
    public get providerResourceId() {
        return this._providerResourceId;
    };
    /**
     * Sets the providerResourceId property value. The providerResourceId property
     * @param value Value to set for the providerResourceId property.
     */
    public set providerResourceId(value: string | undefined) {
        this._providerResourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("capability", this.capability);
        writer.writeStringValue("providerId", this.providerId);
        writer.writeStringValue("providerName", this.providerName);
        writer.writeStringValue("providerResourceId", this.providerResourceId);
        writer.writeStringValue("uri", this.uri);
    };
    /**
     * Gets the uri property value. The uri property
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. The uri property
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        this._uri = value;
    };
}
