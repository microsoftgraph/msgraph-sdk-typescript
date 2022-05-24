import {Call} from './call';
import {CallCollectionResponse} from './callCollectionResponse';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {CallImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallCollectionResponseImpl implements AdditionalDataHolder, CallCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Call[] | undefined;
    /**
     * Instantiates a new CallCollectionResponse and sets the default values.
     * @param callCollectionResponseParameterValue 
     */
    public constructor(callCollectionResponseParameterValue?: CallCollectionResponse | undefined) {
        this.additionalData = callCollectionResponseParameterValue?.additionalData ? callCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = callCollectionResponseParameterValue?.nextLink ;
        this.value = callCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CallImpl>(createCallFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: CallImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CallImpl(element));});
        writer.writeCollectionOfObjectValues<CallImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
