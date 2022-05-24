import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {ManagedDeviceMobileAppConfigurationAssignmentImpl} from './index';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationAssignmentCollectionResponseImpl implements AdditionalDataHolder, ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse and sets the default values.
     * @param managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue?: ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined) {
        this.additionalData = managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue?.additionalData ? managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = managedDeviceMobileAppConfigurationAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignmentImpl>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedDeviceMobileAppConfigurationAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedDeviceMobileAppConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
