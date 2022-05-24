import {createSharedDriveItemFromDiscriminatorValue} from './createSharedDriveItemFromDiscriminatorValue';
import {SharedDriveItemImpl} from './index';
import {SharedDriveItem} from './sharedDriveItem';
import {SharedDriveItemCollectionResponse} from './sharedDriveItemCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedDriveItemCollectionResponseImpl implements AdditionalDataHolder, Parsable, SharedDriveItemCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SharedDriveItem[] | undefined;
    /**
     * Instantiates a new SharedDriveItemCollectionResponse and sets the default values.
     * @param sharedDriveItemCollectionResponseParameterValue 
     */
    public constructor(sharedDriveItemCollectionResponseParameterValue?: SharedDriveItemCollectionResponse | undefined) {
        this.additionalData = sharedDriveItemCollectionResponseParameterValue?.additionalData ? sharedDriveItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = sharedDriveItemCollectionResponseParameterValue?.nextLink ;
        this.value = sharedDriveItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SharedDriveItemImpl>(createSharedDriveItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SharedDriveItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SharedDriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<SharedDriveItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
