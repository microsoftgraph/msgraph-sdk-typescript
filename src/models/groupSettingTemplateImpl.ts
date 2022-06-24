import {createSettingTemplateValueFromDiscriminatorValue} from './createSettingTemplateValueFromDiscriminatorValue';
import {GroupSettingTemplate} from './groupSettingTemplate';
import {DirectoryObjectImpl, SettingTemplateValueImpl} from './index';
import {SettingTemplateValue} from './settingTemplateValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSettingTemplateImpl extends DirectoryObjectImpl implements GroupSettingTemplate {
    /** Description of the template. */
    public description?: string | undefined;
    /** Display name of the template. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings. */
    public displayName?: string | undefined;
    /** Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template. */
    public values?: SettingTemplateValue[] | undefined;
    /**
     * Instantiates a new GroupSettingTemplate and sets the default values.
     * @param groupSettingTemplateParameterValue 
     */
    public constructor(groupSettingTemplateParameterValue?: GroupSettingTemplate | undefined) {
        super(groupSettingTemplateParameterValue);
        this.description = groupSettingTemplateParameterValue?.description;
        this.displayName = groupSettingTemplateParameterValue?.displayName;
        const valuesArrValue: SettingTemplateValueImpl[] = []; this.values?.forEach(element => {valuesArrValue.push(element instanceof SettingTemplateValueImpl? element : new SettingTemplateValueImpl(element));});
        this.values = valuesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "values": n => { this.values = n.getCollectionOfObjectValues<SettingTemplateValueImpl>(createSettingTemplateValueFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.values && this.values.length != 0){        const valuesArrValue: SettingTemplateValueImpl[] = []; this.values?.forEach(element => {valuesArrValue.push(element instanceof SettingTemplateValueImpl? element : new SettingTemplateValueImpl(element));});
            writer.writeCollectionOfObjectValues<SettingTemplateValueImpl>("values", valuesArrValue);
        }
    };
}
