import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {OnlineMeetingImpl} from './index';
import {OnlineMeeting} from './onlineMeeting';
import {OnlineMeetingCollectionResponse} from './onlineMeetingCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeetingCollectionResponseImpl implements OnlineMeetingCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OnlineMeeting[] | undefined;
    /**
     * Instantiates a new OnlineMeetingCollectionResponse and sets the default values.
     * @param onlineMeetingCollectionResponseParameterValue 
     */
    public constructor(onlineMeetingCollectionResponseParameterValue?: OnlineMeetingCollectionResponse | undefined) {
        this.additionalData = onlineMeetingCollectionResponseParameterValue?.additionalData ? onlineMeetingCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = onlineMeetingCollectionResponseParameterValue?.nextLink;
        const valueArrValue: OnlineMeetingImpl[] = []; onlineMeetingCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof OnlineMeetingImpl? element : new OnlineMeetingImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OnlineMeetingImpl>(createOnlineMeetingFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OnlineMeetingImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof OnlineMeetingImpl? element : new OnlineMeetingImpl(element));});
            writer.writeCollectionOfObjectValues<OnlineMeetingImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
