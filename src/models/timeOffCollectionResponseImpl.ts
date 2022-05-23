import {createTimeOffFromDiscriminatorValue} from './createTimeOffFromDiscriminatorValue';
import {TimeOffImpl} from './index';
import {TimeOff} from './timeOff';
import {TimeOffCollectionResponse} from './timeOffCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffCollectionResponseImpl implements AdditionalDataHolder, Parsable, TimeOffCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TimeOff[] | undefined;
    /**
     * Instantiates a new TimeOffCollectionResponse and sets the default values.
     * @param timeOffCollectionResponseParameterValue 
     */
    public constructor(timeOffCollectionResponseParameterValue?: TimeOffCollectionResponse | undefined) {
        this.additionalData = timeOffCollectionResponseParameterValue?.additionalData ? timeOffCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = timeOffCollectionResponseParameterValue?.nextLink ;
        this.value = timeOffCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeOffImpl>(createTimeOffFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TimeOffImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TimeOffImpl(element));});
        writer.writeCollectionOfObjectValues<TimeOffImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
