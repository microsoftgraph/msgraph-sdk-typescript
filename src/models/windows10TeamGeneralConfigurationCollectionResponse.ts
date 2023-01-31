import {createWindows10TeamGeneralConfigurationFromDiscriminatorValue} from './createWindows10TeamGeneralConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows10TeamGeneralConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10TeamGeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Windows10TeamGeneralConfiguration[] | undefined;
    /**
     * Instantiates a new Windows10TeamGeneralConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows10TeamGeneralConfiguration>(createWindows10TeamGeneralConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows10TeamGeneralConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windows10TeamGeneralConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Windows10TeamGeneralConfiguration[] | undefined) {
        this._value = value;
    };
}
