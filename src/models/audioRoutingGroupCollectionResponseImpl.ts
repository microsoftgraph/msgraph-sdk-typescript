import {AudioRoutingGroup} from './audioRoutingGroup';
import {AudioRoutingGroupCollectionResponse} from './audioRoutingGroupCollectionResponse';
import {createAudioRoutingGroupFromDiscriminatorValue} from './createAudioRoutingGroupFromDiscriminatorValue';
import {AudioRoutingGroupImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AudioRoutingGroupCollectionResponseImpl implements AdditionalDataHolder, AudioRoutingGroupCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AudioRoutingGroup[] | undefined;
    /**
     * Instantiates a new AudioRoutingGroupCollectionResponse and sets the default values.
     * @param audioRoutingGroupCollectionResponseParameterValue 
     */
    public constructor(audioRoutingGroupCollectionResponseParameterValue?: AudioRoutingGroupCollectionResponse | undefined) {
        this.additionalData = audioRoutingGroupCollectionResponseParameterValue?.additionalData ? audioRoutingGroupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = audioRoutingGroupCollectionResponseParameterValue?.nextLink ;
        this.value = audioRoutingGroupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AudioRoutingGroupImpl>(createAudioRoutingGroupFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: AudioRoutingGroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AudioRoutingGroupImpl(element));});
        writer.writeCollectionOfObjectValues<AudioRoutingGroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
