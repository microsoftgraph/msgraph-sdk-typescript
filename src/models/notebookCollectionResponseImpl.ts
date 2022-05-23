import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {NotebookImpl} from './index';
import {Notebook} from './notebook';
import {NotebookCollectionResponse} from './notebookCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotebookCollectionResponseImpl implements AdditionalDataHolder, NotebookCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Notebook[] | undefined;
    /**
     * Instantiates a new NotebookCollectionResponse and sets the default values.
     * @param notebookCollectionResponseParameterValue 
     */
    public constructor(notebookCollectionResponseParameterValue?: NotebookCollectionResponse | undefined) {
        this.additionalData = notebookCollectionResponseParameterValue?.additionalData ? notebookCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = notebookCollectionResponseParameterValue?.nextLink ;
        this.value = notebookCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<NotebookImpl>(createNotebookFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: NotebookImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new NotebookImpl(element));});
        writer.writeCollectionOfObjectValues<NotebookImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
