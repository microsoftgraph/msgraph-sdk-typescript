import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {MediaInfoImpl, PromptImpl} from './index';
import {MediaInfo} from './mediaInfo';
import {MediaPrompt} from './mediaPrompt';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaPromptImpl extends PromptImpl implements MediaPrompt {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The mediaInfo property */
    public mediaInfo?: MediaInfo | undefined;
    /**
     * Instantiates a new MediaPrompt and sets the default values.
     * @param mediaPromptParameterValue 
     */
    public constructor(mediaPromptParameterValue?: MediaPrompt | undefined) {
        super(mediaPromptParameterValue);
        this.additionalData = mediaPromptParameterValue?.additionalData ? mediaPromptParameterValue?.additionalData! : {};
        this.mediaInfo = mediaPromptParameterValue?.mediaInfo instanceof MediaInfoImpl? mediaPromptParameterValue?.mediaInfo:new MediaInfoImpl(mediaPromptParameterValue?.mediaInfo);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mediaInfo": n => { this.mediaInfo = n.getObjectValue<MediaInfoImpl>(createMediaInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.mediaInfo){
            writer.writeObjectValue<MediaInfoImpl>("mediaInfo", new MediaInfoImpl(this.mediaInfo));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
