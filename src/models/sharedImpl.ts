import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {Shared} from './shared';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedImpl implements Shared {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new shared and sets the default values.
     * @param sharedParameterValue 
     */
    public constructor(sharedParameterValue?: Shared | undefined) {
        this._additionalData = sharedParameterValue?.additionalData ? sharedParameterValue?.additionalData! : {};
        this._owner = sharedParameterValue?.owner;
        this._scope = sharedParameterValue?.scope;
        this._sharedBy = sharedParameterValue?.sharedBy;
        this._sharedDateTime = sharedParameterValue?.sharedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "owner": n => { this.owner = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "scope": n => { this.scope = n.getStringValue(); },
            "sharedBy": n => { this.sharedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sharedDateTime": n => { this.sharedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the owner property value. The identity of the owner of the shared item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The identity of the owner of the shared item. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        if(value) {
            this._owner = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
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
        if(value) {
            this._scope = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.owner){
            writer.writeObjectValue<IdentitySetImpl>("owner", (!this.owner || this.owner instanceof IdentitySetImpl? this.owner : new IdentitySetImpl(this.owner)));
        }
        if(this.scope){
            writer.writeStringValue("scope", this.scope);
        }
        if(this.sharedBy){
            writer.writeObjectValue<IdentitySetImpl>("sharedBy", (!this.sharedBy || this.sharedBy instanceof IdentitySetImpl? this.sharedBy : new IdentitySetImpl(this.sharedBy)));
        }
        if(this.sharedDateTime){
            writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get sharedBy() {
        return this._sharedBy;
    };
    /**
     * Sets the sharedBy property value. The identity of the user who shared the item. Read-only.
     * @param value Value to set for the sharedBy property.
     */
    public set sharedBy(value: IdentitySet | undefined) {
        if(value) {
            this._sharedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
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
        if(value) {
            this._sharedDateTime = value;
        }
    };
}
