import {ColumnLink} from './columnLink';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ColumnLinkImpl extends EntityImpl implements ColumnLink {
    /** The name of the column  in this content type. */
    public name?: string | undefined;
    /**
     * Instantiates a new columnLink and sets the default values.
     * @param columnLinkParameterValue 
     */
    public constructor(columnLinkParameterValue?: ColumnLink | undefined) {
        super(columnLinkParameterValue);
        this.name = columnLinkParameterValue?.name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
    };
}
