import {createWindows10GeneralConfigurationFromDiscriminatorValue} from './createWindows10GeneralConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows10GeneralConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: Windows10GeneralConfiguration[] | undefined;
    /**
     * Instantiates a new Windows10GeneralConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows10GeneralConfiguration>(createWindows10GeneralConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows10GeneralConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a windows10GeneralConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Windows10GeneralConfiguration[] | undefined) {
        this._value = value;
    };
}
