import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {TargetedManagedAppConfigurationImpl} from './index';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppConfigurationCollectionResponse} from './targetedManagedAppConfigurationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppConfigurationCollectionResponseImpl implements AdditionalDataHolder, Parsable, TargetedManagedAppConfigurationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TargetedManagedAppConfiguration[] | undefined;
    /**
     * Instantiates a new TargetedManagedAppConfigurationCollectionResponse and sets the default values.
     * @param targetedManagedAppConfigurationCollectionResponseParameterValue 
     */
    public constructor(targetedManagedAppConfigurationCollectionResponseParameterValue?: TargetedManagedAppConfigurationCollectionResponse | undefined) {
        this.additionalData = targetedManagedAppConfigurationCollectionResponseParameterValue?.additionalData ? targetedManagedAppConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = targetedManagedAppConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = targetedManagedAppConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TargetedManagedAppConfigurationImpl>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TargetedManagedAppConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TargetedManagedAppConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
