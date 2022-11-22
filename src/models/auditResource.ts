import {createAuditPropertyFromDiscriminatorValue} from './createAuditPropertyFromDiscriminatorValue';
import {AuditProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing the properties for Audit Resource. */
export class AuditResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Audit resource's type. */
    private _auditResourceType?: string | undefined;
    /** Display name. */
    private _displayName?: string | undefined;
    /** List of modified properties. */
    private _modifiedProperties?: AuditProperty[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Audit resource's Id. */
    private _resourceId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the auditResourceType property value. Audit resource's type.
     * @returns a string
     */
    public get auditResourceType() {
        return this._auditResourceType;
    };
    /**
     * Sets the auditResourceType property value. Audit resource's type.
     * @param value Value to set for the auditResourceType property.
     */
    public set auditResourceType(value: string | undefined) {
        this._auditResourceType = value;
    };
    /**
     * Instantiates a new auditResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name.
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
        return {
            "auditResourceType": n => { this.auditResourceType = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "modifiedProperties": n => { this.modifiedProperties = n.getCollectionOfObjectValues<AuditProperty>(createAuditPropertyFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the modifiedProperties property value. List of modified properties.
     * @returns a auditProperty
     */
    public get modifiedProperties() {
        return this._modifiedProperties;
    };
    /**
     * Sets the modifiedProperties property value. List of modified properties.
     * @param value Value to set for the modifiedProperties property.
     */
    public set modifiedProperties(value: AuditProperty[] | undefined) {
        this._modifiedProperties = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the resourceId property value. Audit resource's Id.
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. Audit resource's Id.
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("auditResourceType", this.auditResourceType);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AuditProperty>("modifiedProperties", this.modifiedProperties);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeAdditionalData(this.additionalData);
    };
}
