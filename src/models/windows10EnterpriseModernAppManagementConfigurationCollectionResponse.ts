import {createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue} from './createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EnterpriseModernAppManagementConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Windows10EnterpriseModernAppManagementConfiguration[] | undefined;
    /**
     * Instantiates a new Windows10EnterpriseModernAppManagementConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows10EnterpriseModernAppManagementConfiguration>(createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows10EnterpriseModernAppManagementConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windows10EnterpriseModernAppManagementConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Windows10EnterpriseModernAppManagementConfiguration[] | undefined) {
        this._value = value;
    };
}
