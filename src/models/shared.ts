import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Shared implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The identity of the owner of the shared item. Read-only. */
    private _owner?: IdentitySet | undefined;
    /** Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only. */
    private _scope?: string | undefined;
    /** The identity of the user who shared the item. Read-only. */
    private _sharedBy?: IdentitySet | undefined;
    /** The UTC date and time when the item was shared. Read-only. */
    private _sharedDateTime?: Date | undefined;
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
     * Instantiates a new shared and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.shared";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "owner": n => { this.owner = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getStringValue(); },
            "sharedBy": n => { this.sharedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "sharedDateTime": n => { this.sharedDateTime = n.getDateValue(); },
        };
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
     * Gets the owner property value. The identity of the owner of the shared item. Read-only.
     * @returns a identitySet
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The identity of the owner of the shared item. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        this._owner = value;
    };
    /**
     * Gets the scope property value. Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<IdentitySet>("owner", this.owner);
        writer.writeStringValue("scope", this.scope);
        writer.writeObjectValue<IdentitySet>("sharedBy", this.sharedBy);
        writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @returns a identitySet
     */
    public get sharedBy() {
        return this._sharedBy;
    };
    /**
     * Sets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @param value Value to set for the sharedBy property.
     */
    public set sharedBy(value: IdentitySet | undefined) {
        this._sharedBy = value;
    };
    /**
     * Gets the sharedDateTime property value. The UTC date and time when the item was shared. Read-only.
     * @returns a Date
     */
    public get sharedDateTime() {
        return this._sharedDateTime;
    };
    /**
     * Sets the sharedDateTime property value. The UTC date and time when the item was shared. Read-only.
     * @param value Value to set for the sharedDateTime property.
     */
    public set sharedDateTime(value: Date | undefined) {
        this._sharedDateTime = value;
    };
}
