import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl, OnenoteEntitySchemaObjectModelImpl} from './index';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteEntityHierarchyModelImpl extends OnenoteEntitySchemaObjectModelImpl implements OnenoteEntityHierarchyModel {
    /** Identity of the user, device, and application which created the item. Read-only. */
    private _createdBy?: IdentitySet | undefined;
    /** The name of the notebook. */
    private _displayName?: string | undefined;
    /** Identity of the user, device, and application which created the item. Read-only. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new OnenoteEntityHierarchyModel and sets the default values.
     * @param onenoteEntityHierarchyModelParameterValue 
     */
    public constructor(onenoteEntityHierarchyModelParameterValue?: OnenoteEntityHierarchyModel | undefined) {
        super(onenoteEntityHierarchyModelParameterValue);
        this._createdBy = onenoteEntityHierarchyModelParameterValue?.createdBy;
        this._displayName = onenoteEntityHierarchyModelParameterValue?.displayName;
        this._lastModifiedBy = onenoteEntityHierarchyModelParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = onenoteEntityHierarchyModelParameterValue?.lastModifiedDateTime;
    };
    /**
     * Gets the createdBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name of the notebook.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the notebook.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user, device, and application which created the item. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (!this.lastModifiedBy || this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy : new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
    };
}
