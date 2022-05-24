import {CallRecord} from './callRecord';
import {CallRecordCollectionResponse} from './callRecordCollectionResponse';
import {createCallRecordFromDiscriminatorValue} from './createCallRecordFromDiscriminatorValue';
import {CallRecordImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRecordCollectionResponseImpl implements AdditionalDataHolder, CallRecordCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: CallRecord[] | undefined;
    /**
     * Instantiates a new CallRecordCollectionResponse and sets the default values.
     * @param callRecordCollectionResponseParameterValue 
     */
    public constructor(callRecordCollectionResponseParameterValue?: CallRecordCollectionResponse | undefined) {
        this.additionalData = callRecordCollectionResponseParameterValue?.additionalData ? callRecordCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = callRecordCollectionResponseParameterValue?.nextLink ;
        this.value = callRecordCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CallRecordImpl>(createCallRecordFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: CallRecordImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CallRecordImpl(element));});
        writer.writeCollectionOfObjectValues<CallRecordImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
