import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {MediaInfo, Prompt} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaPrompt extends Prompt implements Parsable {
    /** The mediaInfo property */
    private _mediaInfo?: MediaInfo | undefined;
    /**
     * Instantiates a new MediaPrompt and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.mediaPrompt";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mediaInfo": n => { this.mediaInfo = n.getObjectValue<MediaInfo>(createMediaInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mediaInfo property value. The mediaInfo property
     * @returns a mediaInfo
     */
    public get mediaInfo() {
        return this._mediaInfo;
    };
    /**
     * Sets the mediaInfo property value. The mediaInfo property
     * @param value Value to set for the mediaInfo property.
     */
    public set mediaInfo(value: MediaInfo | undefined) {
        this._mediaInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<MediaInfo>("mediaInfo", this.mediaInfo);
    };
}
