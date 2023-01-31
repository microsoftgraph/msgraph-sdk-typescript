import {createWindows81GeneralConfigurationFromDiscriminatorValue} from './createWindows81GeneralConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows81GeneralConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows81GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Windows81GeneralConfiguration[] | undefined;
    /**
     * Instantiates a new Windows81GeneralConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows81GeneralConfiguration>(createWindows81GeneralConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows81GeneralConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windows81GeneralConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Windows81GeneralConfiguration[] | undefined) {
        this._value = value;
    };
}
