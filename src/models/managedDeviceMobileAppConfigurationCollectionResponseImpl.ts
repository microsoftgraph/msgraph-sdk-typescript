import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {ManagedDeviceMobileAppConfigurationImpl} from './index';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationCollectionResponse} from './managedDeviceMobileAppConfigurationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationCollectionResponseImpl implements AdditionalDataHolder, ManagedDeviceMobileAppConfigurationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedDeviceMobileAppConfiguration[] | undefined;
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationCollectionResponse and sets the default values.
     * @param managedDeviceMobileAppConfigurationCollectionResponseParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationCollectionResponseParameterValue?: ManagedDeviceMobileAppConfigurationCollectionResponse | undefined) {
        this.additionalData = managedDeviceMobileAppConfigurationCollectionResponseParameterValue?.additionalData ? managedDeviceMobileAppConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedDeviceMobileAppConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = managedDeviceMobileAppConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationImpl>(createManagedDeviceMobileAppConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedDeviceMobileAppConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedDeviceMobileAppConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
