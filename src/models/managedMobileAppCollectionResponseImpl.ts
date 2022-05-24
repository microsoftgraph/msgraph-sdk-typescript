import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {ManagedMobileAppImpl} from './index';
import {ManagedMobileApp} from './managedMobileApp';
import {ManagedMobileAppCollectionResponse} from './managedMobileAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedMobileAppCollectionResponseImpl implements AdditionalDataHolder, ManagedMobileAppCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedMobileApp[] | undefined;
    /**
     * Instantiates a new ManagedMobileAppCollectionResponse and sets the default values.
     * @param managedMobileAppCollectionResponseParameterValue 
     */
    public constructor(managedMobileAppCollectionResponseParameterValue?: ManagedMobileAppCollectionResponse | undefined) {
        this.additionalData = managedMobileAppCollectionResponseParameterValue?.additionalData ? managedMobileAppCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedMobileAppCollectionResponseParameterValue?.nextLink ;
        this.value = managedMobileAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedMobileAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
