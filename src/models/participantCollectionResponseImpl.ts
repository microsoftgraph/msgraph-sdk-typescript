import {createParticipantFromDiscriminatorValue} from './createParticipantFromDiscriminatorValue';
import {ParticipantImpl} from './index';
import {Participant} from './participant';
import {ParticipantCollectionResponse} from './participantCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantCollectionResponseImpl implements AdditionalDataHolder, Parsable, ParticipantCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Participant[] | undefined;
    /**
     * Instantiates a new ParticipantCollectionResponse and sets the default values.
     * @param participantCollectionResponseParameterValue 
     */
    public constructor(participantCollectionResponseParameterValue?: ParticipantCollectionResponse | undefined) {
        this.additionalData = participantCollectionResponseParameterValue?.additionalData ? participantCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = participantCollectionResponseParameterValue?.nextLink ;
        this.value = participantCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ParticipantImpl>(createParticipantFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ParticipantImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ParticipantImpl(element));});
        writer.writeCollectionOfObjectValues<ParticipantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
