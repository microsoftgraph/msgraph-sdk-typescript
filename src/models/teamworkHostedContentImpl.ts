import {EntityImpl} from './index';
import {TeamworkHostedContent} from './teamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamworkHostedContentImpl extends EntityImpl implements TeamworkHostedContent {
    /** Write only. Bytes for the hosted content (such as images). */
    private _contentBytes?: string | undefined;
    /** Write only. Content type, such as image/png, image/jpg. */
    private _contentType?: string | undefined;
    /**
     * Instantiates a new teamworkHostedContent and sets the default values.
     * @param teamworkHostedContentParameterValue 
     */
    public constructor(teamworkHostedContentParameterValue?: TeamworkHostedContent | undefined) {
        super(teamworkHostedContentParameterValue);
        this._contentBytes = teamworkHostedContentParameterValue?.contentBytes;
        this._contentType = teamworkHostedContentParameterValue?.contentType;
    };
    /**
     * Gets the contentBytes property value. Write only. Bytes for the hosted content (such as images).
     * @returns a binary
     */
    public get contentBytes() {
        return this._contentBytes;
    };
    /**
     * Sets the contentBytes property value. Write only. Bytes for the hosted content (such as images).
     * @param value Value to set for the contentBytes property.
     */
    public set contentBytes(value: string | undefined) {
        if(value) {
            this._contentBytes = value;
        }
    };
    /**
     * Gets the contentType property value. Write only. Content type, such as image/png, image/jpg.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Write only. Content type, such as image/png, image/jpg.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        if(value) {
            this._contentType = value;
        }
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
