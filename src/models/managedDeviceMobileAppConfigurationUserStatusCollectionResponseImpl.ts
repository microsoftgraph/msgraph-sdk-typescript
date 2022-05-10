import {createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import {ManagedDeviceMobileAppConfigurationUserStatusImpl} from './index';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './managedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationUserStatusCollectionResponseImpl implements AdditionalDataHolder, ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse and sets the default values.
     * @param managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue?: ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue?.additionalData ? {} : managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue?.additionalData!
        this.nextLink = managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue?.nextLink ;
        this.value = managedDeviceMobileAppConfigurationUserStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatusImpl>(createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: ManagedDeviceMobileAppConfigurationUserStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedDeviceMobileAppConfigurationUserStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
