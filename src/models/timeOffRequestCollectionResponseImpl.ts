import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {TimeOffRequestImpl} from './index';
import {TimeOffRequest} from './timeOffRequest';
import {TimeOffRequestCollectionResponse} from './timeOffRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffRequestCollectionResponseImpl implements AdditionalDataHolder, Parsable, TimeOffRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TimeOffRequest[] | undefined;
    /**
     * Instantiates a new TimeOffRequestCollectionResponse and sets the default values.
     * @param timeOffRequestCollectionResponseParameterValue 
     */
    public constructor(timeOffRequestCollectionResponseParameterValue?: TimeOffRequestCollectionResponse | undefined) {
        this.additionalData = timeOffRequestCollectionResponseParameterValue?.additionalData ? timeOffRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = timeOffRequestCollectionResponseParameterValue?.nextLink ;
        this.value = timeOffRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeOffRequestImpl>(createTimeOffRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TimeOffRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TimeOffRequestImpl(element));});
        writer.writeCollectionOfObjectValues<TimeOffRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
