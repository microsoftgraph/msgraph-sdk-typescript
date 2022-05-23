import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {ManagedDeviceImpl} from './index';
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceCollectionResponse} from './managedDeviceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceCollectionResponseImpl implements AdditionalDataHolder, ManagedDeviceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedDevice[] | undefined;
    /**
     * Instantiates a new ManagedDeviceCollectionResponse and sets the default values.
     * @param managedDeviceCollectionResponseParameterValue 
     */
    public constructor(managedDeviceCollectionResponseParameterValue?: ManagedDeviceCollectionResponse | undefined) {
        this.additionalData = managedDeviceCollectionResponseParameterValue?.additionalData ? managedDeviceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedDeviceCollectionResponseParameterValue?.nextLink ;
        this.value = managedDeviceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedDeviceImpl>(createManagedDeviceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedDeviceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedDeviceImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
