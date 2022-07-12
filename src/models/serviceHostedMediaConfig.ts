import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {MediaConfig, MediaInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHostedMediaConfig extends MediaConfig implements Parsable {
    /** The list of media to pre-fetch. */
    private _preFetchMedia?: MediaInfo[] | undefined;
    /**
     * Instantiates a new ServiceHostedMediaConfig and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "preFetchMedia": n => { this.preFetchMedia = n.getCollectionOfObjectValues<MediaInfo>(createMediaInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the preFetchMedia property value. The list of media to pre-fetch.
     * @returns a mediaInfo
     */
    public get preFetchMedia() {
        return this._preFetchMedia;
    };
    /**
     * Sets the preFetchMedia property value. The list of media to pre-fetch.
     * @param value Value to set for the preFetchMedia property.
     */
    public set preFetchMedia(value: MediaInfo[] | undefined) {
        this._preFetchMedia = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MediaInfo>("preFetchMedia", this.preFetchMedia);
    };
}
