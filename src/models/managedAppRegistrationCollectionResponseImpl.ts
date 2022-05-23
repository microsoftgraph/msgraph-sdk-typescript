import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {ManagedAppRegistrationImpl} from './index';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedAppRegistrationCollectionResponse} from './managedAppRegistrationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppRegistrationCollectionResponseImpl implements AdditionalDataHolder, ManagedAppRegistrationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedAppRegistration[] | undefined;
    /**
     * Instantiates a new ManagedAppRegistrationCollectionResponse and sets the default values.
     * @param managedAppRegistrationCollectionResponseParameterValue 
     */
    public constructor(managedAppRegistrationCollectionResponseParameterValue?: ManagedAppRegistrationCollectionResponse | undefined) {
        this.additionalData = managedAppRegistrationCollectionResponseParameterValue?.additionalData ? managedAppRegistrationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedAppRegistrationCollectionResponseParameterValue?.nextLink ;
        this.value = managedAppRegistrationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppRegistrationImpl>(createManagedAppRegistrationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppRegistrationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppRegistrationImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppRegistrationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
