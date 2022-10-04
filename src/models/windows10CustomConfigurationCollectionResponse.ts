import {createWindows10CustomConfigurationFromDiscriminatorValue} from './createWindows10CustomConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows10CustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10CustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: Windows10CustomConfiguration[] | undefined;
    /**
     * Instantiates a new Windows10CustomConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows10CustomConfiguration>(createWindows10CustomConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows10CustomConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a windows10CustomConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: Windows10CustomConfiguration[] | undefined) {
        this._value = value;
    };
}
