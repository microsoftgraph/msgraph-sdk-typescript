import {Channel} from './channel';
import {ChannelCollectionResponse} from './channelCollectionResponse';
import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {ChannelImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelCollectionResponseImpl implements AdditionalDataHolder, ChannelCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Channel[] | undefined;
    /**
     * Instantiates a new ChannelCollectionResponse and sets the default values.
     * @param channelCollectionResponseParameterValue 
     */
    public constructor(channelCollectionResponseParameterValue?: ChannelCollectionResponse | undefined) {
        this.additionalData = channelCollectionResponseParameterValue?.additionalData ? channelCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = channelCollectionResponseParameterValue?.nextLink ;
        this.value = channelCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ChannelImpl>(createChannelFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ChannelImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ChannelImpl(element));});
        writer.writeCollectionOfObjectValues<ChannelImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
