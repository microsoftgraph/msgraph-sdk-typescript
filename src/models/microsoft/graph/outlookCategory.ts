import {CategoryColor} from './categoryColor';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookCategory extends Entity implements Parsable {
    /** A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note below.  */
    private _color?: CategoryColor | undefined;
    /** A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.  */
    private _displayName?: string | undefined;
    /**
     * Gets the color property value. A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note below.
     * @returns a categoryColor
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note below.
     * @param value Value to set for the color property.
     */
    public set color(value: CategoryColor | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new outlookCategory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "color": (o, n) => { (o as unknown as OutlookCategory).color = n.getEnumValue<CategoryColor>(CategoryColor); },
            "displayName": (o, n) => { (o as unknown as OutlookCategory).displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<CategoryColor>("color", this.color);
        writer.writeStringValue("displayName", this.displayName);
    };
}
