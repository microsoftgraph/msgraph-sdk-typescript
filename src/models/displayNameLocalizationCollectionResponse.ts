import {createDisplayNameLocalizationFromDiscriminatorValue} from './createDisplayNameLocalizationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, DisplayNameLocalization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DisplayNameLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: DisplayNameLocalization[] | undefined;
    /**
     * Instantiates a new DisplayNameLocalizationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<DisplayNameLocalization>(createDisplayNameLocalizationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DisplayNameLocalization>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a displayNameLocalization
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DisplayNameLocalization[] | undefined) {
        this._value = value;
    };
}
