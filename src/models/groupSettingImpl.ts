import {createSettingValueFromDiscriminatorValue} from './createSettingValueFromDiscriminatorValue';
import {GroupSetting} from './groupSetting';
import {EntityImpl, SettingValueImpl} from './index';
import {SettingValue} from './settingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class GroupSettingImpl extends EntityImpl implements GroupSetting {
    /** Display name of this group of settings, which comes from the associated template. */
    private _displayName?: string | undefined;
    /** Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only. */
    private _templateId?: string | undefined;
    /** Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object. */
    private _values?: SettingValue[] | undefined;
    /**
     * Instantiates a new groupSetting and sets the default values.
     * @param groupSettingParameterValue 
     */
    public constructor(groupSettingParameterValue?: GroupSetting | undefined) {
        super(groupSettingParameterValue);
        this._displayName = groupSettingParameterValue?.displayName;
        this._templateId = groupSettingParameterValue?.templateId;
        this._values = groupSettingParameterValue?.values;
    };
    /**
     * Gets the displayName property value. Display name of this group of settings, which comes from the associated template.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of this group of settings, which comes from the associated template.
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "templateId": n => { this.templateId = n.getStringValue(); },
            "values": n => { this.values = n.getCollectionOfObjectValues<SettingValueImpl>(createSettingValueFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.templateId){
            writer.writeStringValue("templateId", this.templateId);
        }
        if(this.values && this.values.length != 0){        const valuesArrValue: SettingValueImpl[] = [];
        this.values?.forEach(element => {
            valuesArrValue.push((element instanceof SettingValueImpl? element as SettingValueImpl:new SettingValueImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SettingValueImpl>("values", valuesArrValue);
        }
    };
    /**
     * Gets the templateId property value. Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Sets the templateId property value. Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        if(value) {
            this._templateId = value;
        }
    };
    /**
     * Gets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.
     * @returns a SettingValueInterface
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.
     * @param value Value to set for the values property.
     */
    public set values(value: SettingValue[] | undefined) {
        if(value) {
            const valuesArrValue: SettingValueImpl[] = [];
            this.values?.forEach(element => {
                valuesArrValue.push((element instanceof SettingValueImpl? element as SettingValueImpl:new SettingValueImpl(element)));
            });
            this._values = valuesArrValue;
        }
    };
}
