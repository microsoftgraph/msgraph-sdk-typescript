import {DirectoryObject} from './directoryObject';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class DirectoryObjectImpl extends EntityImpl implements DirectoryObject, Parsable {
    /** Date and time when this object was deleted. Always null when the object hasn't been deleted. */
    public deletedDateTime?: Date | undefined;
    /**
     * Instantiates a new directoryObject and sets the default values.
     * @param directoryObjectParameterValue 
     */
    public constructor(directoryObjectParameterValue?: DirectoryObject | undefined) {
        super();
        this.deletedDateTime = directoryObjectParameterValue?.deletedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deletedDateTime": n => { this.deletedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deletedDateTime){
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        }
    };
}
