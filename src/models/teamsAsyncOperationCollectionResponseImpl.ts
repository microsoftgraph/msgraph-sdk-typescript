import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {TeamsAsyncOperationImpl} from './index';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationCollectionResponse} from './teamsAsyncOperationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAsyncOperationCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsAsyncOperationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TeamsAsyncOperation[] | undefined;
    /**
     * Instantiates a new TeamsAsyncOperationCollectionResponse and sets the default values.
     * @param teamsAsyncOperationCollectionResponseParameterValue 
     */
    public constructor(teamsAsyncOperationCollectionResponseParameterValue?: TeamsAsyncOperationCollectionResponse | undefined) {
        this.additionalData = teamsAsyncOperationCollectionResponseParameterValue?.additionalData ? teamsAsyncOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamsAsyncOperationCollectionResponseParameterValue?.nextLink ;
        this.value = teamsAsyncOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsAsyncOperationImpl>(createTeamsAsyncOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamsAsyncOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsAsyncOperationImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAsyncOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
