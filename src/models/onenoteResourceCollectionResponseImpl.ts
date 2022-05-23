import {createOnenoteResourceFromDiscriminatorValue} from './createOnenoteResourceFromDiscriminatorValue';
import {OnenoteResourceImpl} from './index';
import {OnenoteResource} from './onenoteResource';
import {OnenoteResourceCollectionResponse} from './onenoteResourceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteResourceCollectionResponseImpl implements AdditionalDataHolder, OnenoteResourceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OnenoteResource[] | undefined;
    /**
     * Instantiates a new OnenoteResourceCollectionResponse and sets the default values.
     * @param onenoteResourceCollectionResponseParameterValue 
     */
    public constructor(onenoteResourceCollectionResponseParameterValue?: OnenoteResourceCollectionResponse | undefined) {
        this.additionalData = onenoteResourceCollectionResponseParameterValue?.additionalData ? onenoteResourceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = onenoteResourceCollectionResponseParameterValue?.nextLink ;
        this.value = onenoteResourceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OnenoteResourceImpl>(createOnenoteResourceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OnenoteResourceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OnenoteResourceImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteResourceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
