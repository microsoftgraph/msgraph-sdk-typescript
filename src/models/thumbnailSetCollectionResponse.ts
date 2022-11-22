import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ThumbnailSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumbnailSetCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ThumbnailSet[] | undefined;
    /**
     * Instantiates a new ThumbnailSetCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ThumbnailSet>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a thumbnailSet
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ThumbnailSet[] | undefined) {
        this._value = value;
    };
}
