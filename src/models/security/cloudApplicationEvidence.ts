import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudApplicationEvidence extends AlertEvidence implements Parsable {
    /** The appId property */
    private _appId?: number | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The instanceId property */
    private _instanceId?: number | undefined;
    /** The instanceName property */
    private _instanceName?: string | undefined;
    /** The saasAppId property */
    private _saasAppId?: number | undefined;
    /**
     * Gets the appId property value. The appId property
     * @returns a int64
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The appId property
     * @param value Value to set for the appId property.
     */
    public set appId(value: number | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new CloudApplicationEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appId": n => { this.appId = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "instanceId": n => { this.instanceId = n.getNumberValue(); },
            "instanceName": n => { this.instanceName = n.getStringValue(); },
            "saasAppId": n => { this.saasAppId = n.getNumberValue(); },
        };
    };
    /**
     * Gets the instanceId property value. The instanceId property
     * @returns a int64
     */
    public get instanceId() {
        return this._instanceId;
    };
    /**
     * Sets the instanceId property value. The instanceId property
     * @param value Value to set for the instanceId property.
     */
    public set instanceId(value: number | undefined) {
        this._instanceId = value;
    };
    /**
     * Gets the instanceName property value. The instanceName property
     * @returns a string
     */
    public get instanceName() {
        return this._instanceName;
    };
    /**
     * Sets the instanceName property value. The instanceName property
     * @param value Value to set for the instanceName property.
     */
    public set instanceName(value: string | undefined) {
        this._instanceName = value;
    };
    /**
     * Gets the saasAppId property value. The saasAppId property
     * @returns a int64
     */
    public get saasAppId() {
        return this._saasAppId;
    };
    /**
     * Sets the saasAppId property value. The saasAppId property
     * @param value Value to set for the saasAppId property.
     */
    public set saasAppId(value: number | undefined) {
        this._saasAppId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeNumberValue("instanceId", this.instanceId);
        writer.writeStringValue("instanceName", this.instanceName);
        writer.writeNumberValue("saasAppId", this.saasAppId);
    };
}
