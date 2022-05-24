import {createSettingValueFromDiscriminatorValue} from './createSettingValueFromDiscriminatorValue';
import {GroupSetting} from './groupSetting';
import {EntityImpl, SettingValueImpl} from './index';
import {SettingValue} from './settingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class GroupSettingImpl extends EntityImpl implements GroupSetting, Parsable {
    /** Display name of this group of settings, which comes from the associated template. */
    public displayName?: string | undefined;
    /** Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only. */
    public templateId?: string | undefined;
    /** Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object. */
    public values?: SettingValue[] | undefined;
    /**
     * Instantiates a new groupSetting and sets the default values.
     * @param groupSettingParameterValue 
     */
    public constructor(groupSettingParameterValue?: GroupSetting | undefined) {
        super();
        this.displayName = groupSettingParameterValue?.displayName ;
        this.templateId = groupSettingParameterValue?.templateId ;
        this.values = groupSettingParameterValue?.values ;
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
        if(this.values && this.values.length != 0){        const valuesArrValue: SettingValueImpl[] = []; this.values?.forEach(element => {valuesArrValue.push(new SettingValueImpl(element));});
        writer.writeCollectionOfObjectValues<SettingValueImpl>("values", valuesArrValue);
        }
    };
}
