import {createManagedAppOperationFromDiscriminatorValue} from './createManagedAppOperationFromDiscriminatorValue';
import {ManagedAppOperationImpl} from './index';
import {ManagedAppOperation} from './managedAppOperation';
import {ManagedAppOperationCollectionResponse} from './managedAppOperationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppOperationCollectionResponseImpl implements AdditionalDataHolder, ManagedAppOperationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedAppOperation[] | undefined;
    /**
     * Instantiates a new ManagedAppOperationCollectionResponse and sets the default values.
     * @param managedAppOperationCollectionResponseParameterValue 
     */
    public constructor(managedAppOperationCollectionResponseParameterValue?: ManagedAppOperationCollectionResponse | undefined) {
        this.additionalData = managedAppOperationCollectionResponseParameterValue?.additionalData ? managedAppOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedAppOperationCollectionResponseParameterValue?.nextLink ;
        this.value = managedAppOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppOperationImpl>(createManagedAppOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppOperationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
