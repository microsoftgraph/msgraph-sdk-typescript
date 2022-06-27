import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {MediaConfigImpl, MediaInfoImpl} from './index';
import {MediaInfo} from './mediaInfo';
import {ServiceHostedMediaConfig} from './serviceHostedMediaConfig';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHostedMediaConfigImpl extends MediaConfigImpl implements ServiceHostedMediaConfig {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of media to pre-fetch. */
    public preFetchMedia?: MediaInfo[] | undefined;
    /**
     * Instantiates a new ServiceHostedMediaConfig and sets the default values.
     * @param serviceHostedMediaConfigParameterValue 
     */
    public constructor(serviceHostedMediaConfigParameterValue?: ServiceHostedMediaConfig | undefined) {
        super(serviceHostedMediaConfigParameterValue);
        this.additionalData = serviceHostedMediaConfigParameterValue?.additionalData ? serviceHostedMediaConfigParameterValue?.additionalData! : {};
        const preFetchMediaArrValue: MediaInfoImpl[] = []; serviceHostedMediaConfigParameterValue.preFetchMedia?.forEach(element => {preFetchMediaArrValue.push(element instanceof MediaInfoImpl? element : new MediaInfoImpl(element));});
        this.preFetchMedia = preFetchMediaArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "preFetchMedia": n => { this.preFetchMedia = n.getCollectionOfObjectValues<MediaInfoImpl>(createMediaInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.preFetchMedia && this.preFetchMedia.length != 0){        const preFetchMediaArrValue: MediaInfoImpl[] = []; this.preFetchMedia?.forEach(element => {preFetchMediaArrValue.push(element instanceof MediaInfoImpl? element : new MediaInfoImpl(element));});
            writer.writeCollectionOfObjectValues<MediaInfoImpl>("preFetchMedia", preFetchMediaArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
