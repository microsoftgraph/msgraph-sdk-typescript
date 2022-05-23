import {ConnectionOperation} from './connectionOperation';
import {ConnectionOperationCollectionResponse} from './connectionOperationCollectionResponse';
import {createConnectionOperationFromDiscriminatorValue} from './createConnectionOperationFromDiscriminatorValue';
import {ConnectionOperationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectionOperationCollectionResponseImpl implements AdditionalDataHolder, ConnectionOperationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ConnectionOperation[] | undefined;
    /**
     * Instantiates a new ConnectionOperationCollectionResponse and sets the default values.
     * @param connectionOperationCollectionResponseParameterValue 
     */
    public constructor(connectionOperationCollectionResponseParameterValue?: ConnectionOperationCollectionResponse | undefined) {
        this.additionalData = connectionOperationCollectionResponseParameterValue?.additionalData ? connectionOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = connectionOperationCollectionResponseParameterValue?.nextLink ;
        this.value = connectionOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConnectionOperationImpl>(createConnectionOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConnectionOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConnectionOperationImpl(element));});
        writer.writeCollectionOfObjectValues<ConnectionOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
