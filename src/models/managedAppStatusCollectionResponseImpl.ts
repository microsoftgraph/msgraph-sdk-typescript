import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {ManagedAppStatusImpl} from './index';
import {ManagedAppStatus} from './managedAppStatus';
import {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppStatusCollectionResponseImpl implements AdditionalDataHolder, ManagedAppStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedAppStatus[] | undefined;
    /**
     * Instantiates a new ManagedAppStatusCollectionResponse and sets the default values.
     * @param managedAppStatusCollectionResponseParameterValue 
     */
    public constructor(managedAppStatusCollectionResponseParameterValue?: ManagedAppStatusCollectionResponse | undefined) {
        this.additionalData = managedAppStatusCollectionResponseParameterValue?.additionalData ? managedAppStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedAppStatusCollectionResponseParameterValue?.nextLink ;
        this.value = managedAppStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppStatusImpl>(createManagedAppStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
