import {createOutlookItemFromDiscriminatorValue} from './createOutlookItemFromDiscriminatorValue';
import {Attachment, OutlookItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAttachment extends Attachment implements Parsable {
    /** The attached contact, message or event. Navigation property. */
    private _item?: OutlookItem | undefined;
    /**
     * Instantiates a new ItemAttachment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.itemAttachment";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "item": n => { this.item = n.getObjectValue<OutlookItem>(createOutlookItemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the item property value. The attached contact, message or event. Navigation property.
     * @returns a outlookItem
     */
    public get item() {
        return this._item;
    };
    /**
     * Sets the item property value. The attached contact, message or event. Navigation property.
     * @param value Value to set for the item property.
     */
    public set item(value: OutlookItem | undefined) {
        this._item = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OutlookItem>("item", this.item);
    };
}
