import {DriveItemVersion} from './driveItemVersion';
import {BaseItemVersionImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class DriveItemVersionImpl extends BaseItemVersionImpl implements DriveItemVersion, Parsable {
    /** The content property */
    public content?: string | undefined;
    /** Indicates the size of the content stream for this version of the item. */
    public size?: number | undefined;
    /**
     * Instantiates a new driveItemVersion and sets the default values.
     * @param driveItemVersionParameterValue 
     */
    public constructor(driveItemVersionParameterValue?: DriveItemVersion | undefined) {
        super();
        this.content = driveItemVersionParameterValue?.content ;
        this.size = driveItemVersionParameterValue?.size ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
    };
}
