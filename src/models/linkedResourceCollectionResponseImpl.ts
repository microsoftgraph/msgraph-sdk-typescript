import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {LinkedResourceImpl} from './index';
import {LinkedResource} from './linkedResource';
import {LinkedResourceCollectionResponse} from './linkedResourceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LinkedResourceCollectionResponseImpl implements AdditionalDataHolder, LinkedResourceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: LinkedResource[] | undefined;
    /**
     * Instantiates a new LinkedResourceCollectionResponse and sets the default values.
     * @param linkedResourceCollectionResponseParameterValue 
     */
    public constructor(linkedResourceCollectionResponseParameterValue?: LinkedResourceCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = linkedResourceCollectionResponseParameterValue?.additionalData ? {} : linkedResourceCollectionResponseParameterValue?.additionalData!
        this.nextLink = linkedResourceCollectionResponseParameterValue?.nextLink ;
        this.value = linkedResourceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<LinkedResourceImpl>(createLinkedResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: LinkedResourceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new LinkedResourceImpl(element));});
        writer.writeCollectionOfObjectValues<LinkedResourceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
