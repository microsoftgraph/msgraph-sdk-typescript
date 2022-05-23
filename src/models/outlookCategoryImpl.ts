import {CategoryColor} from './categoryColor';
import {EntityImpl} from './index';
import {OutlookCategory} from './outlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class OutlookCategoryImpl extends EntityImpl implements OutlookCategory, Parsable {
    /** A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note below. */
    public color?: CategoryColor | undefined;
    /** A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be changed. Read-only. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new outlookCategory and sets the default values.
     * @param outlookCategoryParameterValue 
     */
    public constructor(outlookCategoryParameterValue?: OutlookCategory | undefined) {
        super();
        this.color = outlookCategoryParameterValue?.color ;
        this.displayName = outlookCategoryParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "color": n => { this.color = n.getEnumValue<CategoryColor>(CategoryColor); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.color){
        writer.writeEnumValue<CategoryColor>("color", this.color);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
    };
}
