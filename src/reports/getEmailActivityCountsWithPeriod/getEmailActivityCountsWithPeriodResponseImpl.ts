import {GetEmailActivityCountsWithPeriodResponse} from './getEmailActivityCountsWithPeriodResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getEmailActivityCounts method. */
export class GetEmailActivityCountsWithPeriodResponseImpl implements AdditionalDataHolder, GetEmailActivityCountsWithPeriodResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The value property */
    value?: string | undefined;
    /**
     * Instantiates a new getEmailActivityCountsWithPeriodResponse and sets the default values.
     * @param getEmailActivityCountsWithPeriodResponseParameterValue 
     */
    public constructor(getEmailActivityCountsWithPeriodResponseParameterValue?: GetEmailActivityCountsWithPeriodResponse | undefined) {
        this.additionalData = {};
        this.additionalData = getEmailActivityCountsWithPeriodResponseParameterValue?.additionalData ? {} : getEmailActivityCountsWithPeriodResponseParameterValue?.additionalData!
        this.value = getEmailActivityCountsWithPeriodResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        if(this.value)
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
