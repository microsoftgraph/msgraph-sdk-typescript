import {EntityImpl} from './index';
import {TeamworkHostedContent} from './teamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamworkHostedContentImpl extends EntityImpl implements Parsable, TeamworkHostedContent {
    /** Write only. Bytes for the hosted content (such as images). */
    public contentBytes?: string | undefined;
    /** Write only. Content type, such as image/png, image/jpg. */
    public contentType?: string | undefined;
    /**
     * Instantiates a new teamworkHostedContent and sets the default values.
     * @param teamworkHostedContentParameterValue 
     */
    public constructor(teamworkHostedContentParameterValue?: TeamworkHostedContent | undefined) {
        super();
        this.contentBytes = teamworkHostedContentParameterValue?.contentBytes ;
        this.contentType = teamworkHostedContentParameterValue?.contentType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentBytes": n => { this.contentBytes = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contentBytes){
        writer.writeStringValue("contentBytes", this.contentBytes);
        }
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
    };
}
