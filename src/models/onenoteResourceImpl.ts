import {OnenoteEntityBaseModelImpl} from './index';
import {OnenoteResource} from './onenoteResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteResourceImpl extends OnenoteEntityBaseModelImpl implements OnenoteResource, Parsable {
    /** The content stream */
    public content?: string | undefined;
    /** The URL for downloading the content */
    public contentUrl?: string | undefined;
    /**
     * Instantiates a new onenoteResource and sets the default values.
     * @param onenoteResourceParameterValue 
     */
    public constructor(onenoteResourceParameterValue?: OnenoteResource | undefined) {
        super();
        this.content = onenoteResourceParameterValue?.content ;
        this.contentUrl = onenoteResourceParameterValue?.contentUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
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
        if(this.contentUrl){
        writer.writeStringValue("contentUrl", this.contentUrl);
        }
    };
}
