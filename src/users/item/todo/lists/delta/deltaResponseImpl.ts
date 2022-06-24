import {TodoTaskListImpl} from '../../../../../models/';
import {createTodoTaskListFromDiscriminatorValue} from '../../../../../models/createTodoTaskListFromDiscriminatorValue';
import {TodoTaskList} from '../../../../../models/todoTaskList';
import {DeltaResponse} from './deltaResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the delta method. */
export class DeltaResponseImpl implements DeltaResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: TodoTaskList[] | undefined;
    /**
     * Instantiates a new deltaResponse and sets the default values.
     * @param deltaResponseParameterValue 
     */
    public constructor(deltaResponseParameterValue?: DeltaResponse | undefined) {
        this.additionalData = deltaResponseParameterValue?.additionalData ? deltaResponseParameterValue?.additionalData! : {};
        const valueArrValue: TodoTaskListImpl[] = []; deltaResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof TodoTaskListImpl? element : new TodoTaskListImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<TodoTaskListImpl>(createTodoTaskListFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: TodoTaskListImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof TodoTaskListImpl? element : new TodoTaskListImpl(element));});
            writer.writeCollectionOfObjectValues<TodoTaskListImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
