import {createOutlookItemFromDiscriminatorValue} from './createOutlookItemFromDiscriminatorValue';
import {AttachmentImpl, OutlookItemImpl} from './index';
import {ItemAttachment} from './itemAttachment';
import {OutlookItem} from './outlookItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAttachmentImpl extends AttachmentImpl implements ItemAttachment {
    /** The attached contact, message or event. Navigation property. */
    public item?: OutlookItem | undefined;
    /**
     * Instantiates a new ItemAttachment and sets the default values.
     * @param itemAttachmentParameterValue 
     */
    public constructor(itemAttachmentParameterValue?: ItemAttachment | undefined) {
        super(itemAttachmentParameterValue);
        this.item = itemAttachmentParameterValue?.item;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "item": n => { this.item = n.getObjectValue<OutlookItemImpl>(createOutlookItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.item){
            writer.writeObjectValue<OutlookItemImpl>("item", new OutlookItemImpl(this.item));
        }
    };
}
