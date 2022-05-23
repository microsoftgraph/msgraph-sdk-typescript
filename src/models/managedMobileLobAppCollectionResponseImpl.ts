import {createManagedMobileLobAppFromDiscriminatorValue} from './createManagedMobileLobAppFromDiscriminatorValue';
import {ManagedMobileLobAppImpl} from './index';
import {ManagedMobileLobApp} from './managedMobileLobApp';
import {ManagedMobileLobAppCollectionResponse} from './managedMobileLobAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedMobileLobAppCollectionResponseImpl implements AdditionalDataHolder, ManagedMobileLobAppCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedMobileLobApp[] | undefined;
    /**
     * Instantiates a new ManagedMobileLobAppCollectionResponse and sets the default values.
     * @param managedMobileLobAppCollectionResponseParameterValue 
     */
    public constructor(managedMobileLobAppCollectionResponseParameterValue?: ManagedMobileLobAppCollectionResponse | undefined) {
        this.additionalData = managedMobileLobAppCollectionResponseParameterValue?.additionalData ? managedMobileLobAppCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedMobileLobAppCollectionResponseParameterValue?.nextLink ;
        this.value = managedMobileLobAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedMobileLobAppImpl>(createManagedMobileLobAppFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedMobileLobAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedMobileLobAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileLobAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
