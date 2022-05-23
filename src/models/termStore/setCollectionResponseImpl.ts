import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {SetImpl} from './index';
import {Set} from './set';
import {SetCollectionResponse} from './setCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetCollectionResponseImpl implements AdditionalDataHolder, Parsable, SetCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Set[] | undefined;
    /**
     * Instantiates a new SetCollectionResponse and sets the default values.
     * @param setCollectionResponseParameterValue 
     */
    public constructor(setCollectionResponseParameterValue?: SetCollectionResponse | undefined) {
        this.additionalData = setCollectionResponseParameterValue?.additionalData ? setCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = setCollectionResponseParameterValue?.nextLink ;
        this.value = setCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SetImpl>(createSetFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SetImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SetImpl(element));});
        writer.writeCollectionOfObjectValues<SetImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
