import {PstnCallLogRowImpl} from '../../../models/callRecords/';
import {createPstnCallLogRowFromDiscriminatorValue} from '../../../models/callRecords/createPstnCallLogRowFromDiscriminatorValue';
import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {GetPstnCallsWithFromDateTimeWithToDateTimeResponse} from './getPstnCallsWithFromDateTimeWithToDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPstnCalls method. */
export class GetPstnCallsWithFromDateTimeWithToDateTimeResponseImpl implements AdditionalDataHolder, GetPstnCallsWithFromDateTimeWithToDateTimeResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: PstnCallLogRow[] | undefined;
    /**
     * Instantiates a new getPstnCallsWithFromDateTimeWithToDateTimeResponse and sets the default values.
     * @param getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue 
     */
    public constructor(getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?: GetPstnCallsWithFromDateTimeWithToDateTimeResponse | undefined) {
        this.additionalData = getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData ? getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.additionalData! : {}
        this.value = getPstnCallsWithFromDateTimeWithToDateTimeResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<PstnCallLogRowImpl>(createPstnCallLogRowFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: PstnCallLogRowImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PstnCallLogRowImpl(element));});
        writer.writeCollectionOfObjectValues<PstnCallLogRowImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
