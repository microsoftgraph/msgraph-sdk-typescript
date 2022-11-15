import {createSettingTemplateValueFromDiscriminatorValue} from './createSettingTemplateValueFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, SettingTemplateValue} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingTemplateValueCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: SettingTemplateValue[] | undefined;
    /**
     * Instantiates a new SettingTemplateValueCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<SettingTemplateValue>(createSettingTemplateValueFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SettingTemplateValue>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a settingTemplateValue
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: SettingTemplateValue[] | undefined) {
        this._value = value;
    };
}
