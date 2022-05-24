import {createOnenoteOperationFromDiscriminatorValue} from './createOnenoteOperationFromDiscriminatorValue';
import {OnenoteOperationImpl} from './index';
import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationCollectionResponse} from './onenoteOperationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteOperationCollectionResponseImpl implements AdditionalDataHolder, OnenoteOperationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OnenoteOperation[] | undefined;
    /**
     * Instantiates a new OnenoteOperationCollectionResponse and sets the default values.
     * @param onenoteOperationCollectionResponseParameterValue 
     */
    public constructor(onenoteOperationCollectionResponseParameterValue?: OnenoteOperationCollectionResponse | undefined) {
        this.additionalData = onenoteOperationCollectionResponseParameterValue?.additionalData ? onenoteOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = onenoteOperationCollectionResponseParameterValue?.nextLink ;
        this.value = onenoteOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OnenoteOperationImpl>(createOnenoteOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OnenoteOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OnenoteOperationImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
