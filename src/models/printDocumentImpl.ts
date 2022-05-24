import {EntityImpl} from './index';
import {PrintDocument} from './printDocument';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintDocumentImpl extends EntityImpl implements Parsable, PrintDocument {
    /** The document's content (MIME) type. Read-only. */
    public contentType?: string | undefined;
    /** The document's name. Read-only. */
    public displayName?: string | undefined;
    /** The document's size in bytes. Read-only. */
    public size?: number | undefined;
    /**
     * Instantiates a new printDocument and sets the default values.
     * @param printDocumentParameterValue 
     */
    public constructor(printDocumentParameterValue?: PrintDocument | undefined) {
        super();
        this.contentType = printDocumentParameterValue?.contentType ;
        this.displayName = printDocumentParameterValue?.displayName ;
        this.size = printDocumentParameterValue?.size ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentType": n => { this.contentType = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
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
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
    };
}
